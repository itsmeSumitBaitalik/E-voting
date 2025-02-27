import { useEffect } from "react";
import { ArrowRight, Zap, Leaf, Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import img from "./img/voteindia.png";
import Navbar from "./components/Navbar";

const Landingpage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-up, .stagger-fade").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { id: 1, title: "Fast", desc: "Push the industry forward with cutting-edge features." },
    { id: 2, title: "Easy", desc: "Making tools for processes simple to manage." },
  ];

  const faqs = ["What is Product?", "Is there a trial?", "Do I need to code?"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-white to-green-200">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-4 text-center">
        <div className="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">VoteIndia.</h1>
          <div className="bg-gray-100 w-full aspect-video rounded-lg mb-8">
            <img className="w-full rounded-lg" src={img} alt="VoteIndia" />
          </div>
          <p className="text-gray-600 mb-6">Go from design to site with 5 years top-rated development team.</p>
          <Link to="/home" className="bg-[#046A38] text-white px-6 py-3 rounded-full hover:bg-green-900 transition inline-block">
            Get Started
          </Link>
        </div>

        <div className="stagger-fade mt-12 flex justify-center gap-8">
          {[Zap, Leaf, Shield, ArrowRight].map((Icon, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-full">
              <Icon className="w-6 h-6 text-gray-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="space-y-4 fade-up bg-[#FF671F] focus:ring-orange-50 rounded-lg p-4 hover:bg-orange-600 transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p className="text-black">{feature.desc}</p>
            <button className="flex items-center text-sm font-semibold hover:opacity-80">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8 fade-up">FAQ</h2>
        <div className="space-y-4 stagger-fade">
          {faqs.map((question, index) => (
            <div key={index} className="p-4 bg-[#FF671F] focus:ring-orange-50 rounded-lg flex justify-between items-center cursor-pointer hover:bg-orange-600">
              <span>{question}</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 text-center fade-up">
        <h2 className="text-3xl font-bold mb-6">Sign up today.</h2>
        <Link to="/home">
          <button className="bg-[#046A38] text-white px-6 py-3 rounded-full hover:bg-green-900 transition">
            Get Started
          </button>
        </Link>
      </section>

      <footer className="border-t border-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center fade-up">
          <span className="text-sm text-gray-500">© 2025 VoteIndia.</span>
          <span className="text-sm text-gray-500">Made with ❤️</span>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
