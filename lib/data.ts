// lib/data.ts

import { Dentist, Service } from "./types";

// Clinic direct WordPress office photos
export const officePhotos = [
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/2024-03-29-2.jpeg",
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/2024-03-29-3.jpeg",
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/2024-03-29-4.jpeg",
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/2024-03-29-5.jpeg",
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/office3.jpeg",
  "https://i0.wp.com/saddlebrookdentist.com/wp-content/uploads/2024/04/office4-e1773849983300.jpeg",
];

// Saddle Brook Dentist Staff Array
export const dentists: Dentist[] = [
  {
    id: "dentist-yousef",
    name: "Dr. Diane Yousef, DMD",
    specialty: "Lead General & Cosmetic Dentist",
    photo: "/DrDianeYousef.webp",
    bio: "Dr. Diane Yousef, DMD, serves as the premier lead dentist at Saddle Brook Dentist. Dedicated to patient comfort, cutting-edge technology, and maximum care efficiency, she creates healthy, luminous smile transformations across Bergen County.",
    experience: "Lead Active Doctor",
    rating: "5.0/5",
  },
  {
    id: "dentist-nadia",
    name: "Nadia Malke",
    specialty: "Co-Founder & Patient Services",
    photo:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Nadia Malke co-founded the clinic in 2001 beside her husband, Dr. Malke. She continues to actively support the office and serve our longtime loyal patient ecosystem with genuine warmth and premium guidance.",
    experience: "Co-Founder (25Y Service)",
    rating: "5.0/5",
  },
  {
    id: "staff-sonia",
    name: "Sonia",
    specialty: "Registered Dental Hygienist",
    photo:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Sonia is local families' favorite hygienist, praised heavily in guest testimonials for her delicate touch, meticulous cleaning precision, and comforting dental advice.",
    experience: "Senior RDH Hygienist",
    rating: "4.9/5",
  },
  {
    id: "staff-paulina",
    name: "Paulina",
    specialty: "Registered Dental Hygienist",
    photo:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Paulina is an expert registered hygienist praised for her absolute friendliness, thorough checkups, and exceptional ability to create comfortable preventive clinic visits.",
    experience: "Hygienist Specialist",
    rating: "4.9/5",
  },
];

// Saddle Brook Dentist Services Array
export const services: Service[] = [
  {
    id: "src-general",
    name: "General Dentistry",
    photo:
      "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=400&auto=format&fit=crop",
    description:
      "Comprehensive preventive care, routine exams, custom diagnostic imaging, and thorough teeth cleanings to preserve lifelong health.",
  },
  {
    id: "src-emergency",
    name: "Emergency Dentistry",
    photo:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
    description:
      "Stellar emergency response with dedicated care to relieve tooth pain, manage trauma, or resolve infections quickly.",
  },
  {
    id: "src-restorative",
    name: "Restorative Dentistry",
    photo:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop",
    description:
      "Skillful restoration of worn, damaged, or decayed teeth with natural porcelain crowns, custom overlays, and composite repairs.",
  },
  {
    id: "src-cosmetic",
    name: "Cosmetic Dentistry",
    photo:
      "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Professional high-grade teeth whitening, handcrafted porcelain veneers, bonding, smile makeovers, and clear Invisalign alignments.",
  },
  {
    id: "src-implant",
    name: "Implant Dentistry",
    photo:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop",
    description:
      "State-of-the-art dental implants that act and feel like natural roots to perfectly anchor stable crowns and restore your bite.",
  },
  {
    id: "src-rootcanal",
    name: "Root Canal Therapy",
    photo:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop",
    description:
      "Highly precise infection removal and inner nerve sterilization designed to save the natural tooth outline and stop discomfort.",
  },
  {
    id: "src-bridges",
    name: "Dental Bridges",
    photo:
      "https://images.unsplash.com/photo-1684607631747-045ecfeeb4c7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Custom-crafted dental bridges that replace gaps, restore balance, support facial structure, and return natural speaking elegance.",
  },
];
