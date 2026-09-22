import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck } from 'lucide-react';

const PARTNER_HOSPITALS = [
  { name: 'Apollo Hospitals', city: 'Delhi & Chennai', badge: 'JCI Accredited' },
  { name: 'Medanta The Medicity', city: 'Gurugram', badge: 'Flagship Center' },
  { name: 'Fortis Healthcare', city: 'Delhi NCR', badge: 'JCI Accredited' },
  { name: 'Max Healthcare', city: 'Delhi NCR', badge: 'Multi-Specialty' },
  { name: 'Artemis Hospitals', city: 'Gurugram', badge: 'JCI & NABH' },
  { name: 'Gleneagles Global', city: 'Chennai', badge: 'Transplant Hub' },
];

export default function PartnerTrustStrip() {
  return (
    <section className="relative bg-white border-b border-gray-100 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-3 shrink-0 text-center lg:text-left">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Partner Hospital Network
              </p>
              <p className="text-sm font-extrabold text-gray-900">
                India&apos;s Leading Accredited Institutions
              </p>
            </div>
          </div>

          {/* Hospital Badges Grid / Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3 w-full lg:w-auto">
            {PARTNER_HOSPITALS.map((hospital) => (
              <div
                key={hospital.name}
                className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary-200 rounded-xl px-3 py-2.5 transition-all duration-200 hover:shadow-soft text-center flex flex-col justify-center items-center"
              >
                <span className="text-xs font-bold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                  {hospital.name}
                </span>
                <span className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-2.5 h-2.5 text-accent-500 shrink-0" />
                  {hospital.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Action Link */}
          <Link
            href="/hospitals"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full px-4 py-2 transition-colors shrink-0"
          >
            <span>View All Hospitals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
