import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import ROUTES from "@/constants/route";

import NavLinks from "../navbar/NavLinks";

export function LeftSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="mt-16">
        <SidebarGroup>
          <SidebarMenu className="p-5">
            <NavLinks isMobileNav={false} />
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="p-5">
          <div className="flex flex-col gap-3">
            <Link href={ROUTES.SIGN_IN}>
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-5"></SidebarFooter>
    </Sidebar>
  );
}
