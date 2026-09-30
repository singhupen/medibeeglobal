'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  Search, 
  MapPin, 
  Building2, 
  Award, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Globe2 
} from 'lucide-react';
import { doctorsData, Doctor } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

const specialtyFilters = [
  'All Specialties',
  'Cardiac Surgery',
  'Oncology',
  'Orthopedics',
  'Organ Transplant',
  'Neurosurgery',
  'Fertility (IVF)',
];

export default function DoctorsPage() {
  const { openCaseModal } = useCaseModal();
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' || doc.specialty === selectedSpecialty;
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSpecialty && matchesSearch;
    });
  }, [selectedSpecialty, searchQuery]);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">World-Class Medical Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            Distinguished Doctors &{' '}
            <span className="text-accent-400">Pioneering Surgeons</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Consult India&apos;s foremost medical leaders with 15–30+ years of clinical excellence, Ivy League &amp; UK fellowships, and thousands of successful complex surgeries.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 border-t border-white/15">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">15–30+</p>
              <p className="text-xs sm:text-sm text-white/70">Years Average Experience</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">50,000+</p>
              <p className="text-xs sm:text-sm text-white/70">Surgeries Performed</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">JCI & FRCS</p>
              <p className="text-xs sm:text-sm text-white/70">Global Accreditations</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">24–48h</p>
              <p className="text-xs sm:text-sm text-white/70">Second Opinion Turnaround</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Specialty Scrollable Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {specialtyFilters.map((spec) => {
                const isActive = selectedSpecialty === spec;
                return (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary-500 text-white shadow-soft'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctor, hospital, or city..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Specialist' : 'Specialists'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Profiles verified by Medibeeglobal Clinical Board
            </p>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 max-w-lg mx-auto">
              <Stethoscope className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">No doctors match your search</h3>
              <p className="text-sm text-gray-500 mb-6">
                Try resetting your filters or tell our team who you are looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedSpecialty('All Specialties');
                  setSearchQuery('');
                }}
                className="text-primary-500 font-semibold text-sm hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-card hover:border-primary-200 transition-all flex flex-col group"
                >
                  {/* Card Header with Image and Badges */}
                  <div className="relative h-60 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
                    
                    {doctor.badge && (
                      <span className="absolute top-4 left-4 bg-accent-400 text-primary-950 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {doctor.badge}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-wider text-accent-400 font-bold mb-1">
                        {doctor.specialty}
                      </p>
                      <h3 className="text-xl font-extrabold leading-snug">{doctor.name}</h3>
                      <p className="text-xs text-white/80 line-clamp-1">{doctor.role}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    {/* Hospital & City */}
                    <div className="space-y-2 border-b border-gray-100 pb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Building2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="line-clamp-1">{doctor.hospital}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span>{doctor.city}, India</span>
                      </div>
                    </div>

                    {/* Stats Pill Row */}
                    <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl text-center">
                      <div>
                        <span className="block text-xs text-gray-400 font-medium">Experience</span>
                        <span className="text-sm font-extrabold text-primary-600">
                          {doctor.experienceYears}+ Years
                        </span>
                      </div>
                      <div className="border-l border-gray-200">
                        <span className="block text-xs text-gray-400 font-medium">Cases Handled</span>
                        <span className="text-sm font-extrabold text-gray-900">
                          {doctor.surgeriesCount}
                        </span>
                      </div>
                    </div>

                    {/* Credentials & Bio */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-1.5 text-gray-700">
                        <GraduationCap className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold line-clamp-1">{doctor.qualifications}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-gray-500">
                        <Award className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{doctor.fellowships}</span>
                      </div>
                      <p className="text-gray-600 line-clamp-2 pt-1 leading-relaxed">
                        {doctor.bio}
                      </p>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                      <button
                        onClick={openCaseModal}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-accent-300" />
                        Request Opinion
                      </button>
                      <button
                        onClick={openCaseModal}
                        className="px-3 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                        title="View Doctor Schedule"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Second Opinion Process */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Clinical Confidence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              How Our Indian Specialist Second Opinion Works
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Get an impartial, expert medical opinion from India&apos;s leading department heads before making major surgery commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-extrabold text-lg mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Send Your Medical Records</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Upload your biopsy, MRI, CT scans, and Cambodian doctor summary. Our Khmer-speaking case manager translates and formats your dossier.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center font-extrabold text-lg mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Specialist Review &amp; Plan</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Senior clinicians examine your case and provide an official treatment recommendation, estimated hospital stay, and itemized cost breakdown.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-extrabold text-lg mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Virtual Consult &amp; Decisions</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Schedule an optional video consultation with the Indian doctor alongside a Khmer interpreter to ask all your questions before you travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Need Help Selecting the Right Specialist?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Our medical board matches your specific diagnosis, surgical complexity, and budget with the ideal department head in India.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Match Me with a Doctor
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
