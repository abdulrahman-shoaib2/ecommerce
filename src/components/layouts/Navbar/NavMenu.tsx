import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants/routes";
import Link from "next/link";

export default function NavMenu({ listDisplay = 'flex', subMenu = true }: { listDisplay?: string, subMenu?: boolean }) {
  return (

    <NavigationMenu className="min-w-full">
      <NavigationMenuList className={listDisplay + ' min-w-full gap-2'}>
        {navLinks.map((link, index) => {
          if (link.hasChildren && subMenu) {
            return (
                <NavigationMenuItem  className="relative" key={"navLink_" + index} >
                  <NavigationMenuTrigger>
                    <Link
                      href="/categories"
                      className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2  "
                    >
                      Categories
                      {/* <Icon icon={faChevronDown} iconProps={{ iconSize: '' }} classNames={{ icon: 'fa-chevron-down text-[10px] transition-transform group-hover:rotate-180' }} /> */}

                    </Link>
                  </NavigationMenuTrigger>
                  <div className="relative left-0  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ">
                    <NavigationMenuContent className="bg-white border mt border-gray-100 rounded-xl shadow-xl py-2 min-w-50 ">
                      {link.children?.map((child, index) => {
                        return (
                          <NavigationMenuLink key={link.name + "_subLink_" + index} asChild>
                            <Link

                              className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                              href={child.href}
                            >
                              {child.name}
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </NavigationMenuContent>
                  </div>
                </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={'navLinks_' + index} className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${subMenu ? '' : 'min-w-72! py-2'} `}>
              <NavigationMenuLink asChild>
                <Link
                  key={"navLink_" + index}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          );
        })}
      </NavigationMenuList>
    </NavigationMenu>

  )
}

/* {navLinks.map((link, index) => {
  if (link.hasChildren) {
    return (
      <div className="relative group" key={"navLink_" + index}>
        <Link
          href="/categories"
          className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2  "
        >
          Categories
          <Icon icon={faChevronDown} iconProps={{ iconSize: '' }} classNames={{ icon: 'fa-chevron-down text-[10px] transition-transform group-hover:rotate-180' }} />

        </Link>
        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
            {link.children?.map((child, index) => {
              return (
                <Link
                  key={link.name + "_subLink_" + index}
                  className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  href={child.href}
                >
                  {child.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link
      key={"navLink_" + index}
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
      href={link.href}
    >
      {link.name}
    </Link>
  );
})} */