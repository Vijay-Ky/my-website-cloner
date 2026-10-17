"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  ShieldCheck
} from "lucide-react";

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export function Header({ onOpenAppointmentModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const specialities = [
    { title: "Cataract Treatment", desc: "Robotic & Micro-incision surgery", href: "#specialities" },
    { title: "LASIK & Refractive", desc: "Blade-free Contoura Vision & PRK", href: "#specialities" },
    { title: "Glaucoma Treatment", desc: "Early detection & advanced surgery", href: "#specialities" },
    { title: "Diabetic Eye Care", desc: "Retinopathy screening & lasers", href: "#specialities" },
    { title: "Squint Treatment", desc: "Adult & pediatric alignment", href: "#specialities" },
    { title: "Oculoplasty", desc: "Eyelid & facial aesthetic surgery", href: "#specialities" },
    { title: "Pediatric Ophthalmology", desc: "Specialized child vision care", href: "#specialities" },
    { title: "Cornea Services", desc: "Transplants & cross-linking", href: "#specialities" },
    { title: "Retina of Eye", desc: "Vitreoretinal interventions", href: "#specialities" },
    { title: "Myopia Management", desc: "Progression control & ortho-K", href: "#specialities" },
    { title: "Vitrectomy Surgery", desc: "Advanced microsurgical vitreous repair", href: "#specialities" },
  ];

  const facilities = [
    { title: "Our Doctors", desc: "Meet leading eye specialists", href: "#doctors" },
    { title: "Empanelment & TPA", desc: "Cashless tie-ups with leading firms", href: "#" },
    { title: "Medical Insurance", desc: "Seamless cashless claims processing", href: "#" },
    { title: "AGILUS Diagnostics", desc: "In-house lab tests & imaging", href: "#" },
    { title: "Opticals by Ben Franklin", desc: "Branded eyewear & lenses", href: "#" },
    { title: "Vasudeva Murthy Eye Bank", desc: "24/7 Cornea collection & banking", href: "#" },
  ];

  const aboutLinks = [
    { title: "About Founder", desc: "Dr. Rajashekar Y. L. legacy", href: "#doctors" },
    { title: "Quality Accreditations", desc: "NABH certified protocols", href: "#awards" },
    { title: "Health Excellence Awards", desc: "2026 Vijaya Karnataka Winner", href: "#awards" },
    { title: "Eye Insights & Articles", desc: "Latest clinical publications", href: "#articles" },
    { title: "Video Insights", desc: "Doctor talks & patient stories", href: "#videos" },
    { title: "Free Community Camps", desc: "Reaching underserved communities", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all">
      {/* Top Utility & Emergency Bar */}
      <div className="bg-[#002f5e] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <ShieldCheck className="size-4" />
              NABH Accredited Eye Care Hospital
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-200">
              <Clock className="size-3.5 text-slate-300" />
              Mon–Sat: 9am–8pm | Sun: 10am–1pm
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="size-3.5 text-slate-400" />
              J.P. Nagar, 3rd Phase, Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919980562020" 
              className="flex items-center gap-1.5 font-semibold text-white hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-1 rounded"
            >
              <Phone className="size-3.5 text-amber-400" />
              <span>+91 99805 62020</span>
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a 
              href="https://shekareyehospital.com/international-patients/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline text-xs font-medium text-slate-200 hover:text-white underline decoration-slate-400"
            >
              International Patients
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-44 sm:w-56 h-12 sm:h-14">
              <Image 
                src="/sites/shekareyehospital/00_24-300x91.png" 
                alt="Shekar Eye Hospital" 
                fill 
                className="object-contain object-left" 
                priority 
              />
            </div>
          </Link>
          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <Image 
              src="/sites/shekareyehospital/40_NABH-2.png" 
              alt="NABH Accredited" 
              width={42} 
              height={42} 
              className="object-contain" 
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-1 text-[14px] font-medium text-slate-700">
          <Link href="/" className="px-3 py-2 text-[#0063ae] font-semibold hover:text-[#004080]">
            Home
          </Link>

          {/* Specialities Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 px-3 py-1 hover:text-[#0063ae] transition-colors">
              Specialities
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-[520px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
              {specialities.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="p-2 rounded-lg hover:bg-sky-50 transition-colors flex flex-col"
                >
                  <span className="font-semibold text-slate-800 text-sm">{item.title}</span>
                  <span className="text-xs text-slate-500">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Facilities Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 px-3 py-1 hover:text-[#0063ae] transition-colors">
              Facilities
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-[360px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
              {facilities.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="block p-2 rounded-lg hover:bg-sky-50 transition-colors"
                >
                  <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          <a href="#doctors" className="px-3 py-2 hover:text-[#0063ae] transition-colors">
            Our Doctors
          </a>

          {/* About Us Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 px-3 py-1 hover:text-[#0063ae] transition-colors">
              About Us
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 top-full hidden group-hover:block w-[360px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
              {aboutLinks.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="block p-2 rounded-lg hover:bg-sky-50 transition-colors"
                >
                  <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          <a href="#videos" className="px-3 py-2 hover:text-[#0063ae] transition-colors">
            Videos
          </a>
          <a href="#faqs" className="px-3 py-2 hover:text-[#0063ae] transition-colors">
            FAQs
          </a>
          <a href="#contact" className="px-3 py-2 hover:text-[#0063ae] transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAppointmentModal}
            className="flex items-center gap-2 bg-[#0063ae] hover:bg-[#004e8c] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
          >
            <Calendar className="size-4" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-[#0063ae] rounded-lg border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigation</span>
            <span className="text-xs text-emerald-600 font-medium">NABH Certified</span>
          </div>
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#0063ae]"
          >
            Home
          </Link>

          <div>
            <div className="font-semibold text-slate-800 py-1 flex items-center justify-between">
              Specialities
            </div>
            <div className="pl-3 border-l-2 border-sky-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 my-1">
              {specialities.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-[#0063ae]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-800 py-1">Facilities & Care</div>
            <div className="pl-3 border-l-2 border-sky-100 space-y-1 my-1">
              {facilities.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-slate-600 hover:text-[#0063ae]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <a 
            href="#doctors" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            Our Doctors
          </a>
          <a 
            href="#awards" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            Awards & Recognition
          </a>
          <a 
            href="#articles" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            Eye Insights & Blog
          </a>
          <a 
            href="#videos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            Videos
          </a>
          <a 
            href="#faqs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            FAQs
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-slate-700 hover:text-[#0063ae]"
          >
            Contact & Address
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full text-center bg-[#0063ae] text-white py-2.5 rounded-lg font-semibold text-sm"
            >
              Book Appointment Now
            </button>
            <a
              href="tel:+919980562020"
              className="w-full text-center border border-slate-200 text-slate-700 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
            >
              <Phone className="size-4 text-[#0063ae]" />
              Call Helpline: +91 99805 62020
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
