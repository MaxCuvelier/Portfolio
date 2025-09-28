import '@/app/ui/global.css';
import Link from 'next/link';
import ContactButton from './button';

export default function Header() {
    return (
<header className='flex justify-between items-center p-6 border-b border-gray-200 shadow-sm'>
    <Link
        href='/'
        className='font-black text-foreground text-lg'>
        <span>Portfolio</span>
    </Link>
    <div className='flex items-center gap-4'>
        <a
          href="/#projects"
          className="font-medium md:text-base text-sm hover:text-pink-600 transition gap-2 pt-1 pb-1 border border-gray-300 rounded-xl p-4 transition-shadow duration-300 hover:shadow-lg"
        >
          Mes projets
        </a>
        <ContactButton />
    </div>
</header>
    )
}
