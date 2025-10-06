"use client"

import React from 'react';
import { Phone, Mail, MessageSquare, FileText, Clock, MapPin } from 'lucide-react';

const Helpdesk = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'National Helpline',
      primary: '1800-XXX-XXXX',
      secondary: 'Toll-Free | Available 24/7',
      color: '#3B82F6'
    },
    {
      icon: Mail,
      title: 'Email Support',
      primary: 'support@pmajay.gov.in',
      secondary: 'Response within 48 hours',
      color: '#10B981'
    },
    {
      icon: MessageSquare,
      title: 'Grievance Portal',
      primary: 'grievance.pmajay.gov.in',
      secondary: 'Track complaint status online',
      color: '#F97316'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday & Holidays', hours: 'Closed (Emergency helpline active)' }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Public Helpdesk & Feedback
            </h2>
          </div>
          <p className="text-lg text-gray-600 ml-5">
            We are committed to transparency and accountability. Reach out for information, support, or to register grievances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: method.color + '15' }}
              >
                <method.icon className="w-7 h-7" style={{ color: method.color }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-xl font-bold text-gray-900 mb-2">{method.primary}</p>
              <p className="text-sm text-gray-600">{method.secondary}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-100">
                  <span className="font-semibold text-gray-900">{schedule.day}</span>
                  <span className="text-gray-700">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Headquarters</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">PM-AJAY National Coordination Cell</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ministry of Social Justice and Empowerment<br />
                  Shastri Bhawan, Dr. Rajendra Prasad Road<br />
                  New Delhi - 110001, India
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
                <p className="text-sm font-medium text-gray-700">
                  For state-specific queries, please contact your State Nodal Officer through the helpline or email
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <FileText className="w-10 h-10 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">Grievance Redressal System</h3>
              <p className="text-teal-50 leading-relaxed mb-4">
                Our dedicated grievance portal ensures every concern is addressed promptly and transparently. All complaints are tracked with unique IDs and escalation protocols ensure resolution within stipulated timelines.
              </p>
              <button className="bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors">
                Register Grievance
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-teal-50">Resolution Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">7 Days</div>
                <div className="text-sm text-teal-50">Avg. Response Time</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">5,200+</div>
                <div className="text-sm text-teal-50">Queries Resolved</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">4.7/5</div>
                <div className="text-sm text-teal-50">Satisfaction Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Public Feedback Mechanism</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Your feedback helps us improve program implementation and delivery. Share your suggestions, report issues, or appreciate good work by field teams through our feedback portal. All submissions are reviewed by senior officials and contribute to policy refinement.
              </p>
              <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                Submit Feedback →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helpdesk;
