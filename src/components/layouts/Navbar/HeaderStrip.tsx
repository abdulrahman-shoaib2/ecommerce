import {
  faGift,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { contactInfo } from "@/constants/contacts";
import IconText from "../../shared/IconText";
import { FREE_SHIPPING_THRESHOLD } from "@/constants/shipping";
import { formatCurrency } from "@/utils/formatCurrency";
import HSClient from "./HSClient";

export default function HeaderStrip() {

  return (
    <div className="hidden lg:block text-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-6 text-gray-500">
            <IconText icon={faTruck} classNames={{ icon: 'fa-truck text-primary-600' }} text={`Free Shipping on Orders ${formatCurrency(FREE_SHIPPING_THRESHOLD)} `} />
            <IconText icon={faGift} classNames={{ icon: 'fa-gift text-primary-600' }} text="Free New Arrivals Daily" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              {
                contactInfo.slice(0, 2).map((contact, index) => {
                  return <Link
                    key={'HSContact_'+index}
                    href={contact.link.href}
                    className="hover:text-primary-600 transition-colors "
                  >
                    <IconText icon={index == 1?faEnvelope:contact.icon.faName}  text={contact.text?.content} />
                  </Link>
                })
              }
            </div>
            <span className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-4 text-gray-600">
                <HSClient />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
