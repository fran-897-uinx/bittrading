export default function Technology() {
  return (
    <section
      className="relative py-20 text-white text-center bg-cover bg-center bg-gray-700"
      style={{
        backgroundImage: "url('/techbg.jpg')", // 🔹 Replace with your image path
      }}
    >
      {/* Transparent Text */}
      <h2
        className="text-[80px] md:text-[140px] font-extrabold uppercase leading-none mb-6"
        style={{
          backgroundImage: "url('/plant.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Technology
      </h2>

      <p className="max-w-3xl mx-auto text-indigo-100 text-lg mb-10">
        We stay ahead of the curve with cutting-edge solutions for AI, Cloud,
        and Automation.
      </p>

      {/* Content Grid */}
      <main className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-left items-center">
        {/* Left Column */}
        <div>
          <h6 className="uppercase text-indigo-200 font-semibold mb-3">
            Technology Growth
          </h6>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-white">
            We’re the standout experts in the tech business.
          </h1>
        </div>

        {/* Middle Column */}
        <div>
          <p className="text-indigo-100 leading-relaxed">
            Our engineering teams deliver highly scalable, future-proof
            technology solutions that help businesses accelerate growth and stay
            competitive in the digital world.
          </p>
        </div>

        {/* Right Column - Progress */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <div>
            <h4 className="font-semibold mb-3">.NET</h4>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-green-400 h-full w-[90%] transition-all"></div>
            </div>
          </div>

          {/* Duplicate Right Column for symmetry */}
          <div>
            <h4 className="font-semibold mb-3">PHP</h4>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-green-400 h-full w-[95%] transition-all"></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">React Native</h4>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-green-400 h-full w-[90%] transition-all"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
