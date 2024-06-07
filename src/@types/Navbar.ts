import { ReactNode } from "react";

export interface NavbarProps {
    children: ReactNode;
    profileIconSrc: string;
    dropdownContent: ReactNode;
    Logo: string;
  }