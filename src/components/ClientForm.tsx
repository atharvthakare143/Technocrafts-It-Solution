import React, { useRef, useState } from 'react';
import { Send, ChevronRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export function ClientForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS credentials are not set in the .env file.");
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        toast.success("Requirements submitted successfully! Our team will contact you shortly.");
        formRef.current?.reset();
      }, (error) => {
        console.error('FAILED...', error.text);
        toast.error('Something went wrong, please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="form-wrapper">
      <div className="form-header">
        <div className="form-icon">
          <Send size={28} />
        </div>
        <div>
          <h3>Start a Project</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Submit your requirements</p>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleProjectSubmit}>
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input 
            type="text"
            name="from_name"
            className="form-input" 
            placeholder="Jane Smith" 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Company Name</label>
          <input 
            type="text" 
            name="company"
            className="form-input" 
            placeholder="Acme Corp" 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            name="from_email"
            className="form-input" 
            placeholder="jane@acmecorp.com" 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Project Requirements</label>
          <textarea 
            name="requirements"
            className="form-input" 
            placeholder="Tell us about your project goals, scope, and timeline..." 
            required 
          />
        </div>
        <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : 'Send Requirements'} 
          {!isSubmitting && <ChevronRight size={16} />}
        </button>
      </form>
    </div>
  );
}
