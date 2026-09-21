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

export type { Hospital } from './hospitalData';
export { hospitalList, partnerHospitals } from './hospitalData';

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

/* ==========================================================================
   DOCTORS DATA
   ========================================================================== */
export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  department: string;
  hospital: string;
  city: string;
  experienceYears: number;
  surgeriesCount: string;
  qualifications: string;
  fellowships: string;
  languages: string[];
  photo: string;
  badge?: string;
  bio: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-naresh-sharma",
    name: "Dr. Naresh Sharma",
    role: "Chairman & Chief Cardiac Surgeon",
    specialty: "Cardiac Surgery",
    department: "Heart & Vascular Institute",
    hospital: "Apollo Hospital",
    city: "Delhi NCR",
    experienceYears: 28,
    surgeriesCount: "15,000+",
    qualifications: "MBBS, MS, MCh (Cardiothoracic), FRCS (Glasgow)",
    fellowships: "Fellow in Adult Cardiac Surgery (Royal Brompton, London)",
    languages: ["English", "Hindi"],
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    badge: "Top Cardiac Surgeon",
    bio: "Pioneer in minimally invasive bypass surgery, valve reconstruction, and pediatric cardiac procedures with outstanding 99.2% surgical success rates.",
  },
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen",
    role: "Director of Medical Oncology & BMT",
    specialty: "Oncology",
    department: "Cancer Care & Bone Marrow Transplant",
    hospital: "Fortis Memorial Research Institute",
    city: "Delhi NCR",
    experienceYears: 22,
    surgeriesCount: "8,500+",
    qualifications: "MBBS, MD (Medicine), DM (Medical Oncology)",
    fellowships: "Fellowship in Stem Cell Transplant (MD Anderson, USA)",
    languages: ["English", "Hindi"],
    photo: "https://images.unsplash.com/photo-1594824813575-29e18b625cf8?auto=format&fit=crop&w=600&q=80",
    badge: "BMT & Oncology Specialist",
    bio: "Internationally renowned for precision immunotherapy, targeted therapies for solid tumors, and successful haploidentical bone marrow transplants.",
  },
  {
    id: "dr-rajesh-mehta",
    name: "Dr. Rajesh Mehta",
    role: "Senior Director, Joint Replacement & Orthopedics",
    specialty: "Orthopedics",
    department: "Institute of Robotic Orthopedics",
    hospital: "Manipal Hospital",
    city: "Bengaluru",
    experienceYears: 25,
    surgeriesCount: "12,000+",
    qualifications: "MBBS, MS (Orthopedics), MCh (Ortho, UK)",
    fellowships: "Fellow in Computer-Navigated Arthroplasty (Germany)",
    languages: ["English", "Hindi", "Kannada"],
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    badge: "Robotic Joint Pioneer",
    bio: "Specialist in MAKO robotic knee and hip replacements allowing same-day mobilization and faster recovery for international patients.",
  },
  {
    id: "dr-vikram-patel",
    name: "Dr. Vikram Patel",
    role: "Chief Liver Transplant Surgeon",
    specialty: "Organ Transplant",
    department: "Hepatobiliary Sciences & Liver Transplant",
    hospital: "Apollo Hospital",
    city: "Chennai",
    experienceYears: 24,
    surgeriesCount: "3,200+",
    qualifications: "MBBS, MS, DNB, ASTS Fellow (USA)",
    fellowships: "Living Donor Liver Transplant (ASAN Medical Center, Seoul)",
    languages: ["English", "Hindi", "Tamil"],
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    badge: "Living Donor Expert",
    bio: "Over 3,000 living donor liver transplants performed with a 95% survival rate matching top international healthcare institutions.",
  },
  {
    id: "dr-sumitra-nair",
    name: "Dr. Sumitra Nair",
    role: "Senior Consultant Neurosurgeon & Spine Specialist",
    specialty: "Neurosurgery",
    department: "Center for Brain & Spine Care",
    hospital: "Fortis Healthcare",
    city: "Mumbai",
    experienceYears: 20,
    surgeriesCount: "7,000+",
    qualifications: "MBBS, MCh (Neurosurgery), FINR (Switzerland)",
    fellowships: "Minimally Invasive Spine & Endoscopic Neurosurgery (Japan)",
    languages: ["English", "Hindi", "Marathi"],
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    badge: "Micro-Neurosurgery Expert",
    bio: "Expertise in deep-seated brain tumors, endoscopic cranial base procedures, and keyhole spinal decompression surgeries.",
  },
  {
    id: "dr-kavita-reddy",
    name: "Dr. Kavita Reddy",
    role: "Clinical Director, Reproductive Medicine & IVF",
    specialty: "Fertility (IVF)",
    department: "Institute of Reproductive Medicine",
    hospital: "Narayana Health",
    city: "Bengaluru",
    experienceYears: 19,
    surgeriesCount: "6,000+ Cycles",
    qualifications: "MBBS, MD (OBGYN), FRCOG (London)",
    fellowships: "Advanced Reproductive Endocrinology (Monash, Australia)",
    languages: ["English", "Hindi", "Telugu"],
    photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    badge: "72% Clinical IVF Success",
    bio: "Renowned for treating complex recurrent implantation failures, advanced maternal age IVF, and pre-implantation genetic testing (PGT-A).",
  },
];

/* ==========================================================================
   DESTINATIONS DATA
   ========================================================================== */
export interface Destination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  image: string;
  keySpecialties: string[];
  hospitals: string[];
  flightRoute: string;
  flightDuration: string;
  livingCostTier: "Budget-Friendly" | "Moderate" | "Balanced";
  features: string[];
}

export const destinationsData: Destination[] = [
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    state: "National Capital Region",
    tagline: "India's Capital of High-End Multi-Specialty & Organ Transplants",
    description:
      "Home to the highest concentration of JCI-accredited quaternary hospitals in South Asia. Known for world-renowned transplant centers, comprehensive oncology networks, and direct consular support.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Liver & Kidney Transplant", "Oncology & BMT", "Cardiac Surgery", "Robotic Surgery"],
    hospitals: ["Medanta Hospital (Gurugram)", "Max Healthcare (Delhi NCR)", "Fortis Healthcare (Gurugram)", "Apollo Hospital (Delhi)", "Artemis Hospital (Gurugram)"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok/Kuala Lumpur -> Delhi (DEL)",
    flightDuration: "Approx. 6.5 - 7.5 hours transit",
    livingCostTier: "Moderate",
    features: [
      "Highest concentration of JCI & NABH accredited hospitals",
      "Specialized international patient lounges with translation",
      "Wide choice of serviced apartments with self-cooking kitchens",
      "Direct Metro and expressway connections to medical facilities",
    ],
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    tagline: "The Silicon Valley of Advanced Healthcare & Robotic Surgery",
    description:
      "Renowned for cutting-edge medical technology, pleasant year-round climate, and high English literacy. World-famous for cardiac excellence and affordable high-volume surgery programs.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Cardiac Surgery", "Robotic Orthopedics", "Fertility & IVF", "Neurology"],
    hospitals: ["HCG Cancer Centre", "Apollo Hospitals Bengaluru"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok/Singapore/KL -> Bengaluru (BLR)",
    flightDuration: "Approx. 6.5 - 8 hours transit",
    livingCostTier: "Moderate",
    features: [
      "Moderate, pleasant climate ideal for post-operative recovery",
      "Global benchmark for low-cost, high-volume cardiac surgery",
      "High concentration of advanced robotic surgical systems",
      "Safe, multicultural city with extensive international cuisine",
    ],
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "Premier Hub for Complex Neurosurgery & Oncology Research",
    description:
      "India's financial capital hosts historic medical institutions and internationally certified specialty centers leading breakthroughs in neuro-navigation and hematology.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Complex Oncology", "Neurosurgery & Spine", "Pediatric Cardiology", "Cosmetic Surgery"],
    hospitals: ["Kokilaben Hospital Mumbai", "Wockhardt Hospitals Mumbai", "Fortis Healthcare Mumbai"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok/KL -> Mumbai (BOM)",
    flightDuration: "Approx. 7 hours transit",
    livingCostTier: "Balanced",
    features: [
      "Pioneering center for cancer treatment and clinical research",
      "World-class neurosurgical intensive care units",
      "Cosmopolitan environment with diverse culinary options",
      "Close proximity of premier hospitals to South Mumbai hubs",
    ],
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "The Healthcare Capital of India with Exceptional Affordability",
    description:
      "Treats over 40% of international medical tourists entering India. Celebrated for unmatched value, trusted senior surgeons, and high clinical success in orthopedic and transplant surgery.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Organ Transplant", "Joint Replacement", "Eye Surgery", "Cardiac Science"],
    hospitals: ["Gleneagles Global Health City", "Apollo Hospitals Greams Road"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok/KL/Singapore -> Chennai (MAA)",
    flightDuration: "Approx. 6 - 7 hours transit",
    livingCostTier: "Budget-Friendly",
    features: [
      "Lowest average daily accommodation and meal expenses",
      "Pioneers of medical tourism with 30+ years international care history",
      "Dedicated international patient wards with multilingual staff",
      "Renowned for bone & joint and multi-organ transplants",
    ],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "Rapidly Growing Medical Hub with State-of-the-Art Campuses",
    description:
      "Combining sprawling modern hospital campuses with high affordability, Hyderabad is a favorite for liver transplants, robotic oncology, and cardiac interventions.",
    image: "https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Liver Transplantation", "Radiation Oncology (CyberKnife)", "Orthopedics", "Urology"],
    hospitals: ["Rainbow Children's Hospital and BirthRight", "Apollo Health City Jubilee Hills"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok/KL -> Hyderabad (HYD)",
    flightDuration: "Approx. 7 hours transit",
    livingCostTier: "Budget-Friendly",
    features: [
      "Modern hospital infrastructure with private recovery suites",
      "Significant cost savings compared to other Asian medical hubs",
      "Warm hospitality and peaceful convalescence neighborhoods",
      "Award-winning airport with streamlined medical immigration",
    ],
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tagline: "Geographically Closest Major Indian Medical Hub to Cambodia",
    description:
      "The closest major metropolitan healthcare destination to Southeast Asia, providing top-tier cardiac, cancer, and orthopedic treatments at budget-conscious rates.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    keySpecialties: ["Interventional Cardiology", "General Oncology", "Gastroenterology", "Nephrology"],
    hospitals: ["Apollo Multispeciality Hospital Kolkata", "Fortis Hospital Anandapur", "Medica Superspecialty"],
    flightRoute: "Phnom Penh (PNH) -> Bangkok -> Kolkata (CCU)",
    flightDuration: "Approx. 4.5 - 5.5 hours transit (Shortest travel time)",
    livingCostTier: "Budget-Friendly",
    features: [
      "Shortest air travel and transit time from Phnom Penh",
      "Economical accommodation options in Salt Lake and bypass area",
      "Warm, patient-centric nursing care",
      "Extensive specialized diagnostics and outpatient clinics",
    ],
  },
];

/* ==========================================================================
   MEDICAL VISA DATA & FAQS
   ========================================================================== */
export interface VisaStep {
  step: number;
  title: string;
  duration: string;
  summary: string;
  action: string;
}

export const medicalVisaSteps: VisaStep[] = [
  {
    step: 1,
    title: "Obtain Hospital Visa Invitation Letter (VIL)",
    duration: "24 – 48 Hours",
    summary:
      "Medibeeglobal coordinates directly with your designated partner hospital in India to issue an official, stamped Visa Invitation Letter addressed to the Indian Embassy.",
    action: "Send us patient & companion passport copies + recent medical reports.",
  },
  {
    step: 2,
    title: "Submit Online e-Medical Visa Application",
    duration: "Same Day",
    summary:
      "Our team assists you in completing the Indian Government e-Visa portal application accurately to prevent rejections or delays caused by common formatting mistakes.",
    action: "We guide you step-by-step or file on your behalf with your consent.",
  },
  {
    step: 3,
    title: "Include Medical Attendant Visas (MEDX)",
    duration: "Processed Together",
    summary:
      "Up to two blood relatives or caregivers can accompany the patient on co-terminus Medical Attendant (MEDX) visas linked to the primary medical application.",
    action: "Provide proof of relationship (family book or birth certificate) & passport.",
  },
  {
    step: 4,
    title: "Receive Electronic Travel Authorization (ETA)",
    duration: "48 – 72 Hours",
    summary:
      "The Indian Bureau of Immigration reviews and issues the e-Medical Visa approval electronically via email. No physical embassy visit or passport surrender is required.",
    action: "Print the official PDF visa confirmation to present at boarding in Phnom Penh.",
  },
  {
    step: 5,
    title: "Biometrics on Arrival & FRRO Support",
    duration: "Upon Arrival",
    summary:
      "Present your printed ETA and passport at the dedicated e-Visa immigration counter at Delhi, Mumbai, Bengaluru, or Chennai airport. Medibeeglobal assists with local FRRO registration if stay exceeds 180 days.",
    action: "Our representative meets you right outside the arrivals terminal.",
  },
];

export interface VisaFaq {
  q: string;
  a: string;
}

export const visaFaqs: VisaFaq[] = [
  {
    q: "Can Cambodian citizens apply for an India e-Medical Visa online?",
    a: "Yes. Cambodian passport holders are fully eligible for the official Government of India e-Medical Visa. It is an online electronic authorization (ETA) that does not require dropping off your physical passport at an embassy.",
  },
  {
    q: "How many family members can travel with the patient?",
    a: "Up to two caregivers or family members can travel as medical attendants on an e-Medical Attendant Visa (MEDX). Their visa validity and stay duration match the patient's primary visa.",
  },
  {
    q: "What is the validity of an India e-Medical Visa?",
    a: "An e-Medical Visa is typically valid for 60 days to 6 months with triple entry from the date of first arrival. If your medical treatment requires an extended stay, Medibeeglobal helps process local extensions through the Foreigners Regional Registration Office (FRRO).",
  },
  {
    q: "What documents are required to initiate the Visa Invitation Letter?",
    a: "You will need: 1) Clear passport photo page (with at least 6 months validity remaining), 2) Recent medical reports and doctor notes from Cambodia, and 3) Names of accompanying family members.",
  },
  {
    q: "How fast can Medibeeglobal secure the Hospital Invitation Letter?",
    a: "Within 24 to 48 hours of receiving your medical documents and passport copies, we deliver the official, signed, and stamped Visa Invitation Letter from our partner hospital in India.",
  },
  {
    q: "Does Medibeeglobal charge an extra fee for visa letter coordination?",
    a: "Visa Invitation Letter issuance from our partner hospitals is completely free of charge as part of our patient intake and case coordination service.",
  },
];

/* ==========================================================================
   TRAVEL & STAY ASSISTANCE DATA
   ========================================================================== */
export interface StayTier {
  type: string;
  priceRange: string;
  distance: string;
  bestFor: string;
  features: string[];
}

export const stayTiers: StayTier[] = [
  {
    type: "Budget Guest House / Homestay",
    priceRange: "$20 – $35 / night",
    distance: "3 – 7 mins from hospital",
    bestFor: "Long-term stays & families wanting to cook Khmer meals",
    features: [
      "Private air-conditioned room with ensuite bathroom",
      "Dedicated kitchenette or shared kitchen for preparing home meals",
      "High-speed Wi-Fi, elevator, and laundry services",
      "Walking distance or quick 5-min auto-rickshaw to hospital gates",
    ],
  },
  {
    type: "Serviced Medical Apartments",
    priceRange: "$40 – $70 / night",
    distance: "5 – 10 mins from hospital",
    bestFor: "Families seeking comfort, privacy, and full home amenities",
    features: [
      "1 or 2-bedroom furnished apartments with living room & kitchen",
      "Daily housekeeping, sanitized linens, and 24/7 security",
      "Grocery delivery services and wheelchair accessible entrances",
      "Dedicated air conditioning, smart TV, and quiet recovery environment",
    ],
  },
  {
    type: "4 & 5-Star Partner Recovery Hotels",
    priceRange: "$80 – $140 / night",
    distance: "5 – 15 mins from hospital",
    bestFor: "Patients seeking executive comfort and round-the-clock service",
    features: [
      "Negotiated medical corporate rates through Medibeeglobal",
      "24/7 room service with customized dietary options",
      "Complimentary breakfast and hotel concierge assistance",
      "Priority hospital shuttle transfers included",
    ],
  },
];

export const travelServicesList = [
  {
    title: "Airport Meet & Greet",
    desc: "A Medibeeglobal representative welcomes you right outside the baggage claim terminal with a name sign, assists with luggage, and guides you to private transportation.",
  },
  {
    title: "Wheelchair & Medical Transport",
    desc: "For post-op or mobility-impaired patients, we arrange hydraulic ramp vans, wheelchair-accessible cars, or basic life support ambulances straight from the runway.",
  },
  {
    title: "Local SIM Card & Currency Exchange",
    desc: "We ensure you have an active 5G local SIM card with internet data and assist with verified banking currency exchange as soon as you settle in.",
  },
  {
    title: "Khmer Language Companion",
    desc: "Our on-ground coordinators ensure you never feel lost during doctor consultations, billing counters, pharmacy pickups, or diagnostic tests.",
  },
  {
    title: "Emergency 24/7 Hotline",
    desc: "A dedicated phone and Telegram line connecting you to your case manager day and night throughout your stay in India.",
  },
];

/* ==========================================================================
   PATIENT JOURNEY DETAILED ROADMAP
   ========================================================================== */
export interface JourneyPhaseDetail {
  phaseNumber: string;
  title: string;
  stage: string;
  duration: string;
  summary: string;
  highlights: string[];
}

export const detailedJourneyPhases: JourneyPhaseDetail[] = [
  {
    phaseNumber: "01",
    stage: "Inquiry & Medical Review",
    title: "Confidential Case Intake & Records Review",
    duration: "Day 1 – 2",
    summary:
      "You reach out to Medibeeglobal via WhatsApp, Telegram, or our online form. A Khmer-speaking case manager is assigned to understand your symptoms, gather your diagnostic scans and lab reports, and prepare your medical dossier.",
    highlights: [
      "Free medical assessment and record organization",
      "Khmer and English document compilation",
      "Dossier forwarded to 2-3 top Indian hospital department heads",
    ],
  },
  {
    phaseNumber: "02",
    stage: "Treatment Plan & Quotes",
    title: "Curated Hospital Options & Second Opinions",
    duration: "Day 2 – 3",
    summary:
      "Senior Indian specialists review your scans. We present you with comprehensive written treatment opinions, doctor profiles, expected hospital stay duration, and transparent, itemized cost estimates.",
    highlights: [
      "Zero hidden fees: Direct hospital package pricing",
      "Multiple hospital & surgeon choices tailored to budget",
      "Video teleconsultation with Indian specialist if needed",
    ],
  },
  {
    phaseNumber: "03",
    stage: "Travel & Visa Coordination",
    title: "Visa Invitation Letter & Travel Logistics",
    duration: "Day 3 – 5",
    summary:
      "Once you select your hospital, we obtain the official Visa Invitation Letter, guide your e-Medical Visa filing, recommend optimal flight routes from Phnom Penh, and reserve your nearby accommodation.",
    highlights: [
      "Official hospital Visa Invitation Letter within 24-48h",
      "e-Medical Attendant Visa assistance for 2 family members",
      "Curated stay options within 10 mins of hospital",
    ],
  },
  {
    phaseNumber: "04",
    stage: "Arrival & In-Hospital Care",
    title: "Airport Welcome & Guided Hospital Admission",
    duration: "Treatment Period",
    summary:
      "Upon landing in Delhi, Mumbai, Bengaluru, or Chennai, our representative meets you, takes you to your hotel or hospital, assists with check-in, admission paperwork, and daily doctor consultations.",
    highlights: [
      "Personal airport transfer directly to stay or hospital",
      "On-ground patient companion for translation & navigation",
      "Daily check-ins to ensure quality care and comfort",
    ],
  },
  {
    phaseNumber: "05",
    stage: "Discharge & Convalescence",
    title: "Post-Operative Recovery & Fit-to-Fly Certification",
    duration: "3 – 10 Days Post-Op",
    summary:
      "After surgery, your treating doctor monitors your healing. Our team coordinates post-op check-ups, pharmacy medications, surgical dressing changes, and obtains your Fit-to-Fly medical clearance certificate.",
    highlights: [
      "Doctor-approved Fit-to-Fly certification",
      "Discharge summary & medication plan translated for home",
      "Comfortable post-discharge recovery stay monitoring",
    ],
  },
  {
    phaseNumber: "06",
    stage: "Return Home & Follow-Up",
    title: "Telemedicine Follow-Up & Continuous Support in Cambodia",
    duration: "1 – 12 Months Post-Care",
    summary:
      "Your care does not end when you land back in Cambodia. Medibeeglobal coordinates scheduled virtual follow-up appointments with your operating surgeon and reviews local blood work and imaging.",
    highlights: [
      "Virtual follow-up consults with your treating surgeon",
      "Assistance with local diagnostic testing in Phnom Penh",
      "Lifelong care record accessible through Medibeeglobal",
    ],
  },
];

