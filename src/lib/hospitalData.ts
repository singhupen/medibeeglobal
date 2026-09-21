export interface Hospital {
  id: string;
  name: string;
  city: string;
  location: string;
  tags: string[];
  images: string[];
  description: string;
  accreditations: string[];
  beds?: string;
  highlights?: string[];
}

export const hospitalList: Hospital[] = [
  {
    id: 'medanta-gurugram',
    name: 'Medanta Hospital, Gurugram',
    city: 'Gurugram',
    location: 'Gurugram, Delhi NCR, India',
    tags: ['Cardiac', 'Transplant', 'Robotic Surgery'],
    images: [
      '/Asset/medanta-1.jpg',
      '/Asset/medanta-2.jpg',
      '/Asset/medanta-3.jpg',
    ],
    description:
      'Founded by world-renowned cardiac surgeon Dr. Naresh Trehan, Medanta The Medicity is a flagship multi-super-specialty institute featuring over 1,250 beds, Da Vinci robotic suites, and internationally acclaimed heart, liver, and kidney transplant programs.',
    accreditations: ['JCI Accredited', 'NABH', 'NABL'],
    beds: '1,250+ Beds',
    highlights: ['500+ ICU Beds', 'Da Vinci Xi Robotic Systems', 'Pioneer Organ Transplant Programs'],
  },
  {
    id: 'gleneagles-chennai',
    name: 'Gleneagles Global Health City, Chennai',
    city: 'Chennai',
    location: 'Perumbakkam, Chennai, India',
    tags: ['Liver Transplant', 'Cancer', 'Neurology'],
    images: [
      '/Asset/gleneagles-1.jpg',
      '/Asset/gleneagles-2.jpg',
      '/Asset/gleneagles-3.jpg',
    ],
    description:
      'A sprawling 21-acre premier quaternary healthcare destination recognized across Asia for liver, kidney, heart, and lung transplants, supported by high-precision neurosurgery and multidisciplinary cancer care.',
    accreditations: ['JCI Accredited', 'NABH', 'NABL'],
    beds: '1,000+ Beds',
    highlights: ['2,000+ Liver Transplants', '21-Acre Campus', 'Dedicated Neuro-Critical Unit'],
  },
  {
    id: 'apollo-hospitals-india',
    name: 'Apollo Hospitals India',
    city: 'Delhi & Bengaluru',
    location: 'Delhi NCR & Bengaluru, India',
    tags: ['Proton Therapy', 'Transplants', 'Cardiac'],
    images: [
      '/Asset/apollo-1.jpg',
      '/Asset/apollo-2.jpg',
      '/Asset/apollo-3.jpg',
    ],
    description:
      "Asia's foremost integrated healthcare network operating South Asia's first Proton Beam Cancer Therapy Centre, landmark solid organ transplant centers, and globally benchmarked cardiac intervention units.",
    accreditations: ['JCI Accredited', 'NABH', 'ISO Certified'],
    beds: '10,000+ Beds across Network',
    highlights: ['South Asia Proton Beam Centre', '10,000+ Organ Transplants', '99.6% Cardiac Surgery Success'],
  },
  {
    id: 'fortis-healthcare-india',
    name: 'Fortis Healthcare India',
    city: 'Gurugram & Noida',
    location: 'Gurugram & Noida, Delhi NCR, India',
    tags: ['Liver and Kidney Transplant', 'BMT', 'Advanced Oncology'],
    images: [
      '/Asset/fortis-1.jpg',
      '/Asset/fortis-2.jpg',
      '/Asset/fortis-3.jpg',
    ],
    description:
      'Globally recognized for surgical precision and smart hospital infrastructure, Fortis specializes in living-donor liver & kidney transplants, bone marrow stem cell transplants, and robotic cancer surgery.',
    accreditations: ['JCI Accredited', 'NABH', 'GreenOT Certified'],
    beds: '4,000+ Network Beds',
    highlights: ['Ranked #2 Globally in Smart Tech', '1,500+ Bone Marrow Transplants', 'Robotic Surgery Hub'],
  },
  {
    id: 'max-healthcare-delhi',
    name: 'Max Healthcare, Delhi',
    city: 'Delhi NCR',
    location: 'Saket & Shalimar Bagh, Delhi, India',
    tags: ['CAR T-cell Therapy', 'Cancer', 'Robotic Cardiac'],
    images: [
      '/Asset/max-1.jpg',
      '/Asset/max-2.jpg',
      '/Asset/max-3.jpg',
    ],
    description:
      "A leader in advanced oncology and minimally invasive cardiac science, Max Healthcare is at the forefront of CAR T-cell immunotherapy (NexCAR19), TrueBeam STx radiation, and robotic CABG surgeries.",
    accreditations: ['JCI Accredited', 'NABH', 'NABL'],
    beds: '3,400+ Network Beds',
    highlights: ['Pioneer in CAR T-cell Therapy', 'TrueBeam STx Radiosurgery', 'Comprehensive Heart & Lung Care'],
  },
  {
    id: 'hcg-cancer-centre-bangalore',
    name: 'HCG Cancer Centre, Bangalore',
    city: 'Bangalore',
    location: 'Bangalore, Karnataka, India',
    tags: ['Dedicated Oncology', 'All Cancer Types', 'Precision Radiation'],
    images: [
      '/Asset/hcg-1.jpg',
      '/Asset/hcg-2.jpg',
      '/Asset/hcg-3.jpg',
    ],
    description:
      "South Asia's largest dedicated cancer treatment network, delivering precision genomics, CyberKnife robotic radiosurgery, nuclear medicine therapies, and international multidisciplinary tumor boards.",
    accreditations: ['NABH', 'CAP Accredited', 'NABL'],
    beds: 'Dedicated Oncology Suites',
    highlights: ['CyberKnife Robotic Radiosurgery', 'Comprehensive Genomics Lab', 'Multidisciplinary Tumor Board'],
  },
  {
    id: 'kokilaben-hospital-mumbai',
    name: 'Kokilaben Hospital, Mumbai',
    city: 'Mumbai',
    location: 'Andheri West, Mumbai, India',
    tags: ['Neurology', 'Robotic Surgery', 'Oncology'],
    images: [
      '/Asset/kokilaben-1.jpg',
      '/Asset/kokilaben-2.jpg',
      '/Asset/kokilaben-3.jpg',
    ],
    description:
      'Western India’s premier quaternary hospital operating with a full-time specialist system (FTSS), equipped with an intra-operative 3T MRI, the latest da Vinci Xi robotic surgical system, and Edge radiosurgery.',
    accreditations: ['JCI Accredited', 'NABH', 'CAP', 'NABL'],
    beds: '750 Beds',
    highlights: ['3T Intraoperative MRI Suite', 'Da Vinci Xi Robotic Systems', 'Full-Time Specialist System'],
  },
  {
    id: 'artemis-hospital-gurugram',
    name: 'Artemis Hospital, Gurugram',
    city: 'Gurugram',
    location: 'Sector 51, Gurugram, Delhi NCR, India',
    tags: ['Orthopaedics', 'Cardiac', 'BMT'],
    images: [
      '/Asset/artemis-1.jpg',
      '/Asset/artemis-2.jpg',
      '/Asset/artemis-3.jpg',
    ],
    description:
      'The first hospital in Gurugram accredited by JCI and NABH, Artemis offers state-of-the-art robotic joint replacements, complex pediatric and adult cardiac interventions, and high-success BMT programs.',
    accreditations: ['JCI Accredited', 'NABH', 'NABL'],
    beds: '550+ Beds',
    highlights: ['First JCI Accredited in Gurugram', 'Robotic Joint Arthroplasty', 'Dedicated BMT Center'],
  },
  {
    id: 'rainbow-childrens-hospital-hyderabad',
    name: 'Rainbow Children\'s Hospital and BirthRight, Hyderabad',
    city: 'Hyderabad',
    location: 'Banjara Hills, Hyderabad, India',
    tags: ['Paediatrics', 'IVF', 'Fertility'],
    images: [
      '/Asset/rainbow-1.jpg',
      '/Asset/rainbow-2.jpg',
      '/Asset/rainbow-3.jpg',
    ],
    description:
      'India’s top pediatric super-specialty hospital and perinatal care network, housing Level-III advanced neonatal ICUs (NICU), pediatric cardiac and liver surgery, and the BirthRight IVF fertility institute.',
    accreditations: ['JCI Accredited', 'NABH', 'NABL'],
    beds: '1,500+ Beds across Network',
    highlights: ['Level III-B Advanced NICU', 'BirthRight IVF & Fertility Wing', 'Pediatric Multi-Organ Care'],
  },
  {
    id: 'wockhardt-hospitals-mumbai',
    name: 'Wockhardt Hospitals, Mumbai',
    city: 'Mumbai',
    location: 'Mumbai Central, Mumbai, India',
    tags: ['Cardiac', 'Neuro', 'Bariatric'],
    images: [
      '/Asset/wockhardt-1.jpg',
      '/Asset/wockhardt-2.jpg',
      '/Asset/wockhardt-3.jpg',
    ],
    description:
      'A 21-storey modern high-rise digital hospital in South-Central Mumbai, affiliated with Partners Harvard Medical International, providing premier interventional cardiology, neurosurgery, and bariatric surgery.',
    accreditations: ['NABH', 'NABL', 'Harvard Medical Affiliated'],
    beds: '350 Beds',
    highlights: ['21-Storey Digital Hospital', 'Harvard Medical Affiliation', 'Intelligent ICU & Tele-monitoring'],
  },
];

// Alias for backward compatibility
export const partnerHospitals = hospitalList;
