"use client";

import * as React from "react";
import { Battery, Caravan, Droplets, Tractor, Users } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";

const navMain = [
  {
    title: "Users",
    url: "/users",
    icon: Users,
    isActive: true,
  },
  {
    title: "Trailers",
    url: "/trailers",
    icon: Caravan,
  },
  {
    title: "Mopeka",
    url: "/mopeka",
    icon: Droplets,
  },
  {
    title: "BMS",
    url: "/bms",
    icon: Battery,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = useAuth();

  const userData = user
    ? {
        name: user.name,
        email: user.email,
      }
    : {
        name: "Guest",
        email: "guest@example.com",
      };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Tractor className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Rotorsync</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} loading={loading} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
