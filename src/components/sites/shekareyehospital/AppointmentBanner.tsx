"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, CheckCircle, Send, ShieldCheck, ExternalLink } from "lucide-react";

interface AppointmentBannerProps {
  onOpenAppointmentModal: () => void;
}

export function AppointmentBanner({ onOpenAppointmentModal }: AppointmentBannerProps) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    department: "Cataract & Robotic Surgery",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", department: "Cataract & Robotic Surgery", date: "" });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-[#002f5e] to-[#004e8c] text-white relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Image Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/10">
              <Calendar className="size-3.5" />
              <span>Instant Confirmation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Hassle-Free Online Appointments — with just a click
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Skip waiting rooms and schedule your complete consultation or second opinion with senior specialists at Shekar Eye Hospital.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-400" />
                <span>Zero convenience fee & guaranteed doctor slot</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-400" />
                <span>Immediate WhatsApp & SMS confirmation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-emerald-400" />
                <span>Dedicated patient care coordinator assistance</span>
              </div>
            </div>

            {/* Embedded Visual */}
            <div className="relative w-full max-w-md h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <Image 
                src="/sites/shekareyehospital/21_SEH-Online-Appointment-1024x679.webp" 
                alt="Shekar Eye Hospital Online Appointment" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Right Interactive Quick Booking Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/20">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#003b73]">
                    Book Your Appointment
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fast booking with immediate callback
                  </p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenAppointmentModal}
                    className="text-xs font-semibold text-[#0063ae] hover:underline flex items-center gap-1 bg-sky-50 px-2.5 py-1 rounded-md"
                  >
                    <span>Full Form</span>
                    <ExternalLink className="size-3" />
                  </button>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md hidden sm:inline">
                    Open Today
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in zoom-in duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="size-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Appointment Request Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{formState.name}</strong>. Our patient coordinator will contact you at <strong>{formState.phone}</strong> shortly to confirm your consultation timing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <span className="px-3 py-2.5 text-sm bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Select Speciality
                      </label>
                      <select
                        value={formState.department}
                        onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                        className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none bg-white font-medium"
                      >
                        <option>Cataract & Robotic Surgery</option>
                        <option>LASIK & Refractive Correction</option>
                        <option>Glaucoma Evaluation</option>
                        <option>Diabetic Retinopathy</option>
                        <option>Pediatric Ophthalmology</option>
                        <option>Cornea & Transplants</option>
                        <option>General Eye Checkup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full text-sm px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#0063ae] hover:bg-[#004e8c] text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="size-4" />
                    <span>Confirm Consultation Request</span>
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-600" />
                    <span>Your privacy is 100% safeguarded under NABH compliance</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
