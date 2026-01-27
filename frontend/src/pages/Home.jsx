import React from 'react';
import coverPic from '../assets/coverpic.png';
import footerImage from '../assets/footerImage.jpeg';
import cleanImage from '../assets/clean.png';
import pollutionImage from '../assets/pollution.png';
import deadImage from '../assets/dead.png';

const Home = () => {

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
      text: "Human activities are pushing countless species toward extinction"
    },
    {
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80",
      text: "The average person consumes nearly a credit card's worth of microplastics every week through food, water, and air"
    },
    {
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      text: "More deaths result from air pollution annually than from war and violence combined"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src={coverPic}
          alt="Home page cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.6) 20%, transparent 90%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-6 pt-[17vh] pl-20 max-w-3xl">
          <div className="border-b-2 border-l-2 border-yellow-600 w-fit px-3 py-1">
            <h5 className="text-white font-bold tracking-widest text-sm">ACT NOW</h5>
          </div>

          <h1 className="text-white text-4xl font-bold leading-tight tracking-wide">
            This Earth Season, stand<br />
            with nature and restore<br />
            a planet rapidly losing its<br />
            balance
          </h1>

          <button className="mt-4 w-fit px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold tracking-wider text-sm transition">
            Get Started →
          </button>
        </div>

        {/* ================= SEE MORE STRIP ================= */}
        <div className="absolute -bottom-32 left-0 right-0 z-10 px-20">
          <div className="flex items-center gap-6 mb-6">
            <h5 className="text-white font-bold text-sm tracking-wider">SEE MORE</h5>
            <div className="flex-1 h-[1px] bg-white/50" />
          </div>

          <div className="flex gap-4 overflow-hidden">
            {[
              { img: pollutionImage, text: "Human activities are pushing countless species toward extinction" },
              { img: cleanImage, text: "The average person consumes nearly a credit card's worth of microplastics every week through food, water, and air" },
              { img: deadImage, text: "Rising sea levels threaten coastal communities" }
            ].map((item, i) => (
              <div key={i} className="bg-white flex-shrink-0 w-64 overflow-hidden shadow-lg">
                <img
                  src={item.img}
                  alt={`preview-${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPACER ================= */}
      <div className="h-64 bg-white"></div>

      {/* ================= IMPACT STATS SECTION ================= */}
      <section className="relative h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200"
          alt="Environmental workers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-around px-20">
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">69 k+</h2>
            <p className="text-xl">Trees Planted</p>
          </div>
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">8 +</h2>
            <p className="text-xl">Rivers Cleaned</p>
          </div>
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">467kg +</h2>
            <p className="text-xl">Trash Picked</p>
          </div>
        </div>
      </section>

      {/* ================= FULL FOREST IMAGE ================= */}
      <section className="w-full h-[900px]">
        <img
          src={footerImage}
          alt="Misty forest"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oswald:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default Home;