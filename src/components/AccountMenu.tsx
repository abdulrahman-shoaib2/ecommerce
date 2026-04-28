"use client";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { signOut, useSession } from "next-auth/react";
export function AccountMenu() {
  const session = useSession();
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className="py-2  ring-0! border-none!">
        <Button variant="ghost"  className="w-12 h-12 aspect-square mb-1 rounded-full hover:bg-gray-100 transition-colors group  ">
          <FontAwesomeIcon icon={faCircleUser} className="svg-inline--fa fa-circle-user text-2xl text-gray-500 group-hover:text-primary-600 transition-colors " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-4">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>signOut({callbackUrl:'/login'})} className="cursor-pointer text-red-600 hover:bg-red-500! hover:text-white! group">
          <LogOutIcon color="red"  className=" group-hover:stroke-white! "  />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
