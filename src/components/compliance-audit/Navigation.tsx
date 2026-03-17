import type { FC } from 'react';

export const Navigation: FC = () => (
  <div className="px-6 flex gap-8 text-sm font-medium border-b border-slate-100">
    {['1. Company Docs', '2. Employees', '3. Projects', '4. High-Risk Certs', '5. Operational Reports'].map((tab, idx) => (
      <button key={tab} className={`pb-3 ${idx === 1 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}>
        {tab}
      </button>
    ))}
  </div>
);
