import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Инициализируем телефон с +7 при открытии
  useEffect(() => {
    if (open && !phone.startsWith('+7')) {
      setPhone("+7 ");
    }
  }, [open]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Убираем форматирование для валидации
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (!name || cleanPhone.length < 11) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя и корректный номер телефона обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    // Формируем текст сообщения
    const messageText = `🔔 Новая заявка с сайта!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}${message ? `\n💬 Комментарий: ${message}` : ''}`;
    
    // Telegram Bot настройки (нужно добавить свои данные)
    const TELEGRAM_BOT_TOKEN = '7967526827:AAEa3bOkxiMlPxSGDnCbfg2wZrfLbjfNwcI';
    const TELEGRAM_CHAT_ID = '559990492';
    
    try {
      // Отправка в Telegram
      if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: messageText,
            parse_mode: 'HTML'
          })
        });
      }

      // Дублируем в WhatsApp
      const whatsappNumber = '79111110126';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Заявка отправлена!",
        description: "Наш менеджер свяжется с вами в ближайшее время",
      });

      setName("");
      setPhone("+7 ");
      setMessage("");
      onOpenChange(false);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую",
        variant: "destructive",
      });
    }
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
              onChange={handlePhoneChange}
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
