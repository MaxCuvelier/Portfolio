import '@/app/ui/global.css';
import Link from 'next/link';
import ContactButton from './button';

export default function Header() {
    return (
<header className='flex justify-between items-center p-5 border-b border-gray-200 shadow-sm'>
    <Link
        href='/'
        className='font-black text-foreground text-lg'>
        <span>Portfolio</span>
    </Link>
    <div>
        <ContactButton />
    </div>
</header>
    )
}
