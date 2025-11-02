"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu"


export function MainNavigationMenu() {
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="flex items-center space-x-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-md p-4 rounded-md">
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#about">
              Company Overview
            </NavigationMenuLink>
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#team">
              Our Team
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-md p-4 rounded-md">
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#services">
              What We Offer
            </NavigationMenuLink>
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#case-studies">
              Case Studies
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-md p-4 rounded-md">
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#blogs">
              Blogs
            </NavigationMenuLink>
            <NavigationMenuLink className="block px-4 py-2 hover:text-indigo-600" href="#faq">
              FAQ
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#contact" className="hover:text-indigo-600">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}
