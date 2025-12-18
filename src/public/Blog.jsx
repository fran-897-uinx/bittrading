"use client";

export default function Blogs() {
  const blogs = [
    {
      image: "/blog1.jpg",
      title: "How AI Changes Business",
      date: "Oct 12, 2025",
      desc: "Explore the transformative impact of AI on modern businesses, from automation to enhanced customer experiences.",
    },
    {
      image: "/blog2.jpg",
      title: "Cloud Security Practices",
      date: "Oct 9, 2025",
      desc: "Discover best practices for securing your cloud infrastructure and protecting sensitive data in a digital-first world.",
    },
    {
      image: "/blog3.jpg",
      title: "The Future of Remote Work",
      date: "Oct 5, 2025",
      desc: "Learn how remote work trends are reshaping company culture, productivity, and technology adoption worldwide.",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-600">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h6 className="text-indigo-700 font-bold text-sm capitalize mb-3">
          what's happening
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Recent Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <div
              key={b.title}
              className="bg-white shadow p-6 rounded-lg text-start hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="font-light mb-4">{b.desc}</p>
              <p className="text-gray-500 mb-2">{b.date}</p>
              <a
                href="#"
                className="text-indigo-600 hover:underline font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
