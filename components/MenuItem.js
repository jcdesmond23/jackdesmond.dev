import Link from "next/link"
import { Button } from "@chakra-ui/react"

export default function MenuItem({ children, isLast, to = "/", ...rest }) {
    return (
        <Link href={to}>
            <Button display="block" {...rest}>{children}</Button>
        </Link>
    )
}