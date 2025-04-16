import { FaLock } from "react-icons/fa";
import {
  MdSecurity,
  MdMonitor,
  MdBusiness,
  MdVisibility,
} from "react-icons/md";

const services = [
  {
    title: "Access Control Security",
    icon: <MdSecurity className="text-4xl text-blue-500" />,
    description:
      "Restricting threats, allowing trust & seamless security at every entry point. Prevent unauthorized access, intrusion, and theft using biometric authentication, keycard entry, turnstiles, and smart surveillance tailored to your needs.",
  },
  {
    title: "Surveillance / Remote Monitoring and Response",
    icon: <MdMonitor className="text-4xl text-blue-500" />,
    description:
      "Watching over, responding fast. Our HD CCTV, AI-driven analytics, and real-time monitoring ensure 24/7 protection and immediate response to threats, no matter where you are.",
  },
  {
    title: "Business Security Solutions",
    icon: <MdBusiness className="text-4xl text-blue-500" />,
    description:
      "Protect your company while you focus on what matters most. We offer network, cloud, application, and web security — all tailored to your business by our expert team.",
  },
  {
    title: "Intelligence and Surveillance",
    icon: <MdVisibility className="text-4xl text-blue-500" />,
    description:
      "Insight-driven security—seeing more, responding faster. Our AI-powered systems and covert surveillance ensure real-time threat detection, analysis, and rapid response with unmatched situational awareness.",
  },
];

const DigitalSecurity = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <FaLock className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Digital Security & Technologies
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Advanced protection for your digital infrastructure and data assets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="shrink-0">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalSecurity;
