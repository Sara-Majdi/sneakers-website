import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavbarPromoMessage from "@/components/NavbarPromoMessage";

//Declaring Typescript types for variables
type Props = {
    children: React.ReactNode; 
    showHero?: boolean;
}

const Layout = ({children, showHero = false}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <NavbarPromoMessage />
            {/* If showHero == true, display Hero section*/}
            {showHero &&  <Hero />} 
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />

        </div>
   )         
}

export default Layout
