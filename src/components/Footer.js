export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            BookStore
          </span>
          <p className="mt-2 text-gray-500">Bringing stories to your doorstep.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-8 text-gray-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BookStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
