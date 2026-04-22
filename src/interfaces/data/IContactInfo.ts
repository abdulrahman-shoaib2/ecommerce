import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Define the structure of the link object
export interface ILink {
  href: string;
  className: string;
}

// Define the structure of the icon object
export interface IIcon {
  faName: IconDefinition;
  className: string;
}

// Define the structure of the text object
export interface IText {
  content: string;
  className: string;
}

// Define the structure of each contact information object
export interface IContactInfoItem {
  link: ILink;
  icon: IIcon;
  text?: IText;
}
