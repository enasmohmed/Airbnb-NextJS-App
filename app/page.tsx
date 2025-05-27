import Banner from "@/app/components/home/Banner";
import Explore from "./components/home/Explore";
import Live from "./components/home/Live";
import GreatestOutdoors from "./components/home/GreatestOutdoors";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export default function Home() {
  return <>
    <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors 
          img='/image-banner.png'
          title='The Greatest Outdoors'
          desc='Wishlists curated by Airbnb'
          linkText='Get Inspired'
        />
      </main>
      <Footer />
    </>
}
