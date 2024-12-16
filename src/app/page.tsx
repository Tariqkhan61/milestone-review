import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorPicks from "./components/EditorPicks";
import Product from "./components/Product";
import Footer from "./components/Footer";
import VitaClassic from "./components/VitaClassic";
import Neural from "./components/Neural";
import FeaturedPost from "./components/FeaturedPosts";




export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <EditorPicks />
     <Product />
     <VitaClassic />
     <Neural />
     <FeaturedPost />


     <Footer />
    </div>
  );
}
