"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export function ArticlesSection() {
  const articles = [
    {
      title: "Are You Making These Contact Lens Mistakes? 10 Habits That Could Harm Your Eyes",
      category: "Cornea & Lens Care",
      readTime: "5 min read",
      authorName: "Dr. Archana Singh",
      authorRole: "Cornea & Refractive Specialist",
      image: "/sites/shekareyehospital/24_ChatGPT-Image-Oct-1-2026-03_26_05-PM-1024x576.png",
      authorAvatar: "/sites/shekareyehospital/25_Dr.-Archana-Singh-150x150.webp",
      snippet: "Sleeping in lenses, using tap water, or exceeding wear times can lead to sight-threatening Acanthamoeba and bacterial keratitis. Learn healthy hygiene practices.",
      date: "Oct 2026"
    },
    {
      title: "Can Meditation Improve Your Eye Vision? What the Science Really Says",
      category: "Preventive Eye Health",
      readTime: "6 min read",
      authorName: "Dr. Srinivas K N",
      authorRole: "Glaucoma Specialist",
      image: "/sites/shekareyehospital/26_ChatGPT-Image-Sep-11-2026-05_36_02-PM-1024x683.webp",
      authorAvatar: "/sites/shekareyehospital/27_Dr.-Srinivas-K-N-150x150.webp",
      snippet: "While meditation cannot reverse anatomical refractive errors, mindfulness and breathing exercises have documented benefits in lowering intraocular pressure (IOP) in glaucoma patients.",
      date: "Sep 2026"
    },
    {
      title: "Why Are So Many Children Wearing Glasses Earlier Than Ever?",
      category: "Pediatric Vision",
      readTime: "4 min read",
      authorName: "Dr. Srushti D S",
      authorRole: "Pediatric Ophthalmologist",
      image: "/sites/shekareyehospital/28_ChatGPT-Image-Aug-31-2026-01_43_38-PM-1024x683.png",
      authorAvatar: "/sites/shekareyehospital/29_Dr.-Srushti-D-Sv-150x150.webp",
      snippet: "Reduced natural daylight exposure and increased near-work on screens are triggering high myopia in young children. Early intervention strategies like Ortho-K can slow progression.",
      date: "Aug 2026"
    },
  ];

  return (
    <section id="articles" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0063ae] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="size-3.5" />
              <span>Eye Insights & Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Latest Articles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Evidence-based ophthalmic advice published by Shekar Eye Hospital’s senior clinical faculty.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0063ae] hover:text-[#004080] group"
          >
            <span>Have questions about your eyes? Ask our specialists</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article 
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Featured Thumbnail */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image 
                    src={art.image} 
                    alt={art.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#002f5e]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {art.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Clock className="size-3.5" />
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#0063ae] transition-colors leading-snug mb-3 line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {art.snippet}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 bg-white shrink-0">
                    <Image 
                      src={art.authorAvatar} 
                      alt={art.authorName} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">{art.authorName}</div>
                    <div className="text-[10px] text-slate-500">{art.authorRole}</div>
                  </div>
                </div>

                <div className="text-[#0063ae] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
