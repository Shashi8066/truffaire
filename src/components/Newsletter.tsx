
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-luxe-black/5 dark:bg-luxe-white/5" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      
      <div className="luxe-container relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 inline-block">
            Stay Connected
          </span>
          <h2 className="luxe-heading text-3xl md:text-4xl mb-4">
            Join Our Community
          </h2>
          <p className="text-luxe-black/70 dark:text-luxe-white/70 mb-8">
            Subscribe to receive exclusive offers, cultivation insights, and early access to limited harvests.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-luxe-black/10 dark:border-luxe-white/10 bg-luxe-white dark:bg-luxe-black focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
              required
            />
            <button 
              type="submit"
              className="luxe-button luxe-button-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-luxe-green dark:text-luxe-gold animate-fade-in">
              Thank you for subscribing!
            </div>
          )}
          
          <p className="text-xs text-luxe-black/50 dark:text-luxe-white/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
