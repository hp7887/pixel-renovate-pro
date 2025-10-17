import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [message, setMessage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [area, setArea] = useState("");
  const [hasProject, setHasProject] = useState("");
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
    
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (!name || cleanPhone.length < 11 || !startTime || !area || !hasProject) {
      toast({
        title: "Заполните обязательные поля",
        description: "Все поля обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram-message', {
        body: {
          name,
          phone,
          startTime,
          area,
          hasProject,
          message
        }
      });

      if (error) {
        console.error('Error invoking function:', error);
        throw error;
      }

      toast({
        title: "Заявка успешно отправлена!",
        description: "Наш менеджер свяжется с вами в ближайшее время",
      });

      setName("");
      setPhone("+7 ");
      setMessage("");
      setStartTime("");
      setArea("");
      setHasProject("");
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
            <Label htmlFor="startTime">Когда планируете начать ремонт? *</Label>
            <Select value={startTime} onValueChange={setStartTime} required>
              <SelectTrigger id="startTime">
                <SelectValue placeholder="Выберите срок" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="неделя">В течение недели</SelectItem>
                <SelectItem value="2 недели">В течение 2 недель</SelectItem>
                <SelectItem value="месяц">В течение месяца</SelectItem>
                <SelectItem value="не решил">Еще не решил</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Площадь ремонта (м²) *</Label>
            <Select value={area} onValueChange={setArea} required>
              <SelectTrigger id="area">
                <SelectValue placeholder="Выберите площадь" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30-50">От 30 до 50 м²</SelectItem>
                <SelectItem value="50-75">От 50 до 75 м²</SelectItem>
                <SelectItem value="75-100">От 75 до 100 м²</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hasProject">Есть ли проект? *</Label>
            <Select value={hasProject} onValueChange={setHasProject} required>
              <SelectTrigger id="hasProject">
                <SelectValue placeholder="Выберите вариант" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="да">Да, есть</SelectItem>
                <SelectItem value="нет">Нет</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Комментарий (необязательно)</Label>
            <Textarea
              id="message"
              placeholder="Расскажите о вашем проекте..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
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
