import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import ecomImg from "../assets/ecom.jpg";
import webImg from "../assets/web.webp";
import portImg from "../assets/port.jpg";

const restaurantFeatures = [
  "AI Automation",
  "Real-time Monitoring",
  "Inventory Control",
  "Smart Reports",
  "Production Planning",
  "HR & Finance Modules",
];

const retailFeatures = [
  "FBR POS Integration",
  "PRA & Tax Compliance",
  "Quick Checkouts",
  "Sales Reporting",
  "Inventory Management",
  "Multi-branch Control",
];

const integrations = [
  {
    title: "FBR Integration",
    text: "Report sales for taxation with ease and build customer trust with FBR-approved POS solutions.",
    link: "/fbr-integration",
  },
  {
    title: "PRA Integration",
    text: "Punjab Revenue Authority compliance for retail and restaurant POS billing.",
    link: "/pra-integration",
  },
  {
    title: "Cloud POS System",
    text: "Quick checkouts, inventory, and reporting for retail and restaurants.",
    link: "/pos-system",
  },
  {
    title: "Tax Integration",
    text: "Complete tax, sales, and compliance in one integrated platform.",
    link: "/tax-integration",
  },
  {
    title: "Industrial ERP",
    text: "AI-powered ERP to automate production, inventory, HR and finance on one smart platform.",
    link: "/industrial-erp",
  },
  {
    title: "WhatsApp API",
    text: "Stay connected with customers through automated messages, offers and CRM updates.",
    link: "/whatsapp-api",
  },
  {
    title: "SCADA Systems",
    text: "Industrial monitoring and control for efficient factory and plant operations.",
    link: "/scada",
  },
  {
    title: "Web Development",
    text: "Modern, responsive websites and web apps built with the latest technologies.",
    link: "/web-development",
  },
  {
    title: "App Development",
    text: "Android and iOS applications tailored for your business workflows.",
    link: "/app-development",
  },
];

const testimonials = [
  {
    quote:
      "TeachKaam delivered an excellent ERP solution. Centralized management and reliable support made a real difference for our operations.",
    company: "Industrial Client",
  },
  {
    quote:
      "Their FBR POS integration helped us scale smoothly. Sales tracking, inventory and compliance are all in one place now.",
    company: "Retail Business",
  },
  {
    quote:
      "Professional team with great communication. Our web platform was delivered on time with outstanding quality.",
    company: "Digital Agency Partner",
  },
];

const blogPosts = [
  {
    title: "Why AI-Powered ERP Matters for Industry",
    date: "May 15, 2026",
    link: "/blog",
  },
  {
    title: "FBR & POS Integration: What Businesses Should Know",
    date: "May 8, 2026",
    link: "/blog",
  },
  {
    title: "Building Modern Web Apps with the MERN Stack",
    date: "April 28, 2026",
    link: "/blog",
  },
];

function Home() {
  return (
    <>
      {/* Hero — CISePOS-style navy gradient */}
      <section className="relative bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 text-white pt-36 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center pb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Pakistan&apos;s Leading Software Solutions Partner
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            TeachKaam is a leading software solutions company in Pakistan,
            delivering innovative ERP systems, POS solutions, FBR integrations,
            industrial automation, web development, and mobile applications. We
            help businesses streamline operations, improve productivity, and
            accelerate digital transformation through reliable, scalable, and
            cost-effective technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-brand-900 transition"
          >
            Free Consultation
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-8 flex justify-center pb-4">
          <img
            src={heroImg}
            alt="TeachKaam software dashboard"
            className="w-auto max-w-full max-h-[220px] sm:max-h-[260px] md:max-h-[300px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Wave divider */}
        <div className="relative mt-2">
          <svg
            viewBox="0 0 1440 120"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Software Solutions Provider in Pakistan
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At TeachKaam, we empower businesses with smart software solutions
            designed to simplify complex operations. From retail stores and
            restaurants to manufacturing industries and startups, our team
            develops customized ERP, POS, automation, web, and mobile solutions
            that drive efficiency, enhance customer experiences, and support
            long-term business growth.
          </p>
        </div>
      </section>

      {/* Industrial ERP block */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              TeachKaam Industrial ERP AI System
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              TeachKaam's AI-powered Industrial ERP system helps manufacturers
              and enterprises manage production, inventory, procurement, HR, and
              finance through a single intelligent platform. Gain real-time
              insights, automate workflows, and improve operational efficiency
              with advanced ERP technology.
            </p>
            <Link
              to="/industrial-erp"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded font-semibold hover:bg-brand-700 transition mb-8"
            >
              Learn More
            </Link>
            <ul className="grid grid-cols-2 gap-3 text-slate-700">
              {restaurantFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <img
              src={portImg}
              alt="ERP dashboard"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* POS / FBR block */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl p-4">
            <img
              src={ecomImg}
              alt="POS system"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Tax, PRA, POS & FBR Integration
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our cloud-based POS solutions are built for retailers,
              restaurants, and multi-branch businesses. With seamless FBR and
              PRA integration, inventory management, sales tracking, and
              real-time reporting, TeachKaam ensures smooth operations while
              maintaining complete compliance with tax regulations.
            </p>
            <Link
              to="/pos-system"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded font-semibold hover:bg-brand-700 transition mb-8"
            >
              Learn More
            </Link>
            <ul className="grid grid-cols-2 gap-3 text-slate-700">
              {retailFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Integrations grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            TeachKaam Integrations & Modules
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Cutting-edge modules to streamline operations, optimize stock, and
            maximize sales for your business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                <Link
                  to={item.link}
                  className="text-brand-600 font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-stop */}
      <section className="bg-brand-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            One-stop Solution for All Your Business Operations
          </h2>
          <p className="text-blue-100 mb-8">
            TeachKaam provides a complete ecosystem of software solutions
            including ERP, POS, FBR Integration, SCADA Systems, Web Development,
            Mobile Apps, and Business Automation Tools — everything your
            organization needs to operate efficiently and scale successfully.
          </p>
          <Link
            to="/services"
            className="inline-block border-2 border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-brand-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
            What Clients Say About Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We love hearing from our clients — their feedback keeps us going.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.company}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8"
              >
                <p className="text-5xl text-brand-600 leading-none mb-4">
                  &ldquo;
                </p>
                <p className="text-gray-700 mb-6 italic">{t.quote}</p>
                <p className="font-bold text-brand-700">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: ecomImg,
                title: "E-Commerce Platform",
                desc: "Payment integration & admin panel.",
              },
              {
                img: webImg,
                title: "Business Website",
                desc: "Corporate site with CMS.",
              },
              {
                img: portImg,
                title: "ERP Dashboard",
                desc: "Industrial management system.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="text-brand-600 font-semibold hover:underline"
            >
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Our Recent Blogs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-40 bg-gradient-to-br from-brand-700 to-brand-500" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                  <Link to={post.link} className="text-brand-600 font-semibold">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 py-20" id="contact">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
            Contact Us for Solution Details
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Fill in the form below and our team will get back to you shortly.
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
              placeholder="My message is about"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-brand-600"
            />
            <textarea
              rows="4"
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Your Business to New Heights?
          </h2>
          <p className="text-blue-200 mb-10">
            Get in touch with our expert team today. We&apos;ll help you choose
            the right ERP, POS, or custom software for your needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-blue-200 text-sm mb-4">
                Talk to our experts. No commitment required.
              </p>
              <Link
                to="/contact"
                className="inline-block border border-white px-5 py-2 rounded hover:bg-white hover:text-brand-900 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">View Our Services</h3>
              <p className="text-blue-200 text-sm mb-4">
                Explore ERP, POS, SCADA, web and app development.
              </p>
              <Link
                to="/services"
                className="inline-block border border-white px-5 py-2 rounded hover:bg-white hover:text-brand-900 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Trusted by Businesses Across Pakistan
          </h2>
          <p className="text-gray-600 mb-8">
            Trusted by businesses across Pakistan, TeachKaam delivers technology
            solutions that improve efficiency, reduce operational costs, and
            support digital growth. Our commitment to innovation and customer
            success makes us a reliable technology partner for organizations of
            all sizes.
          </p>
          <p className="text-brand-700 font-semibold">
            FBR POS · ERP · SCADA · Web & Mobile Apps
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
