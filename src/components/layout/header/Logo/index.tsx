import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {}

const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/" className="inline-block">
      {/* Logo clair */}
      <div className="relative w-[150px] sm:w-[200px] md:w-[150px] h-11 dark:hidden">
        <Image
          src="/images/logo/logo.svg"
          alt="logo"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
          quality={100}
          priority
        />
      </div>

      {/* Logo sombre */}
      <div className="relative w-[160px] sm:w-[210px] md:w-[260px] h-14 hidden dark:block">
        <Image
          src="/images/logo/DarkModeLogo.svg"
          alt="logo"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 210px, 260px"
          quality={100}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
