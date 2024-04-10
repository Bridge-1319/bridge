"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcons } from "@/components/menu-icons";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Menu, NavItem } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { menus } from "@/constants/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChevronDownIcon } from "lucide-react";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

interface DashboardNavMenuProps {
  menus: Menu[];
  setOpen?: Dispatch<SetStateAction<boolean>>;

}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  // const menus = menus;
  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));
  return (

    <nav className="grid items-start gap-2 h-full overflow-y-auto scrollbar-hide">
      <div className="md:px-4 sm:p-0 mt-5 ">
      {
        uniqueLabels.map((label, index) => {
          return (
            <React.Fragment key={label}>
              {label && (
                <p className={`mx-4 mb-3 text-xs text-left tracking-wider  font-bold text-slate-600 ${index > 0 ? 'mt-10' : ''}`}>
                  {label}
                </p>
              )}
             
              {menus
                .filter((menu) => menu.label === label)
                .map((menu) => {
                  const Icon = MenuIcons[menu.icon]; // Get the icon component
                  return (
                    <React.Fragment key={menu.label}>
                      {menu.submenu && menu.submenu.length > 0 ? (
                        <>
                          <Accordion
                            key={menu.name}
                            type="single"
                            className="mt-[-10px] mb-[-10px] p-0 font-normal"
                            collapsible
                          >
                            <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                              <AccordionTrigger>
                                <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md no-underline ">
                                  <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                    <div className="flex">
                                      <div className="w-6"><Icon size={15} className="mr-2" /></div> {/* Use the icon component */}
                                      {menu.name}
                                    </div>
                                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                                  </div>
                                </a>
                              </AccordionTrigger>
                              <AccordionContent>
                                {menu.submenu.map((submenu) => {
                                  const SubmenuIcon = MenuIcons[submenu.icon]; // Get the submenu icon component
                                  return (
                                    <Link key={submenu.name} href={submenu.href} className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background no-underline my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                      <div className="w-6"><SubmenuIcon size={15} className="mr-2"/></div> {/* Use the submenu icon component */}
                                      {submenu.name}
                                    </Link>
                                  );
                                })}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </>
                      ) : (
                        <>
                          <div key={menu.name}>
                            <Link href={menu.href} className="flex no-underline text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                              <div className="w-6"><Icon size={15} className="mr-2" /></div> {/* Use the icon component */}
                              {menu.name}
                            </Link>
                          </div>
                        </>
                      )}
                    </React.Fragment>
                  );
                })}

              
            </React.Fragment>
          )
        })
      }

      {/* {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })} */}
        </div>

    </nav>

  );
}
