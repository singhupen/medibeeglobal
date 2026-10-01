import Image from 'next/image';

interface AvatarProps {
  name: string;
  image?: string;
  className?: string;
}

export default function Avatar({ name, image, className = '' }: AvatarProps) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        width={52}
        height={52}
        className={`w-13 h-13 rounded-full object-cover ring-2 ring-primary-100 group-hover:ring-primary-400 transition-all ${className}`}
        loading="lazy"
      />
    );
  }

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      className={`w-13 h-13 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg ring-2 ring-primary-100 group-hover:ring-primary-400 transition-all ${className}`}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
