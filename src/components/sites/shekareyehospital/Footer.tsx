"use client";

import React from "react";
import Image from "next/image";
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight
} from "lucide-react";

export function Footer() {
  const specialities = [
    { title: "Cataract Surgery", href: "#specialities" },
    { title: "LASIK & Refractive Surgery", href: "#specialities" },
    { title: "Glaucoma Diagnosis & Surgery", href: "#specialities" },
    { title: "Diabetic Retinopathy", href: "#specialities" },
    { title: "Squint (Strabismus) Correction", href: "#specialities" },
    { title: "Pediatric Ophthalmology", href: "#specialities" },
    { title: "Corneal Transplants & C3R", href: "#specialities" },
    { title: "Vitreoretinal Interventions", href: "#specialities" },
  ];

  const facilities = [
    { title: "Our Specialists & Surgeons", href: "#doctors" },
    { title: "Empanelment & Corporate TPA", href: "#" },
    { title: "Cashless Medical Insurance", href: "#" },
    { title: "AGILUS Diagnostics Laboratory", href: "#" },
    { title: "Opticals by BEN FRANKLIN", href: "#" },
    { title: "Vasudeva Murthy Eye Bank", href: "#" },
  ];

  const quickLinks = [
    { title: "Founder - Dr. Rajashekar Y.L.", href: "#doctors" },
    { title: "Quality & NABH Accreditation", href: "#awards" },
    { title: "Awards & Recognition 2026", href: "#awards" },
    { title: "Happy Patients Testimonials", href: "#videos" },
    { title: "Clinical Eye Insights & Blog", href: "#articles" },
    { title: "Frequently Asked Questions", href: "#faqs" },
    { title: "Free Community Eye Camps", href: "#" },
  ];

  return (
    <footer className="bg-[#001f3f] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Row: Brand & Accreditations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-52 sm:w-64 h-14 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                <Image 
                  src="/sites/shekareyehospital/41_SEH-Logo-White.webp" 
                  alt="Shekar Eye Hospital Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="relative w-12 h-12 bg-white/10 p-1.5 rounded-xl shrink-0">
                <Image 
                  src="/sites/shekareyehospital/40_NABH-2.png" 
                  alt="NABH Accredited" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Shekar Eye Hospital is a premier NABH-accredited tertiary eye care institution in Bengaluru, founded in 1999 by Dr. Rajashekar Y. L. Committed to ethical clinical excellence, patient safety, and cutting-edge ophthalmic surgical advancements.
            </p>
          </div>

          {/* Social Icons & Call */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              We are on social media
            </div>
            <div className="flex items-center gap-2.5 md:justify-end">
              <a 
                href="https://www.facebook.com/shekareyehospital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="size-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ShekarEye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="size-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@ShekarEyeHospital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#ff0000] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="size-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/shekareyehospital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="size-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/shekar-eye-hospital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="size-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-400">Direct Helpline: </span>
              <a href="tel:+919980562020" className="text-sm font-bold text-amber-400 hover:underline">
                +91 99805 62020
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column Links Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10 text-sm">
          
          {/* Column 1: Address & Timings */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MapPin className="size-4 text-cyan-400" />
              Hospital Location
            </h4>
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
              <p className="font-semibold text-white">Shekar Eye Hospital</p>
              <p>#633, 100 Feet Ring Road,<br />J.P. Nagar – 3rd Phase,<br />Bengaluru, Karnataka, India – 560078.</p>
              <p className="text-slate-400 pt-1">
                Landmark: Near Dalmia Circle / Bannerghatta Road cross
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-200">
                <Clock className="size-3.5 text-cyan-400" />
                <span>OPD Hours:</span>
              </div>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sun: 10:00 AM - 1:00 PM</p>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {specialities.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="size-3 text-cyan-500" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Facility */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Our Facility
            </h4>
            <ul className="space-y-2 text-xs">
              {facilities.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="size-3 text-cyan-500" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="size-3 text-cyan-500" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright © 2026 <strong className="text-white">Shekar Eye Hospital</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="size-4" />
              NABH Quality Standards Compliant
            </span>
            <span>•</span>
            <a href="#specialities" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
