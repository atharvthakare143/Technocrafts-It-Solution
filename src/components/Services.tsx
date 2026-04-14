import { Code2, Smartphone, Cloud, Database, ShieldCheck, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Custom Software Development",
    description: "Tailor-made software applications built with modern architectures for optimal performance and scalability."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    description: "Engaging iOS and Android applications that deliver seamless user experiences and high engagement rates."
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Solutions",
    description: "Secure and resilient cloud infrastructure design, migration, and management services to reduce operational costs."
  },
  {
    icon: <Database size={24} />,
    title: "Data Analytics",
    description: "Unlock actionable insights from your data using advanced analytics and visualization toolsets."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation to protect your digital assets against modern threats."
  },
  {
    icon: <Monitor size={24} />,
    title: "UI/UX Design",
    description: "User-centered interface design that ensures your products are intuitive, beautiful, and easy to use."
  }
];

export function Services() {
  return (
    <section id="services" className="section bg-secondary">
      <div className="section-header">
        <h2>Our Expertise</h2>
        <p>Comprehensive IT services designed to transform your ideas into reality and accelerate business growth.</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
