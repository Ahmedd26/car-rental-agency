import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="text-2xl md:text-[32px] font-bold text-primary-500"
        >
            MORENT
        </Link>
    );
}
