import { useState } from "react";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formType, setFormType] = useState<"question" | "callback" | null>(null);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
    }
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    const formatted = value
      ? `+7 ${value.substring(0, 3)}${value.length > 3 ? " " + value.substring(3, 6) : ""}${value.length > 6 ? " " + value.substring(6, 8) : ""}${value.length > 8 ? " " + value.substring(8, 10) : ""}`
      : "";
    setPhone(formatted);
  };

  const handleSubmit = async () => {
    if (formType === "callback" && phone.replace(/\D/g, "").length !== 11) {
      toast.error("Пожалуйста, введите корректный номер телефона");
      return;
    }

    if (formType === "question") {
      if (!question.trim()) {
        toast.error("Пожалуйста, напишите ваш вопрос");
        return;
      }
      if (phone.replace(/\D/g, "").length !== 11) {
        toast.error("Пожалуйста, введите корректный номер телефона");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const messageData = formType === "callback" 
        ? {
            name: name || "Не указано",
            phone,
            propertyType: "Заказ звонка",
            area: "0",
            repairType: "Заказ обратного звонка",
            startTime: "Как можно скорее",
            hasProject: "Нет",
            message: "Клиент запросил обратный звонок"
          }
        : {
            name: name || "Не указано",
            phone: phone || "Не указан",
            propertyType: "Вопрос",
            area: "0",
            repairType: "Вопрос от клиента",
            startTime: "Не указано",
            hasProject: "Нет",
            message: question
          };

      const { error } = await supabase.functions.invoke("send-telegram-message", {
        body: messageData,
      });

      if (error) throw error;

      setIsOpen(false);
      setFormType(null);
      setPhone("");
      setName("");
      setQuestion("");
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Произошла ошибка при отправке. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMenu = () => {
    setIsOpen(true);
    setIsMenuOpen(true);
    setFormType(null);
  };

  const selectFormType = (type: "question" | "callback") => {
    setFormType(type);
    setIsMenuOpen(false);
  };

  const goBack = () => {
    setFormType(null);
    setIsMenuOpen(true);
  };

  return (
    <>
      <button
        onClick={openMenu}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow transition-all duration-300 animate-subtle-glow hover:animate-none hover:scale-110"
        aria-label="Связаться с нами"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {isMenuOpen && "Как мы можем помочь?"}
              {formType === "question" && "Задать вопрос"}
              {formType === "callback" && "Заказать звонок"}
            </DialogTitle>
          </DialogHeader>

          {isMenuOpen && (
            <div className="flex flex-col gap-3 py-4">
              <Button
                onClick={() => selectFormType("question")}
                className="h-auto py-4 flex items-center justify-start gap-3"
                variant="outline"
              >
                <MessageCircle className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Задать вопрос</div>
                  <div className="text-xs text-muted-foreground">
                    Напишите какой вас интересует ремонт
                  </div>
                </div>
              </Button>

              <Button
                onClick={() => selectFormType("callback")}
                className="h-auto py-4 flex items-center justify-start gap-3"
                variant="outline"
              >
                <Phone className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Заказать звонок</div>
                  <div className="text-xs text-muted-foreground">
                    Мы перезвоним вам в ближайшее время
                  </div>
                </div>
              </Button>
            </div>
          )}

          {formType === "question" && (
            <div className="space-y-4 py-4">
              <p className="text-sm text-muted-foreground text-center">
                Напишите какой вас интересует ремонт или задайте любой вопрос
              </p>
              <Textarea
                placeholder="Ваш вопрос..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-[120px]"
              />
              <Input
                placeholder="Телефон *"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <div className="flex gap-2">
                <Button onClick={goBack} variant="outline" className="flex-1">
                  Назад
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Отправить
                </Button>
              </div>
            </div>
          )}

          {formType === "callback" && (
            <div className="space-y-4 py-4">
              <p className="text-sm text-muted-foreground text-center">
                Оставьте свой номер телефона и мы вам перезвоним
              </p>
              <Input
                placeholder="Телефон *"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <Input
                placeholder="Имя (необязательно)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex gap-2">
                <Button onClick={goBack} variant="outline" className="flex-1">
                  Назад
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
