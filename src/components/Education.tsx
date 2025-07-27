import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2015 - 2017',
      gpa: '3.8/4.0',
      achievements: [
        'Graduated Magna Cum Laude',
        'Research in Machine Learning and AI',
        'Teaching Assistant for Data Structures course',
        'Published paper on distributed systems'
      ]
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'State University',
      location: 'Chicago, IL',
      period: '2011 - 2015',
      gpa: '3.6/4.0',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Club',
        'Winner of Annual Hackathon 2014',
        'Internship at Fortune 500 company'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      year: '2021'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning through professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="text-blue-600 font-medium mb-3">{edu.school}</div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                    <div className="font-medium text-gray-900">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Continuous Learning</h4>
              <p className="text-gray-700 mb-4">
                Committed to staying current with industry trends and emerging technologies through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Online courses and workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Technical conferences and meetups</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Open source contributions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional development programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}