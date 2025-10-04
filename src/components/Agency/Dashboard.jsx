"use client"
import React, { useState } from 'react';
import { Briefcase, CheckCircle, IndianRupee, Hourglass, TrendingUp, Activity } from 'lucide-react';

const SummaryCard = ({ icon: Icon, title, value, color, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl shadow-sm`} style={{ backgroundColor: color + '15', color: color }}>
        <Icon className="w-6 h-6" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </div>
      )}
    </div>
    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
      </div>
    </div>
    <span className="text-sm font-semibold text-gray-700 min-w-[45px]">{progress}%</span>
  </div>
);

const StatusBadge = ({ status }) => {
  const baseClasses = "px-3 py-1.5 text-xs font-bold rounded-lg inline-flex items-center gap-1.5";
  let statusClasses = "";
  let icon = null;

  switch (status.toLowerCase()) {
    case 'completed':
      statusClasses = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      icon = <CheckCircle className="w-3 h-3" />;
      break;
    case 'active':
      statusClasses = 'bg-blue-50 text-blue-700 border border-blue-200';
      icon = <Activity className="w-3 h-3" />;
      break;
    case 'pending':
      statusClasses = 'bg-amber-50 text-amber-700 border border-amber-200';
      icon = <Hourglass className="w-3 h-3" />;
      break;
    default:
      statusClasses = 'bg-gray-50 text-gray-700 border border-gray-200';
  }

  return (
    <span className={`${baseClasses} ${statusClasses}`}>
      {icon}
      {status}
    </span>
  );
};

const AgencyDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const summaryData = [
    {
      title: 'Projects Assigned',
      value: 12,
      icon: Briefcase,
      color: '#3B82F6',
      trend: '+2 this month',
    },
    {
      title: 'Projects Completed',
      value: 8,
      icon: CheckCircle,
      color: '#10B981',
      trend: '+3 this month',
    },
    {
      title: 'Funds Utilized',
      value: '₹45L',
      icon: IndianRupee,
      color: '#F97316',
      trend: '78% utilized',
    },
    {
      title: 'Pending Approvals',
      value: 2,
      icon: Hourglass,
      color: '#EAB308',
    },
  ];

  const projectData = [
    { name: "Rural Health Center Upgrade", progress: 80, fundsReceived: "₹10,00,000", fundsUsed: "₹8,50,000", status: "Active" },
    { name: "Medicine Supply Expansion", progress: 100, fundsReceived: "₹7,00,000", fundsUsed: "₹7,00,000", status: "Completed" },
    { name: "Cold Storage Facility", progress: 60, fundsReceived: "₹15,00,000", fundsUsed: "₹9,00,000", status: "Active" },
    { name: "Vaccination Drive Program", progress: 100, fundsReceived: "₹5,00,000", fundsUsed: "₹5,00,000", status: "Completed" },
    { name: "Telemedicine Platform Setup", progress: 35, fundsReceived: "₹12,00,000", fundsUsed: "₹4,20,000", status: "Active" },
    { name: "New Equipment Procurement", progress: 0, fundsReceived: "₹8,00,000", fundsUsed: "₹0", status: "Pending" },
  ];

  const handleUpdateClick = (projectName) => {
    setSelectedProject(projectName);
    setTimeout(() => setSelectedProject(null), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Agency Dashboard
            </h1>
          </div>
          <p className="text-gray-600 ml-5">Track and manage your project portfolio with real-time insights</p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {summaryData.map((card, index) => (
            <SummaryCard
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
              color={card.color}
              trend={card.trend}
            />
          ))}
        </section>

        {/* Project Table */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6">
            <h2 className="text-2xl font-bold text-white">Project Portfolio</h2>
            <p className="text-teal-50 text-sm mt-1">Monitor progress and fund utilization across all projects</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Project Name</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Progress</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Funds Received</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Funds Utilized</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="p-5 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projectData.map((project, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent transition-all duration-200"
                  >
                    <td className="p-5">
                      <div className="font-semibold text-gray-900 mb-0.5">{project.name}</div>
                      <div className="text-xs text-gray-500">ID: PRJ-{(index + 1).toString().padStart(3, '0')}</div>
                    </td>
                    <td className="p-5">
                      <ProgressBar progress={project.progress} />
                    </td>
                    <td className="p-5">
                      <div className="font-semibold text-gray-900">{project.fundsReceived}</div>
                    </td>
                    <td className="p-5">
                      <div className="font-semibold text-gray-900">{project.fundsUsed}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {Math.round((parseInt(project.fundsUsed.replace(/[₹,]/g, '')) / parseInt(project.fundsReceived.replace(/[₹,]/g, ''))) * 100)}% of budget
                      </div>
                    </td>
                    <td className="p-5">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => handleUpdateClick(project.name)}
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-semibold py-2.5 px-5 rounded-lg hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        Update Progress
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notification Toast */}
        {selectedProject && (
          <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex items-center gap-3 animate-slide-up">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-semibold text-gray-900">
              Update initiated for <span className="text-teal-600">{selectedProject}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgencyDashboard;