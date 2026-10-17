"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ListVideo } from "lucide-react";

export function VideoPlaylistSection() {
  const playlist = [
    {
      id: "v1",
      title: "Why Is Your Eye Power Increasing Suddenly? | Causes in Children & Adults",
      duration: "8:24",
      doctor: "Dr. Rajashekar Y. L.",
      thumbnail: "/sites/shekareyehospital/30_maxresdefault.webp",
      desc: "Learn why screen time, lack of natural sunlight, and uncorrected astigmatism cause rapid changes in eye power, and when you should consult an ophthalmologist."
    },
    {
      id: "v2",
      title: "Glaucoma in Young Adults: Causes, Symptoms & Prevention Tips | Dr. Sandhya",
      duration: "6:15",
      doctor: "Dr. Sandhya",
      thumbnail: "/sites/shekareyehospital/31_maxresdefault.jpg",
      desc: "Glaucoma is often asymptomatic until severe visual field loss occurs. Dr. Sandhya explains high-risk factors and modern tonometry screenings."
    },
    {
      id: "v3",
      title: "LASIK at Shekar Eye Hospital: A Patient’s Incredible Experience! (Kannada)",
      duration: "4:50",
      doctor: "Patient Testimonial",
      thumbnail: "/sites/shekareyehospital/33_maxresdefault-1.jpg",
      desc: "Hear firsthand from our patient who achieved 6/6 unassisted vision through Contoura Vision LASIK performed by our refractive team."
    },
    {
      id: "v4",
      title: "How Pregnancy Affects Your Eyes ? Causes & Solutions | Shekar Eye Hospital",
      duration: "7:10",
      doctor: "Dr. Archana Singh",
      thumbnail: "/sites/shekareyehospital/34_SEH-THU-1.jpg",
      desc: "Hormonal shifts during pregnancy can alter corneal curvature, cause dry eye syndrome, or exacerbate diabetic retinopathy."
    },
    {
      id: "v5",
      title: "Glaucoma Awareness - Walkathon, 13th March | Shekar Eye Hospital",
      duration: "3:40",
      doctor: "Community Outreach",
      thumbnail: "/sites/shekareyehospital/35_Thumbnail1.jpg",
      desc: "Highlights from our public health walkathon across Jayanagar and J.P. Nagar raising awareness on preventable optic nerve damage."
    },
    {
      id: "v6",
      title: "Cataract Surgery Tips for a Smooth Recovery | Shekar Eye Hospital",
      duration: "9:05",
      doctor: "Dr. Rajashekar Y. L.",
      thumbnail: "/sites/shekareyehospital/36_maxresdefault.jpg",
      desc: "Essential dos and don'ts post-surgery: eye drop administration schedules, protective eyewear instructions, and resumption of physical activities."
    },
  ];

  const [activeVideo, setActiveVideo] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-2 border border-red-500/30">
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Official Shekar Eye Hospital Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Watch Our Latest YouTube Updates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Explore informative video guides, surgical explanations, and inspiring patient journeys.
            </p>
          </div>

          <a 
            href="https://www.youtube.com/@ShekarEyeHospital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg transition-all"
          >
            <svg className="size-4 fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe on YouTube</span>
          </a>
        </div>

        {/* Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Video Player Box */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 group">
              <Image 
                src={activeVideo.thumbnail} 
                alt={activeVideo.title} 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-700 opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transform hover:scale-110 active:scale-95 transition-all"
                  aria-label="Play Video"
                >
                  <Play className="size-8 fill-white ml-1" />
                </button>
              </div>

              {/* Video Info Bottom Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-1">
                  <span>{activeVideo.doctor}</span>
                  <span>•</span>
                  <span>{activeVideo.duration}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white leading-snug line-clamp-2">
                  {activeVideo.title}
                </h3>
              </div>
            </div>

            {/* Video Description Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h4 className="font-bold text-sm text-cyan-300 mb-1">About This Discussion:</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.desc}
              </p>
            </div>
          </div>

          {/* Side Playlist Column */}
          <div className="lg:col-span-4 bg-white/5 rounded-3xl p-4 sm:p-5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
                <ListVideo className="size-4 text-cyan-400" />
                <span>Video Playlist</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {playlist.length} Episodes
              </span>
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {playlist.map((item) => {
                const isActive = item.id === activeVideo.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveVideo(item);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 ${
                      isActive 
                        ? "bg-[#0063ae]/60 border border-sky-400/50" 
                        : "hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <div className="relative w-24 h-14 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                      <Image 
                        src={item.thumbnail} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 rounded text-slate-200">
                        {item.duration}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className={`text-xs font-semibold leading-tight line-clamp-2 ${isActive ? "text-cyan-200" : "text-slate-200"}`}>
                        {item.title}
                      </h5>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        {item.doctor}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
