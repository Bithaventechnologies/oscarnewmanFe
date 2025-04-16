import {
  FaBalanceScale,
  FaHardHat,
  FaUserShield,
  FaShieldAlt,
  FaExclamationTriangle,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Risk Assessment & Management",
    icon: <FaBalanceScale className="text-4xl text-blue-600" />,
    description:
      "Anticipating the Threat. Neutralizing the Risk. We conduct in-depth evaluations across physical, operational, and digital domains, offering strategic solutions to minimize vulnerabilities and ensure informed decision-making.",
  },
  {
    title: "Physical Security Consultancy",
    icon: <FaHardHat className="text-4xl text-blue-600" />,
    description:
      "Building Safer Spaces, One Layer at a Time. Our experts design secure physical environments through security architecture, perimeter defense, and advanced surveillance strategies tailored to your operations.",
  },
  {
    title: "Cyber Security Advisory",
    icon: <FaUserShield className="text-4xl text-blue-600" />,
    description:
      "Smart Defense for a Smarter World. We analyze your cyber posture and deliver expert guidance on strengthening data security, network protection, and cyber resilience.",
  },
  {
    title: "Crisis & Emergency Management",
    icon: <FaExclamationTriangle className="text-4xl text-blue-600" />,
    description:
      "Prepared for the Worst. Equipped for the Unexpected. From disaster planning to response drills, we ensure your people and systems are ready to act swiftly and effectively.",
  },
  {
    title: "Security Policy & Compliance Advisory",
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    description:
      "Policies that Protect. Compliance that Counts. We help craft security policies and conduct audits to ensure compliance with standards like ISO/IEC and GDPR.",
  },
  {
    title: "Specialized Security Solutions",
    icon: <FaTools className="text-4xl text-blue-600" />,
    description:
      "Custom Solutions for Critical Security. Tailored for high-risk or sensitive operations — from secure comms and surveillance to anti-intrusion and intelligence systems.",
  },
];

const SecureRisk = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Strategic Risk & Security Advisory
        </h2>
        <p className="text-lg text-gray-600">
          Comprehensive advisory and bespoke security solutions to manage risk,
          ensure compliance, and fortify operations.
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

export default SecureRisk;
