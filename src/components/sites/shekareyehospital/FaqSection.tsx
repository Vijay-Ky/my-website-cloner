"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why choose Shekar Eye Hospital for your eye care needs?",
      a: "At Shekar Eye Hospital, we combine NABH-accredited care with state-of-the-art technology, ensuring you receive the highest standard of eye care. Our comprehensive services, from diagnostics to treatment, are delivered by seasoned experts in a patient-friendly environment."
    },
    {
      q: "What sets Shekar Eye Hospital apart from other eye care centers in Bangalore?",
      a: "Located in J.P. Nagar, near Jayanagar, we stand out for our multi-specialty ophthalmic services, cutting-edge technology, and a legacy of excellence since 1999. Our commitment to top-notch patient care and a full suite of services under one roof makes us a preferred choice."
    },
    {
      q: "How does Shekar Eye Hospital ensure the highest quality of eye care?",
      a: "As a NABH-accredited institution, we adhere to stringent quality standards. Our team uses the latest technology and methods in eye care, ensuring that each patient receives individualized and effective treatment."
    },
    {
      q: "What range of services can patients expect at Shekar Eye Hospital?",
      a: "We offer an all-encompassing range of services, from advanced diagnostics to specialized surgeries and treatments, along with a fully-equipped pharmacy, modular operation theatres, and an in-house eye bank, all conveniently located under one roof."
    },
    {
      q: "Can international patients access services at Shekar Eye Hospital?",
      a: "Absolutely! We cater to a global clientele, offering world-class eye care services with a touch of traditional Indian hospitality, making every patient’s visit comfortable, safe, and hassle-free."
    },
    {
      q: "What is the legacy of Shekar Eye Hospital in the field of ophthalmology?",
      a: "Established in 1999 by Dr. Y.L. Rajashekar, our hospital has grown into one of Karnataka’s leading eye care institutions, renowned for our comprehensive approach and a track record of over 50,000 successful surgical treatments."
    },
    {
      q: "How does Shekar Eye Hospital integrate technology into patient care?",
      a: "We leverage cutting-edge technology in all aspects of eye care – from diagnostics to robotic cataract surgery – ensuring precision, safety, and the best optical outcomes for our patients."
    },
    {
      q: "How Convenient Is It to Book an Appointment at Shekar Eye Hospital?",
      a: "Scheduling an appointment with us is a breeze! You can quickly secure your slot online for any service, from routine check-ups to specialized treatments. Our online booking is available Monday to Saturday from 9 am to 8 pm, and Sunday from 10 am to 1 pm. If you prefer to speak with us directly, just call +91 99805 62020. Your path to clear vision and expert eye care is just a few clicks away."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0063ae] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="size-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about our treatments, hospital appointments, and quality protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0063ae] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-[#0063ae] text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
