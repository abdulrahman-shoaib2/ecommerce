import { Button } from "@/components/ui/button";
import { getStarRating } from "@/lib/utils";
import img from '@/assets/media/review-author.webp'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <main className="py-10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-primary-600">FreshCart</span>
          </h1>
          <p className="text-xl mt-2 mb-4">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>
          <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
            <li>
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <svg
                  data-prefix="fas"
                  data-icon="star"
                  className="svg-inline--fa fa-star"
                  role="img"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                  />
                </svg>
              </div>
              <div className="content">
                <h2 className="text-lg font-semibold">Premium Quality</h2>
                <p className="text-gray-600">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </li>
            <li>
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <svg
                  data-prefix="fas"
                  data-icon="truck-fast"
                  className="svg-inline--fa fa-truck-fast"
                  role="img"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  />
                </svg>
              </div>
              <div className="content">
                <h2 className="text-lg font-semibold">Fast Delivery</h2>
                <p className="text-gray-600">
                  Same-day delivery available in most areas
                </p>
              </div>
            </li>
            <li>
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <svg
                  data-prefix="fas"
                  data-icon="shield-halved"
                  className="svg-inline--fa fa-shield-halved"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                  />
                </svg>
              </div>
              <div className="content">
                <h2 className="text-lg font-semibold">Secure Shopping</h2>
                <p className="text-gray-600">
                  Your data and payments are completely secure
                </p>
              </div>
            </li>
          </ul>
          <div className="review bg-white shadow-sm p-4 rounded-md">
            <div className="author flex items-center gap-4 mb-4">
              <Image
                alt='test'
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="size-12 rounded-full"
                style={{ color: "transparent" }}
                src={img}
              />
              <div>
                <h3>Sarah Johnson</h3>
                <div className="rating *:text-yellow-300">
                  {
                    getStarRating(5).map((star, index)=>{
                      return (
                        <FontAwesomeIcon key={'rating_'+index} icon={star} className="" />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <blockquote>
              <p className="italic text-gray-600">
                "FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!"
              </p>
            </blockquote>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
          <h2 className="text-center text-3xl font-semibold mb-2">
            Create Your Account
          </h2>
          <p className="text-center">Start your fresh journey with us today</p>
          <div className="register-options flex gap-2 *:grow my-10">
            <button
              type="button"
              className="btn rounded-md p-2 bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Sign up with Google"
            >
              <FontAwesomeIcon icon={faGoogle} className="svg-inline--fa fa-google me-2 text-red-600" />
              <span>Google</span>
            </button>
            <button
              type="button"
              className="btn rounded-md p-2 bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Sign up with Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="svg-inline--fa fa-facebook me-2 text-blue-600" />
              <span>Facebook</span>
            </button>
          </div>
          <div
            className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"
            aria-hidden="true"
          >
            <span className="sr-only">or</span>
          </div>
          <form className="space-y-7" noValidate>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name{/* */}*</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Ali"
                aria-invalid="false"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email{/* */}*</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="ali@example.com"
                autoComplete="email"
                aria-invalid="false"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password{/* */}*</label>
                <input
                  type="password"
                  id="password"
                  className="form-control "
                  placeholder="create a strong password"
                  autoComplete="new-password"
                  aria-invalid="false"
                  name="password"
                />
                <div className="password-requirements">
                  <div className="flex items-center gap-2">
                    <div
                      className="bar grow h-1 bg-gray-200 rounded-md overflow-hidden"
                      role="progressbar"
                    >
                      <div
                        className="progress bg-red-500 h-full transition-all duration-300 ease-out"
                        style={{ width: "0%" }}
                      />
                    </div>
                    <span className="text-sm font-medium min-w-[50px]">
                      Weak
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 -mt-2 text-xs">
                  Must be at least 8 characters with numbers and symbols
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="rePassword">Confirm Password{/* */}*</label>
              <input
                type="password"
                id="rePassword"
                className="form-control"
                placeholder="confirm your password"
                autoComplete="new-password"
                aria-invalid="false"
                name="rePassword"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number{/* */}*</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="+1 234 567 8900"
                autoComplete="tel"
                aria-invalid="false"
                name="phone"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="size-4 accent-primary-600"
                  name="terms"
                />
                <label htmlFor="terms" className="ms-2">
                  I agree to the{/* */}{" "}
                  <Link className="text-primary-600 hover:underline" href="/terms">
                    Terms of Service
                  </Link>{" "}
                  {/* */}and{/* */}{" "}
                  <Link
                    className="text-primary-600 hover:underline"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>{" "}
                  {/* */}*
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="p-3 rounded-xl font-semibold bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors"
              aria-busy="false"
            >
              <FontAwesomeIcon icon={faUserPlus} className="svg-inline--fa fa-user-plus me-2" />
              <span>Create My Account</span>
            </button>
          </form>
          <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
            Already have an account?{/* */}{" "}
            <Link
              className="text-primary-600 hover:underline font-medium"
              href="/login"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
