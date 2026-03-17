import type { FC } from 'react';
import { Building2, CheckCircle2, Download, X } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
}

export const Header: FC<HeaderProps> = ({ onBack }) => (
  <div className="p-6 border-b border-slate-100">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="bg-slate-800 p-3 rounded-lg text-white"><Building2 size={24} /></div>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-800">BuildCorp Solutions Inc.</h1>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Medium Risk</span>
          </div>
          <div className="flex gap-4 mt-1 text-sm text-slate-500">
            <span>Tax ID: 99-1234567</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-indigo-500" />
              Overall Compliance: <span className="font-semibold text-slate-700">88%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md text-sm font-medium hover:bg-slate-50">
          <Download size={16} /> Export Audit
        </button>
        <button onClick={onBack} className="p-2 text-slate-400 hover:text-slate-600"><X size={20} /></button>
      </div>
    </div>
  </div>
);
