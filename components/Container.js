import NavBar from "./NavBar";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <div className="pt-14 px-4 flex justify-center flex-col" {...props}>
                {children}
            </div>
        </>
    )
}
