import { Badge } from "@/components/ui/badge";
import { CircularProgress } from "@/components/circular-progress";
import { cn } from "@/lib/utils";
import { Flag } from "lucide-react";

const entities = [
  {
    id: "1",
    score: 92,
    name: "Acme Engineering Solutions Ltd.",
    code: "884-291",
    details: "HIGH PRIORITY • UK UNIT",
    status: "ACTIVE",
    compliance: { value: 145, max: 150 },
    social: { value: 28, max: 30 },
    risk: { value: 12, max: 15 },
    assets: { value: 18, max: 24 },
    gateStatus: "VERIFIED",
    flagged: true,
    selected: true
  },
  {
    id: "2",
    score: 81,
    name: "Global Logistics Group",
    code: "102-556",
    details: "EU OPERATIONS • LOGISTICS",
    status: "DORMANT",
    compliance: { value: 42, max: 50 },
    social: { value: 18, max: 30 },
    risk: { value: 13, max: 15 },
    assets: { value: 22, max: 24 },
    gateStatus: "AT RISK"
  },
  {
    id: "3",
    score: 45,
    name: "Swift Build Corp",
    code: "992-001",
    details: "DISCONTINUED • INFRASTRUCTURE",
    status: "INACTIVE",
    compliance: { value: 0, max: 50 },
    social: { value: 9, max: 30 },
    risk: { value: 1, max: 15 },
    assets: { value: 0, max: 24 },
    gateStatus: "BLOCKED"
  }
];

const getScoreColor = (score) => {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-amber-500";
  return "bg-red-500";
};

const getStatusBadge = (status) => {
  const styles = {
    ACTIVE: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    DORMANT: "bg-muted text-muted-foreground border-border",
    INACTIVE: "bg-muted text-muted-foreground border-border"
  };
  return styles[status];
};

const getGateStatusBadge = (status) => {
  const styles = {
    VERIFIED: "bg-emerald-500 text-white",
    "AT RISK": "bg-amber-500 text-white",
    BLOCKED: "bg-red-500 text-white"
  };
  return styles[status];
};

const getProgressColor = (value, max) => {
  const percentage = (value / max) * 100;
  if (percentage >= 80) return "green";
  if (percentage >= 50) return "yellow";
  return "red";
};

export function EntityTable() {
  return (
    <div className="overflow-x-auto">
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[40px_60px_1fr_80px_80px_80px_80px_100px] gap-4 items-center px-4 py-3 border-b border-border text-xs text-muted-foreground font-medium">
        <div className="flex items-center justify-center">
          <Flag className="w-3 h-3" />
        </div>
        <div>SCORE</div>
        <div>ENTITY DETAILS</div>
        <div className="text-center">COMPLIANCE</div>
        <div className="text-center">SOCIAL</div>
        <div className="text-center">RISK</div>
        <div className="text-center">ASSETS</div>
        <div className="text-center">
          <span className="block">GATE</span>
          <span className="block">STATUS</span>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-border">
        {entities.map((entity) => (
          <div
            key={entity.id}
            className={cn(
              "grid grid-cols-1 md:grid-cols-[40px_60px_1fr_80px_80px_80px_80px_100px] gap-4 items-center px-4 py-4 hover:bg-muted/50 transition-colors",
              entity.selected && "bg-muted/30"
            )}
          >
            {/* Flag */}
            <div className="hidden md:flex items-center justify-center">
              {entity.flagged && (
                <Flag className="w-4 h-4 text-amber-500 fill-amber-500" />
              )}
            </div>

            {/* Score */}
            <div className="flex md:block items-center gap-2">
              <span className="md:hidden text-xs text-muted-foreground">
                Score:
              </span>
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                  getScoreColor(entity.score)
                )}
              >
                {entity.score}
              </div>
            </div>

            {/* Entity Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-foreground">
                  {entity.name}
                </span>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] px-1.5 py-0",
                    getStatusBadge(entity.status)
                  )}
                >
                  {entity.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {entity.code} • {entity.details}
              </p>
            </div>

            {/* Progress Circles - Hidden on mobile, shown in a different layout */}
            <div className="hidden md:flex justify-center">
              <CircularProgress
                value={entity.compliance.value}
                max={entity.compliance.max}
                color={getProgressColor(
                  entity.compliance.value,
                  entity.compliance.max
                )}
              />
            </div>
            <div className="hidden md:flex justify-center">
              <CircularProgress
                value={entity.social.value}
                max={entity.social.max}
                color={getProgressColor(entity.social.value, entity.social.max)}
              />
            </div>
            <div className="hidden md:flex justify-center">
              <CircularProgress
                value={entity.risk.value}
                max={entity.risk.max}
                color={getProgressColor(entity.risk.value, entity.risk.max)}
              />
            </div>
            <div className="hidden md:flex justify-center">
              <CircularProgress
                value={entity.assets.value}
                max={entity.assets.max}
                color={getProgressColor(entity.assets.value, entity.assets.max)}
              />
            </div>

            {/* Mobile Progress Grid */}
            <div className="md:hidden grid grid-cols-4 gap-2 mt-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground mb-1">
                  Compliance
                </span>
                <CircularProgress
                  value={entity.compliance.value}
                  max={entity.compliance.max}
                  size={36}
                  color={getProgressColor(
                    entity.compliance.value,
                    entity.compliance.max
                  )}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground mb-1">
                  Social
                </span>
                <CircularProgress
                  value={entity.social.value}
                  max={entity.social.max}
                  size={36}
                  color={getProgressColor(
                    entity.social.value,
                    entity.social.max
                  )}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground mb-1">
                  Risk
                </span>
                <CircularProgress
                  value={entity.risk.value}
                  max={entity.risk.max}
                  size={36}
                  color={getProgressColor(entity.risk.value, entity.risk.max)}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground mb-1">
                  Assets
                </span>
                <CircularProgress
                  value={entity.assets.value}
                  max={entity.assets.max}
                  size={36}
                  color={getProgressColor(
                    entity.assets.value,
                    entity.assets.max
                  )}
                />
              </div>
            </div>

            {/* Gate Status */}
            <div className="flex md:justify-center mt-2 md:mt-0">
              <Badge
                className={cn(
                  "text-[10px] font-semibold",
                  getGateStatusBadge(entity.gateStatus)
                )}
              >
                {entity.gateStatus}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
