"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCircleUser, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { signOut, useSession } from "next-auth/react";
import IconText from "@/components/shared/IconText";
import Link from "next/link";
import { faBoxOpen, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export function AccountMenu() {
  const session = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="py-2  ring-0! border-none!">
        <Button
          variant="ghost"
          className="w-12 h-12 aspect-square mb-1 rounded-full hover:bg-gray-100 transition-colors group  "
        >
          <FontAwesomeIcon
            icon={faCircleUser}
            className="svg-inline--fa fa-circle-user text-2xl text-gray-500 group-hover:text-primary-600 transition-colors "
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-4 w-fit">
        <DropdownMenuGroup className=" ">
          <DropdownMenuLabel className="p-4 border-b border-gray-100" >
              <IconText icon={faCircleUser} iconProps={{ iconSize: 'text-xl' }} text={session.data?.user.name || ''} subText={session.data?.user.email || ''} 
                classNames={{
                  innerWrapper: 'flex items-center gap-3 ',
                  iconWrapper: 'size-10 rounded-full bg-primary-100 flex items-center justify-center',
                  icon: 'fa-circle-user text-primary-600 ',
                  textsWrapper: 'grid  gap-1 min-w-0',
                  text: 'text-sm font-semibold text-gray-800 truncate',
                  subText: 'text-xs text-gray-400 truncate',
                }}
              />
          </DropdownMenuLabel>
          <div className="grid gap-3 my-2">
            <DropdownMenuItem asChild className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600  hover:bg-primary-50! transition-colors group" variant={"destructive"}>
              <Link href="/profile/addresses">
                <IconText icon={faUser} text="My Profile" classNames={{icon:'fa-user w-4 text-gray-400 group-hover:text-primary-600!',text:'text-gray-600 group-hover:text-primary-600!', iconWrapper:'group-hover:text-primary-600!'}} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600  hover:bg-primary-50! transition-colors group" variant={"destructive"}>
              <Link href="/orders">
                <IconText icon={faBoxOpen} text="My Orders" classNames={{icon:'fa-box-open w-4 text-gray-400 group-hover:text-primary-600!',text:'text-gray-600 group-hover:text-primary-600!', iconWrapper:'group-hover:text-primary-600!'}} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600  hover:bg-primary-50! transition-colors group" variant={"destructive"}>
              <Link href="/wishlist">
                <IconText icon={faHeart} text="My Wishlist" classNames={{icon:'fa-heart w-4 text-gray-400 group-hover:text-primary-600!',text:'text-gray-600 group-hover:text-primary-600!', iconWrapper:'group-hover:text-primary-600!'}} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600  hover:bg-primary-50! transition-colors group" variant={"destructive"}>
              <Link href="/profile/addresses">
                <IconText icon={faAddressBook} text="Addresses" classNames={{icon:'fa-address-book w-4 text-gray-400 group-hover:text-primary-600!',text:'text-gray-600 group-hover:text-primary-600!', iconWrapper:'group-hover:text-primary-600!'}} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600  hover:bg-primary-50! transition-colors group" variant={"destructive"}>
              <Link href="/profile/settings">
                <IconText icon={faGear} text="Settings" classNames={{icon:'fa-gear w-4 text-gray-400 group-hover:text-primary-600!',text:'text-gray-600 group-hover:text-primary-600!', iconWrapper:'group-hover:text-primary-600!'}} />
              </Link>
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="cursor-pointer text-red-600 hover:bg-red-50! hover:text-white! flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
          variant="destructive"
        >
          <IconText icon={faRightFromBracket} text="Sign Out" classNames={{icon:'fa-user w-4 text-red-400 ',text:'text-red-600 ', iconWrapper:''}} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/*


*/
