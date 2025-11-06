import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface PartnershipContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PartnershipContactDialog = ({ open, onOpenChange }: PartnershipContactDialogProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [profession, setProfession] = useState("");
  const { toast } = useToast();

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
    
    if (!name || cleanPhone.length < 11 || !profession) {
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
          propertyType: "Партнёрство",
          area: "0",
          repairType: "Партнёрство",
          startTime: "Не указано",
          hasProject: "Нет",
          message: `Заявка на партнёрство\nПрофессия: ${profession}`
        }
      });

      if (error) {
        console.error('Error invoking function:', error);
        toast({
          title: "Ошибка отправки",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
        return;
      }

      // Показываем подтверждение
      const responseData = data as { message?: string; sentTo?: number; total?: number };
      toast({
        title: "✅ Заявка отправлена!",
        description: responseData?.message || "Мы свяжемся с вами в ближайшее время",
      });

      setName("");
      setPhone("+7 ");
      setProfession("");
      onOpenChange(false);
      navigate('/thank-you');
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
          <DialogTitle className="text-2xl">Начать сотрудничество</DialogTitle>
          <DialogDescription>
            Оставьте заявку и мы свяжемся с вами для обсуждения условий партнёрства
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
            <Label htmlFor="profession">Профессия *</Label>
            <Input
              id="profession"
              placeholder="Дизайнер интерьеров"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
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

export default PartnershipContactDialog;
