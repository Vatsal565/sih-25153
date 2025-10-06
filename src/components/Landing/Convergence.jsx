"use client"

import React from 'react';
import { Network, Building2, Handshake, Target } from 'lucide-react';

const Convergence = () => {
  const partners = [
    {
      name: 'Pradhan Mantri Awas Yojana - Gramin',
      ministry: 'Ministry of Rural Development',
      focus: 'Housing and Shelter',
      collaboration: 'Joint identification of beneficiaries for housing construction in Adarsh Grams',
      logo: Building2,
      color: '#3B82F6'
    },
    {
      name: 'Swachh Bharat Mission - Gramin',
      ministry: 'Ministry of Jal Shakti',
      focus: 'Sanitation and Hygiene',
      collaboration: 'Coordinated construction of individual household latrines and village sanitation complexes',
      logo: Target,
      color: '#10B981'
    },
    {
      name: 'Mahatma Gandhi NREGS',
      ministry: 'Ministry of Rural Development',
      focus: 'Livelihood and Asset Creation',
      collaboration: 'Leveraging MGNREGS for rural infrastructure development and employment generation',
      logo: Handshake,
      color: '#F97316'
    },
    {
      name: 'National Health Mission',
      ministry: 'Ministry of Health and Family Welfare',
      focus: 'Healthcare Infrastructure',
      collaboration: 'Gap-filling in Sub-Health Centers, PHCs, and medical equipment provision',
      logo: Network,
      color: '#9333EA'
    },
    {
      name: 'Samagra Shiksha Abhiyan',
      ministry: 'Ministry of Education',
      focus: 'Educational Development',
      collaboration: 'Supplementary infrastructure for schools in SC-majority areas including smart classrooms',
      logo: Building2,
      color: '#14B8A6'
    },
    {
      name: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
      ministry: 'Ministry of Rural Development',
      focus: 'Skill Development',
      collaboration: 'Priority placement for SC youth in skill training programs with guaranteed employment linkage',
      logo: Target,
      color: '#EAB308'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Synergizing Development: Our Convergence Partners
            </h2>
          </div>
          <p className="text-lg text-gray-600 ml-5">
            Strategic collaboration with Central and State schemes to maximize impact through coordinated interventions
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100 mb-12">
          <div className="flex items-start gap-4">
            <Network className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convergence Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                PM-AJAY operates as a gap-filling mechanism, working in synergy with existing Central and State schemes to ensure comprehensive coverage of all developmental needs in target areas. This strategic convergence eliminates duplication, optimizes resource utilization, and ensures holistic community development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-teal-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Central Schemes</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">28</div>
                  <div className="text-sm text-gray-600">State Departments</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Gap Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: partner.color + '15' }}
                >
                  <partner.logo className="w-6 h-6" style={{ color: partner.color }} />
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: partner.color + '15', color: partner.color }}
                >
                  {partner.focus}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">{partner.ministry}</p>

              <div className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-gray-100 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">{partner.collaboration}</p>
              </div>

              <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                View Coordination Framework →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-500 to-emerald-500 p-8 rounded-2xl shadow-xl">
          <div className="text-center text-white">
            <Handshake className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-3">Collaborative Impact</h3>
            <p className="text-teal-50 max-w-3xl mx-auto leading-relaxed">
              Through strategic convergence, PM-AJAY ensures that every intervention is complemented by related schemes, creating a multiplier effect that accelerates comprehensive community development and maximizes the impact of public investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convergence;
