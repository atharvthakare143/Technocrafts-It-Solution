
export function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
      <section className="section" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
        <h1 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to <strong>TechnoCrafts IT Solution</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. The Data We Collect About You</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          We may collect, use, store and transfer different kinds of personal data about you, including:
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Personal Data</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, to provide our technical services, and where it is necessary for our legitimate interests.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          If you have any questions about this privacy policy or our privacy practices, please contact us at: <br /><br />
          <strong>TechnoCrafts IT Solution</strong> <br />
          Email: technocraftsitsolution@gmail.com <br />
          Phone: +91 9373052998
        </p>
      </section>
    </div>
  );
}
