import Link from "next/link";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { AccountMenu } from "./AccountMenu";
import Icon from "@/components/shared/Icon";
import IconText from "@/components/shared/IconText";
import VerticalBtn from "./VerticalBtn";
import NavCartCount from "./NavCartCount";
import NavWishlistCount from "./NavWishlistCount";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function NavClient() {
  const session = await getServerSession(authOptions)


  return (
    <>
      <div className="flex justify-around items-center">
        <Link
          className="relative p-2.5 size-12 rounded-full hover:bg-gray-100 transition-colors group flex justify-center items-center"
          title="Wishlist"
          href="/wishlist"
        >
          <Icon icon={faHeart} classNames={{ icon: 'fa-heart text-gray-500 group-hover:text-primary-600 transition-colors' }} iconProps={{ iconSize: 'text-xl' }} />
          <NavWishlistCount />
        </Link>
        <Link
          className="relative p-2.5 size-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors group"
          title="Cart"
          href="/cart"
        >
          <Icon icon={faCartShopping} classNames={{ icon: 'fa-cart-shopping  text-gray-500 group-hover:text-primary-600 transition-colors' }} iconProps={{ iconSize: 'text-xl' }} />
          <NavCartCount />
        </Link>
        {
         session&& session?.user.token  ?
            <AccountMenu />
            :
            <Link
              className="hidden lg:flex items-center gap-2 ml-2 px-5 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20"
              href={'/login'}
            >
              <IconText icon={faUser} classNames={{ icon: 'fa-user' }} text="Sign In" />
            </Link>
        }

      </div>
      <VerticalBtn />
    </>
  )
}
