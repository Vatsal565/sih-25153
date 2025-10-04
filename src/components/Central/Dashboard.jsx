"use client"

import React, { useState } from 'react';
import { Building, Layers, Banknote, BarChart4, ChevronRight, Bell, AlertTriangle, CheckCircle, Target, TrendingUp } from 'lucide-react';

const nationalSummaryData = [
  { title: "Total States Onboarded", value: "28", icon: <Building size={24} />, color: "#3B82F6", trend: "+2 this year" },
  { title: "Total Projects", value: "520", icon: <Layers size={24} />, color: "#9333EA", trend: "+45 active" },
  { title: "Total Funds Allocated", value: "₹1,350 Cr", icon: <Banknote size={24} />, color: "#10B981", trend: "92% disbursed" },
  { title: "Overall Progress", value: "76%", icon: <BarChart4 size={24} />, color: "#14B8A6", trend: "+8% this quarter" },
];

const statePerformanceData = [
  { state: "Gujarat", agencies: 12, projects: 70, allocated: "₹200 Cr", utilized: "₹160 Cr", progress: 80, status: "On Track", lastUpdated: "03 Oct 2025" },
  { state: "Maharashtra", agencies: 15, projects: 95, allocated: "₹240 Cr", utilized: "₹195 Cr", progress: 81, status: "On Track", lastUpdated: "02 Oct 2025" },
  { state: "Uttar Pradesh", agencies: 20, projects: 110, allocated: "₹300 Cr", utilized: "₹230 Cr", progress: 77, status: "Slight Delay", lastUpdated: "03 Oct 2025" },
  { state: "Rajasthan", agencies: 10, projects: 60, allocated: "₹150 Cr", utilized: "₹102 Cr", progress: 68, status: "Delayed", lastUpdated: "01 Oct 2025" },
  { state: "Karnataka", agencies: 18, projects: 90, allocated: "₹210 Cr", utilized: "₹178 Cr", progress: 85, status: "On Track", lastUpdated: "04 Oct 2025" },
  { state: "Tamil Nadu", agencies: 16, projects: 95, allocated: "₹250 Cr", utilized: "₹162 Cr", progress: 65, status: "Delayed", lastUpdated: "30 Sep 2025" },
];

const projectCategoryData = [
    { name: 'Infrastructure', value: 40, color: 'bg-teal-500' },
    { name: 'Health', value: 25, color: 'bg-blue-500' },
    { name: 'Education', value: 20, color: 'bg-purple-500' },
    { name: 'Others', value: 15, color: 'bg-gray-400' },
];

const fundDisbursementData = [
    { month: 'Jan', amount: 80 }, { month: 'Feb', amount: 110 }, { month: 'Mar', amount: 95 },
    { month: 'Apr', amount: 130 }, { month: 'May', amount: 150 }, { month: 'Jun', amount: 140 },
    { month: 'Jul', amount: 165 }, { month: 'Aug', amount: 180 }, { month: 'Sep', amount: 170 },
];

const NationalSummaryCard = ({ item }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 rounded-xl shadow-sm" style={{ backgroundColor: item.color + '15', color: item.color }}>
        {item.icon}
      </div>
      {item.trend && (
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
          <TrendingUp className="w-3 h-3" />
          {item.trend}
        </div>
      )}
    </div>
    <p className="text-sm font-medium text-gray-500 mb-1">{item.title}</p>
    <p className="text-3xl font-bold text-gray-900">{item.value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    "On Track": "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "Slight Delay": "bg-amber-50 text-amber-700 border border-amber-200",
    "Delayed": "bg-red-50 text-red-700 border border-red-200",
  };
  return <span className={`px-3 py-1.5 text-xs font-bold rounded-lg ${styles[status]}`}>{status}</span>;
};

const ProgressBar = ({ progress }) => {
    let colorFrom = 'from-emerald-500';
    let colorTo = 'to-teal-500';
    
    if (progress < 70) {
      colorFrom = 'from-red-500';
      colorTo = 'to-orange-500';
    } else if (progress < 80) {
      colorFrom = 'from-amber-500';
      colorTo = 'to-yellow-500';
    }

    return (
        <div className="flex items-center gap-3 flex-1">
          <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className={`bg-gradient-to-r ${colorFrom} ${colorTo} h-2.5 rounded-full transition-all duration-500 ease-out relative overflow-hidden`}
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        </div>
    );
};

const FundUtilizationChart = () => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-5">State-wise Fund Utilization</h3>
        <div className="space-y-4">
            {statePerformanceData.map(state => {
                const utilization = parseFloat(state.utilized) / parseFloat(state.allocated) * 100;
                return (
                    <div key={state.state} className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-teal-50 hover:to-transparent transition-all duration-200">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-800">{state.state}</span>
                            <span className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{utilization.toFixed(0)}%</span>
                        </div>
                        <ProgressBar progress={utilization} />
                    </div>
                )
            })}
        </div>
    </div>
);

const ProjectDistributionPieChart = () => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-5">Projects by Category</h3>
        <div className="flex items-center justify-center my-8">
            <div className="relative w-44 h-44 rounded-full shadow-xl" style={{
                background: `conic-gradient(
                    #14B8A6 0% 40%,
                    #3B82F6 40% 65%,
                    #9333EA 65% 85%,
                    #9CA3AF 85% 100%
                )`
            }}>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full shadow-inner"></div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
             {projectCategoryData.map(item => (
                <div key={item.name} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className={`w-3 h-3 rounded-full ${item.color} shadow-sm`}></span>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <span className="text-gray-500 text-xs ml-auto">{item.value}%</span>
                </div>
            ))}
        </div>
    </div>
);

const FundDisbursementLineChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const maxAmount = Math.max(...fundDisbursementData.map((d) => d.amount))
  const minAmount = Math.min(...fundDisbursementData.map((d) => d.amount))
  const range = maxAmount - minAmount

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Fund Disbursement Trend</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Peak:</span>
          <span className="font-bold text-teal-600">₹{maxAmount}Cr</span>
        </div>
      </div>

      <div className="relative h-72 mt-8">
        <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-gray-500 font-medium">
          {[maxAmount, Math.round(maxAmount * 0.75), Math.round(maxAmount * 0.5), Math.round(maxAmount * 0.25), 0].map(
            (val, i) => (
              <span key={i} className="text-right">
                ₹{val}Cr
              </span>
            ),
          )}
        </div>

        <div className="ml-14 relative h-full">
          <div className="absolute inset-0 bottom-8 grid grid-rows-4 gap-0">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-b border-gray-100"></div>
            ))}
          </div>

          <svg className="w-full h-full relative z-10" viewBox="0 0 300 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <polygon
              fill="url(#areaGradient)"
              points={`0,120 ${fundDisbursementData
                .map(
                  (d, i) =>
                    `${(i / (fundDisbursementData.length - 1)) * 300},${120 - ((d.amount - minAmount) / range) * 100}`,
                )
                .join(" ")} 300,120`}
            />

            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              points={fundDisbursementData
                .map(
                  (d, i) =>
                    `${(i / (fundDisbursementData.length - 1)) * 300},${120 - ((d.amount - minAmount) / range) * 100}`,
                )
                .join(" ")}
            />

            {fundDisbursementData.map((d, i) => {
              const x = (i / (fundDisbursementData.length - 1)) * 300
              const y = 120 - ((d.amount - minAmount) / range) * 100
              const isHovered = hoveredPoint === i

              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 7 : 5}
                    fill="#14B8A6"
                    stroke="white"
                    strokeWidth="3"
                    className="transition-all duration-200 cursor-pointer"
                    style={{ filter: isHovered ? "drop-shadow(0 0 8px rgba(20, 184, 166, 0.6))" : "none" }}
                  />
                  {isHovered && (
                    <>
                      <rect x={x - 25} y={y - 35} width="50" height="25" rx="6" fill="#1F2937" opacity="0.95" />
                      <text x={x} y={y - 20} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                        ₹{d.amount}Cr
                      </text>
                    </>
                  )}
                </g>
              )
            })}
          </svg>

          <div className="flex justify-between text-xs text-gray-600 font-semibold mt-3 px-1">
            {fundDisbursementData.map((d) => (
              <span key={d.month} className="hover:text-teal-600 transition-colors cursor-pointer">
                {d.month}
              </span>
            ))}
          </div>

          <div className="absolute inset-0 bottom-8 flex">
            {fundDisbursementData.map((_, i) => (
              <div
                key={i}
                className="flex-1 cursor-pointer"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium mb-1">Average</p>
          <p className="text-lg font-bold text-gray-900">
            ₹{Math.round(fundDisbursementData.reduce((a, b) => a + b.amount, 0) / fundDisbursementData.length)}Cr
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium mb-1">Growth</p>
          <p className="text-lg font-bold text-green-600">
            +{Math.round(((maxAmount - minAmount) / minAmount) * 100)}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium mb-1">Total</p>
          <p className="text-lg font-bold text-gray-900">₹{fundDisbursementData.reduce((a, b) => a + b.amount, 0)}Cr</p>
        </div>
      </div>
    </div>
  )
}

const CentralDashboard = () => {
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
      
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Central Dashboard
            </h1>
          </div>
          <p className="text-gray-600 ml-5">National overview of project progress, fund flow, and state performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {nationalSummaryData.map((item, index) => (
            <NationalSummaryCard key={index} item={item} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6">
                        <h2 className="text-2xl font-bold text-white">State-Wise Performance</h2>
                        <p className="text-teal-50 text-sm mt-1">Comprehensive state-level metrics and progress tracking</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">State Name</th>
                                    <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Agencies</th>
                                    <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Projects</th>
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Allocated</th>
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Utilized</th>
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Progress</th>
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Last Updated</th>
                                    <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {statePerformanceData.map((row) => (
                                <tr key={row.state} className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent transition-all duration-200">
                                    <td className="p-4">
                                        <div className="font-semibold text-gray-900">{row.state}</div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                                            {row.agencies}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">
                                            {row.projects}
                                        </span>
                                    </td>
                                    <td className="p-4 font-semibold text-gray-900">{row.allocated}</td>
                                    <td className="p-4 font-semibold text-gray-900">{row.utilized}</td>
                                    <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                            <ProgressBar progress={row.progress} />
                                            <span className="text-sm font-semibold text-gray-700 min-w-[45px]">{row.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4"><StatusBadge status={row.status} /></td>
                                    <td className="p-4 text-sm text-gray-600">{row.lastUpdated}</td>
                                    <td className="p-4 text-center">
                                        <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FundUtilizationChart />
                    <ProjectDistributionPieChart />
                </div>
                <FundDisbursementLineChart />
            </div>
            
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-lg font-bold text-gray-900">Alerts & Notifications</h3>
                        <div className="p-2 bg-teal-100 rounded-lg">
                            <Bell className="text-teal-600" size={20} />
                        </div>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3 p-3 rounded-xl bg-amber-50 border border-amber-200">
                            <div className="p-1.5 bg-amber-100 rounded-lg mt-0.5">
                                <AlertTriangle className="text-amber-600" size={16} />
                            </div>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">3 States</span> have pending fund release approvals.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3 p-3 rounded-xl bg-red-50 border border-red-200">
                            <div className="p-1.5 bg-red-100 rounded-lg mt-0.5">
                                <Target className="text-red-600" size={16} />
                            </div>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">5 Projects</span> marked delayed in the last week.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                            <div className="p-1.5 bg-emerald-100 rounded-lg mt-0.5">
                                <CheckCircle className="text-emerald-600" size={16} />
                            </div>
                            <p className="text-sm text-gray-700">
                                Fund utilization report for Q3 generated successfully.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                     <h3 className="text-lg font-bold text-gray-900 mb-5">Access Hierarchy</h3>
                     <div className="space-y-4">
                         <div className="flex items-center space-x-2 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-200">
                             <span className="font-bold text-teal-700 bg-white px-3 py-1 rounded-lg shadow-sm">Central</span> 
                             <ChevronRight size={18} className="text-teal-400"/>
                             <span className="text-gray-700 font-semibold">State</span>
                             <ChevronRight size={18} className="text-gray-300"/>
                             <span className="text-gray-600">Agency</span>
                             <ChevronRight size={18} className="text-gray-300"/>
                             <span className="text-gray-500">Local</span>
                         </div>
                         <p className="text-sm text-gray-600 leading-relaxed">
                             This dashboard provides complete National-to-Local drill-down visibility for authorized personnel with comprehensive data access across all levels.
                         </p>
                     </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default CentralDashboard;