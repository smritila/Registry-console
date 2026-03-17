import type { FC } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import AuditTable from './AuditTable';
import IncidentSection from './IncidentSection';

interface ComplianceAuditProps {
  onBack?: () => void;
}

const ComplianceAudit: FC<ComplianceAuditProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-8 flex justify-center items-start font-sans text-slate-700">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <Header onBack={onBack} />
        <Navigation />

        <main className="p-6 overflow-y-auto">
          <AuditTable />
          <IncidentSection />
        </main>

        {/* Footer */}
        <footer className="p-4 bg-slate-50 flex justify-between items-center border-t border-slate-200">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
            Anonymized Audit View Active • Data Masking Applied
          </span>
          <div className="flex gap-3">
            <button className="px-6 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700">Cancel Audit</button>
            <button className="px-6 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-md">
              Submit Audit Report
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ComplianceAudit;
