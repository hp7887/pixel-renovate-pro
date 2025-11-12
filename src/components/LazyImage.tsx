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
  const [supportsWebP, setSupportsWebP] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = async () => {
      if (!window.createImageBitmap) {
        setSupportsWebP(false);
        return;
      }

      const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
      try {
        const blob = await fetch(webpData).then(r => r.blob());
        await createImageBitmap(blob);
        setSupportsWebP(true);
      } catch {
        setSupportsWebP(false);
      }
    };
    checkWebPSupport();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

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

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  // If src is a complex object (from vite-imagetools), handle it as picture element
  const isImageToolsImport = typeof src === 'object' && src !== null;

  return (
    <div ref={containerRef} className={className}>
      {imageSrc !== placeholder && (
        <>
          {isImageToolsImport ? (
            <picture>
              {supportsWebP && (src as any).sources?.webp && (
                <source srcSet={(src as any).sources.webp} type="image/webp" />
              )}
              <img
                ref={imgRef}
                src={(src as any).img || imageSrc}
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
          ) : (
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
          )}
        </>
      )}
      {!isLoaded && imageSrc !== placeholder && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;