'use client';

import Image from 'next/image';
import Link from 'next/link';
import { themeConfig } from '@/lib/theme';

export interface LogoProps {
  variant?: 'plain' | 'light' | 'dark' | 'card' | 'navbar';
  scrolled?: boolean;
  className?: string;
  imageClassName?: string;
  asLink?: boolean;
  href?: string;
  priority?: boolean;
  height?: number;
  alt?: string;
  onClick?: () => void;
}

export default function Logo({
  variant = 'plain',
  scrolled = false,
  className = '',
  imageClassName = '',
  asLink = false,
  href = '/',
  priority = false,
  height = 44,
  alt = themeConfig.brand.logo.alt,
  onClick,
}: LogoProps) {
  // Always use the transparent logo as requested
  const logoSrc: string = '/logo-transparent.png';

  let containerStyles = 'inline-flex items-center transition-all duration-300';
  if (variant === 'card') {
    containerStyles += ' bg-white px-3.5 py-2 rounded-xl shadow-soft';
  }

  const imageElement = (
    <div className={`${containerStyles} ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={themeConfig.brand.logo.width}
        height={themeConfig.brand.logo.height}
        priority={priority}
        unoptimized
        className={`w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] ${imageClassName}`}
        style={{
          height: `${height}px`,
          width: 'auto',
        }}
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-xl"
        onClick={onClick}
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
