export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} My Portfolio</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/fuzailayaz" target="_blank" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fuzailayaz/" target="_blank" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:mdfuzailayaz95@gmail.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
      </footer>
    );
  }
  