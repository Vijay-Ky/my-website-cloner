"use client";

import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  Clock
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialSpeciality?: string;
}

function AppointmentModalForm({
  onClose,
  initialDoctor,
  initialSpeciality,
}: {
  onClose: () => void;
  initialDoctor?: string;
  initialSpeciality?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    speciality: initialSpeciality || "Cataract & Robotic Surgery",
    doctor: initialDoctor || "Any Available Senior Specialist",
    date: "",
    timeSlot: "Morning (9:00 AM - 12:00 PM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div 
      className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header banner */}
      <div className="bg-gradient-to-r from-[#002f5e] to-[#0063ae] text-white p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
        
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="size-3.5" />
          <span>NABH Accredited Care</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold">
          Schedule Your Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 mt-1">
          Shekar Eye Hospital, J.P. Nagar, Bengaluru
        </p>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Appointment Booked!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.speciality}</strong> has been registered. Our reception desk will call you at <strong>{formData.phone}</strong> to confirm your slot.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#0063ae] text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#004e8c] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99887 76655"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Speciality / Department
                </label>
                <select
                  value={formData.speciality}
                  onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none bg-white font-medium"
                >
                  <option>Cataract & Robotic Surgery</option>
                  <option>LASIK & Refractive Correction</option>
                  <option>Glaucoma Evaluation</option>
                  <option>Diabetic Retinopathy</option>
                  <option>Pediatric Ophthalmology & Squint</option>
                  <option>Cornea & Transplants</option>
                  <option>Oculoplasty & Ptosis</option>
                  <option>Vitrectomy & Retina</option>
                  <option>Routine Eye Checkup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Doctor
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none bg-white font-medium"
                >
                  <option>Any Available Senior Specialist</option>
                  <option>Dr. Rajashekar Y. L. (Founder & Chief Surgeon)</option>
                  <option>Dr. Archana Singh (Cornea & Refractive)</option>
                  <option>Dr. Srinivas K. N. (Glaucoma)</option>
                  <option>Dr. Srushti D. S. (Pediatric Ophthal)</option>
                  <option>Dr. Sandhya (Comprehensive Ophthal)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none bg-white font-medium"
                >
                  <option>Morning (9:00 AM - 12:00 PM)</option>
                  <option>Afternoon (12:00 PM - 4:00 PM)</option>
                  <option>Evening (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Symptoms or Remarks (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Blurred vision in left eye, previous glasses prescription..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-sm px-3.5 py-2 rounded-xl border border-slate-300 focus:border-[#0063ae] outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#0063ae] hover:bg-[#004e8c] text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="size-4" />
                <span>Confirm Appointment Booking</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
              <Clock className="size-3.5 text-slate-400" />
              <span>OPD Open Mon-Sat 9am-8pm, Sun 10am-1pm | Helpline: +91 99805 62020</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function AppointmentModal({
  isOpen,
  onClose,
  initialDoctor,
  initialSpeciality,
}: AppointmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <AppointmentModalForm
        key={`${initialDoctor || ""}_${initialSpeciality || ""}`}
        onClose={onClose}
        initialDoctor={initialDoctor}
        initialSpeciality={initialSpeciality}
      />
    </div>
  );
}
