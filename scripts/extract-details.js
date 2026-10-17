const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../docs/research/shekareyehospital/page-source.html'), 'utf8');

// Search for doctors / team member elements
// Elementor often uses uael-team-member or elementor-widget-loop-grid or similar
const doctorsMatches = [];
const docRegex = /(Dr\.\s+[A-Za-z\.\s]+)/g;
let dMatch;
while ((dMatch = docRegex.exec(html)) !== null) {
  const name = dMatch[1].trim();
  if (name.length > 5 && name.length < 40 && !doctorsMatches.includes(name)) {
    doctorsMatches.push(name);
  }
}

// Search for FAQ questions & answers
const faqRegex = /<(?:div|h\d)[^>]*class="[^"]*elementor-tab-title[^"]*"[^>]*>([\s\S]*?)<\/(?:div|h\d)>[\s\S]*?<div[^>]*class="[^"]*elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
let faqs = [];
let fMatch;
while ((fMatch = faqRegex.exec(html)) !== null) {
  const q = fMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  const a = fMatch[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  faqs.push({ q, a });
}

// Search for Stats / Numbers / Counters
const counterRegex = /elementor-counter-number[^"]*"[^>]*data-to-value="([^"]+)"/g;
let counters = [];
let cMatch;
while ((cMatch = counterRegex.exec(html)) !== null) {
  counters.push(cMatch[1]);
}

// Search for Address / Hospital Contact
const addressMatches = html.match(/#?\d+[^<>,]+(Jayanagar|Bangalore|Bengaluru)[^<>]*/gi) || [];

console.log('Doctors mentioned:', doctorsMatches);
console.log('FAQs count:', faqs.length);
faqs.forEach((f, i) => console.log(`Q${i+1}: ${f.q}\nA: ${f.a.slice(0, 100)}...`));
console.log('Address mentions:', [...new Set(addressMatches)].slice(0, 5));

const brief = {
  doctors: doctorsMatches,
  faqs,
  counters,
  addresses: [...new Set(addressMatches)]
};

fs.writeFileSync(path.join(__dirname, '../docs/research/shekareyehospital/page-brief.json'), JSON.stringify(brief, null, 2));
console.log('Brief written to docs/research/shekareyehospital/page-brief.json');
