/* ============================================================
   PROPERTY DATA
   ------------------------------------------------------------
   One object per property. property.html reads the ?id= from
   the URL, looks it up here, and fills in the template.

   NOTE FOR CLIENT: everything below — photos, copy, amenities,
   address — is placeholder content written to show the layout.
   Edit the values in this file (no HTML editing needed) to
   swap in real details for each property. To add a brand new
   property: copy one whole { ... } block, give it a unique
   "id", and link a gallery image on the homepage to
   "property.html?id=your-new-id".
   ============================================================ */

window.NEUVILLE_PROPERTIES = [
  {
    id: "newton-villa",
    name: "Newton Villa",
    type: "New Construction",
    status: "Available",
    location: "East Legon, Accra, Ghana",
    mapQuery: "East Legon, Accra, Ghana",
    heroImage: "assets/newton-villa-3.jpg",
    gallery: [
      "assets/newton-villa-3.jpg",
      "assets/newton-villa-2.jpg",
      "assets/home-5.JPG",
      "assets/home-1.jpg"
    ],
    video: "assets/neuville-homes.mp4",
    about: [
      "Newton Villa is a ground-up build set along a quiet riverside plot in East Legon, designed around long sightlines, cross-ventilation, and a material palette that ages well rather than dates quickly.",
      "The layout keeps the main living spaces open to the garden and pool deck, while bedrooms sit on a separate wing for privacy. Every finish, from the kitchen stone to the door hardware, was chosen for durability first."
    ],
    facts: [
      { label: "Type", value: "New Construction" },
      { label: "Location", value: "East Legon, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "CCTV Security System", "Air Conditioning (All Rooms)", "Instant Water Heater",
      "Standby Generator", "Borehole Water Supply", "Fitted Modern Kitchen",
      "Walk-in Wardrobes", "Swimming Pool", "Landscaped Garden",
      "Covered Parking (2+ Cars)", "Perimeter Wall & Electric Gate", "Staff Quarters",
      "Smart Home Wiring", "Fibre-Ready Internet", "Solar Power Backup",
      "Fire & Smoke Detection", "Rainwater Harvesting", "En-suite Bathrooms"
    ]
  },
  {
    id: "novo",
    name: "Novo",
    type: "Renovation",
    status: "Available",
    location: "Spintex, Accra, Ghana",
    mapQuery: "Spintex, Accra, Ghana",
    heroImage: "assets/novo-1.JPG",
    gallery: [
      "assets/novo-1.JPG",
      "assets/home-4.jpg",
      "assets/home-6.JPG"
    ],
    video: null,
    about: [
      "Novo began as a dated 1990s bungalow and was reworked down to the frame — new roofline, new services, and a completely reorganised floor plan that opens the living areas onto a rebuilt courtyard.",
      "We kept what was structurally sound and worth keeping, and replaced everything else with materials suited to the climate: better insulation, wider eaves, and cross-breeze windows throughout."
    ],
    facts: [
      { label: "Type", value: "Renovation" },
      { label: "Location", value: "Spintex, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "CCTV Security System", "Air Conditioning (All Rooms)", "Instant Water Heater",
      "Standby Generator", "Borehole Water Supply", "Fitted Modern Kitchen",
      "Walk-in Wardrobes", "Covered Parking (2+ Cars)", "Perimeter Wall & Electric Gate",
      "Smart Home Wiring", "Fibre-Ready Internet", "Fire & Smoke Detection",
      "Rainwater Harvesting", "En-suite Bathrooms"
    ]
  },
  {
    id: "concorde",
    name: "Concorde",
    type: "Interior Design",
    status: "Available",
    location: "Airport Residential Area, Accra, Ghana",
    mapQuery: "Airport Residential Area, Accra, Ghana",
    heroImage: "assets/concorde-1.jpg",
    gallery: [
      "assets/concorde-1.jpg",
      "assets/home-2.jpg",
      "assets/home-8.jpg"
    ],
    video: null,
    about: [
      "Concorde is a full interior direction project: material studies, joinery, lighting and furniture layout, built out inside an existing shell in Airport Residential. The brief was warm minimalism — oak, limestone, and restraint.",
      "Every material decision was tested as a physical sample against the site's natural light before being specified, which is why the palette reads so consistently from room to room."
    ],
    facts: [
      { label: "Type", value: "Interior Design" },
      { label: "Location", value: "Airport Residential, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "CCTV Security System", "Air Conditioning (All Rooms)", "Instant Water Heater",
      "Fitted Modern Kitchen", "Walk-in Wardrobes", "Covered Parking (2+ Cars)",
      "Smart Home Wiring", "Fibre-Ready Internet", "Solar Power Backup",
      "Fire & Smoke Detection", "En-suite Bathrooms"
    ]
  },
  {
    id: "courtyard-house",
    name: "Courtyard House",
    type: "Renovation",
    status: "Available",
    location: "Cantonments, Accra, Ghana",
    mapQuery: "Cantonments, Accra, Ghana",
    heroImage: "assets/home-3.jpg",
    gallery: [
      "assets/home-3.jpg",
      "assets/home-4.jpg",
      "assets/home-6.JPG"
    ],
    video: null,
    about: [
      "Courtyard House is built around a central open-air courtyard that pulls light and air into every room that touches it. The renovation opened up a previously boxed-in floor plan to make that courtyard the heart of the home.",
      "Outdoor and indoor living are treated as one continuous space, with sliding glazing that disappears fully into the walls on both sides of the courtyard."
    ],
    facts: [
      { label: "Type", value: "Renovation" },
      { label: "Location", value: "Cantonments, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "CCTV Security System", "Air Conditioning (All Rooms)", "Instant Water Heater",
      "Standby Generator", "Fitted Modern Kitchen", "Walk-in Wardrobes",
      "Landscaped Garden", "Covered Parking (2+ Cars)", "Perimeter Wall & Electric Gate",
      "Smart Home Wiring", "Fibre-Ready Internet", "Rainwater Harvesting",
      "En-suite Bathrooms"
    ]
  },
  {
    id: "the-long-view",
    name: "The Long View",
    type: "Interior Design",
    status: "Available",
    location: "Trasacco Valley, Accra, Ghana",
    mapQuery: "Trasacco Valley, Accra, Ghana",
    heroImage: "assets/home-7.jpg",
    gallery: [
      "assets/home-7.jpg",
      "assets/home-8.jpg",
      "assets/home-2.jpg"
    ],
    video: null,
    about: [
      "The Long View takes its name from the sightline the entire interior plan was built around — a single uninterrupted view from the front door through to the garden beyond. Furniture, lighting and joinery were all placed to protect it.",
      "The result is a home that feels larger than its footprint, with every room reading as part of one continuous, calm sequence."
    ],
    facts: [
      { label: "Type", value: "Interior Design" },
      { label: "Location", value: "Trasacco Valley, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "CCTV Security System", "Air Conditioning (All Rooms)", "Instant Water Heater",
      "Fitted Modern Kitchen", "Walk-in Wardrobes", "Landscaped Garden",
      "Covered Parking (2+ Cars)", "Smart Home Wiring", "Fibre-Ready Internet",
      "Solar Power Backup", "Fire & Smoke Detection", "En-suite Bathrooms"
    ]
  }
];
