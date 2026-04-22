import {
  faArrowRotateLeft,
  faHeadset,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export const features = [
  {
    icon: {
      faName: faTruck,
      className: "svg-inline--fa fa-truck text-lg",
    },
    title: {
      text: "Free Shipping",
      className: "font-semibold text-gray-900 text-sm",
    },
    description: {
      text: "On orders over 500 EGP",
      className: "text-gray-500 text-xs",
    },
    
  },
  {
    icon: {
      faName: faArrowRotateLeft,
      className: "svg-inline--fa fa-arrow-rotate-left text-lg",
    },
    title: {
      text: "Easy Returns",
      className: "font-semibold text-gray-900 text-sm",
    },
    description: {
      text: "14-day return policy",
      className: "text-gray-500 text-xs",
    },
  },
  {
    icon: {
      faName: faShieldHalved,
      className: "svg-inline--fa fa-shield-halved text-lg",
    },
    title: {
      text: "Secure Payment",
      className: "font-semibold text-gray-900 text-sm",
    },
    description: {
      text: "100% secure checkout",
      className: "text-gray-500 text-xs",
    },
  },
  {
    icon: {
      faName: faHeadset,
      className: "svg-inline--fa fa-headset text-lg",
    },
    title: {
      text: "24/7 Support",
      className: "font-semibold text-gray-900 text-sm",
    },
    description: {
      text: "Contact us anytime",
      className: "text-gray-500 text-xs",
    },
  },
];
