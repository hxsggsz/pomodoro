import { ElementType } from "react";
import * as style from ".";

interface FooterProps {
  socialMedia: string;
  href: string
  icon: ElementType;
}

export const FooterLinks = ({ socialMedia, href, icon: Icon }: FooterProps) => (
    <style.Link href={href} target="_blank">
      <Icon size={32} weight="fill" />
      <style.Text>{socialMedia}</style.Text>
    </style.Link>
  );
