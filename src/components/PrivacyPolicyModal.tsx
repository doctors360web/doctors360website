import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-primary-500">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-brand leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-primary-500 mb-2">Doctors360 Medical Centre — Comprehensive Privacy Policy</h3>
            <p><strong>Effective Date:</strong> 28 July 2026</p>
            <p><strong>Website:</strong> www.doctors360.org</p>
            <p className="mt-3">This Privacy Policy describes how Doctors360 Medical Centre collects, uses, stores, shares, and protects personal information when providing healthcare services and operating its website.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">1. Our Commitment</h4>
            <p>Doctors360 Medical Centre is committed to protecting the privacy, dignity and confidentiality of every patient. We recognise that health information is highly sensitive and maintain strict safeguards to ensure it is handled responsibly.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">2. Scope</h4>
            <p>This policy applies to all patients, website visitors, caregivers, employees, contractors, partners and anyone using our online or in-person healthcare services.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">3. Information We Collect</h4>
            <p>Personal details, identification information, contact details, medical history, consultation notes, laboratory results, prescriptions, imaging reports, payment information, appointment history, website usage information, cookies and communications.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">4. Why We Collect Information</h4>
            <p>We collect information to provide safe and effective healthcare, verify identity, schedule appointments, maintain medical records, dispense medicines, perform laboratory investigations, deliver preventive health services, process payments, improve our services and comply with legal obligations.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">5. Patient Consent</h4>
            <p>By registering with Doctors360 or using our services, you consent to the collection and use of your personal information for the purposes described in this policy. Where required, we will seek separate consent before using information for research, marketing or other secondary purposes.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">6. Data Protection and Privacy in South Sudan</h4>
            <p>Doctors360 is committed to protecting personal information in accordance with internationally recognised privacy principles and any applicable laws, regulations and Ministry of Health guidance within the Republic of South Sudan. We process information lawfully, fairly and transparently, collect only what is necessary, keep information accurate, restrict access to authorised personnel, implement appropriate technical and organisational safeguards, retain information only as long as necessary and respect patients' rights to access and request correction of their information where applicable.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">7. Medical Confidentiality</h4>
            <p>All patient records are confidential. Information is accessed only by authorised healthcare professionals and staff involved in your care or those with a legitimate operational need.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">8. Information Sharing</h4>
            <p>We do not sell personal information. Information may be shared only with laboratories, pharmacies, referral facilities, insurers (where authorised), emergency responders, regulatory authorities when legally required, or other parties with your consent.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">9. Website Cookies</h4>
            <p>Our website uses cookies and similar technologies to improve user experience, understand website performance and enhance security. You may adjust your browser settings to manage cookies.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">10. Security Measures</h4>
            <p>We use password-protected systems, role-based access controls, encrypted communications where appropriate, secure backups, staff confidentiality agreements and ongoing monitoring to safeguard information.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">11. Telemedicine and Digital Services</h4>
            <p>When telemedicine or electronic consultations are provided, Doctors360 takes reasonable steps to protect the confidentiality of information transmitted electronically. Patients should also protect their own devices and internet connections.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">12. Children's Privacy</h4>
            <p>Information relating to children is collected only with the consent of a parent or legal guardian except where otherwise permitted by law or necessary in an emergency.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">13. Data Retention</h4>
            <p>Medical records are retained for the period required by applicable healthcare laws, professional standards and operational needs before being securely archived or destroyed.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">14. Your Rights</h4>
            <p>You may request access to your information, request corrections, withdraw consent where legally applicable, request copies of your records, or lodge a complaint regarding the handling of your information.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">15. Changes to this Policy</h4>
            <p>We may update this policy periodically. The latest version will always be published on www.doctors360.org.</p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500 mb-1">16. Contact Us</h4>
            <p>Doctors360 Medical Centre<br />Website: www.doctors360.org<br />Email: info@doctors360.org</p>
            <p className="mt-2">If you have questions or concerns regarding this Privacy Policy, please contact us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
