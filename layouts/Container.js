import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <div className="pt-12 flex flex-col justify-center min-h-screen dark:bg-black" {...props}>
                {children}
                <Footer />
            </div>
        </>
    )
}
