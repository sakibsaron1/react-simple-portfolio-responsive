import React from "react";

const Footer = () => {
  return (
    <div className="footer-area bg-black mt-20 py-20">
      <div className="container">
        <div className="grid grid-cols-4">
          <div className="footer-text text-middle">
            <h3 className="text-white font-semibold">
              Design By :<br /> Sakib Ahmed Saron
            </h3>
          </div>
          <div className="footer-text text-middle">
            <h3 className="text-white font-semibold">
              Address : <br /> Dhaka,
               1229 Vatara, BD
            </h3>
          </div>
          <div className="footer-text text-middle">
            <h3 className="text-white font-semibold">
              Email :<br /> sakibahcoder@gmail.com
            </h3>
          </div>
          <div className="footer-text">
            <h3 className="text-white font-semibold">
              Phone :<br /> +88 017002233366
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
