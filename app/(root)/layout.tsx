import React, { ReactNode } from "react";

import { LeftSidebar } from "@/components/navigations/left-sidebar/LeftSidebar";
import Navbar from "@/components/navigations/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>

      <main>
        <Navbar />
        <LeftSidebar />

        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
