"use client";

import React from "react";
import Image from "next/image";
import { Award, Calendar, GraduationCap, Stethoscope } from "lucide-react";

interface DoctorsSectionProps {
  onOpenAppointmentModal: (doctorName?: string) => void;
}

export function DoctorsSection({ onOpenAppointmentModal }: DoctorsSectionProps) {
  const doctors = [
    {
      name: "Dr. Rajashekar Y. L.",
      role: "Founder & Medical Director",
      speciality: "Cataract, Cornea & Refractive Surgeon",
      qualifications: "MBBS, MS (Ophthal), FMRF (Sankara Nethralaya)",
      experience: "25+ Years Experience",
      image: "/sites/shekareyehospital/04_Hero-Section-doctor-and-patient-image.webp",
      bio: "Renowned pioneer in robotic cataract and laser vision correction in Karnataka. Founder of Shekar Eye Hospital with over 50,000 successful surgeries.",
      isFounder: true
    },
    {
      name: "Dr. Archana Singh",
      role: "Senior Consultant",
      speciality: "Cornea, External Diseases & Refractive Surgery",
      qualifications: "MBBS, MS, Fellowship in Cornea & Refractive",
      experience: "14+ Years Experience",
      image: "/sites/shekareyehospital/25_Dr.-Archana-Singh-150x150.webp",
      bio: "Specialist in dry eye therapies, keratoconus cross-linking (C3R), and complex corneal endothelial transplants.",
      isFounder: false
    },
    {
      name: "Dr. Srinivas K. N.",
      role: "Senior Consultant",
      speciality: "Glaucoma & Anterior Segment Microsurgery",
      qualifications: "MBBS, MS, Fellowship in Glaucoma",
      experience: "16+ Years Experience",
      image: "/sites/shekareyehospital/27_Dr.-Srinivas-K-N-150x150.webp",
      bio: "Authority on early glaucoma detection, OCT nerve fiber analysis, selective laser trabeculoplasty, and valve shunt implants.",
      isFounder: false
    },
    {
      name: "Dr. Srushti D. S.",
      role: "Consultant Pediatric Ophthalmologist",
      speciality: "Pediatric Eye Care & Squint (Strabismus)",
      qualifications: "MBBS, DNB (Ophthalmology), Fellow in Pediatric Ophthal",
      experience: "10+ Years Experience",
      image: "/sites/shekareyehospital/29_Dr.-Srushti-D-Sv-150x150.webp",
      bio: "Dedicated to treating amblyopia, pediatric cataracts, childhood myopia, and adult muscle alignment disorders.",
      isFounder: false
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0063ae] text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="size-3.5" />
            <span>Clinical Leadership & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Eye Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Shekar Eye Hospital is home to a stellar team of professionals, led by Founder & Medical Director <strong>Dr. Rajashekar Y. L.</strong> United by a passion for your vision, we invite you to experience top-tier care that illuminates your path to perfect sight!
          </p>
        </div>

        {/* Featured Founder Banner */}
        <div className="bg-gradient-to-r from-sky-50 via-blue-50/50 to-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative flex justify-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <Image 
                  src="/sites/shekareyehospital/04_Hero-Section-doctor-and-patient-image.webp" 
                  alt="Dr. Rajashekar Y. L." 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#003b73] text-white text-xs font-semibold px-3 py-1 rounded-full">
                <Award className="size-3.5 text-amber-300" />
                <span>Founder & Chief Medical Director</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003b73]">
                Dr. Rajashekar Y. L.
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <GraduationCap className="size-4 text-[#0063ae]" />
                  MBBS, MS (Ophthal), FMRF (Sankara Nethralaya)
                </span>
                <span>•</span>
                <span className="text-[#0063ae] font-bold">25+ Years Experience</span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                One of Bengaluru’s most accomplished cataract and refractive surgeons, having trained at premier institutions and pioneered micro-incision techniques. Under his visionary stewardship, Shekar Eye Hospital has treated over 300,000 patients and garnered statewide recognition for clinical excellence.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenAppointmentModal("Dr. Rajashekar Y. L.")}
                  className="bg-[#0063ae] hover:bg-[#004e8c] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2"
                >
                  <Calendar className="size-4" />
                  <span>Book Consultation with Dr. Rajashekar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.filter(d => !d.isFounder).map((doc, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-sky-200 bg-white shadow-sm shrink-0">
                    <Image 
                      src={doc.image} 
                      alt={doc.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0063ae] uppercase tracking-wider block">
                      {doc.role}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">
                      {doc.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      {doc.experience}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#003b73] mb-2 bg-sky-50 px-2.5 py-1.5 rounded-lg">
                  {doc.speciality}
                </div>

                <div className="text-[11px] text-slate-500 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="size-3.5 text-slate-400 shrink-0" />
                  <span>{doc.qualifications}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointmentModal(doc.name)}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#0063ae] text-[#0063ae] hover:text-white font-semibold text-xs py-2.5 rounded-xl border border-slate-200 hover:border-[#0063ae] transition-all"
                >
                  <Calendar className="size-3.5" />
                  <span>Consult {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
