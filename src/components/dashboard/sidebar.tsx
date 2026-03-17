import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ChevronRight,
  BarChart3,
  FileText,
  Settings,
  Users,
  ShieldCheck
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChildItem {
  label: string;
  active: boolean;
}

interface MenuItem {
  label: string;
  icon: LucideIcon;
  expandable: boolean;
  expanded?: boolean;
  children?: ChildItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Performance",
    icon: BarChart3,
    expandable: true,
    expanded: true,
    children: [
      { label: "Compliance Dashboard", active: true },
      { label: "Operations Dashboard", active: false },
      { label: "Risk & Performance", active: false }
    ]
  },
  { label: "Contractors", icon: Users, expandable: false },
  { label: "Reporting", icon: FileText, expandable: false },
  { label: "Configuration", icon: Settings, expandable: false }
];

interface SidebarProps {
  onLayoutChange?: (layout: string) => void;
}

export function Sidebar({ onLayoutChange }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Performance"]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-sidebar text-sidebar-foreground border-r border-sidebar-border min-h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <p className="text-xs font-semibold text-sidebar-foreground">COMPLIANCE</p>
            <p className="text-[10px] text-sidebar-foreground/70">
              EXECUTIVE REGISTRY
            </p>
          </div>
        </div>
      </div>

      {/* Global Status */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-sidebar-foreground/70 font-medium">
            GLOBAL STATUS
          </span>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
            LIVE
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-sidebar-foreground">Verified</span>
            </div>
            <span className="text-sm font-semibold text-sidebar-foreground">2,410</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-sm text-sidebar-foreground">At Risk</span>
            </div>
            <span className="text-sm font-semibold text-sidebar-foreground">42</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm text-sidebar-foreground">Blocked</span>
            </div>
            <span className="text-sm font-semibold text-sidebar-foreground">12</span>
          </div>
        </div>

        <div className="mt-3 h-1.5 rounded-full bg-sidebar-accent/60 overflow-hidden flex">
          <div className="bg-emerald-500 w-[85%]" />
          <div className="bg-amber-500 w-[10%]" />
          <div className="bg-red-500 w-[5%]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => item.expandable && toggleExpand(item.label)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                expandedItems.includes(item.label) &&
                  item.expandable &&
                  "bg-sidebar-accent"
              )}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-sidebar-foreground/70" />
                <span>{item.label}</span>
              </div>
              {item.expandable &&
                (expandedItems.includes(item.label) ? (
                  <ChevronDown className="w-4 h-4 text-sidebar-foreground/70" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-sidebar-foreground/70" />
                ))}
            </button>

            {item.expandable &&
              expandedItems.includes(item.label) &&
              item.children && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      className={cn(
                        "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors",
                        child.active
                          ? "text-sidebar-foreground bg-sidebar-accent"
                          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                      )}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}

        {/* Compliance Audit Button */}
        <div className="mt-4 pt-4 border-t border-sidebar-border">
          <button
            onClick={() => onLayoutChange?.("compliance-audit")}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <FileText className="w-4 h-4 text-sidebar-foreground/70" />
            <span>Compliance Audit</span>
          </button>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-9 h-9">
            <AvatarImage src="/placeholder-user.jpg" alt="Alexander Chen" />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">
              AC
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Alexander Chen
            </p>
            <p className="text-xs text-sidebar-foreground/70 truncate">
              EXECUTIVE DIRECTOR
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
