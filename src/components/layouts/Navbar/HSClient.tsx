"use client";
import {
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../../ui/button";
import IconText from "../../shared/IconText";

export default function HSClient() {
  const session = useSession();

  return (
    <>
      {session.data?.user?.name ? (
        <>
          <Link href={"/profile/settings"} className="text-black hover:text-primary-600 transition-colors">
            <IconText icon={faUser} classNames={{ icon: 'fa-user' }} text={session.data.user.name} />
          </Link>
          <Button className="flex items-center gap-1.5 bg-transparent text-gray-600 hover:text-red-500 transition-colors" onClick={() => signOut({ callbackUrl: '/login' })}>
            <IconText icon={faRightFromBracket} classNames={{ icon: 'fa-right-from-bracket' }} text="Sign Out" />
          </Button>
        </>
      ) : (
        <>
          <Link
            className=" hover:text-primary-600 transition-colors"
            href="/login"
          >
            <IconText icon={faUser} classNames={{ icon: 'fa-user' }} text="Sign In" />
          </Link>
          <Link
            className="flex items-center gap-1.5  hover:text-primary-600 transition-colors"
            href="/register"
          >
            <IconText icon={faUserPlus} classNames={{ icon: 'fa-user-plus' }} text="Sign Up" />
          </Link>
        </>
      )}
    </>

  )
}
