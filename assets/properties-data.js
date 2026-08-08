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
    type: "Premium Architecture",
    status: "Available",
    location: "East Legon Hills, Greater Accra, Ghana",
    heroImage: "assets/newton-villa-4.jpg",
    gallery: [
      "assets/newton-villa-5.jpg",
      "assets/newton-villa-7.jpg",
      "assets/newton-villa-6.jpg",
      "assets/newton-villa-3.jpg"
    ],
    about: [
      "Nestled in the prestigious East Legon Hills, Newton Villa is a signature residence by Neuville Homes, crafted for those who appreciate understated elegance and exceptional design. Defined by clean architectural lines, generous natural light, and meticulously curated interiors, every space is designed to deliver comfort, sophistication, and effortless living.",
      "From the seamless indoor-outdoor flow to the private swimming pool and premium finishes, Newton Villa offers a refined lifestyle in one of Accra's most desirable neighborhoods."
    ],
    facts: [
      { label: "Type", value: "Premium Architecture" },
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
    type: "Exclusive Development",
    status: "Available",
    location: "Ashaley Botwe, Greater Accra, Ghana",
    heroImage: "assets/novo-1.JPG",
    gallery: [
      "assets/novo-2.jpg",
      "assets/novo-3.jpg",
      "assets/novo-5.jpg",
      "assets/novo-6.jpg",
    ],
    video: null,
    about: [
      "Nestled in the sought-after neighborhood of Nanakrom, Ashaley Botwe, Novo is an exclusive collection of contemporary twin homes thoughtfully designed for modern family living. Defined by clean architectural lines, expansive glazing, generous natural light, and timeless finishes, Novo seamlessly blends elegance, comfort, and functionality.",
      "Each residence features four spacious en-suite bedrooms, a staff quarters (bunker) with a private bathroom, a guest powder room, and a striking central skylight that fills the home with natural daylight, creating bright, airy interiors throughout the day. Thoughtfully planned living and dining spaces flow effortlessly into beautifully landscaped outdoor areas, offering the perfect balance of privacy, comfort, and sophistication. Crafted with meticulous attention to detail and premium materials, Novo delivers a refined lifestyle in one of Accra's most desirable residential communities."
    ],
    facts: [
      { label: "Type", value: "Exclusive Development" },
      { label: "Location", value: "Ashaley Botwe, Greater Accra" },
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
    type: "Signature Concept",
    status: "Available",
    location: "Ashaley Botwe, Accra, Ghana",
    heroImage: "assets/concorde-2.jpg",
    gallery: [
      "assets/concorde-4.jpg",
      "assets/concorde-2.jpg",
      "assets/concorde-1.jpg",
      "assets/concorde-5.jpg"
    ],

    about: [
      "The Concorde is a contemporary twin townhouse in Ashaley Botwe, thoughtfully designed for modern family living. Featuring three spacious en-suite bedrooms, two elegant living areas, and an open-plan layout, it blends comfort with timeless style. The home includes a fitted kitchen, laundry room, staff quarters, backup power and water supply, and parking for up to four vehicles.",
      "Every detail has been carefully considered to deliver a seamless balance of luxury, functionality, and everyday convenience. Located in one of Accra's most desirable neighborhoods, The Concorde offers refined living in a peaceful setting with easy access to the city."
    ],
    facts: [
      { label: "Type", value: "Signature Concept" },
      { label: "Location", value: "Ashaley Botwe, Accra" },
      { label: "Status", value: "Available" }
    ],
    amenities: [
      "Fitted Kitchen", "CCTV security", "Air conditioning",
      "Water Heating System", "Backup power supply", "Laundry room",
      "Staff Bunker"
    ]
  },
];
