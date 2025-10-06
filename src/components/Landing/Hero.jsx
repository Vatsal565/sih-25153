"use client"

import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-teal-600" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              PM-AJAY
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
            Pradhan Mantri Anusuchit Jaati Abhyuday Yojana
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive national initiative for the socio-economic development of Scheduled Caste communities through strategic gap-filling interventions in critical infrastructure and welfare schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Poverty Alleviation</h3>
            <p className="text-gray-600 leading-relaxed">
              Bridging critical gaps in livelihood, skill development, and economic empowerment programs for Scheduled Caste households.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <Users className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Adarsh Gram</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive development of villages with more than 50% SC population into model communities with complete infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <Shield className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Convergence Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic coordination with other Central and State schemes to maximize impact and ensure comprehensive coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
