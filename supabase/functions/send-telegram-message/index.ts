import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, propertyType, area, repairType, budget, startTime, hasProject, message } = await req.json();
    
    // Валидация обязательных полей
    if (!name || !phone || !propertyType || !area || !repairType || !startTime || !hasProject) {
      return new Response(
        JSON.stringify({ error: 'Все обязательные поля должны быть заполнены' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
    const TELEGRAM_CHAT_ID_2 = Deno.env.get('TELEGRAM_CHAT_ID_2');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials');
      return new Response(
        JSON.stringify({ error: 'Настройки Telegram не сконфигурированы' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Формируем текст сообщения для Telegram
    const messageText = `🔔 Новая заявка с сайта!

👤 Имя: ${name}
📱 Телефон: ${phone}
🏠 Тип помещения: ${propertyType}
📐 Площадь: ${area} м²
🎨 Тип ремонта: ${repairType}${budget ? `\n💰 Бюджет: ${budget.toLocaleString('ru-RU')} ₽` : ''}
📅 Начало ремонта: ${startTime}
📋 Есть проект: ${hasProject}${message ? `\n💬 Комментарий: ${message}` : ''}`;

    console.log('Sending message to Telegram...');
    
    // Собираем все chat_id для отправки
    const chatIds = [TELEGRAM_CHAT_ID];
    if (TELEGRAM_CHAT_ID_2) {
      chatIds.push(TELEGRAM_CHAT_ID_2);
      console.log(`Sending to 2 chats: primary + ${TELEGRAM_CHAT_ID_2}`);
    } else {
      console.log('TELEGRAM_CHAT_ID_2 not set, sending only to primary chat');
    }

    // Отправка в Telegram на все чаты
    const sendPromises = chatIds.map((chatId, index) =>
      fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
          })
        }
      ).then(async (response) => {
        const data = await response.json();
        console.log(`Chat ${index + 1} (${chatId}): ${response.ok ? 'SUCCESS' : 'FAILED'}`, data);
        return { response, data, chatId };
      })
    );

    const results = await Promise.allSettled(sendPromises);
    
    // Проверяем результаты и собираем информацию
    let successCount = 0;
    let failureDetails: string[] = [];
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.response.ok) {
        successCount++;
      } else {
        const chatId = chatIds[index];
        const error = result.status === 'rejected' 
          ? result.reason 
          : result.value.data.description || 'Unknown error';
        failureDetails.push(`Chat ${chatId}: ${error}`);
        console.error(`Failed to send to chat ${chatId}:`, error);
      }
    });
    
    if (successCount === 0) {
      console.error('All Telegram sends failed:', failureDetails);
      return new Response(
        JSON.stringify({ 
          error: 'Ошибка отправки в Telegram',
          details: failureDetails
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const statusMessage = successCount === chatIds.length 
      ? `Заявка успешно отправлена на ${successCount} ${successCount === 1 ? 'контакт' : 'контакта'}! ✅`
      : `Отправлено на ${successCount} из ${chatIds.length} контактов. ${failureDetails.join('; ')}`;
    
    console.log(`Message sent to ${successCount}/${chatIds.length} Telegram chat(s)`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: statusMessage,
        sentTo: successCount,
        total: chatIds.length
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-telegram-message function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
