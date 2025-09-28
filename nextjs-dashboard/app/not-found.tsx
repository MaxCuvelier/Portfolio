import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }} className='flex flex-col gap-28'>
      <h1 className='text-8xl text-pink-600'>404</h1>
      <div className='flex flex-col gap-16'>
        <p className='text-base'>Une erreur s'est produite lors du chargement de la page, veuillez cliquer sur les lien ci-dessous pour retourner à la page d'accueil.</p>
        <Link
        href='/'>
          <p className='text-lg hover:underline'>Retour à la page d'accueil</p>
        </Link>
      </div>
    </div>
  );
}