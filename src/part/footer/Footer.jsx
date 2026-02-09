import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-main w-fit  overflow-hidden selection: text-white py-16 px-10">
      {/* Top Title */}
      <div className="flex items-center   justify-center gap-6 mb-16">
        <div className="flex-1 h-px bg-white/50"></div>
        <h2 className="text-2xl font-light">our footer</h2>
        <div className="flex-1 h-px bg-white/50"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 phone:grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {/* Contact Us */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
        </div>

        {/* Logo + Description */}
        <div>
          <div className="flex  items-center gap-4 mb-6">
            <img
              src="/img/logo/logo.png"
              alt="Yaduvanshi"
              className="w-30 h-fit md:w-30 md:w-56 object-cover"
            />
          
          </div>
          <p className="text-lg leading-relaxed text-white/90">
            Yaduvanshi Degree College, Mahendergarh is among the top residential
            Colleges in India. It was established under the aegis of ‘Rao
            Chiranji Lal Samriti Jan Seva Trust, Mahendergarh...
          </p>
        </div>

        {/* Right Links */}
        <div className="space-y-10">
          {/* Address */}
          <ul className="space-y-2 text-lg">
            <li>Address : Bucholi Road, Mahendergarh</li>
            <li>District- Mahendergarh, PIN-123029</li>
            <li>Call Us : +91 8607062323, +91 8607062424, +91 9729429766</li>
            <li>Email : ydcmhg@gmail.com</li>
          </ul>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-lg underline">
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/"}>Profile</Link></li>
              <li><Link to={"/"}>Gallery</Link></li>
              <li><Link to={"/"}>Course Offered</Link></li>
              <li><Link to={"/"}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
