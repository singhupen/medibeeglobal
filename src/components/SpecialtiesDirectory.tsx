'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Heart,
  Activity,
  Brain,
  Bone,
  Baby,
  Shield,
  Stethoscope,
  Sparkles,
  Droplets,
  Eye,
  Smile,
  Scan,
  Dna,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Award,
  Zap,
  DollarSign,
} from 'lucide-react';
import { allSpecialties, expandedCostComparisons, SpecialtyItem } from '@/lib/specialtiesData';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Activity,
  Sparkles,
  Dna,
  Bone,
  Brain,
  Baby,
  Shield,
  Stethoscope,
  Droplets,
  Eye,
  Smile,
  Scan,
};

const filterCategories = [
  'All',
  'Cardiac',
  'Oncology',
  'Transplant',
  'Orthopedics',
  'Neuro',
  'Fertility',
  'Pediatrics',
  'Specialized',
];

export default function SpecialtiesDirectory() {
  const { openCaseModal } = useCaseModal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCostIndex, setActiveCostIndex] = useState(0);

  const filteredSpecialties = useMemo(() => {
    return allSpecialties.filter((item) => {
      // Category Filter
      let matchesFilter = true;
      if (activeFilter !== 'All') {
        matchesFilter = item.category === activeFilter;
      }

      // Search Query Filter
      const q = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (q) {
        matchesSearch =
          item.title.toLowerCase().includes(q) ||
          item.shortDesc.toLowerCase().includes(q) ||
          item.fullDesc.toLowerCase().includes(q) ||
          item.commonProcedures.some((proc) => proc.toLowerCase().includes(q)) ||
          item.featuredHospitals.some((hosp) => hosp.toLowerCase().includes(q));
      }

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const activeCostItem = expandedCostComparisons[activeCostIndex] || expandedCostComparisons[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          FULL-WIDTH HERO SECTION (Matching Established Brand Design System)
          ========================================================================= */}
      <section className="w-full bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        {/* Theme decorative ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 text-xs sm:text-sm font-medium text-white/90">
            <CrossIcon size={16} />
            <span>Clinical Centers of Excellence • 14+ Advanced Super-Specialties</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight text-white">
            World-Class Medical <span className="text-accent-400">Specialties</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Access internationally accredited quaternary hospital departments across India. From complex pediatric heart surgery and living-donor transplants to CAR T-cell immunotherapy and robotic joint replacements.
          </p>

          {/* Full-Width Stats & Trust Bar */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-card">
            <div className="p-3 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">14+</span>
              <span className="text-xs text-white/80 font-medium">Major Specialties</span>
            </div>
            <div className="p-3 text-center border-l border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-accent-400">60% – 85%</span>
              <span className="text-xs text-white/80 font-medium">Cost Savings</span>
            </div>
            <div className="p-3 text-center border-l-0 md:border-l border-t md:border-t-0 border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs text-white/80 font-medium">JCI / NABH Network</span>
            </div>
            <div className="p-3 text-center border-l border-t md:border-t-0 border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-accent-400">24–48 Hours</span>
              <span className="text-xs text-white/80 font-medium">Doctor Case Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL-WIDTH STICKY CONTROLS (Specialty Filter Pills & Live Search)
          ========================================================================= */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-16 lg:top-20 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3.5">
          {/* Specialty Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'All' ? 'All Specialties' : category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatment or procedure..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-gray-100 border border-transparent focus:border-primary-500 focus:bg-white text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          SPECIALTIES DIRECTORY GRID (14 Items)
          ========================================================================= */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-accent-500 font-bold text-xs uppercase tracking-wider">Treatments & Specialties</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Explore Available Treatments
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Showing <span className="text-gray-900 font-bold">{filteredSpecialties.length}</span> of {allSpecialties.length} Specialties
              </span>
              {(activeFilter !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold cursor-pointer underline"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>

          {/* Empty Search State */}
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-soft p-8 max-w-md mx-auto">
              <Stethoscope className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-800 mb-1">No Treatments Found</h3>
              <p className="text-xs text-gray-500 mb-4">
                No specialty or procedure matches your search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-xs font-semibold cursor-pointer transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredSpecialties.map((item, idx) => {
                const IconComponent = iconMap[item.iconName] || Stethoscope;

                return (
                  <div
                    key={item.id}
                    className="group flex flex-col bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-primary-200 transition-all duration-300 hover:-translate-y-1.5"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {/* Top Row: Icon, Cost Pill & Savings Badge */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors flex-shrink-0 shadow-xs">
                        <IconComponent className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <div className="inline-flex items-center gap-1 bg-accent-50 text-accent-700 border border-accent-200 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                          <Zap className="w-3 h-3 text-accent-500" />
                          <span>Save {item.savingsPercentage}</span>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">
                          Packages from <span className="text-gray-900 font-bold">{item.costFrom}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {item.fullDesc}
                        </p>

                        {/* Common Procedures Pills */}
                        <div className="mb-5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Key Procedures
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.commonProcedures.map((proc) => (
                              <span
                                key={proc}
                                className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-50 text-gray-700 border border-gray-200/60"
                              >
                                {proc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Leading Centers of Excellence */}
                        <div className="pt-3 border-t border-gray-100 mb-5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                            Premier Partner Hospitals
                          </p>
                          <div className="space-y-1">
                            {item.featuredHospitals.map((hosp, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                <Building2 className="w-3 h-3 text-primary-500 flex-shrink-0" />
                                <span className="line-clamp-1">{hosp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Action */}
                      <button
                        type="button"
                        onClick={() => openCaseModal()}
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary-50 hover:bg-primary-500 text-primary-700 hover:text-white font-bold px-4 py-2.5 rounded-xl transition-all duration-200 text-xs sm:text-sm cursor-pointer group/btn mt-2"
                      >
                        <span>Consult on this Treatment</span>
                        <ArrowRight className="w-4 h-4 text-primary-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          EXPANDED COST COMPARISON CALCULATOR (Multi-Country Benchmark)
          ========================================================================= */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs uppercase tracking-wider">Transparent Benchmarks</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              International Treatment Cost Comparison
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Compare average medical procedure costs across Asian destinations and the West. Receive the same JCI-accredited clinical excellence at up to 85% lower package costs in India.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-card border border-gray-100 overflow-hidden">
            {/* Header Strip */}
            <div className="bg-primary-500 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Procedure Cost Matrix (USD)</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-0.5">
                  Select a procedure below to view approximate benchmark pricing
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                <span>Verified Hospital Estimates</span>
              </div>
            </div>

            {/* Procedure Selector Horizontal Tab Bar */}
            <div className="p-4 sm:p-6 border-b border-gray-100 overflow-x-auto scrollbar-none flex gap-2">
              {expandedCostComparisons.map((item, idx) => (
                <button
                  key={item.procedure}
                  type="button"
                  onClick={() => setActiveCostIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCostIndex === idx
                      ? 'bg-primary-500 text-white shadow-soft scale-102'
                      : 'bg-white text-gray-700 border border-gray-200/80 hover:bg-gray-100'
                  }`}
                >
                  {item.procedure}
                </button>
              ))}
            </div>

            {/* Comparison Cards Grid */}
            <div className="p-6 sm:p-10">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-primary-50/60 p-4 rounded-2xl border border-primary-100/80">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-primary-900">
                    {activeCostItem.procedure}
                  </h4>
                  <p className="text-xs text-primary-700">
                    Typical savings range for patients: <span className="font-bold text-accent-700">{activeCostItem.savings}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openCaseModal()}
                  className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>Request Exact Hospital Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
                {/* India (Highlighted) */}
                <div className="col-span-2 sm:col-span-1 bg-primary-500 text-white rounded-2xl p-5 text-center shadow-blue scale-102 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div>
                    <span className="text-3xl block mb-2">🇮🇳</span>
                    <p className="font-bold text-xs uppercase tracking-wider text-white/90 mb-1">
                      India
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-white my-2">
                      {activeCostItem.india}
                    </p>
                  </div>
                  <div className="mt-3 inline-flex items-center justify-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                    <span className="text-xs font-bold text-white">Best Value</span>
                  </div>
                </div>

                {/* Singapore */}
                <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl p-5 text-center shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-2">🇸🇬</span>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Singapore
                    </p>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 my-2">
                      {activeCostItem.singapore}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Standard Quaternary</span>
                </div>

                {/* Malaysia */}
                <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl p-5 text-center shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-2">🇲🇾</span>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Malaysia
                    </p>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 my-2">
                      {activeCostItem.malaysia}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Regional Benchmark</span>
                </div>

                {/* Thailand */}
                <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl p-5 text-center shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-2">🇹🇭</span>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Thailand
                    </p>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 my-2">
                      {activeCostItem.thailand}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Private Centers</span>
                </div>

                {/* USA / West */}
                <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl p-5 text-center shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-2">🇺🇸</span>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                      United States
                    </p>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 my-2">
                      {activeCostItem.usa}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Western Hospitals</span>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
                * Note: Procedure estimates include typical surgeon fees, hospital stay, and standard surgical supplies. Actual costs may vary depending on patient age, co-morbidities, implants chosen, and specific hospital selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR PILLARS OF CLINICAL EXCELLENCE
          ========================================================================= */}
      <section className="w-full py-16 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Why Patients Choose India for Super-Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1.5">World-Trained Surgeons</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Senior clinicians and department directors with training fellowships from top institutions in the UK, US, and Europe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1.5">Robotic &amp; Hybrid Tech</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Da Vinci Xi surgical robotics, intraoperative 3T MRI suites, CyberKnife, and TrueBeam linear accelerators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1.5">Zero Waitlists</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Unlike European or Commonwealth health systems, appointments and major surgeries are scheduled immediately upon arrival.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-accent-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1.5">End-to-End Care</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Medical visas, language interpreters, hospital admission, guest houses, and post-discharge recovery monitoring back home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL BOTTOM CONSULTATION ACTION STRIP
          ========================================================================= */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary-900 via-primary-800 to-primary-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card border border-primary-700/40">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-400/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialty Matching Service</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Unsure Which Medical Specialty or Procedure Applies to Your Case?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Submit your diagnostic reports, scan summaries, or Cambodian doctor referral. Our India medical team will review your files free of charge and provide an expert second opinion within 24–48 hours.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => openCaseModal()}
                className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md text-sm cursor-pointer"
              >
                <span>Submit Case for Free Medical Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
