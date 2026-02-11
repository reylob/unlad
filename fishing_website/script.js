// "Today’s Catch" placeholder button
document.getElementById("todaysCatchBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Later: link this to your market website (Today’s Catch).");
});

// If any image fails (network restrictions), show a fallback.
function attachImgFallback(imgEl){
  imgEl.addEventListener("error", () => {
    const ph = imgEl.closest(".ph") || imgEl.parentElement;
    if (!ph) return;
    imgEl.style.display = "none";
    if (!ph.querySelector(".img-fallback")){
      const fb = document.createElement("div");
      fb.className = "img-fallback";
      fb.innerHTML = `Image unavailable<br><small>Replace with your own photo later</small>`;
      ph.appendChild(fb);
    }
  });
}
document.querySelectorAll("#gallery img").forEach(attachImgFallback);

// i18n dictionary
const I18N = {
  en: {
    brand_sub: "progress • growth • moving forward",
    nav_about: "About",
    nav_work: "What We Do", 
    nav_timeline: "Timeline",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    hero_kicker: "Small fishing crew",
    hero_title: "UNLAD — from the sea to the market, fresh catch handled with care.",
    hero_lead: "UNLAD is a family-and-friends fishing team. We prepare our gear, go out together, sort and ice the catch, then sell directly to buyers — simple, honest, and fresh.",
    pill_local: "Local crew",
    pill_sameday: "Same-day catch",
    pill_direct: "Direct selling",
    pill_transparent: "Transparent process",
    cta_message: "Message / Inquire",
    cta_process: "See our process",
    cta_todays: "Today’s Catch (future)",
    hero_notice: "✅ Public showcase site (no accounts, no forms). Safe and easy for visitors.",

    tag_title: "UNLAD means progress",
    tag_sub: "Replace these placeholder images later with your real boat, team, and catch photos.",

    v1_title: "Fresh handling",
    v1_body: "We sort quickly and keep fish on ice to maintain quality and safety.",
    v2_title: "Direct to buyers",
    v2_body: "No complicated steps — you can message us to ask what’s available.",
    v3_title: "Community first",
    v3_body: "We’re local. We sell locally. We build trust through transparency.",

    about_title: "About UNLAD",
    about_sub: "Who we are, in simple words.",
    about_body: "UNLAD is our team name — a Tagalog word meaning progress and growth. We started as a small crew and we keep improving our process: safer trips, better handling, and fair selling directly to the community.",
    about_li1: "Small crew, teamwork-based operations",
    about_li2: "Simple and transparent handling process",
    about_li3: "Focus on freshness and fair pricing",
    about_tip: "Tip: Replace this paragraph with your real story (1–2 paragraphs).",

    work_title: "What we do",
    work_sub: "Our process (easy to understand).",
    work_card_title: "Our process",
    work_li1: "<b>Prepare:</b> Check equipment, fuel, ice, and safety gear.",
    work_li2: "<b>Go to sea:</b> Fish using our chosen method (net/line).",
    work_li3: "<b>Sort & ice:</b> Separate fish types and keep them on ice for freshness.",
    work_li4: "<b>Land & sell:</b> Bring to market and sell directly to buyers.",
    work_tip: "Later we can add a “Boat & Gear” page too.",

    tl_title: "Timeline",
    tl_sub: "Milestones that show progress (unlad).",
    tl_2023_title: "Started as a small family crew",
    tl_2023_body: "Learning the sea, preparing gear, and building teamwork for regular trips.",
    tl_2024_title: "Improved handling and selling",
    tl_2024_body: "Better icing and sorting, and began selling more directly to buyers.",
    tl_2025_title: "Growing community trust",
    tl_2025_body: "More repeat buyers, more consistent market presence, and planning online updates.",
    tl_2026_title: "Launch of the UNLAD showcase site",
    tl_2026_body: "A public page to show who we are and how we work (no accounts yet).",
    tl_notice: "Want it more personal? Tell me the real start year + 2 key events, and I’ll rewrite this timeline.",

    gal_title: "Gallery",
    gal_sub: "Tap an image to view it bigger.",
    gal_notice: "Later: replace these with your real photos (boat, crew, catch, market).",
    
    see_more: "See More",
    show_less: "Show Less",

    contact_title: "Contact",
    contact_sub: "Keep it simple (no forms yet).",
    contact_card1_title: "Message UNLAD",
    contact_card1_body: "For availability, pricing, and meeting time — message us directly.",
    contact_tip: "Replace the links above with your real Messenger/WhatsApp links.",

    contact_card2_title: "Where we sell",
    contact_market_label: "Pickup/Market:",
    contact_market_value: "Your market name here",
    contact_schedule_label: "Schedule:",
    contact_schedule_value: "Mon–Sat • 2:00 PM – 7:00 PM",
    contact_pay_label: "Payment:",
    contact_pay_value: "Cash / GCash (optional)",
    contact_map: "Open map (placeholder)",
    contact_map_note: "Later: put your exact market location link.",

    footer_text: "Built with free tools • Showcase site (public)",
    why_title: "Why Choose UNLAD",
    why_sub: "Built on trust, freshness, and progress.",
    why_1_title: "Fresh From Sea",
    why_1_body: "We fish and sell directly to keep your seafood fresh.",
    why_2_title: "Direct & Fair",
    why_2_body: "No middlemen. Fair pricing for buyers and our crew.",
    why_3_title: "Handled With Care",
    why_3_body: "Sorted and iced properly to maintain quality.",
    why_4_title: "Progress Mindset",
    why_4_body: "UNLAD means progress — we improve every season.",
    avail_title: "Available Today",
    avail_sub: "Fresh catch ready for pickup.",
    status_available: "Available",
    status_sold: "Sold Out",


  },

  tl: {
    avail_title: "Available Ngayon",
    avail_sub: "Sariwang huli para sa pickup.",
    status_available: "Available",
    status_sold: "Ubos Na",

    why_title: "Bakit UNLAD",
    why_sub: "Tiwala, sariwa, at tuloy-tuloy na pag-unlad.",
    why_1_title: "Sariwa Mula Dagat",
    why_1_body: "Direkta ang pangingisda at benta para sariwa ang seafood.",
    why_2_title: "Direkta at Patas",
    why_2_body: "Walang middleman. Patas ang presyo para sa lahat.",
    why_3_title: "Maingat ang Paghawak",
    why_3_body: "Maayos ang pag-sort at pagyeyelo para sa kalidad.",
    why_4_title: "Isip Pag-unlad",
    why_4_body: "UNLAD ang ibig sabihin ay progress — mas gumagaling bawat season.",

    brand_sub: "pag-unlad • paglago • pasulong",
    nav_about: "Tungkol",
    nav_work: "Ano ang ginagawa",
    nav_timeline: "Timeline",
    nav_gallery: "Gallery",
    nav_contact: "Kontak",

    hero_kicker: "Maliit na pangkat ng mangingisda",
    hero_title: "UNLAD — mula dagat hanggang palengke, sariwang huli na maingat ang paghawak.",
    hero_lead: "Ang UNLAD ay pangkat ng pamilya at kaibigan. Inihahanda namin ang gamit, sabay-sabay na pumapalaot, inaayos at nilalagay sa yelo ang huli, at direktang nagbebenta sa mga bumibili — simple, tapat, at sariwa.",
    pill_local: "Lokal na pangkat",
    pill_sameday: "Huli sa araw na iyon",
    pill_direct: "Direktang benta",
    pill_transparent: "Malinaw ang proseso",
    cta_message: "Mag-message / Magtanong",
    cta_process: "Tingnan ang proseso",
    cta_todays: "Huli Ngayon (sa susunod)",
    hero_notice: "✅ Public showcase site (walang account, walang forms). Madali at ligtas para sa bisita.",

    tag_title: "Ang UNLAD ay pag-unlad",
    tag_sub: "Palitan ang mga placeholder na larawan kapag may totoong litrato na kayo (bangka, team, huli).",

    v1_title: "Maayos na paghawak",
    v1_body: "Mabilis naming inaayos at nilalagay sa yelo ang isda para mapanatili ang kalidad at kaligtasan.",
    v2_title: "Direkta sa bumibili",
    v2_body: "Walang komplikado — puwede kayong mag-message para magtanong kung ano ang available.",
    v3_title: "Komunidad muna",
    v3_body: "Lokal kami. Lokal ang benta. Binubuo namin ang tiwala sa pagiging transparent.",

    about_title: "Tungkol sa UNLAD",
    about_sub: "Sino kami, sa simpleng salita.",
    about_body: "UNLAD ang pangalan ng aming pangkat — ibig sabihin ay pag-unlad at paglago. Nagsimula kami bilang maliit na crew at patuloy naming pinapabuti ang proseso: mas ligtas na biyahe, mas maayos na paghawak, at patas na benta direkta sa komunidad.",
    about_li1: "Maliit na crew, teamwork ang sistema",
    about_li2: "Simple at malinaw ang proseso ng paghawak",
    about_li3: "Tumutok sa sariwa at patas na presyo",
    about_tip: "Tip: Palitan ang talatang ito gamit ang totoong kwento ninyo (1–2 talata).",

    work_title: "Ano ang ginagawa namin",
    work_sub: "Proseso (madaling intindihin).",
    work_card_title: "Proseso",
    work_li1: "<b>Paghahanda:</b> Suriin ang gamit, gasolina, yelo, at safety gear.",
    work_li2: "<b>Papalaot:</b> Manghuli gamit ang napiling paraan (lambat/pamingwit).",
    work_li3: "<b>Pagsasaayos at yelo:</b> Paghiwalayin ang klase ng isda at ilagay sa yelo para sariwa.",
    work_li4: "<b>Pagdaong at benta:</b> Dalhin sa palengke at direktang ibenta sa bumibili.",
    work_tip: "Sa susunod, puwede rin tayong magdagdag ng “Bangka at Kagamitan” page.",

    tl_title: "Timeline",
    tl_sub: "Mga milestone na nagpapakita ng pag-unlad (unlad).",
    tl_2023_title: "Nagsimula bilang maliit na pangkat ng pamilya",
    tl_2023_body: "Pag-aaral sa dagat, paghahanda ng gamit, at pagbuo ng teamwork para sa regular na biyahe.",
    tl_2024_title: "Pinahusay ang paghawak at pagbebenta",
    tl_2024_body: "Mas maayos na pagyeyelo at pag-aayos ng huli, at mas direktang pagbebenta sa bumibili.",
    tl_2025_title: "Lumakas ang tiwala ng komunidad",
    tl_2025_body: "Dumami ang suki, mas consistent sa palengke, at nagsimulang magplano ng online updates.",
    tl_2026_title: "Inilunsad ang UNLAD showcase site",
    tl_2026_body: "Public page para ipakita kung sino kami at paano kami nagtatrabaho (wala pang accounts).",
    tl_notice: "Gusto mo mas personal? Ibigay ang totoong start year + 2 key events, ire-rewrite ko ang timeline.",

    gal_title: "Gallery",
    gal_sub: "I-tap ang larawan para lumaki.",
    gal_notice: "Sa susunod: palitan ng totoong litrato (bangka, crew, huli, palengke).",
    see_more: "Tingnan Pa",
    show_less: "Bawasan",

    contact_title: "Kontak",
    contact_sub: "Simple lang (wala pang forms).",
    contact_card1_title: "Mag-message sa UNLAD",
    contact_card1_body: "Para sa availability, presyo, at meeting time — mag-message nang direkta.",
    contact_tip: "Palitan ang links ng totoong Messenger/WhatsApp links ninyo.",

    contact_card2_title: "Saan kami nagbebenta",
    contact_market_label: "Pickup/Palengke:",
    contact_market_value: "Ilagay ang pangalan ng palengke",
    contact_schedule_label: "Oras:",
    contact_schedule_value: "Lun–Sab • 2:00 PM – 7:00 PM",
    contact_pay_label: "Bayad:",
    contact_pay_value: "Cash / GCash (optional)",
    contact_map: "Buksan ang mapa (placeholder)",
    contact_map_note: "Sa susunod: ilagay ang eksaktong location link.",

    footer_text: "Ginawa gamit ang free tools • Public showcase site",
  }
};

function setLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = (lang === "tl") ? "tl" : "en";

  document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
  document.getElementById("btn-tl")?.classList.toggle("active", lang === "tl");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string") {
      if (val.includes("<") && val.includes(">")) el.innerHTML = val;
      else el.textContent = val;
    }
  });

  try { localStorage.setItem("unlad_lang", lang); } catch(e) {}
}

// Mobile menu logic
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function setMenuOpen(open){
  if (!menuBtn || !navLinks) return;
  navLinks.classList.toggle("open", open);
  menuBtn.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn?.addEventListener("click", () => setMenuOpen(!navLinks.classList.contains("open")));
navLinks?.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 820px)").matches) setMenuOpen(false);
  });
});
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 820px)").matches) setMenuOpen(false);
});

// Init year + language
document.getElementById("y").textContent = new Date().getFullYear();
document.getElementById("btn-en")?.addEventListener("click", () => setLang("en"));
document.getElementById("btn-tl")?.addEventListener("click", () => setLang("tl"));

let preferred = "en";
try { preferred = localStorage.getItem("unlad_lang") || "en"; } catch(e) {}
setLang(preferred);
setMenuOpen(false);

document.addEventListener("DOMContentLoaded", () => {
  // LIGHTBOX (with next/prev + keyboard + swipe)
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  const lbCaption = document.getElementById("lbCaption");

  if (!lightbox || !lbImg || !lbClose || !lbPrev || !lbNext || !lbCaption) {
    console.error("Lightbox elements missing. Check IDs.");
    return;
  }

  let lastFocus = null;
  let galleryItems = [];
  let currentIndex = 0;

  function buildGalleryItems(){
    // Build a list that matches EXACTLY the buttons in the DOM (no mismatch)
    galleryItems = Array.from(document.querySelectorAll(".thumb")).map((btn) => ({
      full: btn.getAttribute("data-full") || btn.querySelector("img")?.src || "",
      alt: btn.getAttribute("data-alt") || btn.querySelector("img")?.alt || "Image",
      btn
    }));
  }

  function showAt(index){
    if (!galleryItems.length) return;

    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];

    lbImg.src = item.full;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.alt;
  }

  function openLightboxAt(index){
    buildGalleryItems();
    if (!galleryItems.length) return;

    lastFocus = document.activeElement;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    showAt(index);
    lbClose.focus();
  }

  function closeLightbox(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    }


  function nextImg(){ showAt(currentIndex + 1); }
  function prevImg(){ showAt(currentIndex - 1); }

  // ✅ Event delegation: click any thumbnail
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".thumb");
    if (!btn) return;

    buildGalleryItems();
    const idx = galleryItems.findIndex(x => x.btn === btn);
    if (idx >= 0) openLightboxAt(idx);
  });

  // Buttons
  lbClose.addEventListener("click", closeLightbox);
  lbNext.addEventListener("click", nextImg);
  lbPrev.addEventListener("click", prevImg);

  // Click outside closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard: Esc closes, arrows navigate
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImg();
    if (e.key === "ArrowLeft") prevImg();
  });

  // Swipe on mobile (touch)
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    if (!lightbox.classList.contains("open")) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx > 50) prevImg();
    if (dx < -50) nextImg();
  }, { passive: true });

  // Optional: if big image path is wrong, show placeholder instead of blank
  lbImg.addEventListener("error", () => {
    lbCaption.textContent = "Image not found";
    // Change this path to your real placeholder location:
    lbImg.src = "logo";
  });

  function setupSeeMoreGallery() {
  const gallery = document.getElementById("galleryGrid");
  const btn = document.getElementById("seeMoreBtn");
  if (!gallery || !btn) return;

  const items = Array.from(gallery.children);
  const initialVisible = 8;
  let expanded = false;

  if (items.length <= initialVisible) {
    btn.style.display = "none";
    return;
  }

  function update() {
  items.forEach((item, i) => {
    item.style.display = (!expanded && i >= initialVisible) ? "none" : "";
  });

  // Get current language
  const currentLang = document.documentElement.lang || "en";
  const dict = I18N[currentLang] || I18N.en;

  btn.textContent = expanded ? dict.show_less : dict.see_more;
}

  btn.onclick = () => {
    expanded = !expanded;
    update();
  };

  update();
}

// Run once the page is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupSeeMoreGallery);
} else {
  setupSeeMoreGallery();
}



});
