import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя и телефон обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    // Формируем текст сообщения
    const messageText = `🔔 Новая заявка с сайта!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}${message ? `\n💬 Комментарий: ${message}` : ''}`;
    
    // Отправка в Telegram
    const telegramBotToken = ''; // Bot token нужно будет добавить через переменные окружения
    const telegramChatId = ''; // Chat ID нужно будет добавить
    
    // Отправка в WhatsApp (открытие диалога с предзаполненным текстом)
    const whatsappNumber = '79111110126';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;
    
    // Открываем WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Если есть Telegram bot token, отправляем туда
    if (telegramBotToken && telegramChatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: messageText,
            parse_mode: 'HTML'
          })
        });
      } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
      }
    }

    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });

    setName("");
    setPhone("");
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Начать проект</DialogTitle>
          <DialogDescription>
            Оставьте заявку и мы свяжемся с вами для обсуждения деталей вашего проекта
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя *</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (911) 111-01-26"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Комментарий (необязательно)</Label>
            <Textarea
              id="message"
              placeholder="Расскажите о вашем проекте..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
            Отправить заявку
          </Button>
        </form>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-600 mb-3">Или свяжитесь с нами напрямую:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+78122099885" className="hover:text-primary transition-colors">
                8 812 209-98-85
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:digitalstroy@inbox.ru" className="hover:text-primary transition-colors">
                digitalstroy@inbox.ru
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
