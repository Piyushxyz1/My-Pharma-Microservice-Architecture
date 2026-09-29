import {
  ArrowRight,
  Search,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Clock,
  HeartPulse,
  Pill,
  Star,
  Plus,
} from "lucide-react";



export const medicalProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    category: "Pain Relief",
    price: 45,
    oldPrice: 60,
    discount: 25,
    rating: 4.7,
    reviews: 284,
    stock: 50,

    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85",

    description:
      "Paracetamol 500mg tablets are commonly used for temporary relief from mild to moderate pain and fever. Suitable for everyday healthcare needs when used according to the product directions.",

    benefits: [
      "Helps provide temporary relief from mild to moderate pain",
      "Helps reduce fever",
      "Easy-to-use tablet format",
      "Suitable for everyday healthcare needs",
    ],

    features: [
      "500mg paracetamol per tablet",
      "Easy-to-swallow tablets",
      "Convenient pack for home use",
      "Clearly labelled dosage information",
    ],

    specifications: {
      "Product Type": "Tablets",
      Strength: "500mg",
      Category: "Pain Relief",
      "Pack Size": "20 Tablets",
      "Suitable For": "Adults",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Use only according to the dosage instructions provided on the product packaging or as directed by a qualified healthcare professional.",

    safety:
      "Do not exceed the recommended dosage. Read the packaging carefully before use. If you have an existing medical condition or are taking other medicines, consult a qualified healthcare professional.",

    inTheBox: [
      "Paracetamol 500mg Tablets",
      "Product information leaflet",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 2,
    name: "Vitamin C 500mg Tablets",
    category: "Vitamins",
    price: 120,
    oldPrice: 150,
    discount: 20,
    rating: 4.8,
    reviews: 356,
    stock: 35,

    image:
      "https://images.unsplash.com/photo-1550572017-edd951aa8ca5?auto=format&fit=crop&w=1000&q=85",

    description:
      "Vitamin C 500mg tablets are designed to complement everyday nutrition and support a healthy lifestyle as part of a balanced diet.",

    benefits: [
      "Supports everyday nutritional needs",
      "Provides a convenient source of Vitamin C",
      "Easy-to-use tablet format",
      "Suitable for daily wellness routines",
    ],

    features: [
      "500mg Vitamin C",
      "Convenient tablet format",
      "Easy to store",
      "Designed for everyday supplementation",
    ],

    specifications: {
      "Product Type": "Tablets",
      Strength: "500mg",
      Category: "Vitamins",
      "Pack Size": "30 Tablets",
      "Form": "Tablet",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Take according to the directions provided on the product packaging. Do not exceed the recommended daily intake.",

    safety:
      "Read the product label carefully before use. Supplements should not replace a varied and balanced diet. Consult a healthcare professional if you have questions about suitability.",

    inTheBox: [
      "Vitamin C 500mg Tablets",
      "Product information leaflet",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 3,
    name: "Cetirizine 10mg Tablets",
    category: "Cold & Flu",
    price: 65,
    oldPrice: 80,
    discount: 19,
    rating: 4.6,
    reviews: 198,
    stock: 40,

    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=85",

    description:
      "Cetirizine 10mg tablets are an antihistamine product commonly used for allergy-related symptoms. Always follow the product label and professional guidance.",

    benefits: [
      "Commonly used for allergy-related symptoms",
      "Convenient tablet format",
      "Easy to carry",
      "Suitable for an everyday medicine cabinet",
    ],

    features: [
      "10mg cetirizine",
      "Tablet format",
      "Compact packaging",
      "Clearly labelled instructions",
    ],

    specifications: {
      "Product Type": "Tablets",
      Strength: "10mg",
      Category: "Cold & Flu",
      "Pack Size": "10 Tablets",
      Form: "Tablet",
      "Storage": "Store below the recommended temperature on packaging",
    },

    usage:
      "Use strictly according to the instructions on the packaging or advice from a qualified healthcare professional.",

    safety:
      "Check the product label for warnings and precautions. Some antihistamines may cause drowsiness. Avoid activities requiring alertness if the product affects you.",

    inTheBox: [
      "Cetirizine 10mg Tablets",
      "Product information leaflet",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 4,
    name: "ORS Electrolyte Sachets",
    category: "Digestive Health",
    price: 30,
    oldPrice: 40,
    discount: 25,
    rating: 4.8,
    reviews: 412,
    stock: 80,

    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=85",

    description:
      "ORS electrolyte sachets are designed to help replenish fluids and electrolytes during situations where hydration support is needed.",

    benefits: [
      "Supports fluid replacement",
      "Provides electrolytes",
      "Convenient single-use sachet",
      "Easy to prepare according to instructions",
    ],

    features: [
      "Electrolyte formulation",
      "Single-use sachets",
      "Portable packaging",
      "Easy preparation",
    ],

    specifications: {
      "Product Type": "Oral Rehydration Solution",
      Category: "Digestive Health",
      "Pack Size": "5 Sachets",
      Form: "Powder",
      Usage: "Dissolve according to package instructions",
      Storage: "Store in a cool, dry place",
    },

    usage:
      "Prepare exactly according to the instructions provided on the packaging. Use the prepared solution within the recommended period.",

    safety:
      "Follow preparation and storage instructions carefully. Seek professional medical advice when dehydration is severe or symptoms persist.",

    inTheBox: [
      "ORS Electrolyte Sachets",
      "Preparation instructions",
    ],

    delivery: "Free delivery on eligible orders",
  },
   {
    id: 5,
    name: "Calcium + Vitamin D3 Tablets",
    category: "Vitamins",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 4.7,
    reviews: 241,
    stock: 25,

    image:
      "https://images.unsplash.com/photo-1616671276441-2f5c4a5d0c8c?auto=format&fit=crop&w=1000&q=85",

    description:
      "Calcium and Vitamin D3 tablets are designed to complement everyday nutritional needs as part of a balanced diet and healthy lifestyle.",

    benefits: [
      "Provides a convenient source of calcium",
      "Contains Vitamin D3",
      "Supports everyday nutritional needs",
      "Easy-to-use tablet format",
    ],

    features: [
      "Calcium and Vitamin D3 formulation",
      "Convenient tablet format",
      "Easy to store",
      "Suitable for everyday supplementation",
    ],

    specifications: {
      "Product Type": "Tablets",
      Category: "Vitamins",
      "Pack Size": "30 Tablets",
      Form: "Tablet",
      Ingredients: "Calcium + Vitamin D3",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Take according to the directions provided on the product packaging. Do not exceed the recommended intake.",

    safety:
      "Read the product label carefully before use. Consult a healthcare professional if you have questions about suitability or are taking other supplements or medicines.",

    inTheBox: [
      "Calcium + Vitamin D3 Tablets",
      "Product information leaflet",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 6,
    name: "Digital Thermometer",
    category: "Health Devices",
    price: 299,
    oldPrice: 399,
    discount: 25,
    rating: 4.9,
    reviews: 518,
    stock: 18,

    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85",

    description:
      "A compact digital thermometer designed for convenient temperature measurement at home and during everyday health monitoring.",

    benefits: [
      "Convenient for home temperature monitoring",
      "Compact and easy to carry",
      "Simple digital display",
      "Suitable for everyday household use",
    ],

    features: [
      "Digital temperature display",
      "Compact design",
      "Easy-to-use controls",
      "Portable household health device",
    ],

    specifications: {
      "Product Type": "Digital Thermometer",
      Category: "Health Devices",
      Display: "Digital",
      "Power Source": "Battery",
      Usage: "Temperature measurement",
      "Storage": "Store in a clean, dry place",
    },

    usage:
      "Use according to the manufacturer's instructions. Clean the device as recommended after use and store it safely.",

    safety:
      "Follow the manufacturer's operating and cleaning instructions. Keep the device away from excessive heat, moisture, and children when not in use.",

    inTheBox: [
      "Digital Thermometer",
      "Battery",
      "User instructions",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 7,
    name: "Antiseptic Liquid",
    category: "Personal Care",
    price: 95,
    oldPrice: 120,
    discount: 21,
    rating: 4.6,
    reviews: 176,
    stock: 45,

    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=85",

    description:
      "Antiseptic liquid for general household hygiene and personal care use. Always follow the instructions and dilution guidance provided on the product label.",

    benefits: [
      "Useful for everyday hygiene routines",
      "Convenient liquid format",
      "Suitable for household first-aid use",
      "Easy to store and handle",
    ],

    features: [
      "Liquid formulation",
      "Multi-purpose household use",
      "Convenient bottle packaging",
      "Clearly labelled usage instructions",
    ],

    specifications: {
      "Product Type": "Antiseptic Liquid",
      Category: "Personal Care",
      Volume: "250ml",
      Form: "Liquid",
      Usage: "Follow label instructions",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Use only according to the instructions and dilution guidance provided on the product packaging.",

    safety:
      "For external use only where indicated on the label. Avoid contact with eyes and do not ingest. Keep away from children and follow all packaging warnings.",

    inTheBox: [
      "Antiseptic Liquid Bottle",
      "Product information label",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 8,
    name: "Adhesive Bandages",
    category: "First Aid",
    price: 55,
    oldPrice: 70,
    discount: 21,
    rating: 4.7,
    reviews: 329,
    stock: 60,

    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=85",

    description:
      "Adhesive bandages designed for convenient everyday first-aid needs and covering minor cuts and abrasions.",

    benefits: [
      "Useful for everyday first-aid situations",
      "Convenient individual pieces",
      "Easy to apply",
      "Compact and portable",
    ],

    features: [
      "Adhesive backing",
      "Individual bandage pieces",
      "Compact packaging",
      "Easy-to-carry first-aid essential",
    ],

    specifications: {
      "Product Type": "Adhesive Bandages",
      Category: "First Aid",
      "Pack Size": "20 Pieces",
      Form: "Adhesive Strip",
      Usage: "Cover minor wounds",
      "Storage": "Store in a clean, dry place",
    },

    usage:
      "Clean and dry the affected area before applying. Replace the bandage as needed and follow appropriate first-aid practices.",

    safety:
      "For external use only. Do not use on serious wounds without professional medical advice. Stop use if significant skin irritation occurs.",

    inTheBox: [
      "20 Adhesive Bandages",
      "Product information",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 9,
    name: "Multivitamin Daily Tablets",
    category: "Vitamins",
    price: 210,
    oldPrice: 260,
    discount: 19,
    rating: 4.8,
    reviews: 387,
    stock: 32,

    image:
      "https://images.unsplash.com/photo-1550572017-edd951aa8ca5?auto=format&fit=crop&w=1000&q=85",

    description:
      "Daily multivitamin tablets formulated to complement nutritional needs as part of a balanced diet and active lifestyle.",

    benefits: [
      "Complements everyday nutritional needs",
      "Convenient daily tablet format",
      "Easy to include in a wellness routine",
      "Suitable for everyday supplementation",
    ],

    features: [
      "Multi-nutrient formulation",
      "Daily tablet format",
      "Convenient packaging",
      "Easy to store",
    ],

    specifications: {
      "Product Type": "Multivitamin Tablets",
      Category: "Vitamins",
      "Pack Size": "30 Tablets",
      Form: "Tablet",
      Usage: "Daily supplementation",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Take according to the directions provided on the product packaging. Do not exceed the recommended intake.",

    safety:
      "Read the product label before use. Supplements should complement, not replace, a varied and balanced diet. Consult a healthcare professional when appropriate.",

    inTheBox: [
      "Multivitamin Daily Tablets",
      "Product information leaflet",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 10,
    name: "Protein Nutrition Powder",
    category: "Fitness Nutrition",
    price: 799,
    oldPrice: 999,
    discount: 20,
    rating: 4.8,
    reviews: 624,
    stock: 20,

    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=85",

    description:
      "Protein nutrition powder designed to complement an active lifestyle and daily nutrition routine.",

    benefits: [
      "Convenient source of dietary protein",
      "Suitable for active lifestyle routines",
      "Easy to prepare",
      "Convenient post-workout nutrition option",
    ],

    features: [
      "Protein-based nutrition powder",
      "Easy-to-mix format",
      "Convenient resealable packaging",
      "Suitable for fitness routines",
    ],

    specifications: {
      "Product Type": "Protein Nutrition Powder",
      Category: "Fitness Nutrition",
      Weight: "500g",
      Form: "Powder",
      Usage: "Prepare according to package instructions",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Mix the recommended serving with the liquid specified on the product packaging and consume according to the product directions.",

    safety:
      "Read ingredients and allergen information before use. Do not exceed the recommended serving. Consult a qualified professional if you have specific dietary requirements.",

    inTheBox: [
      "Protein Nutrition Powder",
      "Measuring Scoop",
      "Product information",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 11,
    name: "Electrolyte Hydration Powder",
    category: "Fitness Nutrition",
    price: 149,
    oldPrice: 180,
    discount: 17,
    rating: 4.7,
    reviews: 286,
    stock: 42,

    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",

    description:
      "Electrolyte hydration powder designed to complement fluid intake during active routines and situations where hydration support is needed.",

    benefits: [
      "Provides electrolytes",
      "Convenient hydration support",
      "Easy-to-prepare powder format",
      "Suitable for active routines",
    ],

    features: [
      "Electrolyte formulation",
      "Single-serving packets",
      "Portable packaging",
      "Easy preparation",
    ],

    specifications: {
      "Product Type": "Electrolyte Powder",
      Category: "Fitness Nutrition",
      "Pack Size": "10 Sachets",
      Form: "Powder",
      Usage: "Mix according to package instructions",
      "Storage": "Store in a cool, dry place",
    },

    usage:
      "Mix one serving according to the instructions provided on the product packaging.",

    safety:
      "Follow the recommended serving instructions. Check the ingredient and nutrition information before use, especially if you follow a restricted diet.",

    inTheBox: [
      "10 Electrolyte Sachets",
      "Preparation instructions",
    ],

    delivery: "Free delivery on eligible orders",
  },

  {
    id: 12,
    name: "First Aid Kit",
    category: "First Aid",
    price: 499,
    oldPrice: 649,
    discount: 23,
    rating: 4.9,
    reviews: 451,
    stock: 15,

    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=85",

    description:
      "A compact first-aid kit containing everyday essentials for basic household and travel first-aid needs.",

    benefits: [
      "Useful for basic first-aid situations",
      "Convenient collection of essentials",
      "Compact and portable",
      "Suitable for home and travel",
    ],

    features: [
      "Multiple first-aid essentials",
      "Organized storage case",
      "Portable design",
      "Convenient household emergency kit",
    ],

    specifications: {
      "Product Type": "First Aid Kit",
      Category: "First Aid",
      Contents: "Multiple first-aid essentials",
      "Usage": "Basic first-aid support",
      "Suitable For": "Home and travel",
      "Storage": "Keep in a clean, dry location",
    },

    usage:
      "Use individual items according to their respective packaging instructions and appropriate first-aid practices.",

    safety:
      "Check individual product labels before use. Replace used or expired items regularly and seek professional medical care for serious injuries.",

    inTheBox: [
      "First Aid Storage Kit",
      "Adhesive Bandages",
      "Basic First Aid Supplies",
      "Product information",
    ],

    delivery: "Free delivery on eligible orders",
  },
];
export const categories = [
  {
    name: "Pain Relief",
    icon: HeartPulse,
  },
  {
    name: "Cold & Flu",
    icon: Pill,
  },
  {
    name: "Vitamins",
    icon: Plus,
  },
  {
    name: "First Aid",
    icon: ShieldCheck,
  },
  {
    name: "Health Devices",
    icon: ShieldCheck,
  },
  {
    name: "Personal Care",
    icon: HeartPulse,
  },
  {
    name: "Fitness Nutrition",
    icon: Plus,
  },
  {
    name: "Digestive Health",
    icon: HeartPulse,
  },
];