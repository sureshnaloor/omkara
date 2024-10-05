import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { LogOut, Info, Mail, User } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-primary/10 shadow-md dark:bg-primary/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-6 md:space-x-4">
          <Link href="/about" className="text-secondary hover:text-secondary/80 dark:text-secondary dark:hover:text-secondary/80">
            <Info size={20} className="md:hidden" />
            <span className="hidden md:inline text-[14px]">About</span>
          </Link>
          <Link href="/contact" className="text-secondary hover:text-secondary/80 dark:text-secondary dark:hover:text-secondary/80">
            <Mail size={20} className="md:hidden" />
            <span className="hidden md:inline text-[14px]">Contact</span>
          </Link>
          {session?.user ? (
            <>
              <span className="hidden md:inline text-tertiary dark:text-tertiary font-bold text-[14px]">
                Welcome, {session.user.name}
              </span>
              <button 
                onClick={() => signOut()} 
                className="text-secondary hover:text-secondary/80 dark:text-secondary dark:hover:text-secondary/80"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <button 
              onClick={() => signIn()} 
              className="flex items-center text-gray-800 dark:text-gray-200 bg-blue-300 dark:bg-primary/20 px-3 py-1 rounded text-[12px] hover:bg-primary/80"
            >
              <User size={16} className="md:hidden mr-1" />
              <span className="hidden md:inline">Sign in</span>
            </button>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
