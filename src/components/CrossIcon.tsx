import React from 'react';

export interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  id?: string;
}

/**
 * Medibeeglobal Brand Medical Cross Icon
 * Features a smooth diagonal gradient from Teal/Cyan (#2FB6A6) on top-left
 * to Sky Blue (#3A8FCE) on bottom-right matching the official logo mark.
 */
export default function CrossIcon({
  size = 20,
  className = '',
  id = 'medibeeglobal-cross-grad',
  ...props
}: CrossIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2FB6A6" />
          <stop offset="100%" stopColor="#3A8FCE" />
        </linearGradient>
      </defs>
      <path
        d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V8.5H20.5C21.0523 8.5 21.5 8.94772 21.5 9.5V13.5C21.5 14.0523 21.0523 14.5 20.5 14.5H15V20C15 20.5523 14.5523 21 14 21H10C9.44772 21 9 20.5523 9 20V14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V9.5C2.5 8.94772 2.94772 8.5 3.5 8.5H9V3Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
