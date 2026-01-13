import { Link } from 'react-router-dom';
import logoSvg from '@/assets/logo.svg';

interface LogoProps {
  linkToHome?: boolean;
  className?: string;
}

export function Logo({ linkToHome = false, className = '' }: LogoProps) {
  const logoContent = (
    <img 
      src={logoSvg} 
      alt="LoveCount" 
      className={`h-10 sm:h-12 w-auto ${className}`}
    />
  );

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        className="inline-block hover:opacity-90 transition-opacity duration-200"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

export default Logo;
