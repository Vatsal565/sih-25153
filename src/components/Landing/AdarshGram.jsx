"use client"

import React, { useState } from 'react';
import { MapPin, CircleCheck as CheckCircle, Info } from 'lucide-react';

const AdarshGram = () => {
  const [selectedState, setSelectedState] = useState(null);

  const stateCoverage = [
    { state: 'Uttar Pradesh', villages: 145, color: '#14B8A6' },
    { state: 'Maharashtra', villages: 98, color: '#10B981' },
    { state: 'Bihar', villages: 112, color: '#3B82F6' },
    { state: 'Rajasthan', villages: 76, color: '#F97316' },
    { state: 'Madhya Pradesh', villages: 89, color: '#9333EA' },
    { state: 'Gujarat', villages: 65, color: '#14B8A6' },
    { state: 'Karnataka', villages: 71, color: '#10B981' },
    { state: 'Tamil Nadu', villages: 58, color: '#3B82F6' }
  ];

  const selectionCriteria = [
    {
      title: 'Population Threshold',
      description: 'Villages with more than 50% Scheduled Caste population as per latest Census data'
    },
    {
      title: 'Critical Gap Assessment',
      description: 'Identification of infrastructure deficits in health, education, sanitation, and connectivity'
    },
    {
      title: 'Geographic Distribution',
      description: 'Ensuring proportional coverage across all districts and administrative blocks'
    },
    {
      title: 'Baseline Survey',
      description: 'Comprehensive socio-economic survey to establish development priorities and intervention points'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Adarsh Gram: Criteria & Coverage
            </h2>
          </div>
          <p className="text-lg text-gray-600 ml-5">
            Transforming villages with significant SC population into model communities through comprehensive development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Selection Criteria</h3>
            </div>
            <div className="space-y-4">
              {selectionCriteria.map((criterion, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{criterion.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{criterion.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">State-wise Coverage</h3>
            </div>
            <div className="space-y-3">
              {stateCoverage.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setSelectedState(item.state)}
                  onMouseLeave={() => setSelectedState(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-semibold text-gray-900">{item.state}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{item.villages}</span>
                      <span className="text-sm text-gray-500">villages</span>
                    </div>
                  </div>
                  {selectedState === item.state && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-600">
                        Declared Adarsh Grams receiving comprehensive infrastructure and welfare coverage
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-teal-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Total Coverage</span>
                <span className="text-3xl font-bold text-teal-600">
                  {stateCoverage.reduce((acc, curr) => acc + curr.villages, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-8 rounded-2xl shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-teal-50">Villages Identified</div>
            </div>
            <div className="text-center border-x-0 md:border-x border-teal-400">
              <CheckCircle className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold mb-2">620</div>
              <div className="text-teal-50">Development Initiated</div>
            </div>
            <div className="text-center">
              <Info className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold mb-2">73%</div>
              <div className="text-teal-50">Average Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdarshGram;
