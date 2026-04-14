import React, { useRef, useState } from 'react';
import { Briefcase, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export function CareersForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVacancySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS credentials are not set in the .env file.");
      return;
    }

    setIsSubmitting(true);

    // Using sendForm to support file attachments automatically!
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        toast.success("Application sent safely! We will review your resume and contact you.");
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
    <div id="careers" className="form-wrapper">
      <div className="form-header">
        <div className="form-icon">
          <Briefcase size={28} />
        </div>
        <div>
          <h3>Join Our Team</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Apply for open vacancies</p>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleVacancySubmit} encType="multipart/form-data">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            name="from_name"
            className="form-input" 
            placeholder="John Doe" 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            name="from_email"
            className="form-input" 
            placeholder="john@example.com" 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            className="form-input" 
            placeholder="+1 234 567 8900" 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Role Applied For</label>
          <select 
            name="role"
            className="form-input"
            defaultValue=""
            required
          >
            <option value="" disabled>Select a role...</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Upload Resume (PDF only)</label>
          <input 
            type="file" 
            name="resume"
            accept=".pdf,application/pdf"
            className="form-input" 
            style={{ padding: '0.625rem 1rem' }}
            required 
          />
        </div>
        <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : 'Submit Application'} 
          {!isSubmitting && <Send size={16} />}
        </button>
      </form>
    </div>
  );
}
