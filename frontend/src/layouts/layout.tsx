import AsSeenOnSection from "@/components/AsSeenOnSection";
import BannerCategory from "@/components/BannerCategory";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavbarPromoMessage from "@/components/NavbarPromoMessage";
import NewArrivals from "@/components/NewArrivals";
import { EmblaOptionsType } from 'embla-carousel'

//Declaring Typescript types for variables
type Props = {
    children: React.ReactNode; 
    showHero?: boolean;
}

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Layout = ({children, showHero = false}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <NavbarPromoMessage />
            {/* If showHero == true, display Hero section*/}
            {showHero &&  <Hero />} 
            {showHero &&  <NewArrivals slides={SLIDES} options={OPTIONS} />} 
            {showHero &&  <BannerCategory />} 
            {/* {showHero &&  <AsSeenOnSection />}  */}
            <div className="container mx-auto flex-1 py-10">{children}</div>
            {showHero &&  <FAQ />} 
            <Footer />

        </div>
   )         
}

export default Layout
