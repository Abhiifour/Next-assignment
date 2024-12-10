import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsLetter } from "@/components/NewsLetter";
import { Product } from "@/components/Product";
import { ProductCard } from "@/components/ProductCard";
import ProductCollection from "@/components/ProductCollection";

export default function Home() {
  return (
    <div className="sm:w-full transition-all duration-300 ease-in-out" >
     <Navbar/>
     <Product/>
     <ProductCollection width="330" elementNo={4}/>
     <ProductCollection width="430" elementNo={3} />
     <Banner/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}
