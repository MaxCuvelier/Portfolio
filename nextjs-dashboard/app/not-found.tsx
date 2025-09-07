import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 className='20rem'>404 - Page non trouvée</h1>
      <Link
      href='/'>
        <p>Retour à la page d'accueil</p>
      </Link>
    </div>
  );
}