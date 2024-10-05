import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-xl font-bold">
        <Image src="/images/altlogo.jpeg" className='rounded-full inline-block' alt="Logo" width={50} height={50} />
        <span className="text-purple-600 text-3xl font-serif">ॐ</span>
        <span className="text-gray-800 ml-1">KARA</span>
      </span>
    </Link>
  );
}
