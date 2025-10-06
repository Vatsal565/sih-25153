"use client"

import React from 'react';
import { Award, TrendingUp, Heart, GraduationCap } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      title: 'Anganwadi Centers Transform Rural Healthcare',
      location: 'Sitapur District, Uttar Pradesh',
      impact: '45 new centers serving 8,500+ children',
      description: 'Construction of modern Anganwadi centers with proper sanitation, nutrition facilities, and trained staff has dramatically improved child health indicators in SC-dominated villages.',
      icon: Heart,
      color: '#10B981',
      image: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg'
    },
    {
      title: 'Skill Development Creates Livelihood Opportunities',
      location: 'Nashik Region, Maharashtra',
      impact: '2,300+ youth trained and employed',
      description: 'Industry-aligned skill training programs in textile, electronics, and hospitality sectors have enabled SC youth to secure sustainable employment with reputed organizations.',
      icon: TrendingUp,
      color: '#3B82F6',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg'
    },
    {
      title: 'Education Infrastructure Boosts School Enrollment',
      location: 'Bikaner Division, Rajasthan',
      impact: '85% increase in SC enrollment',
      description: 'New classrooms, libraries, and digital learning centers in 28 villages have reversed dropout trends and improved learning outcomes for Scheduled Caste students.',
      icon: GraduationCap,
      color: '#F97316',
      image: 'https://images.pexels.com/photos/8500375/pexels-photo-8500375.jpeg'
    },
    {
      title: 'Road Connectivity Transforms Village Economy',
      location: 'Bastar Region, Chhattisgarh',
      impact: '120 km of all-weather roads',
      description: 'Connecting 18 remote SC-majority villages to district headquarters has enabled market access for agricultural produce and improved emergency healthcare access.',
      icon: Award,
      color: '#9333EA',
      image: 'https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Impact on Ground: Success Stories
            </h2>
          </div>
          <p className="text-lg text-gray-600 ml-5">
            Real transformation in communities through targeted interventions and comprehensive development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: story.color }}
                  >
                    <story.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{story.location}</p>
                </div>

                <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
                  <p className="text-sm font-bold text-teal-900">{story.impact}</p>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {story.description}
                </p>

                <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                  Read Complete Story →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Success Stories
          </button>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">350+</div>
              <div className="text-sm text-gray-600">Infrastructure Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">10L+</div>
              <div className="text-sm text-gray-600">Direct Beneficiaries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Target Achievement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">28</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
