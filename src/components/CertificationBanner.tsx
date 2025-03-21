
import React from 'react';

const certifications = [
  { name: "Certified Organic", description: "All products certified organic" },
  { name: "Non-GMO Verified", description: "Free from genetic modification" },
  { name: "Sustainably Grown", description: "Eco-friendly cultivation practices" },
  { name: "Laboratory Tested", description: "Verified purity and potency" }
];

const CertificationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-luxe-cream dark:bg-luxe-black/20">
      <div className="luxe-container">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 block">
            Our Standards
          </span>
          <h2 className="luxe-heading text-3xl md:text-4xl mb-4">
            Certified Excellence
          </h2>
          <p className="text-luxe-black/70 dark:text-luxe-white/70 max-w-2xl mx-auto">
            Our commitment to quality is backed by rigorous certifications and standards that ensure premium products.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className="border border-luxe-black/10 dark:border-luxe-white/10 rounded-xl p-6 text-center hover:bg-luxe-white dark:hover:bg-luxe-black/40 transition-colors duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${150 * (index + 1)}ms`, animationFillMode: 'forwards' } as React.CSSProperties}
            >
              <div className="h-12 flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-luxe-gold/20 flex items-center justify-center">
                  <span className="text-luxe-gold">★</span>
                </div>
              </div>
              <h3 className="font-medium mb-2">{cert.name}</h3>
              <p className="text-sm text-luxe-black/70 dark:text-luxe-white/70">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;
