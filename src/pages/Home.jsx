import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  coffeeImg,
  cuisineImg,
  heroImg,
  lalibelaImg,
  semienImg,
} from "../utils";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* hero section  */}
        <section className="bg-black text-white py-20 sm:py-28">
          <div className="container px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="w-full max-w-[506px] flex flex-col gap-14 items-start">
                <h1 className="font-semibold text-6xl">
                  Embark on Your Ethiopian Adventure
                </h1>
                <p className="text-xl">
                  We specialize in providing unforgettable experiences in
                  Ethiopia, from breathtaking landscapes to rich cultural
                  heritage.
                </p>
                <button>
                  <Link
                    className="bg-white text-black px-6 py-3 rounded-xl"
                    to="/about"
                  >
                    Learn More
                  </Link>
                </button>
              </div>
              <div className="w-full max-w-[630px]">
                <img src={heroImg} alt="hero" />
              </div>
            </div>
            {/* second row  */}
            <div className="flex flex-col sm:flex-row justify-between py-16 sm:py-24">
              <div className="w-full max-w-[574px]">
                <img src={coffeeImg} alt="coffee" />
              </div>
              <div className="w-full max-w-[506px] flex flex-col gap-6 items-start">
                <h3 className="font-semibold text-2xl">01</h3>
                <p className="">
                  Immerse yourself in the ancient wonders of Lalibela.
                </p>
                <h3 className="font-semibold text-2xl">02</h3>
                <p className="">Trek through the stunning Simien Mountains.</p>
                <h3 className="font-semibold text-2xl">03</h3>
                <p className="">
                  Indulge in the flavors of traditional Ethiopian cuisine.
                </p>
              </div>
            </div>
            {/* 3rd row  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <img src={lalibelaImg} alt="lalibela" />
              </div>
              <div>
                <img src={semienImg} alt="semien mountain" />
              </div>
              <div>
                <img src={cuisineImg} alt="traditional cuisine" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
