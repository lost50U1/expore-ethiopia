import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <h1 className="text-3xl font-bold underline">About</h1>
      </main>
      <Footer />
    </>
  );
};

export default About;
