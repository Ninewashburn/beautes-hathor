"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { faCamera, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const galleryImages = [
    {
      src: "/images/salon1.webp",
      alt: "Salon de beauté",
      category: "salon",
    },
    {
      src: "/images/salon2.webp",
      alt: "Espace de travail",
      category: "salon",
    },
    {
      src: "/images/salon3.webp",
      alt: "Espace détente",
      category: "salon",
    },
    {
      src: "/images/gallery10.webp",
      alt: "Manucure",
      category: "nails",
    },
    {
      src: "/images/gallery11.webp",
      alt: "Vernis semi-permanent",
      category: "nails",
    },
    {
      src: "/images/gallery12.webp",
      alt: "Nail art",
      category: "nails",
    },
    {
      src: "/images/gallery13.webp",
      alt: "Manucure rouge",
      category: "nails",
    },
    {
      src: "/images/gallery14.webp",
      alt: "Nail art décoré",
      category: "nails",
    },
    {
      src: "/images/gallery15.webp",
      alt: "Manucure bleue",
      category: "nails",
    },
    {
      src: "/images/gallery16.webp",
      alt: "Manucure simple",
      category: "nails",
    },
    {
      src: "/images/gallery17.webp",
      alt: "Manucure rouge foncé",
      category: "nails",
    },
    {
      src: "/images/gallery18.webp",
      alt: "Nail art spécial",
      category: "nails",
    },
    {
      src: "/images/ongle-gallery.webp",
      alt: "Palette de couleurs",
      category: "nails",
    },
    {
      src: "/images/gallery8.webp",
      alt: "Pédicure avant/après",
      category: "feet",
    },
    {
      src: "/images/pieds_semi-permanent.webp",
      alt: "Pédicure",
      category: "feet",
    },
    {
      src: "/images/pieds_depose.webp",
      alt: "Soins des pieds",
      category: "feet",
    },
    {
      src: "/images/gallery5.webp",
      alt: "Manucure",
      category: "feet",
    },
    {
      src: "/images/pieds_reine.webp",
      alt: "Soins des pieds de luxe",
      category: "feet",
    },
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative overflow-hidden" ref={contentRef}>
      {/* Parallax Background - limité à la hauteur du contenu */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/egypte_wallpaper.webp')",
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
            <FontAwesomeIcon icon={faSun} className="p-1" />
            Galerie
            <FontAwesomeIcon icon={faSun} className="p-1" />
          </h1>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl font-delius-swash text-center mb-8">
              Le Salon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages
                .filter((img) => img.category === "salon")
                .map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-64 zoom-icon-gallery"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-brown-light/40 backdrop-blur-sm p-6 rounded-lg max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl font-delius-swash text-center mb-8">
              Manucure & Nail Art
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages
                .filter(
                  (img) => img.category === "nails" || img.category === "feet"
                )
                .map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-64 zoom-icon-gallery"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/*         <div className="bg-brown-light/20 p-6 rounded-lg max-w-6xl mx-auto">
            <h2 className="text-2xl font-delius-swash text-center mb-8">
              Beauté des Pieds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages
                .filter((img) => img.category === "feet")
                .map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-64 zoom-icon-gallery"
                    />
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Image agrandie"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto mx-auto"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
