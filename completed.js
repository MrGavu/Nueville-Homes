/* ============================================================
   COMPLETED PROJECTS PAGE
   Pulls a fixed set of property IDs from
   window.NEUVILLE_PROPERTIES (assets/properties-data.js) so the
   card details always stay in sync with each property's page.

   NOTE FOR CLIENT: to change which completed projects show here,
   just edit the ids in the COMPLETED_IDS array below — the id
   must match an "id" in assets/properties-data.js.
   ============================================================ */

(function () {
  const COMPLETED_IDS = ['newton-villa', 'novo', 'concorde'];
  const list = window.NEUVILLE_PROPERTIES || [];
  const grid = document.getElementById('completedGrid');
  if (!grid) return;

  const projects = COMPLETED_IDS
    .map(id => list.find(p => p.id === id))
    .filter(Boolean);

  grid.innerHTML = projects.map(p => `
    <a class="project-card" href="property.html?id=${p.id}">
      <div class="project-card-media">
        <img src="${p.heroImage}" alt="${p.name}" loading="lazy">
        <span class="project-card-tag">${p.status}</span>
      </div>
      <div class="project-card-body">
        <h3>${p.name}</h3>
        <p>${p.type} &middot; ${p.location}</p>
        <span class="project-card-link">View Property &#8599;</span>
      </div>
    </a>
  `).join('');
})();
