/* ============================================================
   PROPERTY PAGE
   Reads ?id= from the URL, looks the property up in
   window.NEUVILLE_PROPERTIES (assets/properties-data.js),
   and fills in this page's template.
   ============================================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const list = window.NEUVILLE_PROPERTIES || [];
  const property = list.find(p => p.id === id);

  const main = document.querySelector('main');
  const notFound = document.getElementById('propNotFound');

  if (!property) {
    // Hide every real section, show the not-found state only.
    Array.from(main.children).forEach(section => {
      if (section !== notFound) section.hidden = true;
    });
    notFound.hidden = false;
    document.title = 'Property Not Found | Neuville Homes';
    return;
  }

  // ---- Basic text / title ----
  document.title = property.name + ' | Neuville Homes';
  document.getElementById('propBreadcrumbName').textContent = property.name;
  document.getElementById('propType').textContent = property.type;
  document.getElementById('propName').textContent = property.name;
  document.getElementById('propLocation').textContent = property.location;
  document.getElementById('propAboutHeading').textContent = property.name + '.';
  document.getElementById('propCtaName').textContent = property.name;

  // ---- Hero image ----
  const heroImg = document.getElementById('propHeroImg');
  heroImg.src = property.heroImage;
  heroImg.alt = property.name + ' — ' + property.type;

  // ---- Quick facts strip ----
  const factsWrap = document.getElementById('propFacts');
  factsWrap.innerHTML = property.facts.map(f =>
    '<div class="fact"><span class="fact-label">' + f.label + '</span><span class="fact-value">' + f.value + '</span></div>'
  ).join('');

  // ---- Gallery ----
  const galleryGrid = document.getElementById('propGalleryGrid');
  galleryGrid.innerHTML = property.gallery.map((src, i) =>
    '<button type="button" class="property-gallery-item" data-index="' + i + '">' +
      '<img src="' + src + '" alt="' + property.name + ' photo ' + (i + 1) + '" loading="lazy">' +
    '</button>'
  ).join('');

  // ---- About copy ----
  const aboutCopy = document.getElementById('propAboutCopy');
  aboutCopy.innerHTML = property.about.map(p => '<p class="body-text">' + p + '</p>').join('');

  // ---- Amenities ----
  const amenitiesList = document.getElementById('propAmenities');
  amenitiesList.innerHTML = property.amenities.map(a =>
    '<li class="amenity-item"><span class="amenity-check" aria-hidden="true">&#10003;</span>' + a + '</li>'
  ).join('');

  // ---- Lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCount = document.getElementById('lightboxCount');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  function updateLightbox() {
    const src = property.gallery[currentIndex];
    lightboxImg.src = src;
    lightboxImg.alt = property.name + ' photo ' + (currentIndex + 1);
    lightboxCount.textContent = (currentIndex + 1) + ' / ' + property.gallery.length;
  }
  function showNext() {
    currentIndex = (currentIndex + 1) % property.gallery.length;
    updateLightbox();
  }
  function showPrev() {
    currentIndex = (currentIndex - 1 + property.gallery.length) % property.gallery.length;
    updateLightbox();
  }

  galleryGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.property-gallery-item');
    if (!btn) return;
    openLightbox(Number(btn.dataset.index));
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', showNext);
  document.getElementById('lightboxPrev').addEventListener('click', showPrev);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
})();
