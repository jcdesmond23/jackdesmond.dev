import NavBar from "../components/NavBar";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <div className="pt-12 flex justify-center min-h-screen items-center dark:bg-black" {...props}>
                {children}
            </div>
        </>
    )
}
