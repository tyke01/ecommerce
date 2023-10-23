//
import {
  Announcement,
  Categories,
  Footer,
  Navbar,
  Newsletter,
  Products,
  Slider,
} from "../components";

const Home = () => {
  return (
    <main className="w-full">
      <Announcement />

      <Navbar />

      <Slider />

      <Categories />

      <Products />

      <Newsletter />

      <Footer />
    </main>
  );
};

export default Home;
