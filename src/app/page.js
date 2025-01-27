import About from '../components/About';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="bg-blue-600 text-white py-20">
        <div className="text-center max-w-6xl mx-auto font-poppins">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm Your Name</h1>
          <p className="text-xl mb-8">A passionate developer building amazing projects.</p>
          <a
            href="#contact"
            className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <About />
      <Contact />
    </div>
  );
}
