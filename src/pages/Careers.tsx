import { CareersForm } from '../components/CareersForm';

export function Careers() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <section className="section" style={{ background: 'var(--bg-secondary)', minHeight: '100%' }}>
        <div className="section-header">
          <h2>Careers at TECHNOCRAFTS</h2>
          <p>Join our team of innovators and shape the future of IT.</p>
        </div>

        <div className="forms-container" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
          <CareersForm />
        </div>
      </section>
    </div>
  );
}
