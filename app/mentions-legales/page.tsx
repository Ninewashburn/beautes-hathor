"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-[#f8f5e1] py-8">
        <h1 className="text-3xl md:text-4xl font-delius-swash text-center text-brown-DEFAULT flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faGavel} className="p-1" />
          Mentions Légales
          <FontAwesomeIcon icon={faGavel} className="p-1" />
        </h1>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">Éditeur du site</h2>
          <p className="mb-4">
            <strong>Les Beautés d'Hathor</strong>
            <br />
            01 Rue des Meuniers
            <br />
            Normandie-Ville
            <br />
            Téléphone : 01.02.03.04.05
            <br />
            Email : beautes-hathor@orange.fr
          </p>
          <p className="mb-4">
            <strong>Directrice de la publication :</strong> [Ahsoka]
          </p>
        </div>

        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">Hébergement</h2>
          <p className="mb-4">
            <strong>Ce site est hébergé par :</strong>
            <br />
            [OVHcloud]
            <br />
            [2, rue Kellermann, 59100 Roubaix]
            <br />
            [08 203 203 63]
          </p>
        </div>

        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">
            Propriété intellectuelle
          </h2>
          <p className="mb-4">
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
          <p className="mb-4">
            La reproduction de tout ou partie de ce site sur un support
            électronique quel qu'il soit est formellement interdite sauf
            autorisation expresse de la directrice de la publication.
          </p>
        </div>

        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">
            Protection des données personnelles
          </h2>
          <p className="mb-4">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée, vous disposez d'un droit d'accès, de modification, de
            rectification et de suppression des données vous concernant. Pour
            exercer ce droit, veuillez nous contacter par email à l'adresse :
            beautes-hathor@orange.fr
          </p>
          <p className="mb-4">
            Les informations recueillies sur ce site sont destinées
            exclusivement à l'usage de Les Beautés d'Hathor et ne seront en
            aucun cas cédées à des tiers.
          </p>
        </div>

        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">Cookies</h2>
          <p className="mb-4">
            Ce site n'utilise pas de cookies à des fins de traçage ou de
            publicité. Seuls des cookies techniques nécessaires au bon
            fonctionnement du site peuvent être utilisés.
          </p>
        </div>

        <div className="bg-brown-light/20 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-delius-swash mb-4">Crédits</h2>
          <p className="mb-4">
            <strong>Conception et développement :</strong> [MR RM]
            <br />
            <strong>Photographies :</strong> [Libre de droits]
            <br />
            <strong>Illustrations :</strong> [Libre de droits]
          </p>
        </div>

        <div className="text-center mt-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brown-DEFAULT text-brown px-6 py-3 rounded-full hover:bg-white transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
