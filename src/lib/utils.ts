import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(value: string): string {
  // Убираем все кроме цифр
  const numbers = value.replace(/\D/g, '');
  
  // Если пусто, возвращаем +7
  if (!numbers) return '+7 ';
  
  // Начинаем с +7
  let formatted = '+7 ';
  
  // Добавляем первые 3 цифры в скобках
  if (numbers.length > 1) {
    formatted += '(' + numbers.substring(1, 4);
  }
  
  // Закрываем скобки и добавляем пробел
  if (numbers.length >= 4) {
    formatted += ') ';
  }
  
  // Добавляем следующие 3 цифры
  if (numbers.length >= 5) {
    formatted += numbers.substring(4, 7);
  }
  
  // Добавляем дефис
  if (numbers.length >= 7) {
    formatted += '-' + numbers.substring(7, 9);
  }
  
  // Добавляем второй дефис
  if (numbers.length >= 9) {
    formatted += '-' + numbers.substring(9, 11);
  }
  
  return formatted;
}
