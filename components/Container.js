import NavBar from "./NavBar";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <div className="pt-14 px-4 min-h-screen flex justify-center flex-col dark:bg-black" {...props}>
                {children}
            </div>
        </>
    )
}
