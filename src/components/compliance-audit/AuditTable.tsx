import React from 'react';
import { Search, Filter, CheckSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Employee {
  name: string;
  id: string;
  role: string;
  dept: string;
  v: number;
  p: number;
  e: number;
  date: string;
}

const EMPLOYEES: Employee[] = [
  { name: "Mar***** Wri*****", id: "EMP-00442", role: "Site Supervisor", dept: "OPERATIONS", v: 12, p: 0, e: 0, date: "Oct 12, 2023" },
  { name: "Ele***** Rod*****", id: "EMP-11203", role: "Safety Officer", dept: "COMPLIANCE", v: 8, p: 3, e: 1, date: "Oct 20, 2023" },
   { name: "Joh***** Rod*****", id: "EMP-11203", role: "Safety Officer", dept: "COMPLIANCE", v: 14, p: 0, e: 0, date: "Oct 20, 2023" },
    { name: "Sar***** Che*****", id: "EMP-11203", role: "Safety Officer", dept: "COMPLIANCE", v: 2, p: 1, e: 4, date: "Oct 20, 2023" },
     { name: "Dav***** Tho*****", id: "EMP-11203", role: "Safety Officer", dept: "COMPLIANCE", v: 10, p: 0, e: 2, date: "Oct 20, 2023" },
  // Add more employees as needed
];

const AuditTable: React.FC = () => (
  <div className="mb-8">
    <div className="flex justify-between items-end mb-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Employee Compliance Audit List</h2>
        <p className="text-xs text-slate-400">Detailed document compliance counters for workforce auditing.</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline"><Filter size={14} /> Filter</Button>
        <Button><CheckSquare size={14} /> Bulk Verify</Button>
      </div>
    </div>

    <div className="border border-slate-100 rounded-lg overflow-hidden">
      {/* Search & Legend */}
      <div className="bg-slate-50/50 px-4 py-3 flex justify-between items-center border-b border-slate-100">
        <div className="flex gap-4 text-[10px] font-bold uppercase text-slate-400">
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Verified</span>
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-400" /> Pending</span>
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500" /> Expired</span>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" className="pl-9 pr-4 py-1.5 text-xs border border-slate-200 rounded-md w-64" placeholder="Search..." />
        </div>
      </div>

      <table className="w-full">
        <tbody className="divide-y divide-slate-100">
          {EMPLOYEES.map((emp, i) => (
            <tr key={i} className="hover:bg-slate-50/50">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <p className="text-sm font-semibold">{emp.name}</p>
                  <p className="text-[10px] text-slate-400">ID: {emp.id}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-xs font-semibold">{emp.role}</td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-2">
                  <Badge color="emerald" val={emp.v} />
                  <Badge color="orange" val={emp.p} />
                  <Badge color="rose" val={emp.e} />
                </div>
              </td>
              <td className="px-6 py-4 text-xs text-slate-500">{emp.date}</td>
              <td className="px-6 py-4 text-right"><FileText size={18} className="text-indigo-400 inline" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Badge: React.FC<{ color: string; val: number }> = ({ color, val }) => (
  <span className={`text-xs font-bold text-${color}-500 bg-${color}-50 px-2 py-0.5 rounded-full`}>{val}</span>
);

export default AuditTable;