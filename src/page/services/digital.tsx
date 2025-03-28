import { FaLock } from "react-icons/fa";
// import { MdSecurity, MdDevices } from "react-icons/md";

const DigitalSecurity = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FaLock className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Digital Security & Technologies
        </h1>
        <p className="text-xl text-gray-600">
          Advanced protection for your digital infrastructure and data assets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Similar structure as PhysicalSecurity with digital-focused content */}
        {/* Include sections for Network Security, Cloud Protection, etc. */}
      </div>
    </div>
  );
};

export default DigitalSecurity;
