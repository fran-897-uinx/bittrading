export default function FAQ() {
  const faqs = [
    { q: "What services do you provide?", a: "We provide IT consulting, cybersecurity, and cloud solutions." },
    { q: "Where are you located?", a: "We operate globally with headquarters in Lagos, Nigeria." },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">FAQ</h2>
        {faqs.map((f, i) => (
          <div key={i} className="border-b py-4">
            <h3 className="font-semibold text-lg">{f.q}</h3>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
