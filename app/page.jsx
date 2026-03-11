"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MainContent } from "@/components/dashboard/main-content";
import { InspectionPanel } from "@/components/dashboard/inspection-panel";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function RegistryConsolePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 lg:static lg:z-auto transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="relative h-full">
          <Sidebar />
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 lg:hidden p-1 hover:bg-muted rounded"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      <MainContent
        onOpenSidebar={() => setSidebarOpen(true)}
        onOpenPanel={() => setPanelOpen(true)}
      />

      {panelOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setPanelOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-80 bg-card border-l border-border xl:static xl:z-auto xl:block transition-transform duration-300",
          panelOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"
        )}
      >
        <InspectionPanel onClose={() => setPanelOpen(false)} className="h-full" />
      </div>
    </div>
  );
}
