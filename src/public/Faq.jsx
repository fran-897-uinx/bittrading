"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What services do you provide?",
      a: "We provide IT consulting, cybersecurity, and cloud solutions.",
    },
    {
      q: "Where are you located?",
      a: "We operate globally with headquarters in Lagos, Nigeria.",
    },
    {
      q: "How can I get in touch?",
      a: "You can contact us via our website contact form or email support@orimark.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // remove ": number | null"

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-600">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden transition-shadow">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 text-left"
              >
                <span className="font-semibold text-lg">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="p-4 text-gray-700 bg-white border-t">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
