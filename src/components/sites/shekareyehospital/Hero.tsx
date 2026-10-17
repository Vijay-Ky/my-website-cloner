"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Calendar, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export function Hero({ onOpenAppointmentModal }: HeroProps) {
  const quickCards = [
    {
      title: "Eye Insights",
      subtitle: "Scientific Guides & Advice",
      image: "/sites/shekareyehospital/06_eye-checkup-697x1024.webp",
      href: "#articles",
      actionText: "Read Articles",
      badge: "Clinical Advice"
    },
    {
      title: "Our Doctors",
      subtitle: "World-Class Specialists",
      image: "/sites/shekareyehospital/07_Our-Doctors-535x1024.webp",
      href: "#doctors",
      actionText: "Meet Team",
      badge: "25+ Yrs Exp"
    },
    {
      title: "Appointment",
      subtitle: "Instant Online Booking",
      image: "/sites/shekareyehospital/08_Appointment.webp",
      onClick: onOpenAppointmentModal,
      actionText: "Book Slot",
      badge: "Quick Booking"
    },
    {
      title: "Visit Our Hospital",
      subtitle: "J.P. Nagar, Bengaluru",
      image: "/sites/shekareyehospital/09_Hospital-1024x878.webp",
      href: "#contact",
      actionText: "Get Directions",
      badge: "NABH Facility"
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#002f5e] via-[#004e8c] to-[#0063ae] text-white overflow-hidden pt-10 sm:pt-16 pb-20 sm:pb-28">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-cyan-200">
              <Sparkles className="size-4 text-amber-300" />
              <span>Next-Generation Ophthalmic Care</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white font-semibold">NABH Accredited</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Robotic Cataract Surgery:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200">
                We’ve got tomorrow’s technology, today
              </span>
              —for you!
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Beyond Expectations: Experience unmatched clinical precision and compassionate healing at Shekar Eye Hospital, Bangalore’s trusted tertiary eye care destination since 1999.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Blade-free robotic precision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Quick recovery & minimal stitch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Senior surgeons led by Dr. Rajashekar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Cashless TPA & insurance assistance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenAppointmentModal}
                className="flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="size-5 text-slate-900" />
                <span>Book Instant Consultation</span>
              </button>

              <a
                href="tel:+919980562020"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
              >
                <PhoneCall className="size-4 text-cyan-300" />
                <span>+91 99805 62020</span>
              </a>
            </div>

            {/* Trust badge row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">25+</span> Years of Legacy
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">300K+</span> Happy Patients
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">50K+</span> Successful Surgeries
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-900/30">
              <Image 
                src="/sites/shekareyehospital/04_Hero-Section-doctor-and-patient-image.webp" 
                alt="Dr Rajashekar with grateful patient at Shekar Eye Hospital" 
                fill 
                className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f5e]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 text-slate-800 shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#003b73]">Dr. Rajashekar Y. L.</div>
                  <div className="text-xs text-slate-500 font-medium">Founder & Medical Director</div>
                  <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="size-3" /> 25+ Years of Ophthalmic Excellence
                  </div>
                </div>
                <div className="w-12 h-12 relative shrink-0">
                  <Image 
                    src="/sites/shekareyehospital/40_NABH-2.png" 
                    alt="NABH Badge" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating 4-Card Quick Access Section */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickCards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/95 hover:bg-white text-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-md flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="relative w-16 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0063ae] bg-sky-50 px-2 py-0.5 rounded-full mb-1">
                    {card.badge}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0063ae] transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0063ae] group-hover:text-[#004080]">
                {card.onClick ? (
                  <button 
                    onClick={card.onClick} 
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a 
                    href={card.href} 
                    className="w-full flex items-center justify-between"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
