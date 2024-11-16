export default function NavBarContainer({ children, ...props }) {
    return (
        <div className="flex w-full justify-center fixed top-4">
            <div className="flex items-center justify-between w-[80%] py px-8 dark:bg-black bg-white border border-neutral dark:border-neutral-900 text-black rounded-3xl" {...props}>
                {children}
            </div>
        </div>
    )
}