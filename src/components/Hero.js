export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Online <span className="text-blue-600">Book Store</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Find and explore your favorite books. Discover new worlds, learn new skills, and get lost in stories that stay with you forever.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#books"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-blue-200"
          >
            View Books
          </a>
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
