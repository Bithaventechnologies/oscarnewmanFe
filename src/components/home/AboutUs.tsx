import {
  Shield,
  Truck,
  Users,
  Target,
  Monitor,
  Brain,
  ChevronRight,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className=" abouthero bg-gradient-to-r from-blue-900 to-blue-800 bg-cover bg-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 text-white p-12 lg:p-20">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Oscar Newman Concept Limited
              </h1>
              <p className="text-xl mb-8">
                Transforming security landscapes since 2013 with innovative
                solutions and unwavering commitment.
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Learn More <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Founding Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Our Founding
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Oscar Newman Concept Limited's overarching objective is to deliver
          reliable and quality solutions, leveraging technology as an enabler to
          convert the Security risk environment into one free of anxieties.
          Oscar Newman Concept Limited employs Enterprise Security Risk
          Management ideas and ways to democratize peace of mind and achieve
          positive inclusion for all people, corporate and individual.
        </p>
        <p className="text-lg text-gray-700">
          Oscar Newman Concept Limited has worked in various sectors of the
          economy, including oil and gas, hospitality, education, financial
          institutions, religious, retail, government, transportation, real
          estate, manufacturing, agriculture, maritime, entertainment, and
          media. We are devoted to providing exceptional services and quality
          products that secure our clients' assets and things that are important
          to them on a regular and ongoing basis.
        </p>
      </div>
      {/* Legal Operating Document Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Legal Operating Document
        </h2>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/600/400"
            alt="Legal Document"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      ;{/* Services Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Shield className="w-8 h-8 text-blue-600" />}
            title="Security Guards"
            description="24/7 command center-connected guards, fully vetted and trained in modern crime prevention techniques."
            image="/api/placeholder/400/300"
          />
          <ServiceCard
            icon={<Target className="w-8 h-8 text-blue-600" />}
            title="Risk Advisory"
            description="Comprehensive security risk assessment and analysis for sites, systems, and businesses."
            image="/api/placeholder/400/300"
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8 text-blue-600" />}
            title="Safe Travels"
            description="Professional escort services including VVIP protection and cargo escorts."
            image="/api/placeholder/400/300"
          />
          <ServiceCard
            icon={<Users className="w-8 h-8 text-blue-600" />}
            title="Secured Events"
            description="Complete event security solutions with advanced ID management and access control."
            image="/api/placeholder/400/300"
          />
          <ServiceCard
            icon={<Monitor className="w-8 h-8 text-blue-600" />}
            title="Electronic Security"
            description="Integrated IP cameras, surveillance systems, and IoT-based access control solutions."
            image="/api/placeholder/400/300"
          />
          <ServiceCard
            icon={<Brain className="w-8 h-8 text-blue-600" />}
            title="Cybersecurity"
            description="Enterprise-grade cyber protection and data security solutions."
            image="/api/placeholder/400/300"
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutUs;
