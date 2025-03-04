"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight } from "lucide-react";

// Définition des interfaces pour les types de prestations
interface PrestationBase {
  name: string;
  price: string;
  image: string;
  description: string;
  duration?: string; // Rendre duration optionnel
}

interface PrestationWithDuration extends PrestationBase {
  duration: string;
}

type Prestation = PrestationBase | PrestationWithDuration;

export default function Prestations() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // Image de fond fixe sans adaptation à la hauteur
  const backgroundStyle = {
    backgroundImage: "url('/images/mythologie-egyptienne-fond.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Fixe l'image par rapport à la fenêtre
  };

  const categories = [
    { id: "epilation", name: "Épilation", icon: "/images/icon-epilation.webp" },
    { id: "visage", name: "Soins du visage", icon: "/images/icon-visage.webp" },
    { id: "mains", name: "Beauté des mains", icon: "/images/icon-mains.webp" },
    { id: "pieds", name: "Beauté des pieds", icon: "/images/icon-pieds.webp" },
  ];

  const prestations: Record<string, PrestationBase[]> = {
    epilation: [
      {
        name: "Mains ou pieds",
        price: "5 €",
        image: "/images/epilation_pieds.webp",
        description: "Épilation douce à la cire",
      },
      {
        name: "Lèvres",
        price: "6 €",
        image: "/images/epilation_levres.webp",
        description: "Épilation précise à la cire",
      },
      {
        name: "Sourcils",
        price: "8 €",
        image: "/images/epilation_sourcils.webp",
        description: "Restructuration et épilation des sourcils",
      },
      {
        name: "Aisselles",
        price: "9 €",
        image: "/images/epilation_aisselles.webp",
        description: "Épilation douce des aisselles",
      },
      {
        name: "Bras",
        price: "10 €",
        image: "/images/epilation_bras.webp",
        description: "Épilation complète des bras",
      },
      {
        name: "Demi-jambes",
        price: "15 €",
        image: "/images/epilation_demi-jambes.webp",
        description: "Épilation des demi-jambes",
      },
      {
        name: "Jambes entières",
        price: "20 €",
        image: "/images/epilation_jambes.webp",
        description: "Épilation complète des jambes",
      },
      {
        name: "Maillot simple",
        price: "12 €",
        image: "/images/epilation_maillot.webp",
        description: "Épilation du maillot simple",
      },
      {
        name: "Maillot échancré",
        price: "15 €",
        image: "/images/epilation_maillot-echancre.webp",
        description: "Épilation du maillot échancré",
      },
    ],
    visage: [
      {
        name: "La danse des ânes de Cléopâtre",
        price: "45 €",
        duration: "60 minutes",
        image: "/images/soin_cleopatre.webp",
        description:
          "Soin complet pour peau fatiguée, avec imperfections ou rougeurs. Inspiré des rituels de beauté de l'Égypte ancienne.",
      },
      {
        name: "Valse des fleurs",
        price: "48 €",
        duration: "60 minutes",
        image: "/images/soin_valse.webp",
        description:
          "Soin hydratant pour peau sensible et déshydratée. Apporte confort et souplesse à votre peau.",
      },
      {
        name: "Divines années",
        price: "50 €",
        duration: "60 minutes",
        image: "/images/soin_divine.webp",
        description:
          "Soin anti-âge pour peau mature. Redonne fermeté et éclat à votre visage.",
      },
      {
        name: "Soins Ô chocolat",
        price: "48 €",
        duration: "60 minutes",
        image: "/images/soin_chocolat.webp",
        description: "Soin gourmand au chocolat. Antioxydant et relaxant.",
      },
      {
        name: "Soins peau grasse",
        price: "48 €",
        duration: "60 minutes",
        image: "/images/soin_peau-grasse.webp",
        description:
          "Soin purifiant pour peaux grasses. Régule l'excès de sébum et resserre les pores.",
      },
      {
        name: "Découverte pureté",
        price: "30 €",
        duration: "30 minutes",
        image: "/images/soin_purete.webp",
        description:
          "Soin express purifiant. Idéal pour un premier soin du visage.",
      },
      {
        name: "Soins peau sèche",
        price: "48 €",
        duration: "60 minutes",
        image: "/images/soin-peau_seche.webp",
        description:
          "Soin nourrissant pour peaux sèches. Apporte confort et souplesse.",
      },
      {
        name: "Découverte confort",
        price: "30 €",
        duration: "30 minutes",
        image: "/images/soin_confort.webp",
        description:
          "Soin express hydratant. Idéal pour un coup d'éclat rapide.",
      },
      {
        name: "Soins contour des yeux",
        price: "10 €",
        duration: "20 minutes",
        image: "/images/soin_yeux.webp",
        description:
          "Soin spécifique pour le contour des yeux. Atténue les cernes et les poches.",
      },
      {
        name: "Beauté flash",
        price: "4 €",
        duration: "10 minutes",
        image: "/images/soin_flash.webp",
        description:
          "La maquillage flash sublime votre teint et votre regard tout en simplicité. Léger et naturel, c'est l'effet bonne mine garanti !",
      },
    ],
    mains: [
      {
        name: "Pose vernis semi-permanent",
        price: "26 €",
        image: "/images/mains_semi-permanent.webp",
        description: "Pose de vernis semi-permanent, tenue 2 à 3 semaines.",
      },
      {
        name: "Nail Art & Decoration",
        price: "34 €",
        image: "/images/mains_nail-art.webp",
        description: `
          - French, BabyBoomer +2 €
          - Effet sucre, pull, marbré +2 €
          - Sticker, Strass +1.00 €
          - Nail Art Sur devis
        `,
      },
      {
        name: "Dépose + repose semi-permanent",
        price: "34 €",
        image: "/images/mains_depose-repose.webp",
        description: "Dépose de l'ancien vernis et pose d'un nouveau.",
      },
      {
        name: "Dépose + soin",
        price: "18 €",
        image: "/images/mains_depose-soin.webp",
        description: "Dépose du vernis semi-permanent et soin réparateur.",
      },
      {
        name: "Soin japonais sur ongle naturel",
        price: "26 €",
        image: "/images/mains_japonais-naturel.webp",
        description:
          "Soin traditionnel japonais pour fortifier les ongles naturels.",
      },
      {
        name: "Soin japonais après une dépose",
        price: "30 €",
        image: "/images/mains_japonais-depose.webp",
        description: "Soin réparateur après dépose de vernis semi-permanent.",
      },
      {
        name: "Manucure",
        price: "15 €",
        image: "/images/mains_manucure.webp",
        description: "Limage, soin des cuticules et modelage des mains.",
      },
      {
        name: "Soins des mains",
        price: "25 €",
        image: "/images/mains_soin.webp",
        description: "Soin complet : trempage, gommage, masque et modelage.",
      },
    ],
    pieds: [
      {
        name: "Pose-vernis classique",
        price: "8 €",
        image: "/images/pieds_vernis.webp",
        description: "Pose de vernis classique sur les ongles des pieds.",
      },
      {
        name: "Pose-vernis semi-permanent",
        price: "26 €",
        image: "/images/pieds_semi-permanent.webp",
        description: "Pose de vernis semi-permanent, tenue 3 à 4 semaines.",
      },
      {
        name: "Dépose + soin",
        price: "18 €",
        image: "/images/pieds_depose.webp",
        description: "Dépose du vernis semi-permanent et soin réparateur.",
      },
      {
        name: "Beauté des ongles de pieds",
        price: "15 €",
        image: "/images/pieds_beaute.webp",
        description:
          "Soin complet des ongles : retrait vernis, limage, cuticules, pose vernis.",
      },
      {
        name: "Pied de Reine",
        price: "23 €",
        image: "/images/pieds_reine.webp",
        description: "Soin callositée pour des pieds doux et lisses.",
      },
      {
        name: "Pied de Déesse",
        price: "26 €",
        image: "/images/pieds_deesse.webp",
        description:
          "Soin complet : trempage, callositée, gommage, masque et modelage.",
      },
    ],
  };

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setShowAll(true);
    } else {
      setSelectedCategory(categoryId);
      setShowAll(false);
    }
  };

  const handleShowAllClick = () => {
    setSelectedCategory(null);
    setShowAll(true);
  };

  const renderPrestations = () => {
    if (showAll) {
      return (
        <>
          {Object.entries(prestations).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-delius-swash text-center mb-6">
                {categories.find((c) => c.id === category)?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-brown-DEFAULT font-bold">
                          {item.price}
                        </span>
                        {item.duration && (
                          <span className="text-sm text-gray-500">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    } else if (selectedCategory) {
      const items = prestations[selectedCategory as keyof typeof prestations];
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-delius-swash text-center mb-6">
            {categories.find((c) => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-DEFAULT font-bold">
                      {item.price}
                    </span>
                    {item.duration && (
                      <span className="text-sm text-gray-500">
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header - complètement opaque */}
      <div className="bg-[#f8f5e1] py-8 relative z-20">
        <h1 className="text-3xl md:text-4xl font-delius-swash text-center text-brown-DEFAULT flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faSun} className="p-1" />
          Prestations
          <FontAwesomeIcon icon={faSun} className="p-1" />
        </h1>
      </div>

      {/* Main Content avec fond - isolé du header et footer */}
      <div className="relative" ref={contentRef}>
        {/* Fond limité au contenu principal */}
        <div
          className="fixed inset-0 w-full h-full opacity-50 z-0"
          style={backgroundStyle}
        />

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            {/* Categories */}
            <div className="bg-brown-light/30 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleShowAllClick}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    showAll
                      ? "bg-brown-DEFAULT text-white"
                      : "bg-white/80 text-brown-DEFAULT hover:bg-brown-light"
                  }`}
                >
                  Tout voir
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? "bg-brown-DEFAULT text-white"
                        : "bg-white/80 text-brown-DEFAULT hover:bg-brown-light"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Prestations */}
            <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-6xl mx-auto">
              {renderPrestations()}
            </div>

            {/* CTA */}
            <div className="text-center mt-12 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brown-DEFAULT text-brown px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                Prendre rendez-vous <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
