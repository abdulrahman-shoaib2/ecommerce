import React from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCheck,
  faRotateLeft,
  faShieldHalved,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStarRating } from "@/lib/utils";
import { reviewsServices } from "@/services/reviewsServices";

export default async function ProductDetailsTabs({
  product,
}: {
  product: IProductDetails;
}) {
  const {data:reviews} = await reviewsServices.getProductReviews(product.id);
  const totalReviews =  reviews.length;
  const starReviewsCount = [0,0,0,0,0]
  reviews.map((starReview, index)=>{
    if(starReview.rating === 1){
      starReviewsCount[0]++
    }
    if(starReview.rating === 2){
      starReviewsCount[1]++
    }
    if(starReview.rating === 3){
      starReviewsCount[2]++
    }
    if(starReview.rating === 4){
      starReviewsCount[3]++
    }
    if(starReview.rating === 5){
      starReviewsCount[4]++
    }
  })

  const tabs = [
    {
      name: "Product Details",
      value: "details",
      icon: faBox,
      content: (
        <>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About this Product
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">
                Product Information
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="text-gray-900 font-medium">
                    {product.category.name}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Subcategory</span>
                  <span className="text-gray-900 font-medium">
                    {product.subcategory[0].name}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Brand</span>
                  <span className="text-gray-900 font-medium">
                    {product.brand.name}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Items Sold</span>
                  <span className="text-gray-900 font-medium">
                    {product.sold > 10000
                      ? "10000+ sold"
                      : product.sold + "+ sold"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                  />
                  Premium Quality Product
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                  />
                  100% Authentic Guarantee
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                  />
                  Fast &amp; Secure Packaging
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                  />
                  Quality Tested
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      name: `Reviews (${product.ratingsQuantity})`,
      value: "reviews",
      icon: faStar,
      content: (
        <>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {product.ratingsAverage}
              </div>
              <div className="text-yellow-400">
                {getStarRating(product.ratingsAverage).map((star, index) => {
                  return (
                    <FontAwesomeIcon
                      key={"review_rating-" + index}
                      icon={star}
                      className=""
                    />
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Based on {product.ratingsQuantity} reviews
              </p>
            </div>
            <div className="flex-1 w-full">
              {
                starReviewsCount.map((_, index)=>{

                return (
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">{index+1} star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                      style={{ width: `${starReviewsCount[index]/totalReviews*100}%` }}
                    />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{starReviewsCount[index]/totalReviews*100}%</span>
                  </div>
                )
                }).toReversed()
              }

            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div className="text-center text-lg py-8">
              <FontAwesomeIcon icon={faStar} className="svg-inline--fa fa-star text-4xl text-gray-300 mb-3" />
              <p className="text-gray-500">
                Customer reviews will be displayed here.
              </p>
              <Button className="mt-4 md:text-lg bg-transparent text-primary-600 hover:text-primary-700 font-medium">
                Write a Review
              </Button>
            </div>
          </div>
        </>
      ),
    },
    {
      name: <span>Shipping &amp; Returns</span>,
      value: "shipping",
      icon: faTruck,
      content: (
        <>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Shipping Information
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                     <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                     <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Standard delivery: 3-5 business days</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Express delivery available (1-2 business days)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Track your order in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faRotateLeft} className="svg-inline--fa fa-rotate-left text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Returns &amp; Refunds
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>30-day hassle-free returns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Full refund or exchange available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Free return shipping on defective items</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-primary-600 mt-0.5" />
                    <span>Easy online return process</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faShieldHalved} className="svsvg-inline--fa fa-shield-halved text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Buyer Protection Guarantee
                </h4>
                <p className="text-sm text-gray-600">
                  Get a full refund if your order doesn't arrive or isn't as
                  described. We ensure your shopping experience is safe and
                  secure.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section id="product-details-tabs" className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className=" border-gray-200">
            <div className="flex  overflow-hidden scrollbar-hide">
              <div className="w-full ">
                <Tabs defaultValue="details" className="gap-4 w-full ">
                  <div className=" ">
                    <TabsList className="bg-background border-b min-h-18 overflow-hidden h-fit rounded-none w-full justify-start  p-0">
                      {tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className=" max-w-[20%] font-medium text-lg whitespace-nowrap transition-all duration-200 text-gray-600 bg-white rounded-none border-0 border-b-4 border-transparent hover:text-primary-600 hover:bg-gray-50 dark:data-[state=active]:border-primary data-[state=active]:shadow-none! data-[state=active]:text-primary-600 data- data-[state=active]:border-b-4 data-[state=active]:border-primary-600 data-[state=active]:bg-primary-50/50"
                        >
                          <FontAwesomeIcon icon={tab.icon} />
                          {tab.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  {tabs.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div className="p-6">
                        <div className="space-y-6">{tab.content}</div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <section id="product-details-tabs" className="py-8">
  <div className="container mx-auto px-4">
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex overflow-hidden scrollbar-hide">
          <Button className="flex items-center gap-2 px-6 py-8 font-medium whitespace-nowrap transition-all duration-200 text-primary-600 rounded-none border-t-0 border-x-0 border-b-2 border-primary-600 bg-primary-50/50">
            <FontAwesomeIcon
              icon={faBox}
              className="svg-inline--fa fa-box text-sm"
            />
            Product Details
          </Button>
          <Button className="flex items-center gap-2 px-6 py-8 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 bg-white rounded-none hover:text-primary-600 hover:bg-gray-50">
            <FontAwesomeIcon
              icon={faStar}
              className="svg-inline--fa fa-star text-sm"
            />
            Reviews ({product.ratingsQuantity})
          </Button>
          <Button className="flex items-center gap-2 px-6 py-8 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 bg-white rounded-none hover:text-primary-600 hover:bg-gray-50">
            <FontAwesomeIcon
              icon={faTruck}
              className="svg-inline--fa fa-truck text-sm"
            />
            Shipping &amp; Returns
          </Button>
        </div>
      </div>
>
    </div>
  </div>
</section> */
}
