import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return(
        <div className="border-b-2 border-b-orange-500 py-6">

            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    to="/" 
                    className="text-2xl font-bold tracking-tight font-inter"
                >
                    SoRa Sneakers
                </Link>
                <div className="flex gap-20 text-md font-medium font-inter mr-16">
                    <p className="hover:text-violet">Men</p>
                    <p className="hover:text-violet">Women</p>
                    <p className="hover:text-violet">Kids</p>
                </div>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>

        </div>

    );
        
    
};

export default Header;