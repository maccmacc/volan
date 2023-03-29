import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <p>alalaalalal home page</p>
            <li className="background_navigation">
                <Link href="/home/A">A</Link>
            </li>
            <li>
                <Link href="/home/B">B</Link>
            </li>
        </>
    );
}
