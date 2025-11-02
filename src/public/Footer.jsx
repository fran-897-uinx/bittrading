export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-indigo-400 font-bold text-xl mb-3">Orimark Technologies</h2>
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Orimark Technologies. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
