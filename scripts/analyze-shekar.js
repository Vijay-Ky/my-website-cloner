const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../docs/research/shekareyehospital/page-source.html'), 'utf8');

// 1. Extract Images
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let imgMatches = [];
let m;
while ((m = imgRegex.exec(html)) !== null) {
  const full = m[0];
  const src = m[1];
  const altMatch = full.match(/alt=["']([^"']*)["']/i);
  const alt = altMatch ? altMatch[1] : '';
  const widthMatch = full.match(/width=["']([^"']*)["']/i);
  const heightMatch = full.match(/height=["']([^"']*)["']/i);
  const srcsetMatch = full.match(/srcset=["']([^"']*)["']/i);
  imgMatches.push({
    src,
    alt,
    width: widthMatch ? widthMatch[1] : null,
    height: heightMatch ? heightMatch[1] : null,
    srcset: srcsetMatch ? srcsetMatch[1] : null
  });
}

// 2. Extract CSS files
const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/gi;
let cssLinks = [];
while ((m = cssRegex.exec(html)) !== null) {
  cssLinks.push(m[1]);
}

// 3. Extract Headings
const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
let headings = [];
while ((m = headingRegex.exec(html)) !== null) {
  const tag = m[1].toLowerCase();
  const rawText = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (rawText) {
    headings.push({ tag, text: rawText });
  }
}

// 4. Extract font-face declarations
const fontFaceRegex = /@font-face\s*\{([^}]+)\}/gi;
let fonts = [];
while ((m = fontFaceRegex.exec(html)) !== null) {
  fonts.push(m[1].replace(/\s+/g, ' ').trim());
}

// 5. Extract navigation links
const navListRegex = /<nav[^>]*>([\s\S]*?)<\/nav>/gi;
let navs = [];
while ((m = navListRegex.exec(html)) !== null) {
  const navHtml = m[1];
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let links = [];
  let lm;
  while ((lm = linkRegex.exec(navHtml)) !== null) {
    const text = lm[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text) {
      links.push({ href: lm[1], text });
    }
  }
  navs.push(links);
}

// 6. Extract buttons and forms
const formRegex = /<form[^>]*>([\s\S]*?)<\/form>/gi;
let forms = [];
while ((m = formRegex.exec(html)) !== null) {
  forms.push(m[1].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').trim());
}

// 7. Extract phone numbers, emails, addresses
const phones = [...new Set((html.match(/(\+?91[\s-]?)?[0-9]{3,5}[\s-]?[0-9]{5,8}|tel:[^"'\s<>]+/gi) || []))];
const emails = [...new Set((html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi) || []))];

const summary = {
  totalImages: imgMatches.length,
  uniqueImages: [...new Set(imgMatches.map(i => i.src))],
  images: imgMatches,
  cssLinks,
  fonts,
  headings,
  navs,
  phones,
  emails
};

fs.writeFileSync(path.join(__dirname, '../docs/research/shekareyehospital/extracted-summary.json'), JSON.stringify(summary, null, 2));

console.log('--- EXTRACTION SUMMARY ---');
console.log('Total Images found:', imgMatches.length);
console.log('Unique Images found:', summary.uniqueImages.length);
console.log('Headings found:', headings.length);
headings.forEach(h => console.log(`  [${h.tag.toUpperCase()}] ${h.text}`));
console.log('Phones found:', phones.slice(0, 5));
console.log('Emails found:', emails.slice(0, 5));
console.log('Navigation link groups:', navs.length);
if (navs[0]) {
  console.log('Primary Nav Links:', navs[0].map(l => l.text).join(' | '));
}
