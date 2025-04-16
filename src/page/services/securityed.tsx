import { FaUserTie, FaShieldAlt } from "react-icons/fa";

const trainings = [
  {
    title: "Corporate & Organizational Security Training",
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    description:
      "Empowering organizations, strengthening security—one training at a time. Our corporate training covers workplace awareness, insider threat detection, fraud prevention, and emergency response, ensuring staff are prepared for modern threats.",
  },
  {
    title: "Physical Security Training",
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    description:
      "Trained to protect, prepared for anything. From access control and perimeter security to surveillance ops and defensive tactics, our physical security training prepares personnel for real-world protection challenges.",
  },
];

const SecurityEd = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Security Education & Training
        </h2>
        <p className="text-lg text-gray-600">
          Equip your team with the knowledge and confidence to prevent, detect,
          and respond to security threats.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0">{training.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {training.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {training.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityEd;
