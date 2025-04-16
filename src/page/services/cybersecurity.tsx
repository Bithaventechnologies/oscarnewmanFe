import {
  FaShieldAlt,
  FaBug,
  FaExclamationCircle,
  FaLaptopCode,
  FaUserSecret,
  FaNetworkWired,
} from "react-icons/fa";

const services = [
  {
    title: "Security Operation Center (SOC)",
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    description:
      "Your 24/7 Digital Watchtower. Our SOC services offer real-time monitoring, AI-powered threat detection, and incident response to secure your digital environment around the clock.",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    icon: <FaBug className="text-4xl text-blue-600" />,
    description:
      "Expose the Weakness. Fortify the Strength. Simulate real-world attacks to identify security flaws and receive actionable insights to strengthen your systems.",
  },
  {
    title: "Incident Report",
    icon: <FaExclamationCircle className="text-4xl text-blue-600" />,
    description:
      "Documenting the Breach. Driving the Response. Our detailed reports provide root cause analysis, response insights, and future prevention strategies.",
  },
  {
    title: "Cybersecurity Awareness Program",
    icon: <FaUserSecret className="text-4xl text-blue-600" />,
    description:
      "Informed Teams Are the First Line of Defense. Empower your team with real-world threat simulations and interactive learning to foster a security-first culture.",
  },
  {
    title: "Cybersecurity Training",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    description:
      "From Basic to Advanced – We Build Cyber Defenders. Learn ethical hacking, incident response, and secure coding through expert-led sessions aligned with global standards.",
  },
  {
    title: "Endpoint Security",
    icon: <FaNetworkWired className="text-4xl text-blue-600" />,
    description:
      "Secure Every Device. Protect Every Access Point. Defend all user devices with real-time monitoring, encryption, and malware protection, even beyond your core network.",
  },
];

const Cybersecurity = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Cybersecurity Services
        </h2>
        <p className="text-lg text-gray-600">
          Proactive defense solutions to protect your digital infrastructure,
          data, and people.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cybersecurity;
