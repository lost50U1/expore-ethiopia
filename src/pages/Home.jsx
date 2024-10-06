import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  addisImg,
  avatar2Img,
  avatarImg,
  coffeeImg,
  cuisineImg,
  folderImg,
  gondarImg,
  heroImg,
  imageImg,
  lalibelaImg,
  lightingImg,
  lockImg,
  semienImg,
  starImg,
} from "../utils";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* hero section  */}
        <section className="bg-black text-white py-20 sm:py-28">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-10">
              <div className="w-full max-w-[506px] flex flex-col gap-8 sm:gap-14 items-start">
                <h1 className="font-semibold text-4xl sm:text-6xl">
                  Embark on Your Ethiopian Adventure
                </h1>
                <p className="sm:text-xl">
                  We specialize in providing unforgettable experiences in
                  Ethiopia, from breathtaking landscapes to rich cultural
                  heritage.
                </p>
                <button className="mb-16">
                  <Link
                    className="bg-white text-black border hover:text-white hover:bg-black px-6 py-3 rounded-xl"
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
            <div className="flex flex-col sm:flex-row justify-between py-16 sm:py-24 gap-10">
              <div className="w-full max-w-[574px] max-sm:max-w-full flex max-sm:justify-center">
                <img
                  src={coffeeImg}
                  alt="coffee"
                  className="md:object-contain"
                />
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
              <div className="flex max-sm:justify-center">
                <img src={lalibelaImg} alt="lalibela" />
              </div>
              <div className="flex max-sm:justify-center">
                <img src={semienImg} alt="semien mountain" />
              </div>
              <div className="flex max-sm:justify-center">
                <img src={cuisineImg} alt="traditional cuisine" />
              </div>
            </div>
          </div>
        </section>
        {/* 1st section  */}
        <section className="py-20 sm:py-28">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-20 items-center">
              <div>
                <h2 className="font-bold text-3xl">
                  Embark on Your Journey Today!
                </h2>
                <p className="text-lg mt-4">
                  Discover the beauty of Ethiopia with our exclusive
                  experiences. Let us take you on an unforgettable adventure.
                </p>
                <div className="flex gap-4 mt-8">
                  <button className="font-semibold text-lg px-4 py-2 border border-[#B3B3B3] rounded-xl hover:text-white hover:bg-black">
                    Explore More
                  </button>
                  <button className="font-semibold text-lg px-4 py-2 rounded-xl bg-[#2463EB] text-white border hover:text-[#2463EB] hover:border-[#2463EB] hover:bg-white">
                    Start Now
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-10 mt-16">
                  <div>
                    <p className="font-bold text-4xl mb-2">2.5k+</p>
                    <p className="text-lg">Join Thousands of Happy Travelers</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <p className="font-bold text-4xl">5.0</p>
                      <div>
                        <img src={starImg} alt="star" />
                      </div>
                    </div>
                    <p className="text-lg">Join Thousands of Happy Travelers</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={gondarImg} alt="gondar" />
              </div>
            </div>
          </div>
        </section>
        {/* 2nd section  */}
        <section className="py-20 sm:py-28">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-20 items-center">
              <div>
                <h2 className="font-bold text-3xl">
                  Unforgettable Experiences in Ethiopia
                </h2>
                <p className="text-lg mt-4">
                  Discover the beauty of Ethiopia with us.
                </p>
                <div className="mt-11 sm:w-3/4">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-10 lg:gap-20">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="border border-[#B3B3B3] rounded-xl p-2">
                        <img src={lightingImg} alt="star" />
                      </div>
                      <p className="font-semibold text-lg">
                        Breathtaking Landscapes
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="border border-[#B3B3B3] rounded-xl p-2">
                        <img src={lockImg} alt="star" />
                      </div>
                      <p className="font-semibold text-lg">
                        Breathtaking Landscapes
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-10 lg:gap-20 mt-3">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="border border-[#B3B3B3] rounded-xl p-2">
                        <img src={imageImg} alt="star" />
                      </div>
                      <p className="font-semibold text-lg">
                        Breathtaking Landscapes
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="border border-[#B3B3B3] rounded-xl p-2">
                        <img src={folderImg} alt="star" />
                      </div>
                      <p className="font-semibold text-lg">
                        Breathtaking Landscapes
                      </p>
                    </div>
                  </div>
                </div>
                <button className="font-semibold text-lg px-4 py-2 border border-[#B3B3B3] rounded-xl mt-11 hover:text-white hover:bg-black">
                  Explore More
                </button>
              </div>
              <div>
                <img src={addisImg} alt="gondar" />
              </div>
            </div>
          </div>
        </section>
        {/* 3rd section  */}
        <section className="py-20 sm:py-28">
          <div className="container px-4 sm:px-6">
            <h2 className="sm:text-center font-bold text-3xl">
              Customer Reviews
            </h2>
            <div className="flex flex-col sm:flex-row gap-20 mt-16">
              <div>
                <p className="text-lg sm:text-2xl">
                  The experience exceeded all my expectations. I was mesmerized
                  by the beauty of Ethiopia and its rich culture. Truly
                  unforgettable!
                </p>
                <div className="flex gap-4 mt-4">
                  <div>
                    <img src={avatarImg} alt="avatar" />
                  </div>
                  <div className="text-lg">
                    <p className="font-semibold">Samantha H.</p>
                    <p className="text-lightergray font-medium">
                      Travel Enthusiast
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg sm:text-2xl">
                  The experience exceeded all my expectations. I was mesmerized
                  by the beauty of Ethiopia and its rich culture. Truly
                  unforgettable!
                </p>
                <div className="flex gap-4 mt-4">
                  <div>
                    <img src={avatar2Img} alt="avatar2" />
                  </div>
                  <div className="text-lg">
                    <p className="font-semibold">Samantha H.</p>
                    <p className="text-lightergray font-medium">
                      Travel Enthusiast
                    </p>
                  </div>
                </div>
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
