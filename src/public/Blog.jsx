export default function Blogs() {
  const blogs = [
    { title: "How AI Changes Business", date: "Oct 12, 2025" },
    { title: "Cloud Security Practices", date: "Oct 9, 2025" },
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10">Recent Blogs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white shadow p-6 rounded-lg">
              <h3 className="font-bold mb-2">{b.title}</h3>
              <p className="text-gray-500">{b.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
