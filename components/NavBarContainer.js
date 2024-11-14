export default function NavBarContainer({ children, ...props }) {
    return (
        <div className="flex w-full justify-center fixed top-4">
            <div className="flex items-center justify-between w-[80%] py px-8 bg-white border border-gray text-black rounded-3xl" {...props}>
                {children}
            </div>
        </div>
    )
}