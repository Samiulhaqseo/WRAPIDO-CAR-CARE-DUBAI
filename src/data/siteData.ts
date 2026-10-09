export interface ServiceItem {
  id: string;
  categoryKicker: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  badgeText: string;
  startingPrice: string;
  details: {
    duration: string;
    warranty: string;
    materials: string;
    overview: string;
    included: string[];
  };
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  timeAgo: string;
  rating: number;
  vehicle: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Wrapido Car Care",
  tagline: "Wrapping · PPF · Tinting · Detailing",
  phone: "+971 55 116 1320",
  phoneFormatted: "(+971) 55 116 1320",
  phoneTel: "+971551161320",
  whatsappUrl: "https://wa.me/971551161320?text=Hello%20Wrapido%20Car%20Care,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20car.",
  email: "infor@WrapidoCarCare.ae",
  address: "46F9+QF8 - Al Qouz Ind.third - Al Quoz - Dubai - United Arab Emirates",
  addressShort: "Al Quoz Ind. 3, Dubai, UAE",
  logo: "https://lh3.googleusercontent.com/a-/ALV-UjVSyr0gq7_t2qK4VRpZPoGkMce0tGtQB2GoML73rK5Aai-0jVQ=w65-h65-p-rp-mo-br100",
  gbpLink: "https://share.google/Jk8RDROz9VA3eABoA",
  mapEmbedIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3713398851446!2d55.21124141034479!3d25.123133577666025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b70f6db1279%3A0x62790c59c4c43e7f!2sWrapido%20Car%20Care%20-%20Wrapping%20PPF%20Tinting!5e0!3m2!1sen!2s!4v1791520321395!5m2!1sen!2s",
  currency: "AED",
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
    weekend: "Saturday & Sunday: 9:00 AM - 6:00 PM / By Appointment",
  },
  rating: 5.0,
  reviewCount: 518,
};

// 7 Services specified in User prompt B
export const SERVICES: ServiceItem[] = [
  {
    id: "window-tinting",
    categoryKicker: "ADD PRIVACY, UV & HEAT PROTECTION",
    title: "WINDOWS TINTING",
    description:
      "Our high performance Ceramic Window Tint films reject heat, reduce glare, and block harmful UV rays. Experience a much more comfortable ride in the summer. We prioritize protecting you and your passengers from extreme desert UV exposure & glare. View our window tinting packages & learn more about our Ceramic Window Films.",
    bullets: [
      "Up to 98% Infrared Heat Rejection",
      "99.9% Harmful UV Ray Block",
      "No Cellular/GPS Signal Interference",
      "Lifetime Manufacturer Warranty",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9d26YcG6X8V-9QGncZGeF80RPN17wz8kwC-I4-xWRzHqIElWXcP08jFDdGsqf2LeypHZEDJzPC1289Ovtu9nnNEa-RvxxaSobvhFt3a16wOzWkBcCFOnYSiskQwAuUHUnnwvR=s680-w680-h510-rw",
    badgeText: "CERAMIC WINDOW TINT",
    startingPrice: "AED 799",
    details: {
      duration: "2 - 4 Hours",
      warranty: "10 Years / Lifetime",
      materials: "Nano-Ceramic IR films (Llumar / 3M / SunTek)",
      overview:
        "Engineered specifically for extreme Middle Eastern temperatures, our nano-ceramic films reject scorching infrared rays while keeping your cabin cool without darkening visibility dangerously. Fully compliant with UAE federal traffic regulations.",
      included: [
        "Computer-cut plotter patterns for zero-blade glass contact",
        "Full front windscreen heat-shield tint (clear / 70% VLT)",
        "Side windows & rear glass tinting with UV400 barrier",
        "Heat cure check & micro-edge trimming",
      ],
    },
  },
  {
    id: "ceramic-coating",
    categoryKicker: "HIGH-GLOSS & YEARS OF PROTECTION",
    title: "CERAMIC COATING",
    description:
      "Ceramic coatings are ideal for new and luxury vehicles seeking protection from the elements, providing a transparent, long-lasting shield far superior to traditional wax. They chemically bond with the car's clear coat, creating an exceptionally strong and enduring protective layer that can withstand years of UAE sun and tear. For quality application, consider visiting Wrapido Car Care in Al Quoz, a certified ceramic detailer shop.",
    bullets: [
      "Self-Healing Micro Scratch-Nano Tech",
      "Extreme Hydrophobic Water Beading",
      "Resistant to Acid Rain, Sand & Bird Droppings",
      "Mirror-Depth Gloss Finish",
    ],
    image:
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf4URCyK6zE-0EzT5kfNBmX6X-F-NlXZCVkuo0AalhnXmRv7i-KmycUHXR1EbNOMTzWTYjDVyFi33eiu95wOq27nQRfmfnQh5s7wWUYc8hDuIBXlA7Ko3iRETKFwDTBp4-bUan4=s680-w680-h510-rw",
    badgeText: "CERTIFIED CERAMIC COATING",
    startingPrice: "AED 1,499",
    details: {
      duration: "1 - 2 Days",
      warranty: "3 - 7 Years Certified",
      materials: "FEYNLAB® & GYEON Certified Quartz Formulations",
      overview:
        "A 9H hardness ceramic matrix that provides unmatched gloss depth and hydrophobic self-cleaning properties. Eliminates the need for waxing while protecting against Dubai's relentless sun, sand dust, and industrial fallout.",
      included: [
        "Comprehensive exterior foam de-contamination wash",
        "Clay bar treatment & paint depth gauge inspection",
        "Multi-stage machine paint correction (swirl removal)",
        "Base ceramic coat + hydrophobic top layer application",
        "Infrared lamp curing in our clean-room booth",
      ],
    },
  },
  {
    id: "ppf",
    categoryKicker: "CLEAR WRAPS FOR ROCK CHIP PROTECTION",
    title: "PAINT PROTECTION FILM (PPF)",
    description:
      "Paint Protection Film (PPF), also known as clear bra, provides unmatched safeguarding against rock chips, scratches & UV damage. This film is applied to your entire vehicle but is frequently used to protect the most high impact areas. View our PPF packages & learn more about this amazing self-healing technology.",
    bullets: [
      "8mil Ultra-Durable Aliphatic Polyurethane",
      "Instant Heat-Activated Self-Healing",
      "Precision Computer Plotter Cut Patterns",
      "10-Year Anti-Yellowing Warranty",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RpADgYJ43h_CEkSfrtkhSC5koaxFiXb-G-NvIOMZO_IM0jvZT66PXYU4m0cNNoFyNE03xaoOUb3KoIsSgFx56G8w9DAKCqgzixBLzWueS7w_6Q5UdPl7W1SWF60JyEtwEWUR2reQ=s680-w680-h510-rw",
    badgeText: "SELF-HEALING PPF",
    startingPrice: "AED 4,999",
    details: {
      duration: "3 - 4 Days",
      warranty: "10-Year Nationwide Warranty",
      materials: "XPEL / Stek / SunTek Ultra Clear Film",
      overview:
        "The ultimate armor for UAE roads. Our self-healing aliphatic polyurethane film absorbs gravel strikes, sandstorm etching, and parking door dings. Under sunlight or warm water, surface scratches heal automatically.",
      included: [
        "Full front or entire vehicle wrap packages",
        "Wrapped edges for a virtually invisible factory finish",
        "Mirror caps, headlights, door cups, and bumper protection",
        "Dedicated ceramic top coat for PPF gloss retention",
      ],
    },
  },
  {
    id: "car-wrapping",
    categoryKicker: "COMPLETE COLOR CHANGE & CUSTOM FINISHES",
    title: "PREMIUM CAR WRAPPING",
    description:
      "When it comes to changing your car's look or protecting original factory paint, Wrapido Car Care stands as Dubai's premier wrapping destination. Choose from over 300 stunning vinyl finishes including ultra-gloss, stealth satin, deep matte, brushed metallics, and mesmerizing iridescent flips, all applied by certified master installers.",
    bullets: [
      "Over 300+ Premium Colors & Custom Finishes",
      "Cast Vinyl from 3M, Avery Dennison & Inozetek",
      "100% Reversible with OEM Paint Preservation",
      "Disassembly Precision with Seamless Tucked Edges",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sc4iPJycbs9rJW1rxuNqu1SkKgqpOo1xdaEm9so2dUHUV879CJ1TMAe-WgfwLFasfAn0hysoDSByxXNCA05B5LQiiLHGflp0g3s2CPxqQbDbOoh4sY2_KYILoyLLa8BX7yknVSrST2Z-w=w141-h177-n-k-no-nu",
    badgeText: "PREMIUM VINYL WRAP",
    startingPrice: "AED 6,500",
    details: {
      duration: "3 - 5 Days",
      warranty: "3 - 5 Years Warranty",
      materials: "Avery Dennison Supreme, 3M 2080, Inozetek Super Gloss",
      overview:
        "Give your vehicle a unique personality with full color transformation. We remove door handles, trims, and emblems with factory-grade tools to ensure flawless edge wrapping that looks like a multimillion-dollar paint job.",
      included: [
        "Complete body panel wrapping with interior door jams (optional)",
        "Certified paint assessment prior to installation",
        "Post-heating process to eliminate vinyl memory and lifting",
        "Dubai RTA color permit assistance guidance",
      ],
    },
  },
  {
    id: "exterior-polishing",
    categoryKicker: "SWIRL REMOVAL & PAINT CORRECTION",
    title: "EXTERIOR POLISHING",
    description:
      "Our professional auto detailing services provide a tailored approach to those delicate areas. We use professional products & techniques to ensure that your vehicle's surfaces don't diminish. View our packages & find out if professional car detailing is right for you in Al Quoz.",
    bullets: [
      "Dual-Action Multi-Stage Paint Correction",
      "Safe Paint Depth Gauge Verification",
      "Elimination of 90%+ Swirls, Scratches & Water Marks",
      "Deep Gloss Mirror Reflection Restoration",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SVinxjoy7Q_7LEAsqW9OHH8T2zAA5UYExrbr3pXNzLspOYyzbCZ2u4bSgXDAeZKvbADM2J-Ih_39-4SY6tmPPkBvz0Aq483Fme32S0ZFUcgYmwKgh8OACPikQIS7cdpYkO0x8=w141-h177-n-k-no-nu",
    badgeText: "CONCOURS POLISHING",
    startingPrice: "AED 699",
    details: {
      duration: "1 Day",
      warranty: "Showroom Finish Guarantee",
      materials: "Rupes polishers, Menzerna & Koch-Chemie compounds",
      overview:
        "Over time, automated car washes and sandstorms create millions of fine circular scratches. Our multi-stage compounding and jeweling polishing process permanently levels imperfections to unveil true paint clarity.",
      included: [
        "Decontamination foam bath, iron fallout remover & claying",
        "Step 1: Heavy cutting compound for swirl & scratch removal",
        "Step 2: Medium finishing polish for optical clarity",
        "Step 3: Ultra-fine jeweling polish for liquid-wet reflection",
        "Protective paint sealant application",
      ],
    },
  },
  {
    id: "rims-calipers",
    categoryKicker: "CUSTOM ACCENT & THERMAL BRAKE COATING",
    title: "RIMS & CALIPERS PAINT",
    description:
      "Transform your wheels and braking system with custom thermal caliper painting and premium rim refinishing. Choose any color scheme—from OEM Porsche Acid Green and Brembo Red to custom gold and titanium grey—finished with customized high-temperature decals and ceramic coating.",
    bullets: [
      "High-Temperature Heat-Resistant Paint (up to 1,000°F)",
      "Ultrasonic Wheels-Off Prep & Chemical Degreasing",
      "Custom Stenciled Brand Decals (Brembo, AMG, M, Porsche)",
      "High-Gloss Clear Shield & Ceramic Wheel Armor",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RrWvdWmZwBulvhQE_L-uUXZoxdXpjSrfLxm6aXMDzMU9xkVoGLOXIxAZmOCThvv21EchyvS593lXk5g9SO0h3_dlGqGYJ0gbls1EhPXQqoH2qj_pclxqGyEAJ3auPn9Dg1Xu18hg=w141-h177-n-k-no-nu",
    badgeText: "RIMS & CALIPERS",
    startingPrice: "AED 999",
    details: {
      duration: "1 - 2 Days",
      warranty: "2 Years Color & Heat Guarantee",
      materials: "Automotive High-Temp Caliper Enamel & 2K Clear Coat",
      overview:
        "Brake calipers are subject to extreme heat and corrosive brake dust. We sand, prime, paint, and clear coat them on all 4 corners while your rims receive curb-rash repair and custom powder coating or gloss painting.",
      included: [
        "All four wheels removed and precision masked",
        "Deep brake dust cleaning, degreasing and rust treatment",
        "3 coats of heat-rated color plus custom high-temp emblems",
        "2 coats of high-gloss protective clear coat",
      ],
    },
  },
  {
    id: "chrome-delete",
    categoryKicker: "STEALTH SHADOWLINE BLACKOUT",
    title: "CHROME DELETE",
    description:
      "Window film installed on your vehicle gives an aggressive stealth presence. Chrome delete wraps modernize your car by concealing bright chrome window trim, front grilles, badges, roof rails, and exhaust tips in sleek gloss, satin, or matte black.",
    bullets: [
      "Precision Cast Blackout Vinyl by 3M & Avery Dennison",
      "Knifeless Tape Technology for Flawless Trim Edges",
      "UV & Weather-Resistant to Harsh Dubai Sun",
      "100% Removable with Zero Residue on OEM Trim",
    ],
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RCkbb4IBZlaFCk5tPpj2KzB86Fs5Du5e-CU-Hfy2quxrreDbVMsAEqjuJDC054ElfQZJOif4WoQ8KplSNsGs6thk_Hrwyt4efQYA8F0KHc82tVIChsGDwyOEGYRKVI8oCFL_4=w141-h142-n-k-no-nu",
    badgeText: "CHROME DELETE",
    startingPrice: "AED 599",
    details: {
      duration: "3 - 5 Hours",
      warranty: "2 Years Anti-Peel Warranty",
      materials: "Gloss / Satin / Matte Black Cast Film",
      overview:
        "Achieve the sought-after 'Shadowline' or 'Night Package' appearance without replacing expensive OEM trim pieces. Our seamless vinyl wrap covers bright chrome for a cleaner, sportier profile.",
      included: [
        "Window surround moldings & beltline chrome",
        "Front grille accents & lower intake trim",
        "Side mirror brackets, fender badges & rear trunk strips",
        "Heat-tucked edges around tight rubber weatherstripping",
      ],
    },
  },
];

// Why choose us points matching screenshot
export const WHY_CHOOSE_US = [
  {
    number: "01.",
    title: "HIGHEST QUALITY PAINT COATING PRODUCTS",
    description:
      "High-quality coatings pioneered surface protection & ceramic shielding against oxidation, UV degradation, harsh sandstorms, and chemical etching.",
  },
  {
    number: "02.",
    title: "BEST ALL-AROUND CLEAR BRA & PPF",
    description:
      "Clear bra is known as the king of paint protection film, and Wrapido PPF is at the forefront of industry innovation with self-healing top coats.",
  },
  {
    number: "03.",
    title: "SUPERIOR PERFORMANCE WINDOW TINT",
    description:
      "Llumar and 3M window film uses advanced nano-ceramic and infrared-blocking technology to reduce heat, block IR rays, and keep your vehicle cooler during Dubai summers.",
  },
  {
    number: "04.",
    title: "LUXURY AUTO DETAILING & POLISHING SERVICE",
    description:
      "Detailing services that include exterior, interior, maintenance washes, paint correction, paint-less dent removal, rim painting and a wide range of custom packages.",
  },
];

// Verified Google Reviews
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marcus Sterling",
    timeAgo: "3 weeks ago",
    rating: 5,
    vehicle: "Porsche 911 GT3",
    text:
      "Dario and his team know their craft, and stand behind their work. I brought Dario a new 911 a few days after purchasing from a dealership. They performed full front PPF and ceramic coating. The finish is flawless, completely invisible seams. Highly recommend!",
  },
  {
    id: "rev-2",
    author: "Rohan Varma",
    timeAgo: "1 month ago",
    rating: 5,
    vehicle: "BMW M4 Competition",
    text:
      "Dario is extremely passionate about the quality of his work and his business. He is very knowledgeable about the products he uses and always gives an honest breakdown of what makes sense for Dubai heat. Nano ceramic tint dropped cabin temps noticeably!",
  },
  {
    id: "rev-3",
    author: "Elena Smirnova",
    timeAgo: "2 months ago",
    rating: 5,
    vehicle: "Mercedes-AMG G63",
    text:
      "Amazing service and great world! I recommend to anyone who wants their vehicle protected right the first time. The full satin black wrap on my G-Wagon looks like it came from the factory, and the ceramic coating makes it so easy to rinse off desert dust.",
  },
  {
    id: "rev-4",
    author: "David Nguyen",
    timeAgo: "2 months ago",
    rating: 5,
    vehicle: "Audi RS6 Avant",
    text:
      "Wrapido Car Care absolutely nailed it with my window tint and ceramic polish. The film looks clean, even, and super professional. They were friendly, quick, and paid meticulous attention to edge tucking. Truly Dubai's best car care shop.",
  },
  {
    id: "rev-5",
    author: "Ahmed Al Mansoori",
    timeAgo: "3 months ago",
    rating: 5,
    vehicle: "Nissan Patrol Nismo",
    text:
      "Best PPF shop in Al Quoz hands down. I drive on the desert highway daily, and after 6 months with Wrapido's PPF and tint, not a single rock chip on my front bumper. Outstanding customer service from initial quote to vehicle handoff.",
  },
];

// Protect your investment 3-card highlight matching screenshot
export const FEATURED_SHOWCASES = [
  {
    id: "nano-tint",
    title: "NANO-CERAMIC WINDOW TINTING",
    badge: "WINDOW TINT",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9d26YcG6X8V-9QGncZGeF80RPN17wz8kwC-I4-xWRzHqIElWXcP08jFDdGsqf2LeypHZEDJzPC1289Ovtu9nnNEa-RvxxaSobvhFt3a16wOzWkBcCFOnYSiskQwAuUHUnnwvR=s680-w680-h510-rw",
    linkText: "NANO-CERAMIC WINDOW TINTING",
  },
  {
    id: "clear-bra",
    title: "SELF-HEALING CLEAR BRA (PPF)",
    badge: "PAINT PROTECTION",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RpADgYJ43h_CEkSfrtkhSC5koaxFiXb-G-NvIOMZO_IM0jvZT66PXYU4m0cNNoFyNE03xaoOUb3KoIsSgFx56G8w9DAKCqgzixBLzWueS7w_6Q5UdPl7W1SWF60JyEtwEWUR2reQ=s680-w680-h510-rw",
    linkText: "SELF-HEALING CLEAR BRA (PPF)",
  },
  {
    id: "precision-ceramic",
    title: "PRECISION DETAILING & CERAMIC",
    badge: "CERAMIC COATING",
    image:
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf4URCyK6zE-0EzT5kfNBmX6X-F-NlXZCVkuo0AalhnXmRv7i-KmycUHXR1EbNOMTzWTYjDVyFi33eiu95wOq27nQRfmfnQh5s7wWUYc8hDuIBXlA7Ko3iRETKFwDTBp4-bUan4=s680-w680-h510-rw",
    linkText: "PRECISION DETAILING & CERAMIC",
  },
];

// Portfolio matching 6-grid layout in screenshot with 6 Google Maps video links
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    category: "PPF & CERAMIC",
    title: "PORSCHE HIGH-GLOSS PAINT PROTECTION FILM",
    videoUrl: "https://maps.app.goo.gl/TJ6fFNvWYcQLz7pV8",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TusHBjBvw0D44h2Pcj5Feoach0tsOzg9uOQh-gE3iGi2WOyxTptE5xy7DEIqjRcvYITvNkYLEMG2B5Q0h9fKP3fUy0o4MOe07s50WrKsTMe-VyXftEhfvA4Ujnv57kXXXkeGkRjGNCCktu=w141-h118-n-k-no-nu",
    description: "Full body self-healing clear PPF with hydrophobic ceramic top coat applied on brand-new Porsche in our Al Quoz clean bay.",
  },
  {
    id: "port-2",
    category: "CLEAR BRA ARMOR",
    title: "CORVETTE C8 FULL BODY SELF-HEALING CLEAR BRA",
    videoUrl: "https://maps.app.goo.gl/LM2MqhZ6AHX4KVD97",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sc4iPJycbs9rJW1rxuNqu1SkKgqpOo1xdaEm9so2dUHUV879CJ1TMAe-WgfwLFasfAn0hysoDSByxXNCA05B5LQiiLHGflp0g3s2CPxqQbDbOoh4sY2_KYILoyLLa8BX7yknVSrST2Z-w=w141-h177-n-k-no-nu",
    description: "Complete wrap around complex aero vents, tucked edges, and zero razor blade marks on OEM fiberglass bodywork.",
  },
  {
    id: "port-3",
    category: "CERAMIC WINDOW TINT",
    title: "CERAMIC WINDOW TINT THERMAL REJECTION",
    videoUrl: "https://maps.app.goo.gl/L2rkwXWJmpfMgDvo7",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SVinxjoy7Q_7LEAsqW9OHH8T2zAA5UYExrbr3pXNzLspOYyzbCZ2u4bSgXDAeZKvbADM2J-Ih_39-4SY6tmPPkBvz0Aq483Fme32S0ZFUcgYmwKgh8OACPikQIS7cdpYkO0x8=w141-h177-n-k-no-nu",
    description: "98% IR heat rejection nano-ceramic window film installed across all side windows, rear windshield, and panoramic roof.",
  },
  {
    id: "port-4",
    category: "CERAMIC COATING",
    title: "FEYNLAB® SELF-HEALING CERAMIC COATING",
    videoUrl: "https://maps.app.goo.gl/JHBFesX7tCDQd1wf6",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RCkbb4IBZlaFCk5tPpj2KzB86Fs5Du5e-CU-Hfy2quxrreDbVMsAEqjuJDC054ElfQZJOif4WoQ8KplSNsGs6thk_Hrwyt4efQYA8F0KHc82tVIChsGDwyOEGYRKVI8oCFL_4=w141-h142-n-k-no-nu",
    description: "Multi-stage paint correction with dual-layer ceramic application, delivering candy-like gloss and extreme water repellence.",
  },
  {
    id: "port-5",
    category: "PAINT CORRECTION",
    title: "CONCOURS PAINT CORRECTION MULTI-STAGE POLISH",
    videoUrl: "https://maps.app.goo.gl/BG3mm5MpZunnkK4x8",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QlHByjw1nIMbCYMSaoZMhvQ91S-HV2Jn1TVT_S--xZ8bnjL6PoIm93FxYA5ZR32DT34t878WvAk29H-Qh24F85WuqvzF0hlrY77ZsgDEj0T9eamif2l2Q7aF_WBPsV5QkhbEO_=w141-h142-n-k-no-nu",
    description: "Removing decades of heavy swirl marks and acid stains, measuring clear coat microns for safe restoration.",
  },
  {
    id: "port-6",
    category: "WHEELS & CALIPERS",
    title: "EXOTIC WHEELS-OFF BRAKE CALIPER & RIM FINISH",
    videoUrl: "https://maps.app.goo.gl/3MiFiPRbzm4bbmZq5",
    thumbnail:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RrWvdWmZwBulvhQE_L-uUXZoxdXpjSrfLxm6aXMDzMU9xkVoGLOXIxAZmOCThvv21EchyvS593lXk5g9SO0h3_dlGqGYJ0gbls1EhPXQqoH2qj_pclxqGyEAJ3auPn9Dg1Xu18hg=w141-h177-n-k-no-nu",
    description: "High-temperature ceramic paint with custom logos on brake calipers combined with satin black rim refinishing.",
  },
];

// Service Areas in Dubai
export const DUBAI_SERVICE_AREAS = [
  "AL QUOZ (MAIN STUDIO)",
  "DOWNTOWN DUBAI",
  "DUBAI MARINA",
  "BUSINESS BAY",
  "JUMEIRAH",
  "PALM JUMEIRAH",
  "AL BARSHA",
  "DUBAI HILLS ESTATE",
];

// FAQ matching screenshot
export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does ceramic coating last, and how do I maintain it?",
    answer:
      "When installed by our certified technicians in Al Quoz, our FEYNLAB® & GYEON ceramic coatings provide between 3 to 7+ years of guaranteed paint protection depending on the formula selected. To maintain your coating, avoid automatic abrasive brush car washes; simply hand wash using pH-neutral automotive shampoo with the two-bucket method, and bring your vehicle in for an annual decontamination checkup to preserve maximum hydrophobicity and mirror-gloss depth.",
  },
  {
    id: "faq-2",
    question: "What is the difference between Paint Protection Film (PPF) and Ceramic Coating?",
    answer:
      "Paint Protection Film (PPF) is an 8mil physical polyurethane shield designed to absorb real physical impacts—such as flying gravel, high-speed sand abrasion on Sheikh Zayed Road, and shopping cart scratches. It features instant self-healing capabilities. Ceramic Coating, on the other hand, is a liquid polymer that hardens to 9H to provide slick hydrophobic protection, chemical stain resistance, UV shielding, and incredible gloss. For the ultimate defense, we recommend full front PPF topped with a full body ceramic coating.",
  },
  {
    id: "faq-3",
    question: "How dark can I legally tint my car windows in Dubai, UAE?",
    answer:
      "In the UAE, Federal Traffic Law allows individual car owners to tint side and rear windows up to 50% opacity. Front windscreens can only have a clear heat-rejection strip or clear ceramic heat shield (70%+ VLT) that doesn't obstruct driver vision. Our premium nano-ceramic films reject up to 98% of heat even in legal 30% or 50% shades, so you don't need pitch-black glass to stay cool.",
  },
  {
    id: "faq-4",
    question: "How does car wrapping affect my vehicle's original paint and resale value?",
    answer:
      "Premium vinyl wrapping actually protects your vehicle's factory OEM paint from UV oxidation and light scratches. When it's time to sell or return your car, the wrap can be safely removed by our team without damaging the underlying clear coat, revealing pristine factory paint and maximizing your resale value in the Dubai market.",
  },
  {
    id: "faq-5",
    question: "How long does installation take, and do I need to make an appointment?",
    answer:
      "Window tinting typically takes 2 to 4 hours. Ceramic coating and multi-stage polishing require 1 to 2 days for proper surface prep and infrared curing. Full vehicle wraps or full-body PPF usually take 3 to 5 business days. We strongly recommend booking an appointment so our temperature-controlled clean bays are reserved exclusively for your vehicle.",
  },
  {
    id: "faq-6",
    question: "What are your pricing ranges in AED for standard sedans vs. large SUVs?",
    answer:
      "Ceramic Window Tint starts from AED 799 for sedans and AED 1,199 for full-size SUVs. Exterior Polishing starts at AED 699. Ceramic Coatings range from AED 1,499 to AED 3,499. High-temp Caliper Painting starts at AED 999. Premium Full Color Wraps start at AED 6,500, and full-body PPF starts from AED 9,500. Exact quotes depend on vehicle size, paint condition, and chosen film brand.",
  },
];
