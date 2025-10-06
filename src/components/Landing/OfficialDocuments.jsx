"use client"

import React from 'react';
import { FileText, Download } from 'lucide-react';

const OfficialDocuments = () => {
  const documents = [
    {
      title: 'PM-AJAY Scheme Guidelines',
      description: 'Complete operational guidelines and implementation framework',
      year: '2024',
      size: '2.4 MB'
    },
    {
      title: 'Annual Report 2024-25',
      description: 'Comprehensive review of scheme performance and achievements',
      year: '2024',
      size: '5.8 MB'
    },
    {
      title: 'Policy Framework Document',
      description: 'Legal mandate and policy directives for implementation',
      year: '2023',
      size: '1.9 MB'
    },
    {
      title: 'Fund Utilization Guidelines',
      description: 'Detailed instructions for fund allocation and disbursement',
      year: '2024',
      size: '1.2 MB'
    },
    {
      title: 'Quarterly Progress Report Q3',
      description: 'Latest quarterly performance metrics and state-wise analysis',
      year: '2025',
      size: '3.1 MB'
    },
    {
      title: 'Ministry Circular 2024-06',
      description: 'Recent policy updates and implementation clarifications',
      year: '2024',
      size: '0.8 MB'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Official Mandate and Guidelines
            </h2>
          </div>
          <p className="text-lg text-gray-600 ml-5">
            Access official documentation, policy frameworks, and performance reports for complete transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {doc.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{doc.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">PDF • {doc.size}</span>
                <button className="flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Complete Document Archive</h4>
              <p className="text-sm text-gray-600 mb-4">
                Access the complete repository of official documents, historical reports, and policy circulars through the National Documentation Portal.
              </p>
              <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                Visit Document Portal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialDocuments;
