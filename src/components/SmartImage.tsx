import { useState, useEffect } from 'react'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
}

export default function SmartImage({ src, alt, className = '' }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoaded(false)
    setError(false)
  }, [src])

  return (
    <>
      {!loaded && !error && (
        <div className={`absolute inset-0 animate-pulse bg-white/5 ${className}`} />
      )}
      {error ? (
        <div className={`flex items-center justify-center bg-white/5 ${className}`}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </>
  )
}
