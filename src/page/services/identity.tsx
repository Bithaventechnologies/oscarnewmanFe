import { FaIdBadge, FaUserShield } from "react-icons/fa";

const identityServices = [
  {
    title: "ID Management and Background Check",
    icon: <FaIdBadge className="text-4xl text-blue-500" />,
    description:
      "Verify with confidence, secure with certainty. Our solutions include biometric authentication, criminal record checks, employment history verification, and credential validation to ensure only trustworthy individuals gain access to sensitive environments.",
  },
  {
    title: "Talent Risk and Outsourcing Solutions",
    icon: <FaUserShield className="text-4xl text-blue-500" />,
    description:
      "Right talent, zero risk—building security from the inside out. We identify potential workforce security threats, conduct thorough vetting, and provide trained personnel for high-risk roles—ensuring safety, skill, and efficiency.",
  },
];

const Identity = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <FaIdBadge className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Identity & Talent Risk Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Building trust through identity verification and strategic talent
          solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {identityServices.map((service, index) => (
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

export default Identity;
