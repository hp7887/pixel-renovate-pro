import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallbackSrc?: string;
}

const LazyImage = ({ src, alt, className = "", placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E", fallbackSrc }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Генерируем WebP путь если браузер поддерживает
  const getWebPPath = (originalSrc: string) => {
    // Проверяем поддержку WebP
    if (typeof window === 'undefined') return originalSrc;
    
    const isWebPSupported = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;
    
    if (!isWebPSupported) return originalSrc;
    
    // Заменяем расширение на .webp
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <picture>
      {/* WebP версия для браузеров с поддержкой */}
      <source 
        srcSet={imageSrc !== placeholder ? getWebPPath(imageSrc) : undefined} 
        type="image/webp" 
      />
      {/* Оригинальный формат как fallback */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (fallbackSrc) {
            setImageSrc(fallbackSrc);
            setIsLoaded(true);
          }
        }}
        loading="lazy"
      />
    </picture>
  );
};

export default LazyImage;