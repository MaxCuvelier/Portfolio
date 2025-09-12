import '@/app/ui/global.css';
import Link from 'next/link';

export default function Header() {
    return (
<header className='flex justify-between items-center p-5 '>
    <Link
        href='/'
        className='font-black text-foreground text-lg'>
        <span>Portfolio</span>
    </Link>
    <div className='ml-auto flex items-center gap-2'>
        <button>Contact</button>
    </div>
</header>
    )
}
