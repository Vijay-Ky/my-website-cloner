"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, ChevronRight } from "lucide-react";

interface SpecialitiesSectionProps {
  onOpenAppointmentModal: (speciality?: string) => void;
}

export function SpecialitiesSection({ onOpenAppointmentModal }: SpecialitiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const specialities = [
    {
      id: "cataract",
      title: "Cataract Treatment",
      tagline: "Robotic & Micro-Incision Surgery (MICS)",
      desc: "Restore razor-sharp vision with stitchless robotic cataract surgery and premium multifocal / toric intraocular lenses.",
      icon: "/sites/shekareyehospital/10_Cataract-eye-x150.webp",
      highlights: ["Blade-free femtosecond laser", "Same-day discharge", "Premium trifocal lenses"],
      category: "surgical"
    },
    {
      id: "lasik",
      title: "LASIK & Refractive",
      tagline: "Freedom from Glasses & Contact Lenses",
      desc: "Advanced Contoura Vision LASIK and PRK procedures delivering customized corneal mapping and crystal-clear vision.",
      icon: "/sites/shekareyehospital/11_Lasik-eye-x150.webp",
      highlights: ["10-minute painless procedure", "High precision contouring", "Quick return to daily routine"],
      category: "refractive"
    },
    {
      id: "glaucoma",
      title: "Glaucoma Treatment",
      tagline: "Protecting the Optic Nerve & Visual Field",
      desc: "Early detection with OCT ganglion analysis, visual field testing, selective laser trabeculoplasty (SLT), and valve implants.",
      icon: "/sites/shekareyehospital/14_Glaucoma-eye-x150.webp",
      highlights: ["Early symptomless screening", "Laser & surgical IOP control", "Long-term monitoring"],
      category: "clinical"
    },
    {
      id: "diabetic",
      title: "Diabetic Eye Care",
      tagline: "Preventing Diabetic Retinopathy",
      desc: "Specialized screenings for diabetes-induced retinal hemorrhage, macular edema injections, and argon laser photocoagulation.",
      icon: "/sites/shekareyehospital/12_Diabetic-eye-x150.webp",
      highlights: ["Fundus fluorescein angiography", "Anti-VEGF intravitreal injections", "Preventative laser"],
      category: "retina"
    },
    {
      id: "squint",
      title: "Squint Treatment",
      tagline: "Strabismus Correction for All Ages",
      desc: "Comprehensive muscle alignment diagnosis and advanced corrective microsurgery for adults and children to restore binocular vision.",
      icon: "/sites/shekareyehospital/13_Squint-eye-x150.webp",
      highlights: ["Non-surgical prism exercises", "Adjustable suture microsurgery", "Enhanced depth perception"],
      category: "pediatric"
    },
    {
      id: "pediatric",
      title: "Pediatric Ophthal",
      tagline: "Gentle Eye Care for Infants & Kids",
      desc: "Child-friendly clinic handling amblyopia (lazy eye), congenital cataract, blocked tear ducts, and early refractive errors.",
      icon: "/sites/shekareyehospital/15_Pediatric-eye-x150-1.webp",
      highlights: ["Child-friendly diagnostics", "Lazy eye patch therapy", "Early vision screening"],
      category: "pediatric"
    },
    {
      id: "oculoplasty",
      title: "Oculoplasty Procedures",
      tagline: "Reconstructive & Cosmetic Eye Surgery",
      desc: "Expert surgical management of ptosis (drooping eyelids), ectropion, tear-duct blockages (DCR), and facial rejuvenation.",
      icon: "/sites/shekareyehospital/16_Occuloplasty-Procedures-Icon-png-1024x1024.png",
      highlights: ["Blepharoplasty & ptosis fix", "Dacryocystorhinostomy (DCR)", "Orbital trauma reconstruction"],
      category: "surgical"
    },
    {
      id: "cornea",
      title: "Cornea Services",
      tagline: "Keratoconus & Corneal Transplants",
      desc: "Treatment of corneal dystrophies, corneal collagen cross-linking (C3R), amniotic membrane grafts, and full/partial transplants.",
      icon: "/sites/shekareyehospital/17_Cornea-1-1024x1024.png",
      highlights: ["C3R for keratoconus", "Optical corneal transplants", "In-house eye bank support"],
      category: "clinical"
    },
    {
      id: "myopia",
      title: "Myopia (Nearsightedness)",
      tagline: "Slowing Down Eye Power Increase",
      desc: "Modern therapies to control progressive nearsightedness in school-age children, including Ortho-K lenses and low-dose atropine.",
      icon: "/sites/shekareyehospital/18_Myopia-1-1024x1024.png",
      highlights: ["Night-wear Ortho-K lenses", "Specialty myopia control spectacles", "Progression risk mapping"],
      category: "refractive"
    },
    {
      id: "vitrectomy",
      title: "Vitrectomy Surgery",
      tagline: "Advanced Vitreoretinal Microsurgery",
      desc: "23G and 25G sutureless vitrectomy for non-clearing vitreous hemorrhage, complex retinal detachments, and macular holes.",
      icon: "/sites/shekareyehospital/19_Vitrectomy-Surgery-2-1024x1024.png",
      highlights: ["Micro-incision 25G vitrectomy", "Gas & silicone oil tamponade", "High surgical precision"],
      category: "surgical"
    },
    {
      id: "retina",
      title: "Retina of Eye",
      tagline: "Complete Posterior Segment Diagnostics",
      desc: "Expert care for age-related macular degeneration (AMD), retinal vein occlusions, and retinal detachment surgery.",
      icon: "/sites/shekareyehospital/20_Retina-2-1024x1024.png",
      highlights: ["High-resolution OCT angiography", "Intravitreal therapy", "Painless green laser"],
      category: "retina"
    },
  ];

  const filteredSpecialities = activeCategory === "all" 
    ? specialities 
    : specialities.filter(s => s.category === activeCategory);

  return (
    <section id="specialities" className="py-20 bg-slate-50/80 border-y border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0063ae] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Multi-Specialty Ophthalmic Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eye Care That we Specialize in
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Backed by advanced German Zeiss & American Alcon equipment, our team of superspecialists covers every aspect of ocular health.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Specialities (11)" },
              { id: "surgical", label: "Surgical / Cataract" },
              { id: "refractive", label: "LASIK & Myopia" },
              { id: "retina", label: "Retina & Diabetic" },
              { id: "clinical", label: "Glaucoma & Cornea" },
              { id: "pediatric", label: "Pediatric & Squint" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#0063ae] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialities.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 p-2.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      className="object-contain p-2" 
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0063ae] transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-sky-700 mb-2.5">
                  {item.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="size-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenAppointmentModal(item.title)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#0063ae] text-[#0063ae] hover:text-white font-semibold text-xs py-2.5 rounded-xl border border-slate-200 hover:border-[#0063ae] transition-all"
                >
                  <span>Consult Specialist</span>
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
