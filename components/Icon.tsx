"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconProp;
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
}

export default function Icon({ icon, className = "", size }: IconProps) {
  return <FontAwesomeIcon icon={icon} className={className} size={size} />;
}
