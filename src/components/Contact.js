export default function Contact() {
    return (
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Me</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-md" rows="6" required></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  