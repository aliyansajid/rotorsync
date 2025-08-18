"use client";

import * as React from "react";
import {
  Battery,
  Command,
  Compass,
  Cpu,
  Droplets,
  Hash,
  Router,
  Users,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useSession } from "next-auth/react";

const data = {
  navMain: [
    {
      title: "Users",
      url: "/users",
      icon: Users,
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
    {
      title: "Raspberry Pi",
      url: "/raspi",
      icon: Cpu,
    },
    {
      title: "Wit Motion",
      url: "/wit-motion",
      icon: Compass,
    },
    {
      title: "Serial Numbers",
      url: "/serial-numbers",
      icon: Hash,
    },
    {
      title: "MQTT Configuration",
      url: "/mqtt-configuration",
      icon: Router,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  const user = session?.user
    ? {
        name: session.user.name || "Unknown User",
        email: session.user.email || "",
        avatar: session.user.image || "/avatars/default.jpg",
      }
    : {
        name: "Guest",
        email: "",
        avatar: "/avatars/default.jpg",
      };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenu>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Rotorsync</span>
                  <span className="truncate text-xs">Admin panel</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
