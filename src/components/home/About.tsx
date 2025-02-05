import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  LucideIcon,
  ShieldCheck,
  Target,
  Award,
  Globe,
  Zap,
  Users,
} from "lucide-react";

import sec from "../../assets/sec.png";
import teaching from "../../assets/teaching.jpg";
import ourstaff from "../../assets/ourr.jpg";
import otherstauff from "../../assets/others.jpg";
import Youngstaff from "../../assets/youngstaff.jpg";

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
  imageRight?: boolean;
  icons?: LucideIcon[];
  specialText?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  image,
  imageRight = true,
  icons = [],
  specialText,
}) => {
  const ContentSection = () => (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col justify-center space-y-6"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
      {specialText && (
        <p className="text-orange-600 font-semibold text-lg">{specialText}</p>
      )}
      <p className="text-gray-700 leading-relaxed">{description}</p>
      {icons.length > 0 && (
        <div className="flex space-x-4 pt-4">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition-all"
            >
              <Icon className="text-blue-700" size={24} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="container mx-auto px-6 py-16">
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          imageRight ? "flex-row-reverse" : ""
        }`}
      >
        {imageRight ? (
          <>
            <ContentSection />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <ContentSection />
          </>
        )}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Element name="about" className="bg-gray-50">
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 24, 65, 0.9), rgba(12, 24, 65, 0.9)), url('../image.jpg')",
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white space-y-6"
          >
            <h1 className="text-4xl font-bold text-orange-300 mb-4">
              Oscar Newman Concept Limited
            </h1>
            <p className="text-xl leading-relaxed">
              A pioneering <strong>security risk management firm</strong>{" "}
              established in 2013, blending seasoned expertise with the dynamic
              energy of young professionals. We deliver comprehensive security
              solutions that combine traditional security wisdom with innovative
              technological approaches.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg transition-all">
                Our Services
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection
        title="Comprehensive Guard Provision"
        description="Our security guards represent a perfect blend of experienced leadership and youthful innovation. Connected to a 24-hour Command and Control Centre, each team combines seasoned professionals with energetic young talent, ensuring dynamic and adaptive security solutions."
        image={sec}
        imageRight={true}
        icons={[ShieldCheck, Target, Award]}
        specialText="Experience Meets Innovation"
      />

      <AboutSection
        title="Advanced Security Training"
        description="We cultivate the next generation of security professionals through cutting-edge training programs. Our curriculum empowers young talents with advanced skills in emergency response, cyber threat management, surveillance techniques, and innovative security technologies."
        image={teaching}
        imageRight={false}
        icons={[Globe, Zap]}
      />

      <AboutSection
        title="Young and Diverse Workforce"
        description="Our team embodies the future of security – young, diverse, and technology-driven. We recruit top talent, providing them with opportunities to grow, innovate, and transform the security landscape with fresh perspectives and advanced technological skills."
        image={Youngstaff}
        imageRight={true}
        icons={[Users, Zap]}
        specialText="Empowering the Next Generation of Security Professionals"
      />

      <AboutSection
        title="Continuous Innovation"
        description="We are committed to staying ahead of emerging security threats through continuous learning and technological advancement. Our young professionals bring fresh insights, technological prowess, and adaptive thinking to develop next-generation security solutions."
        image={otherstauff}
        imageRight={false}
        icons={[Award, Target]}
      />

      <AboutSection
        title="Technology-Driven Security"
        description="Leveraging the digital native skills of our young workforce, we integrate advanced technologies like AI, machine learning, and real-time data analytics into our security strategies. Our approach ensures proactive, intelligent, and adaptive security solutions."
        image={ourstaff}
        imageRight={true}
        icons={[Zap, ShieldCheck]}
        specialText="Digital Natives, Cutting-Edge Solutions"
      />
    </Element>
  );
};

export default About;
