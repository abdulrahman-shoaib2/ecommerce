import Image from "next/image";
import Link from "next/link";
import {
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import SearchBarClient from "./SearchBarClient";
import IconText from "@/components/shared/IconText";
import NavClient from "./NavClient";
import NavMenu from "./NavMenu";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4 lg:gap-8">
            <Link className="shrink-0" href="/">
              <Image
                alt="FreshCart"
                loading="lazy"
                width={160}
                height={31}
                decoding="async"
                data-nimg={1}
                className="h-6 lg:h-8 w-auto select-none"
                style={{ color: "transparent" }}
                src="/freshcart-logo.svg"
              />
            </Link>
            <SearchBarClient />
            <nav className="hidden xl:flex items-center gap-6">
              <NavMenu />

            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                className=""
                href="/contact"
              >
                <IconText icon={faHeadset}
                  text="Support"
                  subText="24/7 Help"
                  classNames={{
                    innerWrapper: 'hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity',
                    icon: 'fa-headset text-primary-600',
                    iconWrapper: 'w-10 h-10 rounded-full size-12 bg-primary-50 flex items-center justify-center',
                    textsWrapper: 'text-xs grid gap-1',
                    text: 'text-gray-400',
                    subText: 'font-semibold text-gray-700',
                  }}
                  iconProps={{ iconSize: 'text-xl' }}
                />
                {/* <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="svg-inline--fa fa-headset text-primary-600"
                  />
                </div>
                <div className="text-xs">
                  <div className="text-gray-400">Support</div>
                  <div className="font-semibold text-gray-700">24/7 Help</div>
                </div> */}
              </Link>
              <NavClient />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
