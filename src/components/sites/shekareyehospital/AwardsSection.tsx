"use client";

import React from "react";
import Image from "next/image";
import { Trophy, CheckCircle, Sparkles } from "lucide-react";

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Trophy className="size-3.5 text-amber-600" />
            <span>Honors & Clinical Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            News & Awards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Recognized by prestigious healthcare bodies and medical media for outstanding clinical outcomes and exemplary patient trust.
          </p>
        </div>

        {/* Featured Award Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Image */}
          <div className="lg:col-span-6 relative h-72 sm:h-96 w-full bg-slate-100">
            <Image 
              src="/sites/shekareyehospital/23_VK-award-receiving1-1024x683.webp" 
              alt="Dr. Rajashekar receiving Vijaya Karnataka Health Excellence Award 2026" 
              fill 
              className="object-cover" 
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Trophy className="size-3.5 text-amber-400" />
              <span>Statewide Healthcare Conclave</span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0063ae] uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md">
              <Sparkles className="size-3.5" />
              Excellence in Eye Care Category
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Vijaya Karnataka Health Excellence Awards & Conclave 2026
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Shekar Eye Hospital was honored at the prestigious Vijaya Karnataka Health Excellence Conclave in recognition of its steadfast dedication to advanced ophthalmic surgery, clinical safety, and affordable community vision care over the past 25 years.
            </p>

            <div className="space-y-2.5 text-sm text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-600 shrink-0" />
                <span>Pioneering robotic cataract surgeries in South Bengaluru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-600 shrink-0" />
                <span>Continuous NABH accreditation adhering to strict clinical guidelines</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-600 shrink-0" />
                <span>Over 100,000 subsidized vision screenings organized through community camps</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="relative w-12 h-12 shrink-0">
                <Image 
                  src="/sites/shekareyehospital/40_NABH-2.png" 
                  alt="NABH Quality Standard" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">NABH Quality Standard</div>
                <div className="text-[11px] text-slate-500">Highest certification for patient safety and infection control</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
