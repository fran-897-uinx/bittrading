export default function CaseStudies() {
  const cases = [
    {
      title: "Modern IT Infrastructure",
      img: "/concept.jpg",
      dec: "We helped a global enterprise upgrade its legacy infrastructure to a modern cloud-native environment — increasing scalability and cutting costs by 40%.",
    },
    {
      title: "Digital Banking Solutions",
      img: "/plant.jpg",
      dec: "Developed a secure and user-friendly mobile banking app that supports millions of users daily with real-time transaction analytics.",
    },
    {
      title: "Insurance Automation",
      img: "/profit.jpg",
      dec: "Automated claims processing and data verification, improving workflow efficiency by 70% for a top-tier insurance provider.",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h6 className="text-indigo-600 font-semibold text-sm uppercase">
          Recently Completed Work
        </h6>
        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Our Case Studies
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group"
              style={{
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
                <p className="text-sm text-gray-200">{c.dec}</p>
              </div>

              {/* Title always visible */}
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg group-hover:opacity-0 transition duration-500">
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
