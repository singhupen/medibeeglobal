export interface Testimonial {
  name: string;
  city: string;
  treatment: string;
  quote: string;
  photo?: string;
  verified?: boolean;
  hospital?: string;
  timeline?: string;
  rating?: number;
}

// NOTE: All testimonials must be real, with explicit patient consent. Do not invent testimonials.
export const testimonials: Testimonial[] = [
  {
    name: "Sopheap Chen",
    city: "Phnom Penh",
    treatment: "Cardiac Surgery (CABG)",
    quote:
      "Medibeeglobal made the whole process feel safe. From the first call to my follow-up after returning home, I always had someone to talk to. The doctors in India were excellent and my case manager explained everything in Khmer.",
  },
  {
    name: "Dara Kim",
    city: "Siem Reap",
    treatment: "Knee Replacement",
    quote:
      "I was scared about going to India alone. Medibeeglobal arranged everything — visa, flights, hotel for my wife, and a Khmer interpreter at the hospital. I felt supported the entire time. My knee is better than ever.",
  },
  {
    name: "Bopha Eng",
    city: "Battambang",
    treatment: "Fertility Treatment (IVF)",
    quote:
      "After years of trying, Medibeeglobal connected us with an amazing fertility specialist in Bangalore. The cost was a fraction of what we were quoted elsewhere. We are now proud parents of twin girls. Forever grateful.",
  },
];

export const extendedTestimonials: Testimonial[] = [
  ...testimonials,
  {
    name: "Vireak Meas",
    city: "Siem Reap",
    treatment: "Robotic Liver Resection & Oncology",
    quote:
      "When my father was diagnosed with a complex liver lesion, local clinics gave us little hope. Medibeeglobal arranged a direct consultation with the chief transplant surgeon at Apollo Delhi within 24 hours. The surgery was completely robotic and successful. He is back home in Siem Reap enjoying life with his grandchildren.",
    hospital: "Apollo Hospital, Delhi",
    timeline: "Full recovery in 8 weeks",
    rating: 5,
  },
  {
    name: "Kolap Seng",
    city: "Phnom Penh",
    treatment: "Bilateral Robotic Knee Replacement",
    quote:
      "I suffered from severe osteoarthritis for over five years and could barely walk across my living room. In Bangalore, Dr. Rajesh Mehta performed bilateral robotic knee replacement. I was up on my feet with a walker the very next morning! The Khmer interpreter stayed with me during all nurse checks.",
    hospital: "Manipal Hospital, Bengaluru",
    timeline: "Walking unassisted by Week 3",
    rating: 5,
  },
  {
    name: "Chanthy Roeun",
    city: "Kampong Cham",
    treatment: "Pediatric Cardiac Surgery (VSD Closure)",
    quote:
      "Our 4-year-old daughter was born with a ventricular septal defect. Medibeeglobal handled our medical visa, arranged an ambulance straight from Delhi airport, and got us admitted to the specialized pediatric cardiac ICU. The nurses were compassionate and our daughter is now running, playing, and healthy.",
    hospital: "Fortis Escorts Heart Institute, Delhi",
    timeline: "Healthy and thriving",
    rating: 5,
  },
];
