
import Footer from "@/features/user/components/layout/Footer"
import Navbar from "@/features/user/components/layout/Navbar"
import { ClockArrowDown, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-1 p-10">
                {children}

            </main>
            <Link
                to="/user/shopping-cart"
                className="text-orange-500 rounded-full hover:text-orange-700 transition flex items-center mb-4 justify-center fixed bottom-6 right-6 bg-white w-20 h-20 shadow-lg border border-orange-500"
            >
                <ShoppingCart size={40} />
            </Link>
            <Link
                to="/user/my-order"
                className="text-orange-500 rounded-full hover:text-orange-700 transition flex items-center mb-4 justify-center fixed bottom-8 right-30 bg-white w-14 h-14 shadow-lg border border-orange-500"
            >
                <ClockArrowDown size={40} />
            </Link>
            <Footer />
        </div>
    );
}

export default BaseLayout;
