import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { EntityTable } from "./entity-table";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Menu,
  PanelRightOpen,
  Moon,
  Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";

interface MainContentProps {
  onOpenSidebar: () => void;
  onOpenPanel: () => void;
}

const tabs = ["COMPLIANCE", "OPERATIONS", "RISK"] as const;

interface FilterItem {
  label: string;
  active: boolean;
}

const gateFilters: FilterItem[] = [
  { label: "BLOCKED", active: false },
  { label: "AT RISK", active: false },
  { label: "VERIFIED", active: true }
];

const lifecycleFilters: FilterItem[] = [
  { label: "ACTIVE", active: true },
  { label: "DORMANT", active: false },
  { label: "INACTIVE", active: false }
];

export function MainContent({ onOpenSidebar, onOpenPanel }: MainContentProps) {
  const [activeTab, setActiveTab] = useState<string>("COMPLIANCE");
  const { theme, setTheme } = useTheme();
  const activeTheme = theme === "system" ? "light" : theme;
  const isLightTheme = activeTheme === "light";

  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSidebar}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-semibold text-foreground">
              Registry Console
            </h1>
          </div>

          {/* Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label={
                    isLightTheme
                      ? "Switch to dark theme"
                      : "Switch to light theme"
                  }
                  onClick={() =>
                    setTheme(isLightTheme ? "dark" : "light")
                  }
                >
                  {isLightTheme ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isLightTheme ? "Switch to dark mode" : "Switch to light mode"}
              </TooltipContent>
            </Tooltip>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search registry..."
                className="pl-9 w-48 lg:w-64 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="outline" className="hidden sm:flex">
              <SlidersHorizontal className="w-4 h-4" />
              MORE FILTERS
            </Button>
            <button
              onClick={onOpenPanel}
              className="xl:hidden p-2 hover:bg-muted rounded-lg"
            >
              <PanelRightOpen className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden mt-4 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors",
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-border px-4 lg:px-6 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">
              GATE STATUS:
            </span>
            <div className="flex gap-1">
              {gateFilters.map((filter) => (
                <button
                  key={filter.label}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded transition-colors",
                    filter.active
                      ? "bg-emerald-500 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">
              LIFECYCLE:
            </span>
            <div className="flex gap-1">
              {lifecycleFilters.map((filter) => (
                <button
                  key={filter.label}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded transition-colors",
                    filter.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <EntityTable />
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-4 lg:px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>312 TOTAL ENTITIES</span>
            <div className="flex items-center gap-2">
              <span>Show 50 per page</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-foreground">1 / 7</span>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
