import { IContactInfoItem } from './../interfaces/data/IContactInfo';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { formatPhoneNumber } from '@/helpers/utils';

export const PHONE = Number(process.env.NEXT_PUBLIC_PHONE) || "18001234567";
export const EMAIL = Number(process.env.NEXT_PUBLIC_EMAIL) || "support@freshcart.com";
export const ADDRESS_URL = Number(process.env.NEXT_PUBLIC_ADDRESS_URL) || "https://maps.app.goo.gl/e2B2EZWtEKHSqw4EA";
export const ADDRESS = Number(process.env.NEXT_PUBLIC_ADDRESS) || "123 Commerce Street, NewWark, NJ 07102";

export const FACEBOOK = Number(process.env.NEXT_PUBLIC_FACEBOOK_URL) || "https://facebook.com/freshcart";
export const TWITTER = Number(process.env.NEXT_PUBLIC_TWITTER_URL) || "https://twitter.com/freshcart";
export const INSTAGRAM = Number(process.env.NEXT_PUBLIC_INSTAGRAM_URL) || "https://instagram.com/freshcart";
export const YOUTUBE = Number(process.env.NEXT_PUBLIC_YOUTUBE_URL) || "https://youtube.com/@freshcart";


// email faEnvelop outlined
// className are the same
export const contactInfo:IContactInfoItem[] = [
  {
    link:{
      href:`tel:${process.env.NEXT_PUBLIC_PHONE}`,
      className:'flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm'
    },
    icon:{
      faName:faPhone,
      className:'text-primary-500'
    },
    text:{
      content:formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE??'0000000000'),
      className:''
    }
  },
  {
    link:{
      href:`mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
      className:'flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm'
    },
    icon:{
      faName:faEnvelope,
      className:'text-primary-500'
    },
    text:{
      content:process.env.NEXT_PUBLIC_EMAIL??"contact-info text",
      className:''
    }

  },
  {
    link:{
      href:process.env.NEXT_PUBLIC_ADDRESS_URL??"contact-info url",
      className:'flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm'
    },
    icon:{
      faName:faLocationDot,
      className:'svg-inline--fa text-primary-500'
    },
    text:{
      content:process.env.NEXT_PUBLIC_ADDRESS ??"contact-info address",
      className:''
    }
  },

];
