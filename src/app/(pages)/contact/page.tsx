import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { formatPhoneNumber } from "@/helpers/utils";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeadset, faLocationDot, faPhone, faClock, faPaperPlane, faCircleQuestion, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import ContactForm from "./_components/ContactForm";

export default function page() {
    const section = {
      classNames: 'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400',
      textColor: 'white',
      links: [
        {
          href: '/',
          displayAs: 'Home'
        },
        {
          href: '#',
          displayAs: 'Contact Us'
        },
      ],
      badge: {
        iconWrapper: {
          bg: 'bg-white/20',
        },
        icon: {
          name: "fa-box-open",
          is: faHeadset,
          color: 'white',
          size: 'text-3xl'
        }
      },
      sectionInfo: {
        name: 'Contact Us',
        desc: "We'd love to hear from you. Get in touch with our team."
      }
    }
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <PageHeader {...section} />
        {/* <div className="bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
              <Link className="hover:text-white transition-colors" href="/">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Contact Us</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                <svg
                  data-prefix="fas"
                  data-icon="headset"
                  className="svg-inline--fa fa-headset text-3xl"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Contact Us
                </h1>
                <p className="text-white/80 mt-1">
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="svg-inline--fa fa-phone text-primary-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500 text-sm mb-2">
                      Mon-Fri from 8am to 6pm
                    </p>
                    <Link
                      href="tel:+18001234567"
                      className="text-primary-600 font-medium hover:underline"
                    >
                      {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE??'')}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="svg-inline--fa fa-envelope text-primary-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-500 text-sm mb-2">
                      We'll respond within 24 hours
                    </p>
                    <Link
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                      className="text-primary-600 font-medium hover:underline"
                    >
                      {process.env.NEXT_PUBLIC_EMAIL}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="svg-inline--fa fa-location-dot text-primary-600 text-lg" />

                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-500 text-sm">
                      <span className="text-wrap break-after-all">{process.env.NEXT_PUBLIC_ADDRESS}</span>
                      {/* 123 Commerce Street
                      <br />
                      NewWark, NJ 07102 */}
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faClock} className="svg-inline--fa fa-clock text-primary-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Monday - Friday: 8am - 6pm
                      <br />
                      Saturday: 9am - 4pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="svg-inline--fa fa-facebook-f" />

                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="svg-inline--fa fa-twitter" />

                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="svg-inline--fa fa-instagram" />

                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="svg-inline--fa fa-linkedin-in" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeadset} className="svg-inline--fa fa-headset text-primary-600 text-lg" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Send us a Message
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Fill out the form and we'll get back to you
                    </p>
                  </div>
                </div>
                  <ContactForm />
              </div>
              <div className="mt-6 bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <FontAwesomeIcon icon={faCircleQuestion} className="svg-inline--fa fa-circle-question text-primary-600 text-xl"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Looking for quick answers?
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Check out our Help Center for frequently asked questions
                      about orders, shipping, returns, and more.
                    </p>
                    <Link
                      className="text-primary-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
                      href="/help"
                    >
                      Visit Help Center <FontAwesomeIcon icon={faArrowRight} className="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
