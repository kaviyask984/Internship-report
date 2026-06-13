const SAMPLE_BOOKS = [
  {
    id: 1,
    title: "The Hidden Path",
    price: "$19.99",
    image: "/book1.png",
    category: "Adventure"
  },
  {
    id: 2,
    title: "Mastering AI",
    price: "$29.99",
    image: "/book2.png",
    category: "Technology"
  },
  {
    id: 3,
    title: "The Art of Mindset",
    price: "$14.99",
    image: "/book3.png",
    category: "Self-Help"
  },
  {
    id: 4,
    title: "Midnight Echoes",
    price: "$22.99",
    image: "/book4.png",
    category: "Mystery"
  }
];

export default function Books() {
  return (
    <section id="books" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAMPLE_BOOKS.map((book) => (
            <div key={book.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full shadow-sm">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{book.price}</span>
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
