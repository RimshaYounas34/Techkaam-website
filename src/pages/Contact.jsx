function Contact() {
  return (
    <section className="bg-gray-50 py-24 min-h-screen pt-36">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          For business inquiries about ERP, POS, FBR integration or custom
          software — send us a message.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
          />
          <textarea
            rows="5"
            placeholder="Describe your project"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
          />
          <button
            type="button"
            className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+92 300 1234567</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@teachkaam.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Faisalabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
