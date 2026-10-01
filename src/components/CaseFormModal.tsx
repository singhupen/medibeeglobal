import { useState, useEffect } from 'react';
import { specialtyOptions, timelineOptions, contactOptions } from '@/lib/data';
import Logo from '@/components/Logo';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Stethoscope,
  Calendar,
  MessageCircle,
  Upload,
  AlertCircle,
  Sparkles,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';

export interface CaseFormData {
  name: string;
  age: string;
  phone: string;
  city: string;
  specialty: string;
  details: string;
  hasDocuments: boolean;
  timeline: string;
  contactPreference: string;
  consent: boolean;
}

const initialData: CaseFormData = {
  name: '',
  age: '',
  phone: '',
  city: '',
  specialty: '',
  details: '',
  hasDocuments: false,
  timeline: '',
  contactPreference: '',
  consent: false,
};

const stepIcons = [User, Stethoscope, Calendar, MessageCircle];
const stepLabels = ['Patient Info', 'Medical Concern', 'Timeline', 'Contact'];

export default function CaseFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CaseFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [caseId, setCaseId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // CAPTCHA State
  const [captchaSvg, setCaptchaSvg] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(false);

  const fetchCaptcha = async () => {
    setIsLoadingCaptcha(true);
    try {
      const res = await fetch('/api/captcha');
      const json = await res.json();
      setCaptchaSvg(json.svg || '');
      setCaptchaText(json.text || '');
      setCaptchaInput('');
    } catch (err) {
      console.error('Failed to fetch captcha', err);
    } finally {
      setIsLoadingCaptcha(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchCaptcha();
    }
  }, [open]);

  // Validation booleans for disabling Submit button
  const isCaptchaValid = Boolean(
    captchaText && captchaInput.trim().toLowerCase() === captchaText.toLowerCase()
  );

  const isAllRequiredFilled = Boolean(
    data.name.trim() &&
    data.age.trim() &&
    !isNaN(Number(data.age)) &&
    Number(data.age) >= 1 &&
    Number(data.age) <= 120 &&
    data.phone.trim() &&
    data.city.trim() &&
    data.specialty.trim() &&
    data.details.trim() &&
    data.timeline.trim() &&
    data.contactPreference.trim() &&
    data.consent
  );

  const isSubmitDisabled = submitting || !isAllRequiredFilled || !isCaptchaValid;

  if (!open) return null;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 0) {
      if (!data.name.trim()) newErrors.name = 'Please enter your name';
      if (!data.age.trim()) newErrors.age = 'Please enter your age';
      else if (isNaN(Number(data.age)) || Number(data.age) < 1 || Number(data.age) > 120)
        newErrors.age = 'Please enter a valid age';
      if (!data.phone.trim()) newErrors.phone = 'Please enter your phone number';
      if (!data.city.trim()) newErrors.city = 'Please enter your city';
    }

    if (currentStep === 1) {
      if (!data.specialty) newErrors.specialty = 'Please select a specialty';
      if (!data.details.trim()) newErrors.details = 'Please describe your medical concern';
    }

    if (currentStep === 2) {
      if (!data.timeline) newErrors.timeline = 'Please select a timeline';
    }

    if (currentStep === 3) {
      if (!data.contactPreference) newErrors.contactPreference = 'Please select a contact preference';
      if (!data.consent) newErrors.consent = 'You must agree to the Privacy Policy and Terms of Service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(Math.max(0, step - 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    if (!isCaptchaValid) {
      setSubmitError('Please complete the security check correctly before submitting.');
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/case-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          captchaInput: captchaInput.trim(),
          captchaExpected: captchaText,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
        fetchCaptcha();
        return;
      }

      // Case ID is generated server-side so it can't be spoofed on the client.
      setCaseId(result.caseId);
      setSubmitted(true);
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(0);
    setData(initialData);
    setErrors({});
    setSubmitted(false);
    setCaseId('');
    setSubmitError('');
    setCaptchaInput('');
    onClose();
  };

  const update = (field: keyof CaseFormData, value: string | boolean) => {
    setData({ ...data, [field]: value });
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const progress = ((step + 1) / 4) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 sm:px-8 pt-6 pb-4 border-b border-gray-100 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3.5">
              <Logo height={28} />
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">
                  {submitted ? 'Case Submitted' : 'Submit Your Case'}
                </h2>
                {!submitted && (
                  <p className="text-sm text-gray-400 mt-0.5">Step {step + 1} of 4 — {stepLabels[step]}</p>
                )}
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Progress bar */}
          {!submitted && (
            <div className="flex items-center gap-2">
              {stepIcons.map((Icon, i) => (
                <div key={i} className="flex items-center gap-2 flex-1">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                      i <= step
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" strokeWidth={2.5} />
                  </div>
                  {i < stepIcons.length - 1 && (
                    <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full bg-primary-500 transition-all duration-500 ${
                          i < step ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6">
          {submitted ? (
            <ConfirmationScreen caseId={caseId} data={data} onClose={handleClose} />
          ) : (
            <>
              {/* Step 1: Patient Info */}
              {step === 0 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="e.g. Sopheap Chen"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-500'
                      } focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={data.age}
                        onChange={(e) => update('age', e.target.value)}
                        placeholder="e.g. 45"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.age ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-500'
                        } focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                      />
                      {errors.age && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.age}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="e.g. +855 12 345 678"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-500'
                        } focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City in Cambodia <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={data.city}
                      onChange={(e) => update('city', e.target.value)}
                      placeholder="e.g. Phnom Penh"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.city ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-500'
                      } focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Medical Concern */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Specialty Needed <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {specialtyOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => update('specialty', option)}
                          className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all ${
                            data.specialty === option
                              ? 'bg-primary-500 text-white border-primary-500 shadow-soft'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {errors.specialty && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.specialty}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Describe Your Medical Concern <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={data.details}
                      onChange={(e) => update('details', e.target.value)}
                      rows={4}
                      placeholder="Please describe your condition, symptoms, diagnosis, and any treatments you've had so far..."
                      className={`w-full px-4 py-3 rounded-xl border resize-none ${
                        errors.details ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-500'
                      } focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                    />
                    {errors.details && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.details}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical Documents (Optional)
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-primary-300 hover:bg-primary-50/30 transition-all">
                      <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">
                          {data.hasDocuments ? 'Documents attached' : 'Click to upload medical records'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {data.hasDocuments ? 'We\'ll request these during your consultation' : 'PDF, images, or medical reports'}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={data.hasDocuments}
                        onChange={(e) => update('hasDocuments', e.target.checked)}
                        className="sr-only"
                      />
                      {data.hasDocuments && (
                        <CheckCircle2 className="w-5 h-5 text-primary-500" />
                      )}
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Timeline <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => update('timeline', option)}
                          className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all text-left ${
                            data.timeline === option
                              ? 'bg-primary-50 border-primary-500 shadow-soft'
                              : 'bg-white border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <span className={`font-semibold ${
                            data.timeline === option ? 'text-primary-700' : 'text-gray-700'
                          }`}>
                            {option}
                          </span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            data.timeline === option
                              ? 'bg-primary-500 border-primary-500'
                              : 'border-gray-300'
                          }`}>
                            {data.timeline === option && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.timeline && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.timeline}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Preference */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      How would you like us to contact you? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {contactOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => update('contactPreference', option.value)}
                          className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all ${
                            data.contactPreference === option.value
                              ? 'bg-primary-50 border-primary-500 shadow-soft'
                              : 'bg-white border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            data.contactPreference === option.value
                              ? 'bg-primary-500'
                              : 'bg-gray-100'
                          }`}>
                            <option.icon className={`w-6 h-6 ${
                              data.contactPreference === option.value ? 'text-white' : 'text-gray-400'
                            }`} />
                          </div>
                          <span className={`text-sm font-semibold ${
                            data.contactPreference === option.value ? 'text-primary-700' : 'text-gray-600'
                          }`}>
                            {option.value}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.contactPreference && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.contactPreference}
                      </p>
                    )}
                  </div>

                  {/* Security Verification / CAPTCHA */}
                  <div className="bg-primary-50/50 border border-primary-100 rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-800">
                        <ShieldCheck className="w-4 h-4 text-primary-600" />
                        Security Verification <span className="text-red-500">*</span>
                      </label>
                      {isCaptchaValid && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 bg-accent-100 border border-accent-300 px-2.5 py-0.5 rounded-full animate-fade-in">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Please enter the 5 characters shown below to confirm you are human.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden h-[48px] w-[140px] flex items-center justify-center shadow-xs select-none"
                          dangerouslySetInnerHTML={{ __html: captchaSvg }}
                        />
                        <button
                          type="button"
                          onClick={fetchCaptcha}
                          disabled={isLoadingCaptcha}
                          className="h-[48px] w-[48px] rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                          title="Refresh security code"
                          aria-label="Refresh captcha"
                        >
                          <RefreshCw className={`w-4 h-4 ${isLoadingCaptcha ? 'animate-spin text-primary-600' : ''}`} />
                        </button>
                      </div>

                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          placeholder="Type code here"
                          maxLength={8}
                          className={`w-full h-[48px] px-4 rounded-xl border font-mono uppercase tracking-widest text-base ${
                            isCaptchaValid
                              ? 'border-accent-500 ring-2 ring-accent-100 bg-accent-50/30 text-accent-950 font-bold'
                              : captchaInput.length > 0
                              ? 'border-amber-400 bg-white text-gray-900'
                              : 'border-gray-200 bg-white text-gray-900'
                          } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                        />
                        {isCaptchaValid && (
                          <CheckCircle2 className="w-5 h-5 text-accent-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        )}
                      </div>
                    </div>

                    {!isCaptchaValid && captchaInput.length > 0 && (
                      <p className="text-xs text-amber-600 mt-2 flex items-center gap-1 font-medium">
                        Code does not match yet. Check letters/numbers or click refresh for a new code.
                      </p>
                    )}
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-2xl p-5 space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Case Summary</p>
                    <SummaryRow label="Patient" value={data.name} />
                    <SummaryRow label="Age" value={data.age} />
                    <SummaryRow label="Phone" value={data.phone} />
                    <SummaryRow label="City" value={data.city} />
                    <SummaryRow label="Specialty" value={data.specialty} />
                    <SummaryRow label="Timeline" value={data.timeline} />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={data.consent}
                      onChange={(e) => update('consent', e.target.checked)}
                      className="mt-1 flex-shrink-0 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer block">
                        I agree to the <a href="/terms" className="text-primary-600 hover:underline font-semibold" target="_blank" rel="noreferrer">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline font-semibold" target="_blank" rel="noreferrer">Privacy Policy</a>. I consent to Medibeeglobal collecting and processing my medical and personal data to provide healthcare assistance.
                      </label>
                      {errors.consent && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Submission error */}
              {step === 3 && submitError && (
                <p className="text-red-500 text-sm mt-4 flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> {submitError}
                </p>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-5 border-t border-gray-100">
                <button
                  onClick={handleBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-700 font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitDisabled}
                    title={
                      isSubmitDisabled
                        ? !isAllRequiredFilled
                          ? 'Please fill in all required case details'
                          : 'Please complete the security check to enable submission'
                        : 'Submit your case'
                    }
                    className={`inline-flex items-center gap-2 font-bold text-sm px-7 py-3 rounded-full transition-all ${
                      isSubmitDisabled
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                        : 'bg-accent-400 hover:bg-accent-500 text-primary-950 shadow-soft hover:shadow-lg hover:scale-105 cursor-pointer'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Case</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-700 font-medium">{value}</span>
    </div>
  );
}

function ConfirmationScreen({ caseId, data, onClose }: { caseId: string; data: CaseFormData; onClose: () => void }) {
  return (
    <div className="text-center py-8 animate-fade-in-up">
      <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
        <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Thank You, {data.name}!</h3>
      <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-6">
        Your case has been received. A Medibeeglobal case manager will contact you within 24 hours via{' '}
        <span className="font-semibold text-primary-500">{data.contactPreference}</span>.
      </p>

      <div className="inline-flex items-center gap-3 bg-primary-50 rounded-2xl px-6 py-4 mb-8">
        <Sparkles className="w-5 h-5 text-accent-500" />
        <div className="text-left">
          <p className="text-xs text-gray-400 font-medium">Your Case ID</p>
          <p className="text-lg font-extrabold text-primary-500 tracking-wider">{caseId}</p>
        </div>
      </div>

      <div>
        <button
          onClick={onClose}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
}
