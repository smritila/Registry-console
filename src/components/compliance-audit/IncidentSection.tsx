import React from 'react';
import { CheckSquare } from 'lucide-react';

interface IncidentCardProps {
  date?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
}

const IncidentSection: React.FC = () => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-4">Audit Context: Recent Incidents</h3>
    <div className="grid grid-cols-2 gap-4">
      <IncidentCard
        date="Oct 14"
        title="Minor Collision"
        subtitle="Supervisor: Mar***** Wri*****"
        status="Closed"
        statusColor="emerald"
      />
      <IncidentCard
        icon={<CheckSquare size={20} />}
        title="PPE Protocol Audit"
        subtitle="Owner: Ele***** Rod*****"
        status="Pending"
        statusColor="orange"
      />
    </div>
  </div>
);

const IncidentCard: React.FC<IncidentCardProps> = ({ date, icon, title, subtitle, status, statusColor }) => (
  <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
    <div className="flex items-center gap-4">
      {date ? (
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase text-rose-400">{date.split(' ')[0]}</p>
          <p className="text-lg font-bold text-slate-800 leading-none">{date.split(' ')[1]}</p>
        </div>
      ) : (
        <div className="bg-indigo-50 p-2 rounded-md text-indigo-500">{icon}</div>
      )}
      <div>
        <p className="text-sm font-bold text-slate-700">{title}</p>
        <p className="text-[10px] text-slate-400">{subtitle}</p>
      </div>
    </div>
    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 bg-${statusColor}-50 text-${statusColor}-500 rounded border border-${statusColor}-100`}>
      {status}
    </span>
  </div>
);

export default IncidentSection;