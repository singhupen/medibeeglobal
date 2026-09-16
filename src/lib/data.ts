import {
  Heart,
  Activity,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Search,
  FileText,
  ClipboardList,
  Plane,
  Hospital,
  CalendarCheck,
  MessageCircle,
  Phone,
  Send,
  Globe,
  Shield,
  Users,
  Package,
  Crown,
  Building2,
  MapPin,
  CheckCircle2,
  Lock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Specialty {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const specialties: Specialty[] = [
  {
    icon: Heart,
    title: "Cardiac Surgery",
    description:
      "CABG, valve replacement & minimally invasive cardiac procedures.",
  },
  {
    icon: Activity,
    title: "Organ Transplant",
    description:
      "Liver, kidney & heart transplants by world-renowned surgeons.",
  },
  {
    icon: Brain,
    title: "Oncology",
    description: "Advanced cancer treatment with cutting-edge technology.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Joint replacement, spine surgery & sports injury recovery.",
  },
  {
    icon: Stethoscope,
    title: "Neurosurgery",
    description: "Complex brain & spinal procedures with robotic precision.",
  },
  {
    icon: Baby,
    title: "Fertility (IVF)",
    description: "High success-rate IVF & fertility preservation programs.",
  },
];

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: Search,
    title: "Fragmented Research",
    description:
      "Families spend weeks scouring forums, translating reviews, and guessing which hospital or doctor is right for their condition — with no expert guidance.",
  },
  {
    icon: FileText,
    title: "Document Chaos",
    description:
      "Medical records, imaging, and referrals get lost or mistranslated between Cambodian clinics and Indian hospitals, causing delays and confusion.",
  },
  {
    icon: ClipboardList,
    title: "No Local Follow-up",
    description:
      "After returning home, patients are disconnected from their treating doctors with no structured post-treatment care or check-ins.",
  },
];

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
}

export const journeySteps: JourneyStep[] = [
  {
    icon: MessageCircle,
    title: "Patient Discussion",
    short: "Initial consultation to understand your needs.",
    detail:
      "A Medibeeglobal case manager speaks with you and your family to understand your medical condition, history, treatment goals, and personal preferences. We listen first, then advise.",
  },
  {
    icon: Stethoscope,
    title: "Medical Review",
    short: "Your case is reviewed by our medical team.",
    detail:
      "Our medical team reviews your records, imaging, and pathology reports. We consult with specialist doctors in India to determine the most appropriate treatment pathway for your condition.",
  },
  {
    icon: Building2,
    title: "Hospital Options",
    short: "Curated hospital and doctor options presented.",
    detail:
      "Based on your medical review, we present 2-3 curated hospital and doctor options with transparent pricing, doctor credentials, and success rates — so you can make an informed choice.",
  },
  {
    icon: Plane,
    title: "Travel Prep",
    short: "Visa, flights, hotel, and documents arranged.",
    detail:
      "We handle medical visa applications, flight bookings, airport pickup, hotel accommodation for family, and ensure all your medical documents are organized and translated before departure.",
  },
  {
    icon: Hospital,
    title: "Treatment",
    short: "Coordinated care at partner hospital in India.",
    detail:
      "Upon arrival, our India-based team meets you at the airport, accompanies you to the hospital, assists with admission, and stays in contact throughout your treatment to ensure everything goes smoothly.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-up",
    short: "Post-treatment check-ins and support.",
    detail:
      "After you return to Cambodia, we schedule follow-up consultations with your Indian doctors via telemedicine, coordinate local lab tests, and check in regularly to support your recovery at home.",
  },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export const services: Service[] = [
  {
    icon: Users,
    title: "Patient Service Fee",
    description:
      "Dedicated case manager, medical review, hospital matching, and end-to-end coordination for every patient.",
    tag: "Core Service",
  },
  {
    icon: Globe,
    title: "Partner Hospital Network",
    description:
      "Commission-based partnerships with JCI-accredited hospitals across India, ensuring quality and trust.",
    tag: "Partnership",
  },
  {
    icon: Package,
    title: "Travel Coordination",
    description:
      "Medical visa, flights, accommodation, airport transfers, and local transport — all arranged for you.",
    tag: "Logistics",
  },
  {
    icon: Crown,
    title: "Premium Services",
    description:
      "Executive health checks, professional interpreters, priority appointments, and luxury recovery suites.",
    tag: "Premium",
  },
];

export interface Hospital {
  name: string;
  city: string;
  tags: string[];
}

export const partnerHospitals: Hospital[] = [
  {
    name: "Apollo Hospital",
    city: "Delhi",
    tags: ["Cardiac", "Transplant", "Oncology"],
  },
  {
    name: "Fortis Healthcare",
    city: "Mumbai",
    tags: ["Neurosurgery", "Orthopedics", "IVF"],
  },
  {
    name: "AIIMS Delhi",
    city: "Delhi",
    tags: ["Research", "Multi-specialty", "Transplant"],
  },
  {
    name: "Manipal Health",
    city: "Bangalore",
    tags: ["Cardiac", "Oncology", "Fertility"],
  },
  {
    name: "Narayana Health",
    city: "Bangalore",
    tags: ["Cardiac Surgery", "Pediatric", "Transplant"],
  },
  {
    name: "MIOT International",
    city: "Chennai",
    tags: ["Orthopedics", "Neurosurgery", "Oncology"],
  },
];

export interface Testimonial {
  name: string;
  city: string;
  treatment: string;
  quote: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sopheap Chen",
    city: "Phnom Penh",
    treatment: "Cardiac Surgery (CABG)",
    quote:
      "Medibeeglobal made the whole process feel safe. From the first call to my follow-up after returning home, I always had someone to talk to. The doctors in India were excellent and my case manager explained everything in Khmer.",
    photo:
      "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "Dara Kim",
    city: "Siem Reap",
    treatment: "Knee Replacement",
    quote:
      "I was scared about going to India alone. Medibeeglobal arranged everything — visa, flights, hotel for my wife, and a Khmer interpreter at the hospital. I felt supported the entire time. My knee is better than ever.",
    photo:
      "https://images.pexels.com/photos/20782648/pexels-photo-20782648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "Bopha Eng",
    city: "Battambang",
    treatment: "Fertility Treatment (IVF)",
    quote:
      "After years of trying, Medibeeglobal connected us with an amazing fertility specialist in Bangalore. The cost was a fraction of what we were quoted elsewhere. We are now proud parents of twin girls. Forever grateful.",
    photo:
      "https://images.pexels.com/photos/18671527/pexels-photo-18671527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export interface PricingCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const pricingCards: PricingCard[] = [
  {
    icon: Users,
    title: "Patient Service Fee",
    description: "A transparent coordination fee covering your entire journey.",
    features: [
      "Dedicated case manager",
      "Medical record review",
      "Hospital & doctor matching",
      "End-to-end coordination",
    ],
  },
  {
    icon: Lock,
    title: "No Hidden Costs",
    description: "You see every cost upfront — no surprise charges, ever.",
    features: [
      "Transparent pricing breakdown",
      "Hospital cost estimates",
      "Travel cost estimates",
      "Written cost agreement",
    ],
  },
  {
    icon: Shield,
    title: "Transparent Hospital Pricing",
    description:
      "We negotiate directly with hospitals for fair, published rates.",
    features: [
      "Direct hospital billing",
      "No middleman markups",
      "Negotiated package rates",
      "Cost comparison provided",
    ],
  },
];

export interface CostComparison {
  procedure: string;
  india: string;
  singapore: string;
  malaysia: string;
  china: string;
}

export const costComparisons: CostComparison[] = [
  {
    procedure: "CABG (Heart Bypass)",
    india: "$5,500",
    singapore: "$45,000",
    malaysia: "$15,000",
    china: "$12,000",
  },
  {
    procedure: "Knee Replacement",
    india: "$4,000",
    singapore: "$25,000",
    malaysia: "$10,000",
    china: "$8,000",
  },
  {
    procedure: "Cancer Treatment",
    india: "$3,500",
    singapore: "$30,000",
    malaysia: "$12,000",
    china: "$10,000",
  },
  {
    procedure: "IVF (Per Cycle)",
    india: "$2,500",
    singapore: "$12,000",
    malaysia: "$6,000",
    china: "$5,000",
  },
];

export const specialtyOptions = [
  "Cardiology",
  "Oncology",
  "Orthopedics",
  "Transplant",
  "Neurology",
  "Fertility",
  "Other",
];

export const timelineOptions = [
  "ASAP — Urgent",
  "Within 1 month",
  "Flexible — Planning ahead",
];

export const contactOptions = [
  { value: "Phone Call", icon: Phone },
  { value: "Telegram", icon: Send },
  { value: "WhatsApp", icon: MessageCircle },
];

export const heroImage =
  "https://images.pexels.com/photos/7578797/pexels-photo-7578797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export const siteLogo = "/logo-transparent.png";
export { themeConfig } from "./theme";
export { CheckCircle2, MapPin, Sparkles };
