"use client";

import React, { useState } from "react";
import { PhoneCall, Send, CheckCircle2, Clock, ShieldCheck, MapPin } from "lucide-react";

export function CallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "Morning (9 AM - 12 PM)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", time: "Morning (9 AM - 12 PM)", message: "" });
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0063ae] text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="size-3.5" />
              <span>Direct Patient Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We’ll call you back
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have a question about cataract surgeries, LASIK eligibility, or insurance tie-ups? Leave your contact details below, and our care coordinator will reach out to guide you.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0063ae] shrink-0">
                  <PhoneCall className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Helpline & Emergency</div>
                  <a href="tel:+919980562020" className="text-base font-bold text-[#003b73] hover:underline">
                    +91 99805 62020 / 080 2659 3210
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Quick assistance for eye trauma & inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0063ae] shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hospital Address</div>
                  <div className="text-sm font-bold text-slate-800">
                    #633, 100 Feet Ring Road, J.P. Nagar – 3rd Phase
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Bengaluru, Karnataka, India – 560078</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0063ae] shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Outpatient OPD Timings</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Monday to Saturday: 9:00 AM – 8:00 PM
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Sunday: 10:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Request a Callback
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill this brief form and our team will get in touch within 15 minutes.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in zoom-in duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Request Received!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you, <strong>{formData.name}</strong>. An eye care coordinator will call you at <strong>{formData.phone}</strong> during your preferred timing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <span className="px-3.5 py-3 text-sm bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="99887 76655"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Convenient Time for Call
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none bg-white font-medium"
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                      <option>Immediate / ASAP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      How can we help you? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your eye concern or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0063ae] hover:bg-[#004e8c] text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="size-4" />
                    <span>Request Callback Now</span>
                  </button>

                  <div className="pt-1 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="size-4 text-emerald-600" />
                    <span>Your details are confidential & strictly protected</span>
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
