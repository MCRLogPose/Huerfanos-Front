import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"

const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Sidebar />
            <main className="flex-1 p-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default BaseLayout;
