import React, { useState } from 'react';

const domainOptions = [
  { id: 'srv-web', label: 'Web Design', icon: 'language', defaultChecked: true },
  { id: 'srv-software', label: 'Software Dev', icon: 'terminal' },
  { id: 'srv-crm', label: 'CRM & Payroll', icon: 'badge' },
  { id: 'srv-ecommerce', label: 'E-Commerce', icon: 'shopping_bag' },
  { id: 'srv-ai', label: 'AI / ML', icon: 'memory' },
  { id: 'srv-cloud', label: 'Cloud / DevOps', icon: 'cloud' },
  { id: 'srv-uiux', label: 'UI / UX Design', icon: 'palette' },
  { id: 'srv-3d', label: '3D / WebGL', icon: 'view_in_ar' },
];

export default function ContactCyberForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    countryCode: '+91',
    phoneNum: '',
    companyName: '',
    services: ['Web Design'],
    budgetTier: '$10,000 – $40,000 USD',
    timeline: '1 - 3 months',
    preferredContact: 'Email',
    projectMessage: '',
    ndaAccepted: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitTime, setSubmitTime] = useState('');

  const handleServiceToggle = (label) => {
    setFormData((prev) => {
      const exists = prev.services.includes(label);
      const newServices = exists
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const now = new Date();
      setSubmitTime(now.toTimeString().split(' ')[0] + ' UTC');
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset fields
      setFormData({
        fullName: '',
        businessEmail: '',
        countryCode: '+91',
        phoneNum: '',
        companyName: '',
        services: ['Web Design'],
        budgetTier: '$10,000 – $40,000 USD',
        timeline: '1 - 3 months',
        preferredContact: 'Email',
        projectMessage: '',
        ndaAccepted: true,
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    }, 1200);
  };

  return (
    <div className="cyber-card p-4 sm:p-7 lg:p-9 shadow-xl shadow-gray-200/50 w-full max-w-full overflow-hidden">
      
      {/* Terminal Title Header Bar */}
      <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-7 border-b border-border-subtle gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400"></span>
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="font-mono text-xs font-bold text-text-main flex items-center gap-1 min-w-0 truncate">
            <span className="text-primary shrink-0">root@qcodes:</span>
            <span className="truncate text-[11px] sm:text-xs">/dispatch/inquiry_transmission.sh</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-text-muted bg-surface-dim px-3 py-1 rounded-lg border border-border-subtle shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
          <span>READY FOR DISPATCH</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 w-full max-w-full">
        
        {/* MODULE 01: Contact & Organization Credentials */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs font-bold text-text-main border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono font-extrabold">[01]</span>
              <span className="uppercase tracking-wider">IDENTITY_CREDENTIALS</span>
            </div>
            <span className="text-text-muted text-[11px] font-normal">// REQUIRED_FIELDS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main flex items-center justify-between" htmlFor="fullName">
                <span>NAME &amp; SURNAME</span>
                <span className="text-primary text-[10px]">*REQ</span>
              </label>
              <input
                className="cyber-input"
                id="fullName"
                name="fullName"
                required
                placeholder="Alexander Vance"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main flex items-center justify-between" htmlFor="businessEmail">
                <span>ENTERPRISE EMAIL</span>
                <span className="text-primary text-[10px]">*REQ</span>
              </label>
              <input
                className="cyber-input"
                id="businessEmail"
                name="businessEmail"
                required
                placeholder="alex@enterprise.io"
                type="email"
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main" htmlFor="phoneNum">
                DIAL_CODE &amp; PHONE
              </label>
              <div className="flex gap-2 min-w-0">
                <select
                  className="cyber-input !w-24 sm:!w-28 !px-1.5 sm:!px-2 text-xs shrink-0 bg-white cursor-pointer"
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
                <input
                  className="cyber-input flex-grow min-w-0"
                  id="phoneNum"
                  name="phoneNum"
                  placeholder="98765 43210"
                  type="tel"
                  value={formData.phoneNum}
                  onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main" htmlFor="companyName">
                ORGANIZATION / ENTITY
              </label>
              <input
                className="cyber-input"
                id="companyName"
                name="companyName"
                placeholder="Acme Technologies Inc."
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* MODULE 02: Technology Stack & Domain Selection */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs font-bold text-text-main border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono font-extrabold">[02]</span>
              <span className="uppercase tracking-wider">DOMAIN_SELECTION_MATRIX</span>
            </div>
            <span className="text-text-muted text-[11px] font-normal">// MULTI_SELECT</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {domainOptions.map((domain) => {
              const isChecked = formData.services.includes(domain.label);
              return (
                <div key={domain.id} className="min-w-0">
                  <input
                    type="checkbox"
                    id={domain.id}
                    checked={isChecked}
                    onChange={() => handleServiceToggle(domain.label)}
                    className="tech-pill-checkbox"
                  />
                  <label htmlFor={domain.id} className="tech-pill-label">
                    <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary shrink-0">{domain.icon}</span>
                    <span className="truncate">{domain.label}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* MODULE 03: Resource Allocation & Deployment Schedule */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs font-bold text-text-main border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono font-extrabold">[03]</span>
              <span className="uppercase tracking-wider">RESOURCE_ALLOCATION_TIER</span>
            </div>
            <span className="text-text-muted text-[11px] font-normal">// ESTIMATE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'budget-growth', label: '< $10,000 USD', desc: 'Sprint MVP / Rapid Solution' },
              { id: 'budget-scale', label: '$10,000 – $40,000 USD', desc: 'Full Product / Custom Platform' },
              { id: 'budget-ent', label: '$40,000+ USD', desc: 'Enterprise Scale Ecosystem' },
            ].map((budget) => {
              const isChecked = formData.budgetTier === budget.label;
              return (
                <div key={budget.id}>
                  <input
                    type="radio"
                    id={budget.id}
                    name="budgetTier"
                    checked={isChecked}
                    onChange={() => setFormData({ ...formData, budgetTier: budget.label })}
                    className="tech-radio"
                  />
                  <label htmlFor={budget.id} className="tech-radio-label">
                    <span className="tech-title font-mono text-xs font-bold text-text-main">{budget.label}</span>
                    <span className="font-sans text-[11px] text-text-muted">{budget.desc}</span>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main" htmlFor="timeline">
                TARGET_DEPLOYMENT_WINDOW
              </label>
              <select
                className="cyber-input bg-white cursor-pointer"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              >
                <option value="Immediate (1-4 weeks)">Immediate Sprint (1 – 4 Weeks)</option>
                <option value="1 - 3 months">Standard Engineering (1 – 3 Months)</option>
                <option value="3 - 6 months">Extensive Architecture (3 – 6 Months)</option>
                <option value="Flexible / Discovery Phase">Discovery &amp; Prototyping Phase</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold text-text-main" htmlFor="preferredContact">
                HANDSHAKE_PROTOCOL
              </label>
              <select
                className="cyber-input bg-white cursor-pointer"
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
              >
                <option value="Email">Official Encrypted Email</option>
                <option value="Phone Call">Direct Voice Link</option>
                <option value="Google Meet / Zoom">Video Architecture Review (Google Meet)</option>
                <option value="WhatsApp">WhatsApp Business Channel</option>
              </select>
            </div>
          </div>
        </div>

        {/* MODULE 04: Technical Specifications & Payload Manifest */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs font-bold text-text-main border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono font-extrabold">[04]</span>
              <span className="uppercase tracking-wider">PAYLOAD_SPECIFICATIONS</span>
            </div>
            <span className="text-primary text-[10px] font-mono">*REQUIRED</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <textarea
              className="cyber-input resize-none h-32"
              id="projectMessage"
              name="projectMessage"
              required
              placeholder="Outline product specs, architecture requirements, functional goals, or integrations needed..."
              value={formData.projectMessage}
              onChange={(e) => setFormData({ ...formData, projectMessage: e.target.value })}
            ></textarea>
            <div className="flex items-center justify-between font-mono text-[11px] text-text-muted px-1">
              <span>Include repository, Figma, or document links if available.</span>
              <span>{formData.projectMessage.length} / 2000 BYTES</span>
            </div>
          </div>
        </div>

        {/* MODULE 05: NDA Security & Transmission Button */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border-subtle">
          <label className="flex items-start gap-2.5 cursor-pointer font-mono text-xs text-text-muted leading-relaxed">
            <input
              type="checkbox"
              required
              checked={formData.ndaAccepted}
              onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
              className="accent-[#E21E4C] mt-0.5 rounded cursor-pointer"
            />
            <span>[SEC_POLICY]: Authorize Qcodes Infotech to process transmission packet under mutual enterprise NDA terms.</span>
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="material-symbols-outlined text-green-600 text-lg">lock_reset</span>
              <span>ENCRYPTION: AES_256_GCM • SSL_VALID</span>
            </div>

            <button
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold shadow-lg transition-all cursor-pointer group ${
                isSubmitting
                  ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                  : submitted
                  ? 'bg-green-600 text-white'
                  : 'bg-primary hover:bg-primary-dark text-white shadow-primary/30'
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting
                  ? '> ENCRYPTING & DISPATCHING...'
                  : submitted
                  ? '> PACKET_TRANSMITTED [200]'
                  : '> TRANSMIT_PACKET()'}
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                send
              </span>
            </button>
          </div>

          {/* Terminal Confirmation Banner */}
          {submitted && (
            <div className="p-5 rounded-xl bg-[#11141A] border border-green-500/40 text-white font-mono text-xs flex flex-col gap-2 shadow-xl mt-3 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span className="font-bold uppercase tracking-wider">TRANSMISSION_CONFIRMED [200 OK]</span>
                </div>
                <span className="text-gray-400 text-[10px]">TIME: {submitTime}</span>
              </div>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                Payload successfully transmitted to the Qcodes Infotech central engineering queue. A technical lead has been assigned and will initiate contact within 24 hours.
              </p>
              <div className="text-[10px] text-gray-500">
                <span>PACKET_HASH: 0x8F3C...79B2</span> | <span>STATUS: QUEUED_DISPATCH</span>
              </div>
            </div>
          )}
        </div>

      </form>
    </div>
  );
}
