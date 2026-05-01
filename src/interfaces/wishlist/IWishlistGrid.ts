
// interface IWishlistGrid {
//   product:string;
//   price:string;
//   status:string;
//   actions:boolean;
  
// }


interface IWishlistGrid {
  id:string;
  product:{
    id:string;
    image:string;
    title:string;
    category:string;
  };
  price:string;
  priceAfterDiscount?:string;
  status:string;
  actions:{
    addToCart:boolean;
    removeFromWishlist:boolean;
  }
  
}


// addToCart:(id:string)=>void;
// removeFromWishlist:(id:string)=>void;
