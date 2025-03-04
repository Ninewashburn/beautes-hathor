"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Détecter le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Empêcher le défilement du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-20 w-full transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-[#f8f5e1] text-brown-DEFAULT">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Accueil - Les Beautés d'Hathor"
            >
              <Image
                src="/images/logo_institut.webp"
                alt="Logo Les Beautés d'Hathor"
                width={50}
                height={50}
                className="object-contain"
                priority
              />
              <span className="font-delius-swash text-lg md:text-xl hidden sm:inline-block">
                Les Beautés d'Hathor
              </span>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="/" active={pathname === "/"}>
                Accueil
              </NavLink>
              <NavLink href="/prestations" active={pathname === "/prestations"}>
                Prestations
              </NavLink>
              <NavLink href="/tarif" active={pathname === "/tarif"}>
                Tarif
              </NavLink>
              <NavLink href="/galerie" active={pathname === "/galerie"}>
                Galerie
              </NavLink>
              <NavLink href="/contact" active={pathname === "/contact"}>
                Contact
              </NavLink>
            </div>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-DEFAULT"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-[#f8f5e1] shadow-inner">
            <MobileNavLink href="/" active={pathname === "/"}>
              Accueil
            </MobileNavLink>
            <MobileNavLink
              href="/prestations"
              active={pathname === "/prestations"}
            >
              Prestations
            </MobileNavLink>
            <MobileNavLink href="/tarif" active={pathname === "/tarif"}>
              Tarif
            </MobileNavLink>
            <MobileNavLink href="/galerie" active={pathname === "/galerie"}>
              Galerie
            </MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Composant pour les liens de navigation desktop
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`relative py-2 px-1 font-medium transition-colors hover:text-brown-light ${
        active ? "text-brown-DEFAULT" : "text-brown-DEFAULT/80"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-brown-DEFAULT transform origin-left transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
      />
    </Link>
  );
}

// Composant pour les liens de navigation mobile
function MobileNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block py-3 px-4 rounded-md transition-colors ${
        active
          ? "bg-brown-DEFAULT text-white"
          : "text-brown-DEFAULT hover:bg-brown-light/20"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
