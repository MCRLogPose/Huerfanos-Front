
import Footer from "@/features/user/components/layout/Footer"
import Navbar from "@/features/user/components/layout/Navbar"

const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-1 p-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default BaseLayout;
