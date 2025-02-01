import React from "react";
import { Element } from "react-scroll";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";
import sec from "../../assets/sec.png";
import illustration from "../../assets/illustration.png";

interface ServiceItem {
  text: string;
}

const services: ServiceItem[] = [
  { text: "Security Risk assessment and analysis for sites and systems." },
  {
    text: "Corporate/business Security risk analysis /Penetration testing.Security Risk mapping and risk mitigation designs.",
  },
  { text: "Security Risk design implementation supervision." },
  { text: "Security Management Trainings." },
];

const About: React.FC = () => {
  return (
    <Element name="about">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('../image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1841] to-[#0c1841]/90" />
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white relative"
          >
            <h2 className="text-orange-300 font-semibold text-xl mb-4">
              ABOUT US
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              We Are Your Security Risk Management Company Of Choice. Oscar
              Newman Concept Limited, established in 2013, brings together
              seasoned security practitioners and investors to address growing
              security challenges with innovative solutions.
            </p>
            <button className="bg-orange-500 hover:bg-transparent border-2 border-orange-500 px-8 py-3 rounded-lg transition-all duration-300">
              Learn more
            </button>
          </motion.div>
        </div>
      </section>

      {/* Uniqueness Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-semibold text-xl mb-3">
            OUR UNIQUENESS
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={sec}
              alt="Security"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-orange-500 font-semibold">
              Our uniqueness in Guard provision is visibly demonstrated through
              comprehensive protection solutions.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Each guard and site is connected to a 24-hour Command and
                Control Centre with rapid response capability.
              </p>
              <p>
                All guards undergo thorough vetting, de-risking, and
                fingerprinting through our enterprise resource software.
              </p>
              <p>
                Guards receive training at our Security College in modern crime
                prevention techniques.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Advisory Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={illustration}
            alt="Security Illustration"
            className="hidden lg:block w-full max-w-md mx-auto"
          />

          <div className="space-y-8">
            <div>
              <h2 className="text-orange-500 font-semibold text-xl mb-3">
                Security Risk Advisory
              </h2>
              <div className="w-20 h-1 bg-orange-500" />
            </div>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-gray-700"
                >
                  <GiCheckMark className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{service.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
