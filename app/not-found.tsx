import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <Image
        src="/images/hathor_logo.webp"
        alt="Les Beautés d'Hathor Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-4xl font-delius-swash mb-4 text-center">
        Page non trouvée
      </h1>
      <p className="text-xl mb-8 text-center">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link
        href="/"
        className="text-brown-DEFAULT px-6 py-3 rounded-lg border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] transition-all"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
