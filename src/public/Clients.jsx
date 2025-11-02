export default function Clients() {
  const clients = ["HP", "Acer", "Dell", "IBM", "Huawei"];
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((c) => (
          <span key={c} className="text-gray-700 font-semibold">{c}</span>
        ))}
      </div>
    </section>
  );
}
