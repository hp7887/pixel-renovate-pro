import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Building2, Home, Briefcase, ChevronLeft } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("");
  const [area, setArea] = useState("");
  const [repairType, setRepairType] = useState("");
  const [budget, setBudget] = useState([100000]);
  const [startTime, setStartTime] = useState("");
  const [hasProject, setHasProject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Сброс формы при открытии
  useEffect(() => {
    if (open) {
      setStep(1);
      setPropertyType("");
      setArea("");
      setRepairType("");
      setBudget([100000]);
      setStartTime("");
      setHasProject("");
      setName("");
      setPhone("+7 ");
      setMessage("");
    }
  }, [open]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (!name || cleanPhone.length < 11) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя и телефон обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram-message', {
        body: {
          name,
          phone,
          propertyType,
          area,
          repairType,
          budget: budget[0],
          startTime,
          hasProject,
          message
        }
      });

      if (error) {
        console.error('Error invoking function:', error);
        throw error;
      }

      onOpenChange(false);
      navigate("/thank-you");
    } catch (error) {
      console.error('Ошибка отправки:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую",
        variant: "destructive",
      });
    }
  };

  const PropertyTypeButton = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <button
      type="button"
      onClick={() => {
        setPropertyType(value);
        setStep(2);
      }}
      className="flex flex-col items-center gap-3 p-6 rounded-lg border-2 border-border hover:border-primary hover:bg-accent transition-all group"
    >
      <Icon className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const AreaButton = ({ label, value }: { label: string, value: string }) => (
    <button
      type="button"
      onClick={() => {
        setArea(value);
        setStep(3);
      }}
      className="p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-accent transition-all font-medium"
    >
      {label}
    </button>
  );

  const ChoiceButton = ({ label, value, state, setState }: { label: string, value: string, state: string, setState: (val: string) => void }) => (
    <button
      type="button"
      onClick={() => setState(value)}
      className={`p-4 rounded-lg border-2 transition-all font-medium ${
        state === value 
          ? 'border-primary bg-primary text-primary-foreground' 
          : 'border-border hover:border-primary hover:bg-accent'
      }`}
    >
      {label}
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {step > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setStep(step - 1)}
                className="h-8 w-8"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="flex-1">
              <DialogTitle className="text-2xl">
                {step === 1 && "Тип помещения"}
                {step === 2 && "Площадь ремонта"}
                {step === 3 && "Тип ремонта"}
                {step === 4 && "Детали проекта"}
                {step === 5 && "Ваши контакты"}
              </DialogTitle>
              <DialogDescription>
                Шаг {step} из 5
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Шаг 1: Тип помещения */}
        {step === 1 && (
          <div className="space-y-4 py-6">
            <p className="text-sm text-muted-foreground mb-4">Выберите тип помещения для ремонта:</p>
            <div className="grid grid-cols-3 gap-4">
              <PropertyTypeButton icon={Building2} label="Новостройка" value="новостройка" />
              <PropertyTypeButton icon={Home} label="Вторичка" value="вторичка" />
              <PropertyTypeButton icon={Briefcase} label="Коммерческая" value="коммерческая" />
            </div>
          </div>
        )}

        {/* Шаг 2: Площадь */}
        {step === 2 && (
          <div className="space-y-4 py-6">
            <p className="text-sm text-muted-foreground mb-4">Выберите площадь помещения:</p>
            <div className="grid grid-cols-1 gap-3">
              <AreaButton label="От 30 до 50 м²" value="30-50" />
              <AreaButton label="От 50 до 75 м²" value="50-75" />
              <AreaButton label="От 75 до 100 м²" value="75-100" />
            </div>
          </div>
        )}

        {/* Шаг 3: Тип ремонта и бюджет */}
        {step === 3 && (
          <div className="space-y-6 py-6">
            <div className="space-y-3">
              <Label>Какой тип ремонта планируете?</Label>
              <div className="grid grid-cols-1 gap-3">
                <ChoiceButton label="Дизайнерский ремонт" value="дизайнерский" state={repairType} setState={setRepairType} />
                <ChoiceButton label="Косметический ремонт" value="косметический" state={repairType} setState={setRepairType} />
                <ChoiceButton label="Капитальный ремонт" value="капитальный" state={repairType} setState={setRepairType} />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Желаемый бюджет (необязательно)</Label>
              <div className="space-y-4">
                <Slider
                  min={50000}
                  max={5000000}
                  step={5000}
                  value={budget}
                  onValueChange={setBudget}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {budget[0].toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>

            <Button 
              type="button" 
              onClick={() => setStep(4)} 
              className="w-full"
              disabled={!repairType}
            >
              Далее
            </Button>
          </div>
        )}

        {/* Шаг 4: Срок и проект */}
        {step === 4 && (
          <div className="space-y-6 py-6">
            <div className="space-y-3">
              <Label>Когда планируете начать ремонт?</Label>
              <div className="grid grid-cols-2 gap-3">
                <ChoiceButton label="В течение недели" value="неделя" state={startTime} setState={setStartTime} />
                <ChoiceButton label="В течение 2 недель" value="2 недели" state={startTime} setState={setStartTime} />
                <ChoiceButton label="В течение месяца" value="месяц" state={startTime} setState={setStartTime} />
                <ChoiceButton label="Еще не решил" value="не решил" state={startTime} setState={setStartTime} />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Есть ли готовый проект?</Label>
              <div className="grid grid-cols-2 gap-3">
                <ChoiceButton label="Да, есть" value="да" state={hasProject} setState={setHasProject} />
                <ChoiceButton label="Нет" value="нет" state={hasProject} setState={setHasProject} />
              </div>
            </div>

            <Button 
              type="button" 
              onClick={() => setStep(5)} 
              className="w-full"
              disabled={!startTime || !hasProject}
            >
              Далее
            </Button>
          </div>
        )}

        {/* Шаг 5: Контактная информация */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="space-y-4 py-6">
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
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Отправить заявку
            </Button>

            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-muted-foreground mb-3">Или свяжитесь с нами напрямую:</p>
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
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
