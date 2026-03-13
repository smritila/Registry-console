import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ClipboardCheck,
  Send,
  Sparkles,
  FileCheck,
  Building2,
  X
} from "lucide-react";

export function InspectionPanel({ onClose, className }) {
  return (
    <div className={className}>
      <ScrollArea className="h-full">
        <div className="p-4 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground">
                INSPECTION PANEL
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-1 hover:bg-muted rounded"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Company Info */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Acme Engineering Solutions Ltd.
                </h3>
                <p className="text-xs text-muted-foreground">
                  TIER 1 STRATEGIC PARTNER
                </p>
              </div>
              <button className="p-2 hover:bg-muted rounded">
                <Building2 className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-[10px] text-muted-foreground font-medium">
                  TOTAL EMPLOYEES
                </p>
                <p className="text-xl font-bold text-foreground mt-1">
                  1,240{" "}
                  <span className="text-xs font-normal text-emerald-400">
                    Active
                  </span>
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-[10px] text-muted-foreground font-medium">
                  ACTIVE PROJECTS
                </p>
                <p className="text-xl font-bold text-foreground mt-1">
                  12{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    Contracts
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button
                variant="outline"
                className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
              >
                <FileCheck className="w-4 h-4" />
                VERIFY DOCS
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
                SEND REQUEST
              </Button>
            </div>
          </div>

          {/* AI Suggestion */}
          <div className="bg-muted/30 rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-medium text-muted-foreground">
                  AI INTERACTION SUGGESTION
                </span>
              </div>
              <Button
                size="sm"
                className="h-6 text-[10px] bg-emerald-500 hover:bg-emerald-600"
              >
                GENERATE WITH AI
              </Button>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1 text-[10px] text-amber-400 font-medium w-fit mb-2">
              AT RISK
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Draft a request for missing Level 3 certificates for Project X.
              The system detects an expiration in 4 days and suggests a tone
              upgrade to &ldquo;Urgent Professional.&rdquo;
            </p>
          </div>

          {/* Direct Communication */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-3">
              DIRECT COMMUNICATION
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="text-muted-foreground w-10">From:</span>
                <span className="text-primary">Compliance Dept.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-muted-foreground w-10">To:</span>
                <span className="text-foreground">operations@acme-eng.com</span>
              </div>
            </div>
            <div className="mt-3 p-3 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-foreground leading-relaxed">
                Dear Operations Team,
                <br />
                <br />
                Following our{" "}
                <span className="text-primary">AI compliance audit</span>,
                we&apos;ve identified that your{" "}
                <span className="text-primary">
                  Level 3 safety certificates
                </span>{" "}
                for Project X are pending. To maintain your{" "}
                <span className="text-primary">Tier 1 active status</span>,
                please provide an improvement plan and updated documentation
                within 48...
              </p>
            </div>
            <Button className="w-full mt-3 bg-primary hover:bg-primary/90">
              REQUEST INFORMATION
            </Button>
          </div>

          {/* Recent Activity */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-3">
              RECENT ACTIVITY
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Verified Status Confirmed
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2 HOURS AGO • AUTOMATED SYNC
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Tax Clearance Under Review
                  </p>
                  <p className="text-xs text-muted-foreground">
                    YESTERDAY • AGENT: K. THORNE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
