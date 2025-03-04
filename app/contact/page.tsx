"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState, useRef } from "react";

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        // Calculer le défilement relatif à l'élément de contenu
        const rect = contentRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Appel initial pour configurer l'état
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden" ref={contentRef}>
      {/* Parallax Background - limité à la hauteur du contenu */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/egypte.webp')",
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Content with relative positioning to appear above the parallax background */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-[#f8f5e1] py-8 relative z-20">
          <h1 className="text-3xl md:text-4xl font-delius-swash text-center text-brown-DEFAULT flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="p-1" />
            Contactez moi
            <FontAwesomeIcon icon={faEnvelope} className="p-1" />
          </h1>
        </div>

        {/* Contact Info */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto mb-8 text-center">
            <p className="text-xl mb-4">
              Appelez moi au numéro : <strong>01.02.03.04.05</strong>
            </p>
            <p className="mb-6">
              Vous pouvez aussi m'envoyer un e-mail à <br />
              <a
                href="mailto:beautes-hathor@orange.fr"
                className="text-blue-600 hover:underline"
              >
                beautes-hathor@orange.fr
              </a>
            </p>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
            >
              <FontAwesomeIcon icon={faFacebook} className="p-1" />
              Les Beautés d'Hathor
            </Link>
          </div>

          {/* Map */}
          <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.4123770456193!2d1.2345678901234567!3d49.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI3JzI0LjQiTiAxwrAxNCcwNC44IkU!5e0!3m2!1sfr!2sfr!4v1614123456789!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg text-center">
              <h2 className="text-2xl font-delius-swash mb-4">
                <FontAwesomeIcon icon={faClock} className="p-1" />
                Horaires
              </h2>
              <p className="mb-2">Du lundi au vendredi</p>
              <p className="font-bold">Sur rendez-vous</p>
            </div>

            <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg text-center">
              <h2 className="text-2xl font-delius-swash mb-4">
                <FontAwesomeIcon icon={faLocation} className="p-1" />
                Adresse
              </h2>
              <p className="mb-2">01 Rue des Meuniers</p>
              <p className="font-bold">Normandie Ville</p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-[#f8f5e1] py-8 mt-8 relative z-20">
          <h2 className="text-2xl font-delius-swash text-center text-brown-DEFAULT flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faSun} className="p-1" />
            Je vous remercie pour votre visite, à bientôt !
            <FontAwesomeIcon icon={faSun} className="p-1" />
          </h2>
        </div>
      </div>
    </div>
  );
}
