import Image from "next/image";
import Link from "next/link";
import logImg from "@/../public/freshcart-logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactInfo, footerLinks, paymentMethods, socialMediaIcons } from "@/util/data";
import { IContactInfoItem } from "@/interfaces/data/IContactInfo";




export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link className="inline-block mb-6" href="/">
              <div className="bg-white rounded-lg px-4 py-2 inline-block">
                <Image
                  alt="FreshCart Logo"
                  loading="lazy"
                  width={160}
                  height={31}
                  decoding="async"
                  data-nimg={1}
                  className="h-8 w-auto select-none"
                  style={{ color: "transparent" }}
                  src={logImg}
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-3 mb-6">
              {
                contactInfo.map((info: IContactInfoItem,index:number)=>{
                  return (
                    <Link
                      key={'contactInfo_'+index}
                      href={info.link.href}
                      className={info.link.className}
                    >
                      <FontAwesomeIcon icon={info.icon.faName} className={info.icon.className} />
                      <span>{info.text?.content}</span>
                    </Link>
                  )
                })

              }

            </div>
            <div className="flex items-center gap-3">
              {
                socialMediaIcons.map((icon:IContactInfoItem,index:number)=>{
                  return (
                    <Link
                      key={'socialIcon_'+index}
                      href={icon.link.href}
                      className={icon.link.className}
                    >
                      <FontAwesomeIcon icon={icon.icon.faName} className={icon.icon.className} />
                    </Link>
                  )
                })
              }

            </div>
          </div>
          {
              footerLinks.map((section,index)=>{
                return (
                  <div className="lg:col-span-2" key={section.title+'_'+index}>
                    <h3 className="font-semibold text-lg mb-5">{section.title}</h3>
                    <ul className="space-y-3">
                      {
                        section.links.map((link,index)=>{
                          return (
                            <li key={link.name+'_'+index}>
                              <Link
                                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                                href={link.href}
                              >
                                {link.name}
                              </Link>
                            </li>
                          )
                        })  
                      }
                    </ul>
                  </div>
                )
              })
          }
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {/* */}2026{/* */} FreshCart. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {
                paymentMethods.map((method,index)=>{
                  return (
                    <div className="flex items-center gap-2 text-gray-500 text-sm" key={method.name+'_'+index}>
                      <FontAwesomeIcon icon={method.icon.faName} className={method.icon.className} />
                      <span>{method.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
