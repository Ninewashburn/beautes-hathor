"use client";

import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Tarif() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Image de fond sans effet parallax et sans mouvement
  const backgroundStyle = {
    backgroundImage: "url('/images/pyramide.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "local", // Empêche le défilement de l'image avec la page
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header - complètement opaque */}
      <div className="bg-[#f8f5e1] py-8 relative z-20">
        <h1 className="text-3xl md:text-4xl font-delius-swash text-center text-brown-DEFAULT flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faSun} className="p-1" />
          Tarif
          <FontAwesomeIcon icon={faSun} className="p-1" />
        </h1>
      </div>

      {/* Main Content avec fond - isolé du header et footer */}
      <div className="relative overflow-hidden" ref={contentRef}>
        {/* Fond limité au contenu principal avec position absolute */}
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={backgroundStyle}
        />

        {/* Content with relative positioning et z-index élevé */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            {/* Épilation Section */}
            <div className="bg-brown-light/30 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-6 border-b-2 border-brown-DEFAULT/30 pb-3">
                <h2 className="text-2xl font-delius-swash flex items-center">
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-2 text-brown-DEFAULT"
                  />
                  Épilation
                </h2>
                <Link
                  href="/prestations#epilation"
                  className="text-brown-DEFAULT px-3 py-1 rounded text-sm border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] transition-all"
                >
                  Voir les prestations
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Mains ou pieds</span>
                  <span className="font-bold">5 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Lèvres</span>
                  <span className="font-bold">6 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Sourcils</span>
                  <span className="font-bold">8 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Aisselles</span>
                  <span className="font-bold">9 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Bras</span>
                  <span className="font-bold">10 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Demi-jambes</span>
                  <span className="font-bold">15 €</span>
                </div>
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Jambes entières</span>
                  <span className="font-bold">20 €</span>
                </div>
              </div>
            </div>

            {/* Soins du visage Section */}
            <div className="bg-brown-light/30 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-6 border-b-2 border-brown-DEFAULT/30 pb-3">
                <h2 className="text-2xl font-delius-swash flex items-center">
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-2 text-brown-DEFAULT"
                  />
                  Soins du visage
                </h2>
                <Link
                  href="/prestations#visage"
                  className="text-brown-DEFAULT px-3 py-1 rounded text-sm border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] transition-all"
                >
                  Voir les prestations
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">
                      Le divin des fleurs de Cléopâtre
                    </span>
                    <span className="text-sm text-gray-600">
                      (peau fatiguée, imperfections, rougeurs)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">45 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Valse des fleurs</span>
                    <span className="text-sm text-gray-600">
                      (peau sensible + déshydratée)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">48 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Divines années</span>
                    <span className="text-sm text-gray-600">(peau mature)</span>
                  </div>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">50 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soins Ô chocolat</span>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">48 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soins peau grasse</span>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">48 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Découverte pureté</span>
                  <div className="text-right">
                    <span className="block">30 minutes</span>
                    <span className="font-bold">30 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soins peau sèche</span>
                  <div className="text-right">
                    <span className="block">60 minutes</span>
                    <span className="font-bold">48 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Découverte confort</span>
                  <div className="text-right">
                    <span className="block">30 minutes</span>
                    <span className="font-bold">30 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soins contour des yeux</span>
                  <div className="text-right">
                    <span className="block">20 minutes</span>
                    <span className="font-bold">10 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Beauté flash après soins</span>
                    <span className="text-sm text-gray-600">(teint, yeux)</span>
                  </div>
                  <div className="text-right">
                    <span className="block">10 minutes</span>
                    <span className="font-bold">4 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Beauté des mains Section */}
            <div className="bg-brown-light/30 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-6 border-b-2 border-brown-DEFAULT/30 pb-3">
                <h2 className="text-2xl font-delius-swash flex items-center">
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-2 text-brown-DEFAULT"
                  />
                  Beauté des mains
                </h2>
                <Link
                  href="/prestations#mains"
                  className="text-brown-DEFAULT px-3 py-1 rounded text-sm border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] transition-all"
                >
                  Voir les prestations
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Pose vernis semi-permanent</span>
                  <span className="font-bold">26 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 pl-4 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>- French, Baby/boomer</span>
                  <span className="font-bold">+2 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 pl-4 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>- Effet sucré, pull, marbré</span>
                  <span className="font-bold">+2 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 pl-4 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>- Sticker, Strass</span>
                  <span className="font-bold">+1.00 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 pl-4 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>- Nail Art</span>
                  <span className="font-bold">Sur devis</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Dépose + repose semi-permanent</span>
                  <span className="font-bold">34 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Dépose + soin</span>
                  <span className="font-bold">18 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soin japonais sur ongle naturel</span>
                  <span className="font-bold">26 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Soin japonais après une dépose</span>
                  <span className="font-bold">30 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Manucure</span>
                    <span className="text-sm text-gray-600">
                      (limage, cuticule, modelage)
                    </span>
                  </div>
                  <span className="font-bold">15 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Soins des mains</span>
                    <span className="text-sm text-gray-600">
                      (trempage, gommage, masque, modelage)
                    </span>
                  </div>
                  <span className="font-bold">25 €</span>
                </div>
              </div>
            </div>

            {/* Beauté des pieds Section */}
            <div className="bg-brown-light/30 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-6 border-b-2 border-brown-DEFAULT/30 pb-3">
                <h2 className="text-2xl font-delius-swash flex items-center">
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-2 text-brown-DEFAULT"
                  />
                  Beauté des pieds
                </h2>
                <Link
                  href="/prestations#pieds"
                  className="text-brown-DEFAULT px-3 py-1 rounded text-sm border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] transition-all"
                >
                  Voir les prestations
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Pose-vernis classique</span>
                  <span className="font-bold">8 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Pose-vernis semi-permanent</span>
                  <span className="font-bold">26 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <span>Dépose + soin</span>
                  <span className="font-bold">18 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Beauté des ongles de pieds</span>
                    <span className="text-sm text-gray-600">
                      (retrait vernis, limage, cuticules, vernis soin
                      transparent ou couleur)
                    </span>
                  </div>
                  <span className="font-bold">15 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Pied de Reine</span>
                    <span className="text-sm text-gray-600">
                      (soin callositée)
                    </span>
                  </div>
                  <span className="font-bold">23 €</span>
                </div>

                <div className="flex justify-between border-b border-brown-DEFAULT/30 pb-2 hover:bg-brown-light/10 px-2 rounded transition-colors">
                  <div>
                    <span className="block">Pied de Déesse</span>
                    <span className="text-sm text-gray-600">
                      (trempage, callositée, gommage, masque, modelage)
                    </span>
                  </div>
                  <span className="font-bold">26 €</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brown-DEFAULT text-brown px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
