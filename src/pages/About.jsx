import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <section className="text-center py-20 sm:py-64">
          <div className="container px-4 sm:px-0">
            <h1 className="font-bold text-5xl">About Us</h1>
            <p className="my-8 text-xl">
              We specialize in providing unforgettable experiences in Ethiopia,
              from breathtaking landscapes to rich cultural heritage.
            </p>
            <Link className="bg-black text-white px-6 py-3 rounded-full" to="/">
              Back to Home
            </Link>
          </div>
        </section>
        <section className="py-4 sm:py-8 bg-[#F3F4F6]">
          <div className="container px-4 sm:px-0">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-lg my-6">
              Our mission is to share the wonders of Ethiopia with the world. We
              believe in sustainable tourism that respects and celebrates local
              communities and environments.
            </p>
            <p className="text-lg my-6">
              Join us as we explore the rich tapestry of Ethiopian history,
              culture, and nature. Every journey with us is crafted to provide a
              deeper understanding and appreciation of this incredible country.
            </p>
          </div>
        </section>
        <section className="text-center py-20 sm:py-40">
          <div className="container px-4 sm:px-0 w-full sm:w-2/3">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
            <div className="flex flex-col sm:flex-row gap-9 mt-8">
              <div>
                <h3 className="font-bold text-2xl">Expert Guides</h3>
                <p className="my-6">
                  Our guides are experts in Ethiopian culture and history,
                  ensuring you get an insightful experience.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Tailored Experiences</h3>
                <p className="my-6">
                  We tailor each trip to your interests, whether it&apos;s
                  history, food, or adventure, we have you covered.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
