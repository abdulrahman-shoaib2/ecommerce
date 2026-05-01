import { IBrand } from "./IBrand";
import { ICategory } from "./ICategory";
import { ISubCategory } from "./ISubCategory";

export interface IProduct {
  _id: string;
  id: string; // duplicate ID field
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  subcategory: ISubCategory[];
  brand: IBrand;
  ratingsAverage: number;
}

// Individual product type
export interface IProductDetails extends IProduct {
  description: string;
  price: number;
  sold: number;
  images: string[];
  ratingsQuantity: number;
  priceAfterDiscount:number;
  createdAt: string;
  updatedAt: string;
  "__v"?:number;
}


export interface IWishlistProduct extends IProductDetails{
  availableColors?: [],
}


    // {
      // sold: 261,
      // images: ["1678303526286-1.jpeg"],
      // subcategory: [
      //   {
      //     _id: "6407f3c0b575d3b90bf957e8",
      //     name: "Video Games",
      //     slug: "video-games",
      //     category: "6439d2d167d9aa4ca970649f",
      //   },
      // ],
      // ratingsQuantity: 497,
      // _id: "6408e1266406cd15828e8f1c",
      // title: "PS5 DualSense Charging Station",
      // slug: "ps5-dualsense-charging-station",
      // description:
      //   "Charge up to two DualSense Wireless Controllers at the same time without having to connect them to your PlayStation 5 Console\nYour Controllers charge as quickly as when connected to your PS5 Console â€“ so you can free up USB ports without sacrificing performance\nDock your DualSense Wireless Controllers quickly and easily with the charging stationâ€™s click-in design and leave them to charge at your convenience",
      // quantity: 600,
      // price: 1045,
      // availableColors: [],
      // imageCover:
      //   "https://ecommerce.routemisr.com/Route-Academy-products/1678303526206-cover.jpeg",
      // category: {
      //   _id: "6439d2d167d9aa4ca970649f",
      //   name: "Electronics",
      //   slug: "electronics",
      //   image:
      //     "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png",
      // },
      // brand: {
      //   _id: "64089df124b25627a25315ab",
      //   name: "Samsung",
      //   slug: "samsung",
      //   image:
      //     "https://ecommerce.routemisr.com/Route-Academy-brands/1678286321029.png",
      // },
      // ratingsAverage: 4.3,
      // createdAt: "2023-03-08T19:25:26.782Z",
      // updatedAt: "2026-04-30T22:48:49.273Z",
      // __v: 0,
      // id: "6408e1266406cd15828e8f1c",
    // },