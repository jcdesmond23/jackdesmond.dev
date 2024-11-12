export default function NavBarContainer({ children, ...props }) {
    return (
        <div className="flex items-center justify-between fixed w-full p-6 py-2 bg-white text-black shadow-sm" {...props}>
            {children}
        </div>
    )
}