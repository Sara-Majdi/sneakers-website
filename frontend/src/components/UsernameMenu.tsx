import { CircleUserRound, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator"
import { Button } from "./ui/button";


const UsernameMenu = () => {
    const { user, logout } = useAuth0();

    return(

        <DropdownMenu>
            <ShoppingCart className="width-21 w-8 h-8 hover:text-violet"/>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-violet gap-4">
                
                <CircleUserRound className="width-21 w-8 h-8"/>
                {/* {user?.email} */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>

                <DropdownMenuItem>
                    <Link 
                        to="/manage-shop" 
                        className="font-bold hover:text-orange-500">
                        Manage Shop
                    </Link>
                </DropdownMenuItem> 

                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-orange-500">
                        User Profile
                    </Link>
                </DropdownMenuItem> 
                
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;