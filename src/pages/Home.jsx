import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Truck, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/equipment/limit/6`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const slides = [
    {
      title: "Gear Up for Championship Glory",
      subtitle: "Discover high-grade professional sports equipment engineered for endurance.",
      bg: "https://images.unsplash.com/photo-1601039834076-c41cf1766d4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Dominate Every Court & Pitch",
      subtitle: "Unmatched quality gear from premier international athletic brands.",
      bg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200"
    },
    {
      title: "Custom Accessories for Elite Athletes",
      subtitle: "Personalize your bats, rackets, and training gear to fit your exact style.",
      bg: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200"
    }
  ];

  const categories = [
    { name: "Cricket", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400" },
    { name: "Football", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400" },
    { name: "Tennis", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400" },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner Slider */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[500px] sm:h-[600px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div 
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${slide.bg})` }}
            >
              <div className="text-center px-4 max-w-3xl">
                <Slide direction="down">
                  <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">{slide.title}</h1>
                </Slide>
                <Fade delay={300}>
                  <p className="text-slate-300 text-lg mb-8">{slide.subtitle}</p>
                  <Link to="/all-equipment" className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition">
                    Explore Equipment
                  </Link>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 border-l-4 border-emerald-500 pl-4">Sports Disciplines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl h-48 border border-slate-800">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                <span className="text-xl font-bold text-white">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 border-l-4 border-emerald-500 pl-4">Featured Accessories</h2>
            <p className="text-slate-400 text-sm mt-1">Top trending products selected for high endurance sports</p>
          </div>
          <Link to="/all-equipment" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item._id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <img src={item.image} alt={item.itemName} className="w-full h-48 object-cover rounded-xl mb-4" />
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">{item.categoryName}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2">{item.itemName}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mt-1">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-white">${item.price}</span>
                  <div className="flex items-center text-amber-400 text-sm mt-0.5">
                    <Star className="w-4 h-4 fill-amber-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <Link to={`/equipment/${item._id}`} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-semibold transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section 1: Why Choose Us */}
      <section className="bg-slate-900 border-y border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">100% Authentic Quality</h3>
              <p className="text-slate-400 text-sm">We direct-source all accessories directly from authenticated manufacturers.</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Express Delivery</h3>
              <p className="text-slate-400 text-sm">Lightning-fast dispatch so you never miss a match or training session.</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Custom Gear Tuning</h3>
              <p className="text-slate-400 text-sm">Get custom grips, protective coating, and strings installed by our experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Athlete Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-cyan-950/50 rounded-3xl p-8 border border-slate-800 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Join over 25,000 Professional Athletes</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Subscribe to get insider early access to rare limited edition sports drops and exclusive member discount codes.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input type="email" placeholder="Enter your email address" className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 flex-1 focus:outline-none focus:border-emerald-500" />
            <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;