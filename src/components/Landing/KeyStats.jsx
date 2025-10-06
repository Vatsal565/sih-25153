"use client"

import React from 'react';
import { Building, Layers, Users, MapPin } from 'lucide-react';

const KeyStats = () => {
  const stats = [
    { icon: Building, value: '28', label: 'States Participating', color: '#3B82F6' },
    { icon: Layers, value: '520+', label: 'Active Projects', color: '#10B981' },
    { icon: Users, value: '10L+', label: 'Beneficiaries Reached', color: '#F97316' },
    { icon: MapPin, value: '850+', label: 'Adarsh Grams', color: '#14B8A6' }
  ];

  return (
    <section className="bg-white py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">National Impact</h2>
          <p className="text-lg text-gray-600">Real-time progress across the nation</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: stat.color + '15' }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
