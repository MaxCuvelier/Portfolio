import '@/app/ui/global.css';
import Link from 'next/link';
import ContactButton from './button';

export default function Header() {
    return (
<header>
    <nav className='flex justify-between items-center p-2 pt-3 pb-5 sm:p-6 sm:pb-8 border-b border-gray-200 shadow-sm '>
        <Link
            href='/'
            className='font-black text-foreground text-sm sm:text-lg'>
            <span>Maxime Cuvelier</span>
        </Link>
        <div className='flex items-center'>
            <a
                href="/#projects"
                className="font-medium md:text-base text-xs hover:text-pink-600 transition pl-1 pr-1 sm:pl-2 sm:pr-2 transition-shadow duration-300"
            >
            Mes projets
            </a>
            <a
                href="/apropos/"
                className="font-medium md:text-base text-xs hover:text-pink-600 transition pl-1 pr-1 sm:pl-2 sm:pr-2 transition-shadow duration-300"
            >
            A propos
            </a>
            <ContactButton />
        </div>
    </nav>
</header>
    )
}
