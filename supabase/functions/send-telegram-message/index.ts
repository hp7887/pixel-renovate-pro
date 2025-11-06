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
    }

    // Отправка в Telegram на все чаты
    const sendPromises = chatIds.map(chatId =>
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
      )
    );

    const results = await Promise.allSettled(sendPromises);
    
    // Проверяем результаты
    const failedSends = results.filter(r => r.status === 'rejected');
    if (failedSends.length === results.length) {
      console.error('All Telegram sends failed');
      return new Response(
        JSON.stringify({ 
          error: 'Ошибка отправки в Telegram',
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`Message sent successfully to ${results.length - failedSends.length} Telegram chat(s)`);

    return new Response(
      JSON.stringify({ success: true, message: 'Сообщение отправлено' }),
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
