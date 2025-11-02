export default function Introduction() {
  const introduct = {
    bgimg: "/plant.jpg",
    subcontent:
      "Orimark Technologies provides the best IT solutions powered by experts.",
  };

  const writeup = {
    title: "Company Introduction",
    boldtitle: "Orimark Technologies is your trusted IT service company",
    content:
      "Orimark Technology is a renowned software development and consulting company in Nigeria. We have emerged as proud technology partners for indigenous companies as well as businesses across the globe. We deliver affordable end-to-end solutions to SMBs and large enterprises alike.",
    subcontent:
      "Our mission is to empower organizations through innovative digital transformation, helping them leverage technology to achieve growth and operational efficiency.",
  };

  return (
    <main id="introduction" className="bg-white py-20">
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6">
        
        {/* --- Left Image Section --- */}
        <div
          className="relative h-[400px] md:h-[500px] rounded-2xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${introduct.bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 w-70 h-50 md:top-80 top-40 flex items-center justify-start bg-green-700">
            <p className="text-white text-lg md:text-xl font-semibold px-6 text-center">
              {introduct.subcontent}
            </p>
          </div>
        </div>

        {/* --- Right Text Section --- */}
        <div className="text-start space-y-5">
          <h6 className="uppercase text-indigo-600 font-semibold tracking-wider">
            {writeup.title}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            {writeup.boldtitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">{writeup.content}</p>
          <p className="text-gray-600 leading-relaxed">{writeup.subcontent}</p>

          {/* <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Learn More
          </button> */}
        </div>
      </section>
    </main>
  );
}
