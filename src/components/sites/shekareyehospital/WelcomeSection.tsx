"use client";

import React from "react";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Award, 
  Activity, 
  CheckCircle, 
  HeartHandshake, 
  Eye, 
  Microscope 
} from "lucide-react";

export function WelcomeSection() {
  const stats = [
    { number: "25+", label: "Years of Service", desc: "Serving Bengaluru since 1999", icon: Building2 },
    { number: "300K+", label: "Happy Patients", desc: "Trusted by families across India & abroad", icon: Users },
    { number: "50K+", label: "Successful Surgeries", desc: "Cataract, LASIK, Retinal & Glaucoma", icon: Activity },
    { number: "100%", label: "NABH Accredited", desc: "Rigorous quality & clinical safety", icon: Award },
  ];

  const pillars = [
    {
      title: "Revealing Excellence in Eye Care",
      desc: "Shekar Eye Hospital was established with the prime objective of delivering super-speciality eye care services under one roof, combining clinical brilliance with warmth.",
      icon: Eye
    },
    {
      title: "Comprehensive Vision Services",
      desc: "From basic preventive vision checks to robotic cataract and intricate vitreoretinal surgeries, our hospital is equipped with cutting-edge German and American diagnostics.",
      icon: Microscope
    },
    {
      title: "Patient-Centric Care",
      desc: "Our ethos is rooted in expertise, empathy, and ethics. We tailor treatment options to each patient's individual lifestyle, ensuring complete transparency.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0063ae] text-xs font-bold uppercase tracking-wider">
            <Building2 className="size-3.5" />
            <span>NABH Accredited Tertiary Eye Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Welcome To Shekar Eye Hospital
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Founded by renowned ophthalmic surgeon <strong>Dr. Rajashekar Y. L.</strong>, Shekar Eye Hospital is one of Karnataka’s most trusted ophthalmic institutions, committed to delivering global standards in eye care.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0063ae] to-[#00a8cc] flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0063ae] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Middle Hospital Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#003b73] to-[#0063ae] text-white p-8 sm:p-12 shadow-xl border border-sky-900/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-white/10 px-3 py-1 rounded-full">
                NABH Certified Infrastructure
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Complete Ophthalmic Care, World-Class Technology Under One Roof
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Conveniently situated on the 100 Feet Ring Road in J.P. Nagar 3rd Phase, Bengaluru, Shekar Eye Hospital houses modular operation theatres, AGILUS diagnostic pathology, optical boutique by Ben Franklin, and an in-house eye bank.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-emerald-400" /> Modular Laminar Airflow OTs</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-emerald-400" /> Cashless Insurance Desks</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-emerald-400" /> 24/7 Eye Trauma & Emergency</span>
              </div>
            </div>
            <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
              <Image 
                src="/sites/shekareyehospital/22_SEH-WEB-Image-1.webp" 
                alt="Shekar Eye Hospital Building and Infrastructure" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50/50 transition-colors"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-white shadow-sm text-[#0063ae] mb-3">
                  <Icon className="size-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#003b73] mb-1">
                  {stat.number}
                </div>
                <div className="font-bold text-slate-800 text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
