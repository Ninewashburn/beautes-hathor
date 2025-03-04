"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/carousel";
import Link from "next/link";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Afficher le bouton "Retour en haut" après un certain défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Images pour le carousel
  const carouselImages = [
    {
      src: "/images/carousel1.webp",
      alt: "Salon de beauté Les Beautés d'Hathor",
    },
    {
      src: "/images/carousel2.webp",
      alt: "Soins esthétiques",
    },
    {
      src: "/images/carousel3.webp",
      alt: "Ambiance égyptienne",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Premier impact visuel */}
      <section
        className="w-full bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/images/hieroglyphe.webp')" }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-brown-light/80 p-6 rounded-lg max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-delius-swash text-center mb-6">
              <FontAwesomeIcon icon={faAnkh} className="p-1" />
              Bienvenue chez votre esthéticienne
              <FontAwesomeIcon icon={faAnkh} className="p-1" />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/home.webp"
                  alt="Esthéticienne"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto shadow-lg"
                  priority
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Diplômée d'esthétique, c'est avec l'envie de vous apporter
                  soins et détente, que je vous accueille à mon domicile, dans
                  un espace totalement dédié à la relaxation et au voyage.
                </p>
                <p className="text-lg">
                  Passionnée par la beauté et l'Égypte, inspirée par ces femmes
                  qui ont influencé le monde antique, telles Néfertiti,
                  Hatchepsout ou encore Cléopâtre, dont la beauté et la
                  puissance traversent les âges.
                </p>
                <p className="text-lg">
                  C'est tout naturellement que j'ai choisi Hathor, déesse de la
                  beauté et de l'amour afin de vous proposer un moment unique
                  avec des soins adaptés à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel et Parallax - Section visuelle immersive */}
      <section className="my-4">
        <div className="w-full">
          <Carousel
            images={carouselImages}
            autoSlideInterval={6000}
            className="h-[650px] md:h-[750px]"
          />
        </div>

        <div
          className="section-parallax mt-4"
          style={{ backgroundImage: 'url("/images/home_parallax.webp")' }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="bg-[#f8f5e1] bg-opacity-80 p-8 rounded-lg max-w-2xl mx-auto text-center shadow-lg">
              <h2 className="text-3xl font-delius-swash mb-4">
                Beauté & Bien-être
              </h2>
              <p className="text-lg mb-6">
                Découvrez un moment de détente et de beauté dans un cadre
                inspiré de l'Égypte ancienne.
              </p>
              <a
                href="/contact"
                className="text-brown-DEFAULT px-6 py-3 rounded-lg border border-transparent hover:border-brown-DEFAULT hover:bg-[#f8f5e1] hover:shadow-md transition-all inline-block transform hover:scale-105"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Présentation des prestations principales */}
      <section
        className="py-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hieroglyphe.webp")' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-delius-swash text-center mb-8 text-brown-DEFAULT bg-[#f8f5e1] bg-opacity-80 py-2 rounded-lg max-w-md mx-auto">
            Nos Prestations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
            <a
              href="/prestations#epilation"
              className="block transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center bg-[#f8f5e1] bg-opacity-90 p-6 rounded-lg service-card">
                <Image
                  src="/images/legs.webp"
                  alt="Épilations"
                  width={100}
                  height={100}
                  className="zoom-icon mb-4"
                />
                <h3 className="text-xl font-delius-swash text-center">
                  Épilations
                </h3>
              </div>
            </a>

            <a
              href="/prestations#visage"
              className="block transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center bg-[#f8f5e1] bg-opacity-90 p-6 rounded-lg service-card">
                <Image
                  src="/images/face.webp"
                  alt="Soins du visage"
                  width={100}
                  height={100}
                  className="zoom-icon mb-4"
                />
                <h3 className="text-xl font-delius-swash text-center">
                  Soins du visage
                </h3>
              </div>
            </a>

            <a
              href="/prestations#mains"
              className="block transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center bg-[#f8f5e1] bg-opacity-90 p-6 rounded-lg service-card">
                <Image
                  src="/images/hand.webp"
                  alt="Beauté des mains"
                  width={100}
                  height={100}
                  className="zoom-icon mb-4"
                />
                <h3 className="text-xl font-delius-swash text-center">
                  Beauté des mains
                </h3>
              </div>
            </a>

            <a
              href="/prestations#pieds"
              className="block transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center bg-[#f8f5e1] bg-opacity-90 p-6 rounded-lg service-card">
                <Image
                  src="/images/foot.webp"
                  alt="Beauté des pieds"
                  width={100}
                  height={100}
                  className="zoom-icon mb-4"
                />
                <h3 className="text-xl font-delius-swash text-center">
                  Beauté des pieds
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Gift Card et Informations - Section informative */}
      <section className="py-8 bg-[#f8f5e1] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gift Card */}
            <div className="bg-accent/30 p-5 rounded-lg h-full flex flex-col">
              <div className="flex flex-col h-full">
                <div className="w-full mb-4 rounded-lg overflow-hidden">
                  <video
                    autoPlay
                    muted
                    playsInline
                    className="w-full rounded-lg shadow-lg"
                    style={{ objectFit: "cover" }}
                  >
                    <source
                      src="/images/clairjoie_cheque.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h2 className="text-2xl font-delius-swash text-center mb-4">
                  Offrez du bien-être
                </h2>
                <p className="text-center">
                  Faites plaisir à vos proches avec un chèque cadeau valable 1
                  an.
                </p>
              </div>
            </div>

            {/* Informations importantes */}
            <div className="bg-brown-light/30 p-5 rounded-lg h-full flex flex-col">
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row items-start gap-4 flex-grow">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-delius-swash text-center mb-4">
                      Informations pratiques
                    </h2>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>
                        Pour des raisons de sécurité, les poses de vernis
                        semi-permanent ne sont pas réalisées avant 17 ans.
                      </li>
                      <li>
                        Signalez vos éventuels problèmes de santé ou grossesse
                        pour adapter les soins.
                      </li>
                      <li>Paiements acceptés : espèces et carte bancaire.</li>
                      <li>
                        Annulation possible jusqu'à 24h avant le rendez-vous
                        (SMS accepté).
                      </li>
                      <li>
                        Les soins proposés sont uniquement esthétiques et dédiés
                        à la détente.
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex flex-col items-center mx-auto">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/testegypte.webp"
                        alt="Décoration égyptienne"
                        width={250}
                        height={250}
                        className="rounded-lg object-cover shadow-lg"
                      />
                      <div className="mt-3 text-center">
                        <a
                          href="/contact"
                          className="text-brown-DEFAULT border-b border-brown-DEFAULT hover:text-brown-dark transition-colors"
                        >
                          Prendre rendez-vous
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-1">
                  <h3 className="text-xl font-delius-swash text-center mb-6">
                    Nos marques partenaires
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 bg-[#f8f5e1] bg-opacity-50 p-3 rounded-lg">
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/clairjoie.webp"
                        alt="Clairjoie"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/lovaskin.webp"
                        alt="Lovaskin"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/trind.webp"
                        alt="Trind"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/lova.webp"
                        alt="Lovaskin"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/paysane.webp"
                        alt="Paysane"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="flex justify-center items-center p-2 bg-[#f8f5e1] rounded">
                      <Image
                        src="/images/peggysage.webp"
                        alt="Peggy's Age"
                        width={100}
                        height={50}
                        className="object-contain hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-delius-swash text-center mb-6">
              Ce que disent nos clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brown-light/30 p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Merci pour votre professionnalisme et votre gentillesse. Je
                  recommande vivement !"
                </p>
                <p className="font-semibold">Ahsoka</p>
              </div>

              <div className="bg-brown-light/30 p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Un moment de détente absolue. Les soins sont de qualité et
                  l'ambiance est apaisante. Je reviendrai !"
                </p>
                <p className="font-semibold">Marie</p>
              </div>

              <div className="bg-brown-light/30 p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Excellente prestation, très professionnelle et à l'écoute. Le
                  cadre est magnifique et l'accueil chaleureux."
                </p>
                <p className="font-semibold">Sophie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action final */}
      <section className="bg-[#f8f5e1] py-6 mt-4">
        <div className="container mx-auto px-4 text-center">
          <a href="/prestations" className="inline-block">
            <div className="text-brown-DEFAULT hover:bg-brown-DEFAULT hover:text-[#f8f5e1] transition-all p-4 rounded-lg text-center border border-brown-DEFAULT">
              <span className="font-delius-swash text-xl">
                Découvrir toutes nos prestations
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-12 bg-[#f8f5e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-delius-swash text-center mb-8">
            <FontAwesomeIcon icon={faAnkh} className="p-1" />
            Questions fréquentes
            <FontAwesomeIcon icon={faAnkh} className="p-1" />
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-delius-swash mb-3 text-brown-DEFAULT">
                Comment prendre rendez-vous ?
              </h3>
              <p>
                Vous pouvez prendre rendez-vous par téléphone au 01.02.03.04.05
                ou via la page Contact de ce site. Je vous répondrai dans les
                plus brefs délais pour confirmer votre rendez-vous.
              </p>
            </div>

            <div className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-delius-swash mb-3 text-brown-DEFAULT">
                Quels moyens de paiement acceptez-vous ?
              </h3>
              <p>
                J'accepte les paiements en espèces et par chèque. Les cartes
                cadeaux sont également disponibles pour offrir un moment de
                détente à vos proches.
              </p>
            </div>

            <div className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-delius-swash mb-3 text-brown-DEFAULT">
                Faut-il se préparer avant un soin du visage ?
              </h3>
              <p>
                Il est recommandé de venir sans maquillage pour les soins du
                visage. Pour les autres soins, aucune préparation particulière
                n'est nécessaire. N'hésitez pas à me signaler toute allergie ou
                condition médicale avant votre soin.
              </p>
            </div>

            <div className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-delius-swash mb-3 text-brown-DEFAULT">
                Combien de temps dure une séance d'épilation ?
              </h3>
              <p>
                La durée varie selon la zone à épiler. Une épilation des
                sourcils prend environ 15 minutes, tandis qu'une épilation des
                jambes complètes peut prendre jusqu'à 45 minutes. Je vous
                indiquerai la durée estimée lors de votre prise de rendez-vous.
              </p>
            </div>

            <div className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-delius-swash mb-3 text-brown-DEFAULT">
                Proposez-vous des forfaits ou des abonnements ?
              </h3>
              <p>
                Oui, je propose différents forfaits pour les soins réguliers.
                N'hésitez pas à me demander plus d'informations lors de votre
                visite ou par téléphone.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brown-DEFAULT text-brown px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Une autre question ? Contactez-moi
            </Link>
          </div>
        </div>
      </section>

      {/* Bouton Retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-brown-DEFAULT text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-brown-light ${
          showScrollTop ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Retour en haut de la page"
      >
        <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
      </button>
    </div>
  );
}
