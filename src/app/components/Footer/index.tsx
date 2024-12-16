"use client";

import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-10 max-w-[1050px]">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-5">
            <h1
              className="text-2xl font-bold"
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "0.1px",
                color: "#252B42",
              }}
            >
              Bandage
            </h1>
            <div className="flex gap-5">
              <FaFacebook className="text-gray-600" size={24} color="#23A6F0" />
              <FaInstagram className="text-gray-600" size={24} color="#23A6F0" />
              <FaTwitter className="text-gray-600" size={24} color="#23A6F0" />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 mb-10">
          {/* Company Info */}
          <div className="w-full sm:w-[148px]">
            <h5 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', color: '#252B42' }}>Company Info</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Career</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">We are hiring</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-[148px]">
            <h5 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', color: '#252B42' }}>Legal</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="w-full sm:w-[148px]">
            <h5 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', color: '#252B42' }}>Features</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">User Analytics</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Live Chat</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Unlimited Support</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-[148px]">
            <h5 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', color: '#252B42' }}>Resources</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">iOS and Android</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Watch a Demo</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Customers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">API</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full sm:w-[148px]">
            <h5 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', color: '#252B42' }}>Get in Touch</h5>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-l-md p-2 flex-1"
                  required
                />
                <button type="submit" className="bg-[#23A6F0] text-white rounded-r-md p-2">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center py-4">
          <p
            className="text-center"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#737373",
            }}
          >
            Made With Love By Finland. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
