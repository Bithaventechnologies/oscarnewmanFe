const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="abouthero bg-gradient-to-r from-blue-900 to-blue-800 bg-cover bg-center">
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
            </div>
          </div>
        </div>
      </div>
      {/* Our Founders Section */}
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
      <div className="space-y-12">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="w-full lg:w-1/2 p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {founder.name}
              </h3>
              <p className="text-gray-700">{founder.description}</p>
            </div>
            <div className="w-full lg:w-1/2 p-6 flex justify-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-lg shadow-xl w-80 h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <VisionMissionValues />
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
      ;
    </div>
  );
};

const VisionMissionValues = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
        Our Vision, Mission & Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Our Vision */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-blue-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be the leading security solutions provider, leveraging technology
            to create a safer world for individuals and businesses.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-green-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To provide innovative, technology-driven security solutions tailored
            to meet the evolving needs of our clients.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-yellow-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h3>
          <p className="text-gray-600">
            Integrity, Excellence, Innovation, and Commitment to Security.
          </p>
        </div>
      </div>
    </div>
  );
};

const founders = [
  {
    name: "Engr. Temitope Adebayo",
    description: `Engr. Tope worked for 21 years and resigned as a director in Halogen Security, he is a highly 
proficient and resourceful Business Manager, as well as a professional security consultant 
with good pedigree.
He has worked extensively on Security operations and security risk process designs for global 
brands such as BAT, MTN, Chevron, Agip, UNICEF, FHI 360, Doctors without borders, Standard 
Chartered, Bank Motorola, Stanbic IBTC, DHL to mention a few.
He also worked in all the 6 geopolitical zones of the country and proffered pragmatic, 
credible solutions to peculiar security challenges across all the sectors of the economy.
He has various experiences and exposure in security and safety systems in 4 continents (Asia, 
Africa, Europe and America) spanning over 25 years.
He is the Founder and CEO of Oscar Newman Concept Limited and his vision is to democratize 
security and safety in Nigeria, within the shortest possible time, using technology as an 
enabler.
He is a member of several professional groups including: 
- American Society for industrial security (ASIS)
- Fellow Occupational Health and safety Association (FOSHA)
- Fellow Charted institute of administrators (FCIA)
- Member Nigerian Institute of Management (MNIM)
- Fellow Institute of Management consultants (FIMC)
- Certified Management consultant (CMC)
- Member International Organization for Black security Executives (MIOBSE)
- Member Institute of Engineers and technologist (MIET)
- Member Institute of Risk Management (UK)
`,
    image: "/images/temitope.jpg",
  },
  {
    name: "Dr. Dapo Odulaja",
    description: `Dr Dapo has gathered over forty years experience as a professional, this has enabled him
to develop the necessary skills and knowledge required for working with different groups of
individuals of diverse culture and background across national and international
organizations, as well as government agencies in the areas of data analytics, education,
and management. He bagged a PhD in Statistics from the University of Ibadan, Nigeria, and
MBA from Webster University, Vienna, Austria.
He was a Chief of Staff to a former Minister of State for Petroleum Resources, as well as a
Special Adviser on International Energy Relations to the Minister. He also represented
Nigeria on the Board of the Organization of the Petroleum Exporting Countries (OPEC), and
was one time member of the Board’s Audit committee.
He previously worked as the Head of Data Services Department at OPEC, Vienna, Austria,
where I was also a member of management of the Organization. He was credited to have
improved the quality of data at the Organization, improved data transparency and led the
development of the first OPEC Smart APPS.
 He has worked with the United Nations International Atomic Energy Agency (IAEA), Vienna,
Austria. My duties at IAEA included development of concepts for safeguarding nuclear
material worldwide.
He is well travelled, a man well respected in the oil and gas sector for his integrity and 
dedication to duty.
He is currently playing the advisory role in matters relating to Oil and gas sector for Oscar `,
    image: "/images/dapo.jpg",
  },
  {
    name: "Prof. Sola Adesope",
    description: `Professor O Adesope is a distinguished multiple awardee from Washington State 
University, USA. He has worked extensively in Nigeria, America, and Europe.
A first class student in Computer Science from Nigeria and an outstanding professor in 
education strategy, development and policies in USA.
He is a member of several professional Association:
- American Educational Research Association (AERA)
- American Psychological Association (education Psychology)
-Canadian Society for the study of Education (CSSE)
 - Canadian Association of educational Psychology (CAEP) 
- Technology and Teacher Education (TATE)
-Association for the advancement of computing in Education(AACE)
- Canadian Institute for Distance Education Research (CIDER)
He holds membership of several editorial boards such as:
- Associate editor - Journal of Educational Psychology
- Senior Associate Editor - Journal of Engineering Psychology 
- Review of Educational Psychology research
-Frontiers in Educational Psychology`,
    image: "/images/sola.jpg",
  },
  {
    name: "Major General Mohammed Magoro (Rtd.)",
    description: `A retired Military General who was a former Minister of Transport, as well as 
former Minister of Internal Affairs.
A prominent member of the SMC under the military rule of 1985.
He later became the MD of National Shipping Line, Nigerian Railway, Nigerian Port 
Authority.
After his retirement, he became Chairman of the OANDO group and Ocean and 
Oil services limited.
General Magoro rtd. was once a Senator of the Kebbi state house of Assembly.
He is our go-to- person in areas of government and Military defence matters..
`,
    image: "/images/magoro.jpg",
  },
  {
    name: "Patrick Esteve",
    description: `Patrick served for 26 years in the French Army including 2 years as LNO attached to US 
Marine Corps).
He has over 15 years experience as Security Manager, audit consultant, security 
trainer.
He has worked on Global Brands developing Security Policy for Société générale (for 
expatriates and travelers).
AXA Group Solutions (with specific measures for travelers).
He has provided Risk assessment services across several continents as follows:
-Risk assessment for 3 companies in France (Alstom transport, Alstom R§D and 
William Saurin).
-Risk assessment and evacuation plan for 4 firms (Ivory Coast, Nigeria, Egypt and 
Mali).
-Risk assessment for various French firms (Algeria, Nigeria, Liberia, Bissau Guinea, 
Gambia).
-Risk assessment and daily situation report (4 locations in Saudi Arabia). 
-Security assessment for offices( bank and defense industry) and for expatriates 
houses (for two firms in Saudi Arabia).
-Implementation and management of security for various firms (Pakistan and 
Nigeria).
-Security assessment and management of security for one site and one roadwork 
(3000 workers, 40 expatriates), in Algeria and Mali.`,
    image: "/images/patrick.jpg",
  },
  {
    name: "Navy Commodore Etim Eefiong (Rtd.)",
    description:
      "He retired from the Navy in 2016 as Navy Commodore. He has served for over 30 years in the Military, led several operations in Bayelsa, Rivers state and Lagos. He is a well-disciplined officer with eyes for details and focus on efficiency. After his retirement, he attended the Lagos Business school, where he was exposed to principles regarding business and civil relationship. He is well suited to handle our land and maritime security operations, as well as physical training for the guarding unit. He is married with Children.",
    image: "/images/etim.jpg",
  },
];

export default AboutUs;
