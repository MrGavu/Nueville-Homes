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
    location: "East Legon Hills, Greater Accra, Ghana",
    mapQuery: "East Legon Hills, Greater Accra, Ghana",
    heroImage: "assets/newton-villa-3.jpg",
    gallery: [
      "assets/newton-villa-3.jpg",
      "assets/newton-villa-2.jpg",
      "assets/home-5.JPG",
      "assets/home-1.jpg"
    ],
    video: "assets/neuville-homes.mp4",
    about: [
      "Nestled in the prestigious East Legon Hills, Newton Villa is a signature residence by Neuville Homes, crafted for those who appreciate understated elegance and exceptional design. Defined by clean architectural lines, generous natural light, and meticulously curated interiors, every space is designed to deliver comfort, sophistication, and effortless living.",
      "From the seamless indoor-outdoor flow to the private swimming pool and premium finishes, Newton Villa offers a refined lifestyle in one of Accra's most desirable neighborhoods."
    ],
    facts: [
      { label: "Type", value: "New Construction" },
      { label: "Location", value: "East Legon Hills, Greater Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "3 Luxury Ensuite Bedrooms", "ADesigner Fitted Kitchen", "Spacious Living & Dining Areas",
      "Guest Powder Room", "Private Swimming Pool", "Landscaped Garden",
      "3-Car Parking", "High Ceilings & Floor-to-Ceiling Windows", "Premium Finishes & Fixtures",
      "CCTV Security System", "Air Conditioning", "Water Heating System",
      "Backup Power Supply"
    ]
  },
  {
    id: "novo",
    name: "Novo",
    type: "Renovation",
    status: "Available",
    location: "Spintex, Greater Accra, Ghana",
    mapQuery: "Spintex, Greater Accra, Ghana",
    heroImage: "assets/novo-1.JPG",
    gallery: [
      "assets/novo-1.JPG",
      "assets/home-4.jpg",
      "assets/home-6.JPG"
    ],
    video: null,
    about: [
      "Nestled in the sought-after neighborhood of Nanakrom, Ashaley Botwe, Novo is an exclusive collection of contemporary twin homes thoughtfully designed for modern family living. Defined by clean architectural lines, expansive glazing, generous natural light, and timeless finishes, Novo seamlessly blends elegance, comfort, and functionality.",
      "Each residence features four spacious en-suite bedrooms, a staff quarters (bunker) with a private bathroom, a guest powder room, and a striking central skylight that fills the home with natural daylight, creating bright, airy interiors throughout the day. Thoughtfully planned living and dining spaces flow effortlessly into beautifully landscaped outdoor areas, offering the perfect balance of privacy, comfort, and sophistication. Crafted with meticulous attention to detail and premium materials, Novo delivers a refined lifestyle in one of Accra's most desirable residential communities."
    ],
    facts: [
      { label: "Type", value: "Renovation" },
      { label: "Location", value: "Spintex, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "Fully fitted modern kitchen", "Landscaped gardens", "Central skylight",
      "CCTV security system", "Air conditioning", "Water heating system",
      "Backup power supply"
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
