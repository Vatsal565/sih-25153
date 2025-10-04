"use client"

import React, { useState } from 'react';
import { Building2, Briefcase, Banknote, CircleDollarSign, AlertTriangle, ChevronDown, TrendingUp, Activity } from 'lucide-react';

const StatCard = ({ icon, title, value, color, trend }) => {
  const IconComponent = icon;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl shadow-sm`} style={{ backgroundColor: color + '15', color: color }}>
          <IconComponent className="w-6 h-6" />
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
};

const ProgressBar = ({ percentage }) => {
  let colorFrom = 'from-emerald-500';
  let colorTo = 'to-teal-500';
  
  if (percentage < 70) {
    colorFrom = 'from-amber-500';
    colorTo = 'to-yellow-500';
  }
  if (percentage < 50) {
    colorFrom = 'from-red-500';
    colorTo = 'to-orange-500';
  }

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`bg-gradient-to-r ${colorFrom} ${colorTo} h-2.5 rounded-full transition-all duration-500 ease-out relative overflow-hidden`} 
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-700 min-w-[45px]">{percentage}%</span>
    </div>
  );
};

const agencyData = [
    {
      agency: "Surat Health Dept.",
      projects: 3,
      allocated: "₹1,20,00,000",
      utilized: "₹1,00,00,000",
      progress: 90,
      lastUpdated: "03 Oct 2025",
      projectDetails: [
        { name: "Community Health Center Upgrade", funds: "₹45,00,000", utilized: "₹40,00,000", progress: 88 },
        { name: "Medical Equipment Procurement", funds: "₹50,00,000", utilized: "₹45,00,000", progress: 90 },
        { name: "Ambulance Modernization", funds: "₹25,00,000", utilized: "₹15,00,000", progress: 60 }
      ]
    },
    {
      agency: "Rajkot Welfare Board",
      projects: 2,
      allocated: "₹85,00,000",
      utilized: "₹70,00,000",
      progress: 82,
      lastUpdated: "28 Sep 2025",
      projectDetails: [
        { name: "Child Nutrition Program", funds: "₹50,00,000", utilized: "₹45,00,000", progress: 90 },
        { name: "Healthcare Awareness Campaign", funds: "₹35,00,000", utilized: "₹25,00,000", progress: 71 }
      ]
    },
    {
        agency: "Ahmedabad Pharma Cell",
        projects: 2,
        allocated: "₹2,00,00,000",
        utilized: "₹1,50,00,000",
        progress: 75,
        lastUpdated: "25 Sep 2025",
        projectDetails: [
            { name: "Vaccine Distribution Network", funds: "₹1,20,00,000", utilized: "₹1,00,00,000", progress: 83 },
            { name: "Pharmaceutical Research Grant", funds: "₹80,00,000", utilized: "₹50,00,000", progress: 62 }
        ]
    },
    {
        agency: "Kutch Health Mission",
        projects: 1,
        allocated: "₹60,00,000",
        utilized: "₹40,00,000",
        progress: 66,
        lastUpdated: "29 Sep 2025",
        projectDetails: [
            { name: "Rural Mobile Clinic", funds: "₹60,00,000", utilized: "₹40,00,000", progress: 66 }
        ]
    }
];

const AgencyProjectOverviewTable = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6">
                <h3 className="text-2xl font-bold text-white">Agency-Project Overview</h3>
                <p className="text-teal-50 text-sm mt-1">Monitor all agencies and their project portfolios</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 w-10"></th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Agency Name</th>
                            <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Total Projects</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Funds Allocated</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Funds Utilized</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Overall Progress</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {agencyData.map((item, index) => (
                            <React.Fragment key={index}>
                                <tr 
                                    className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent cursor-pointer transition-all duration-200" 
                                    onClick={() => handleRowClick(index)}
                                >
                                    <td className="px-6 py-4">
                                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${expandedRow === index ? 'rotate-180' : ''}`} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">{item.agency}</div>
                                        <div className="text-xs text-gray-500">ID: AGN-{(index + 1).toString().padStart(3, '0')}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm">
                                            {item.projects}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">{item.allocated}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">{item.utilized}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">
                                            {Math.round((parseInt(item.utilized.replace(/[₹,]/g, '')) / parseInt(item.allocated.replace(/[₹,]/g, ''))) * 100)}% of budget
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <ProgressBar percentage={item.progress} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-700">{item.lastUpdated}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="7" className="p-0">
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedRow === index ? 'max-h-screen' : 'max-h-0'}`}>
                                            <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Activity className="w-5 h-5 text-teal-600" />
                                                    <h4 className="text-lg font-bold text-teal-900">Project Breakdown</h4>
                                                </div>
                                                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr className="bg-gradient-to-r from-teal-100 to-emerald-100">
                                                                <th className="px-6 py-3 text-left text-xs font-bold text-teal-900 uppercase tracking-wider">Project Name</th>
                                                                <th className="px-6 py-3 text-left text-xs font-bold text-teal-900 uppercase tracking-wider">Funds Allocated</th>
                                                                <th className="px-6 py-3 text-left text-xs font-bold text-teal-900 uppercase tracking-wider">Funds Utilized</th>
                                                                <th className="px-6 py-3 text-left text-xs font-bold text-teal-900 uppercase tracking-wider">Progress</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {item.projectDetails.map((detail, detailIndex) => (
                                                                <tr key={detailIndex} className="hover:bg-teal-50/50 transition-colors duration-150">
                                                                    <td className="px-6 py-4 font-semibold text-gray-900">{detail.name}</td>
                                                                    <td className="px-6 py-4 text-gray-700">{detail.funds}</td>
                                                                    <td className="px-6 py-4 text-gray-700">{detail.utilized}</td>
                                                                    <td className="px-6 py-4">
                                                                        <ProgressBar percentage={detail.progress} />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const FundUtilizationChart = () => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Fund Utilization by Agency</h3>
            <p className="text-sm text-gray-500 mt-1">Comparative analysis of budget usage across agencies</p>
        </div>
        <div className="space-y-5">
            {agencyData.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-teal-50 hover:to-transparent transition-all duration-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-800">{item.agency}</span>
                        <span className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{item.progress}%</span>
                    </div>
                    <ProgressBar percentage={item.progress} />
                </div>
            ))}
        </div>
    </div>
);

const Alerts = () => (
  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 rounded-xl shadow-lg">
    <div className="flex items-start gap-4">
      <div className="p-2 bg-amber-100 rounded-lg">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
      </div>
      <div>
        <p className="font-bold text-amber-900 text-lg">Important Notifications</p>
        <p className="text-sm text-amber-800 mt-1">2 Agencies are yet to submit their quarterly fund utilization reports.</p>
      </div>
    </div>
  </div>
);

export default function StateDashboard() {
  const summaryStats = [
    { icon: Building2, title: 'Total Agencies', value: '14', color: '#3B82F6', trend: '+2 this quarter' },
    { icon: Briefcase, title: 'Total Projects', value: '32', color: '#F97316', trend: '+5 active' },
    { icon: Banknote, title: 'Total Funds Received', value: '₹12.5Cr', color: '#10B981', trend: '85% allocated' },
    { icon: CircleDollarSign, title: 'Total Funds Utilized', value: '₹9.8Cr', color: '#14B8A6', trend: '78% utilized' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen">
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <div className="p-4 sm:p-6 lg:p-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              State Dashboard
            </h1>
          </div>
          <p className="text-gray-600 ml-5">Comprehensive overview of agencies, projects, and fund utilization</p>
        </header>

        <main className="space-y-8">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryStats.map(stat => <StatCard key={stat.title} {...stat} />)}
          </section>
          
          <section>
            <Alerts />
          </section>

          <section>
            <AgencyProjectOverviewTable />
          </section>

          <section>
            <FundUtilizationChart />
          </section>
        </main>
      </div>
    </div>
  );
}