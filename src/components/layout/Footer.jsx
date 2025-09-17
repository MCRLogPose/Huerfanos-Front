import { Link } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto text-center border-t-2 border-blue-500">
            <p className="text-sm">
                © {new Date().getFullYear()} - Mi Portfolio | Todos los derechos reservados
            </p>
            <div className="flex justify-center gap-4 mt-2">
                <Link to="" className="hover:underline"/>Sobre mí
                <Link to="" className="hover:underline"/>Proyectos
                <Link to="" className="hover:underline"/>Contacto
            </div>
        </footer>
    )
}

export default Footer;
