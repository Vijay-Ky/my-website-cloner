"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { WelcomeSection } from "./WelcomeSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { AppointmentBanner } from "./AppointmentBanner";
import { DoctorsSection } from "./DoctorsSection";
import { AwardsSection } from "./AwardsSection";
import { ArticlesSection } from "./ArticlesSection";
import { VideoPlaylistSection } from "./VideoPlaylistSection";
import { FaqSection } from "./FaqSection";
import { CallbackSection } from "./CallbackSection";
import { Footer } from "./Footer";
import { AppointmentModal } from "./AppointmentModal";

export function ShekarHomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (param?: string) => {
    if (param) {
      if (param.startsWith("Dr.")) {
        setSelectedDoctor(param);
        setSelectedSpeciality(undefined);
      } else {
        setSelectedSpeciality(param);
        setSelectedDoctor(undefined);
      }
    } else {
      setSelectedDoctor(undefined);
      setSelectedSpeciality(undefined);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0063ae]/20 selection:text-[#0063ae]">
      {/* 1. Header Navigation */}
      <Header onOpenAppointmentModal={() => handleOpenAppointment()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* 3. Welcome & Trust Pillars */}
        <WelcomeSection />

        {/* 4. Core Specialities Grid */}
        <SpecialitiesSection onOpenAppointmentModal={(spec) => handleOpenAppointment(spec)} />

        {/* 5. Online Appointment Feature Banner */}
        <AppointmentBanner onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* 6. Doctors & Specialists Section */}
        <DoctorsSection onOpenAppointmentModal={(doc) => handleOpenAppointment(doc)} />

        {/* 7. Awards & News Recognition */}
        <AwardsSection />

        {/* 8. Clinical Articles & Eye Insights */}
        <ArticlesSection />

        {/* 9. YouTube Video Playlist & Patient Experiences */}
        <VideoPlaylistSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Callback & Inquiry Section */}
        <CallbackSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDoctor={selectedDoctor}
        initialSpeciality={selectedSpeciality}
      />
    </div>
  );
}
