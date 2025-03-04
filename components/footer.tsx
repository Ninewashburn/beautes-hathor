import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20">
      <div className="bg-[#f8f5e1] text-brown-DEFAULT py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Colonne 1: Logo - occupe 1 colonne */}
            <div className="md:col-span-1 flex justify-center md:justify-start items-start">
              <Image
                src="/images/hathor_logo.webp"
                alt="Hathor Icon"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            {/* Colonne 2: Institut - occupe 5 colonnes */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start justify-start md:pl-2">
              <h3 className="text-xl font-delius-swash mb-4">
                INSTITUT BEAUTÉS D'HATHOR
              </h3>
              <p className="text-sm text-center md:text-left">
                Diplômée d'esthétique, c'est avec l'envie de vous apporter soins
                et détente, que je vous accueille à mon domicile, dans un espace
                totalement dédié à la relaxation et au voyage.
              </p>
            </div>

            {/* Colonne 3: Liens - occupe 2 colonnes */}
            <div className="md:col-span-2 flex flex-col items-center justify-start">
              <h3 className="text-xl font-delius-swash mb-4">LIENS</h3>
              <nav className="flex flex-col space-y-2 items-center">
                <Link
                  href="/"
                  className="hover:text-brown-light transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="/prestations"
                  className="hover:text-brown-light transition-colors"
                >
                  Prestations
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-brown-light transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Colonne 4: Coordonnées - occupe 4 colonnes */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-start">
              <h3 className="text-xl font-delius-swash mb-4">COORDONNÉES</h3>
              <div className="space-y-2 w-full md:text-right">
                <div className="flex items-center md:justify-end gap-2">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span className="text-sm">
                    01 Rue des Meuniers, Normandie-Ville
                  </span>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <Mail size={16} className="flex-shrink-0" />
                  <a
                    href="mailto:beautes-hathor@orange.fr"
                    className="hover:text-brown-light transition-colors text-sm"
                  >
                    beautes-hathor@orange.fr
                  </a>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <a
                    href="tel:0102030405"
                    className="hover:text-brown-light transition-colors text-sm"
                  >
                    01.02.03.04.05
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e6e6c8] text-brown-DEFAULT py-4 border-t border-brown-light/30 text-center">
        <div className="container mx-auto px-4">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Copyright: Les Beautés d'Hathor
            <span className="mx-2">|</span>
            <Link
              href="/mentions-legales"
              className="hover:text-brown-light transition-colors flex items-center gap-1"
            >
              <FileText size={14} />
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
