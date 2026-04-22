import { IContactInfoItem, IIcon } from './../interfaces/data/IContactInfo';
import { faCreditCard, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { formatPhoneNumber } from '@/helpers/utils';


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

export const socialMediaIcons: IContactInfoItem[] = [
  {
    link:{
      href:process.env.NEXT_PUBLIC_FACEBOOK_URL ??"social-media url",
      className:'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors',
    },
    icon:{
      faName:faFacebookF,
      className:'svg-inline--fa fa-facebook-f'
    }
  },
  {
    link:{
      href:process.env.NEXT_PUBLIC_TWITTER_URL ??"social-media url",
      className:'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors',
    },
    icon:{
      faName:faXTwitter,
      className:'svg-inline--fa fa-twitter'
    }
  },
  {
    link:{
      href:process.env.NEXT_PUBLIC_INSTAGRAM_URL ??"social-media url",
      className:'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors',
    },
    icon:{
      faName:faInstagram,
      className:'svg-inline--fa fa-instagram'
    }
  },
  {
    link:{
      href:process.env.NEXT_PUBLIC_YOUTUBE_URL ??"social-media url",
      className:'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors',
    },
    icon:{
      faName:faYoutube,
      className:'svg-inline--fa fa-youtube'
    }
  },
]

export const footerLinks: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title:'Shop',
    links:[
      {name:'All Products',href:'/products'},
      {name:'Categories',href:'/categories'},
      {name:'Brands',href:'/brands'},
      {name:'Electronics',href:'/products?category=6439d58a0049ad0b52b9003f'},
      {name:'Men\'s Fashion',href:'/products?category=6439d2d167d9aa4ca970649f'},
      {name:'Women\'s Fashion',href:'/products?category=6439d5b90049ad0b52b90048'},
    ]
  },
  {
    title:'Account',
    links:[
      {name:'My Account',href:'/profile'},
      {name:'Order History',href:'/profile/orders'},
      {name:'Wishlist',href:'/wishlist'},
      {name:'Shopping Cart',href:'/cart'},
      {name:'Sign In',href:'/login'},
      {name:'Create Account',href:'/register'},
    ]
  },
  {
    title:'Support',
    links:[
      {name:'Contact Us',href:'/contact'},
      {name:'Help Center',href:'/help'},
      {name:'Shipping Info',href:'/shipping'},
      {name:'Returns & Refunds',href:'/returns'},
      {name:'Track Order',href:'/track-order'},
    ]
  },
  {
    title:'Legal',
    links:[
      {name:'Privacy Policy',href:'/privacy'},
      {name:'Terms of Service',href:'/terms'},
      {name:'Cookie Policy',href:'/cookies'},
    ]
  },
]

export const paymentMethods:{name:string, icon:IIcon}[] = [
  {name:'Visa',icon:{
      faName:faCreditCard,
      className:'text-gray-500'
  }},
  {name:'Mastercard',icon:{
      faName:faCreditCard,
      className:'text-gray-500'
  }},
  {name:'PayPal',icon:{
      faName:faCreditCard,
      className:'text-gray-500'
  }},
]