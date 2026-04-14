import { ClientForm } from '../components/ClientForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', background: 'var(--bg-secondary)' }}>
      <section className="section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with us for your next big project or any IT inquiries.</p>
        </div>

        <div className="forms-container" style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'start' }}>
          
          {/* Contact Information Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', background: 'var(--surface)', borderRadius: '1.5rem', border: '1px solid var(--border-color)' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Let's Talk</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We're always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '0.8rem', color: 'var(--accent-blue)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Email Us</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>hello@technocrafts.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '0.8rem', color: 'var(--accent-blue)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Call Us</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>+1 (555) 123-4567</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '0.8rem', color: 'var(--accent-blue)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Our Location</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Tech District, Innovation City<br/>Silicon Valley, CA 94000</p>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div>
            <ClientForm />
          </div>
        </div>
      </section>
    </div>
  );
}
