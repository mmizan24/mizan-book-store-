"use client";

import React from 'react';
import Link from 'next/link';
import {
    Share2,
    Globe,
    Mail,
    Phone,
    MapPin
} from 'lucide-react'; // Using lucide-react for consistent iconography

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4 tracking-tight">Naira Book House</h3>
                        <p className="text-sm leading-relaxed">
                            Your one-stop destination for all your reading needs. Explore our vast collection of books across genres and discover your next great read with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href={"/"} className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href={"/allbooks"} className="hover:text-white transition-colors">All Books</Link></li>
                            <li><Link href={"/rejister"} className="hover:text-white transition-colors">Registration</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="p-2 bg-slate-800 rounded-md hover:bg-blue-600 hover:text-white transition-all">
                                <Share2 size={18} />
                            </a>
                            <a href="https://twitter.com" className="p-2 bg-slate-800 rounded-md hover:bg-sky-500 hover:text-white transition-all">
                                <Globe size={18} />
                            </a>
                            <a href="https://linkedin.com" className="p-2 bg-slate-800 rounded-md hover:bg-blue-700 hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div id="contact-us">
                        <h4 className="text-white text-sm font-semibold uppercase mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-blue-400 shrink-0" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-blue-400 shrink-0" />
                                <span>+880-XXXX-XXXXXX</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-blue-400 shrink-0" />
                                <a href="mailto:info@gbmis.com" className="hover:text-white">info@gbmis.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {currentYear} GBMIS. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;