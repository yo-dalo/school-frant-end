import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Footer = () => {
  const { resBranchInfo, quickLinks = [] } = useAuth(); 
  // ↑ Ideally fetch or provide quickLinks in AuthContext (or via prop / separate hook)

  // If quickLinks is not yet in context, you can fallback to empty array
  // In real app → fetch them in useEffect or via dedicated data hook

  return (
    <footer className="bg-main w-full overflow-hidden text-white py-16 px-6 md:px-10">
      {/* Top Title */}
      <div className="flex items-center justify-center gap-6 mb-16">
        <div className="flex-1 h-px bg-white/50"></div>
        <h2 className="text-2xl font-light">our footer</h2>
        <div className="flex-1 h-px bg-white/50"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Contact Us - currently empty → you can add more fields here */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          {/* Add phone, email, social links, timing etc. if needed */}
        </div>

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={
                resBranchInfo?.Logo_Url
                  ? `/uploads/${resBranchInfo.Logo_Url}`
                  : "/img/logo/logo.png"
              }
              alt={resBranchInfo?.School_Name || "Yaduvanshi Degree College"}
              className="w-24 h-auto md:w-40 lg:w-56 object-contain"
            />
          </div>
          <p className="text-lg leading-relaxed text-white/90">
            Yaduvanshi Degree College, Mahendergarh is among the top residential
            Colleges in India. It was established under the aegis of ‘Rao
            Chiranji Lal Samriti Jan Seva Trust, Mahendergarh...
          </p>
        </div>

        {/* Right Column - Address + Quick Links */}
        <div className="space-y-10">
          {/* Address */}
          <ul className="space-y-2 text-lg">
            <li>Address : {resBranchInfo?.Address || "—"}</li>
            <li>
              District - {resBranchInfo?.City || "—"}, PIN - {resBranchInfo?.Pin_Code || "—"}
            </li>
            <li>Call Us : +91 {resBranchInfo?.Alternate_Phone || "—"}</li>
            <li>Email : {resBranchInfo?.Email || "—"}</li>
          </ul>

          {/* Dynamic Quick Links */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Quick Links</h3>
            {quickLinks.length > 0 ? (
              <ul className="space-y-2 text-lg">
                {quickLinks
                  .filter(link => link.Is_Active === "active" || link.Is_Active === true)
                  .sort((a, b) => a.Index_No - b.Index_No) // sort by Index_No
                  .map((link) => (
                    <li key={link.Id}>
                      <Link
                        to={link.Url.trim().toLowerCase() === "home" ? "/" : `/${link.Url.trim().toLowerCase()}`}
                        className="hover:text-white/70 transition-colors underline-offset-4 hover:underline"
                      >
                        {link.Name.trim()}
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-white/60 italic">No quick links available</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;