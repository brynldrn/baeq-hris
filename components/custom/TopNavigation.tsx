'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useUser } from "@auth0/nextjs-auth0/client";
import { HamburgerMenuIcon, TargetIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";

export default function TopNavigation() {
  const { user } = useUser()
  const { picture, name } = user || {}

  return (
    <>
      {/* Navigation Bar Area */}
      <div className="flex items-center py-8 px-4 md:px-12 gap-2 flex-wrap justify-between lg:justify-start">
        <div className="flex items-center gap-2">
          <TargetIcon width={40} height={40} />
          <h1>HRIS</h1>
        </div>
        <NavigationMenu className="justify-start hidden lg:flex m-0">
          <NavigationMenuList className="m-0">
            <NavigationMenuItem>
              <NavigationMenuLink active className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Time Log</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Leave Application</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Payslips</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Document Request</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Avatar Area */}
        <div className="ml-auto hidden lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                <span className="hidden xl:block">{name}</span>
                <Avatar>
                  <AvatarImage src={picture || ''} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href='/api/auth/logout' className="w-full">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile only */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <HamburgerMenuIcon width={24} height={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <NavigationMenu orientation="vertical" className="w-full">
                  <NavigationMenuList className="flex-col items-start ml-0 w-full">
                    <NavigationMenuItem>
                      <NavigationMenuLink active className={cn(navigationMenuTriggerStyle(), 'w-full')}>Dashboard</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Time Log</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Leave Application</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Payslips</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Document Request</NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
