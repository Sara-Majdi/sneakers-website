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
                    <Link to="/menProducts" className="hover:text-violet">Men</Link>
                    <Link to="/womenProducts" className="hover:text-violet">Women</Link>
                    <Link to="/kidsProducts" className="hover:text-violet">Kids</Link>
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