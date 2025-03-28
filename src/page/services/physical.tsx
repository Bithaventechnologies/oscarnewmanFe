import {
  FaShieldAlt,
  FaUserShield,
  FaBuilding,
  FaVideo,
  FaKey,
} from "react-icons/fa";
import { MdSecurity, MdEventAvailable } from "react-icons/md";

const PhysicalSecurity = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FaShieldAlt className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Physical Security Solutions
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive protection for your facilities, assets, and personnel
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MdSecurity className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Guarding Services</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Armed & unarmed professional officers</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Concierge-style security personnel</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Mobile patrol units with GPS tracking</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Executive Protection</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Discreet close protection teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Travel security and advance planning</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Residential security details</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBuilding className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Access Control</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Biometric entry systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Visitor management solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Turnstiles and mantraps</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MdEventAvailable className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Event Security</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Crowd management specialists</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Baggage and personnel screening</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Emergency medical teams</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">
          Our Physical Security Advantage
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <FaVideo className="text-blue-600 mt-1 mr-3" />
            <div>
              <h4 className="font-medium">Smart Surveillance</h4>
              <p className="text-gray-700">
                AI-powered camera systems with facial recognition and anomaly
                detection
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaKey className="text-blue-600 mt-1 mr-3" />
            <div>
              <h4 className="font-medium">Proprietary Protocols</h4>
              <p className="text-gray-700">
                Custom security procedures developed through military and
                intelligence experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalSecurity;
