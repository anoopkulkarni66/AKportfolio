import React from 'react';
import { User, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and driving meaningful impact through technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <p className="text-gray-600">
              Dedicated to excellence with a strong foundation in problem-solving and innovation.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
            <p className="text-gray-600">
              Focused on delivering results and achieving objectives through strategic thinking.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to maintaining high standards and continuous improvement in all endeavors.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a seasoned Software Engineer with over 8 years of experience in designing, developing, and maintaining scalable software solutions. 
            My expertise spans across full-stack development, cloud technologies, and modern frameworks. I have a proven track record of leading 
            cross-functional teams, mentoring junior developers, and delivering high-quality products that drive business growth. I am passionate 
            about leveraging cutting-edge technologies to solve complex problems and create meaningful user experiences. My approach combines 
            technical excellence with strong communication skills, ensuring successful project delivery and stakeholder satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}