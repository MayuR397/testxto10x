import React from "react";
import { FaLinkedin, FaGithub, FaTelegramPlane, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Motivational Text */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#9E2A2F] mb-4">
            Ready to take the challenge?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Hackathons are more than just competitions. They are a journey to
            unleash your creativity, learn, grow, and be part of something big!
            Embrace the challenge and let’s build the future together.
          </p>
          <a
            href="#"
            className="bg-[#9E2A2F] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#D12B2F] transition duration-300"
          >
            Join the Hackathon Today!
          </a>
        </div>

        {/* Links and Social Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
          {/* Column 1: Courses */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9E2A2F]">Masai Courses</h4>
            <ul>
              <li><a href="#" className="hover:text-[#9E2A2F]">Software Development</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Data Science</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Business Analytics</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Column 2: Success Stories and Team */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9E2A2F]">Our Team</h4>
            <ul>
              <li><a href="#" className="hover:text-[#9E2A2F]">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Our Team</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Careers</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Masai Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9E2A2F]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com" target="_blank" className="text-gray-700 hover:text-[#9E2A2F]">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" className="text-gray-700 hover:text-[#9E2A2F]">
                <FaGithub size={24} />
              </a>
              <a href="https://www.facebook.com" target="_blank" className="text-gray-700 hover:text-[#9E2A2F]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-gray-700 hover:text-[#9E2A2F]">
                <FaInstagram size={24} />
              </a>
              <a href="https://t.me/masai" target="_blank" className="text-gray-700 hover:text-[#9E2A2F]">
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Additional Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9E2A2F]">Additional Links</h4>
            <ul>
              <li><a href="#" className="hover:text-[#9E2A2F]">About Us</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Referral Program</a></li>
              <li><a href="#" className="hover:text-[#9E2A2F]">Masai Learn</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-12 text-sm text-gray-600">
          <p>
            COPYRIGHT © NOLAN EDUTECH PRIVATE LIMITED. ALL RIGHTS RESERVED
          </p>
          <p className="mt-2">
            Address: Masai, IncubexHSR21, No 1178, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka 560102
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
