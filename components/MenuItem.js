import Link from "next/link"

export default function MenuItem({ children, isLast, to = "/", ...rest }) {
    return (
        <Link href={to}>
            <button className="rounded-full block" {...rest}>{children}</button>
        </Link>
    )
}