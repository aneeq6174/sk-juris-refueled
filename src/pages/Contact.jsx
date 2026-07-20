import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

function FormField({ label, type = 'text', name, required, rows, ...props }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const isTextarea = rows !== undefined;

  return (
    <div className="form-field mb-6">
      {isTextarea ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (required && !e.target.value) {
              setError('This field is required');
            } else {
              setError('');
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(value.length > 0);
            if (required && !value) {
              setError('This field is required');
            }
          }}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none resize-none ${
            error 
              ? 'border-red-500 shake' 
              : focused || value 
                ? 'border-[color:var(--teal-accent)] shadow-[0_0_0_3px_rgba(45,139,143,0.1)]' 
                : 'border-slate-300'
          }`}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (type === 'email' && e.target.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
              setError('Please enter a valid email address');
            } else if (required && !e.target.value) {
              setError('This field is required');
            } else {
              setError('');
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(value.length > 0);
            if (type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              setError('Please enter a valid email address');
            } else if (required && !value) {
              setError('This field is required');
            }
          }}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
            error 
              ? 'border-red-500 shake' 
              : focused || value 
                ? 'border-[color:var(--teal-accent)] shadow-[0_0_0_3px_rgba(45,139,143,0.1)]' 
                : 'border-slate-300'
          }`}
          required={required}
          {...props}
        />
      )}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          focused || value
            ? 'top-0 left-3 text-xs text-[color:var(--teal-accent)] bg-white px-2 -translate-y-1/2'
            : isTextarea ? 'top-3 text-slate-500' : 'top-3 text-slate-500'
        }`}
      >
        {label} {required && '*'}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="container-x section">
      <AnimatedSection>
        <h1 className="h1 font-[var(--font-heading)]">Contact Us</h1>
        <p className="lead mt-3">Let's discuss how we can help with your legal needs.</p>
      </AnimatedSection>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <AnimatedSection delay={100}>
          <form className="card p-6 lg:p-8" onSubmit={(e) => e.preventDefault()}>
            <FormField label="Name" name="name" required />
            <FormField label="Email" type="email" name="email" required />
            <FormField label="Message" name="message" rows={5} required />
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card p-6 lg:p-8 space-y-6">
            <div>
              <h3 className="font-semibold font-[var(--font-accent)] text-lg">Offices</h3>
              <div className="mt-4 grid gap-4 text-sm text-slate-600">
                <div className="p-4 rounded-lg bg-[color:var(--base)] hover:bg-[color:var(--light-gray)] transition-colors duration-300">
                  <p className="font-medium text-[color:var(--navy-dark)] mb-1">Lahore Office</p>
                  <p className="mt-1">100-C GECHS, Model Town Link Road, Lahore</p>
                </div>
                <div className="p-4 rounded-lg bg-[color:var(--base)] hover:bg-[color:var(--light-gray)] transition-colors duration-300">
                  <p className="font-medium text-[color:var(--navy-dark)] mb-1">Islamabad Office</p>
                  <p className="mt-1">Office No. 104, LLP, 1st floor, Green Trust Tower, Blue Area, Islamabad</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="p-3 rounded-lg bg-[color:var(--base)] hover:text-[color:var(--teal-accent)] transition-colors duration-300">
                <span className="font-medium">Phone:</span> +92 3004931839
              </div>
              <div className="p-3 rounded-lg bg-[color:var(--base)] hover:text-[color:var(--teal-accent)] transition-colors duration-300">
                <span className="font-medium">Email:</span> skjurisco@gmail.com
              </div>
              <div className="p-3 rounded-lg bg-[color:var(--base)] hover:text-[color:var(--teal-accent)] transition-colors duration-300">
                <span className="font-medium">Website:</span> www.skjuris.com
              </div>
              <div className="p-3 rounded-lg bg-[color:var(--base)]">
                <span className="font-medium">Hours:</span> Mon–Fri, 9am–6pm
              </div>
            </div>
            <div className="h-48 rounded-lg bg-gradient-to-br from-[color:var(--navy-dark)]/10 to-[color:var(--teal-accent)]/10 grid place-content-center text-slate-500 border-2 border-dashed border-slate-300">
              Map Placeholder (Lahore & Islamabad)
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


