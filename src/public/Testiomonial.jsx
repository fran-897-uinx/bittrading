export default function Testimonials() {
  const reviews = [
    { name: "Sarah", text: "Amazing IT support and strategy guidance!" },
    { name: "John", text: "Reliable and innovative tech partner." },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-10">What They’re Saying</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-700 italic mb-3">“{r.text}”</p>
            <h4 className="font-bold text-indigo-600">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
