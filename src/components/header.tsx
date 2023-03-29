import Link from "next/link";
import SteeringWheelIcon from "../../public/steering-wheel-icon.svg";
import "./styles.scss";
export default function Header() {
    return (
        <header>
            <div className="background">
                <div className="background__navigation-content">
                    <Link href="/home">POČETNA</Link>
                    <Link href="/auth">O NAMA</Link>
                    <Link href="/prices">CENOVNIK</Link>
                    <Link href="/tests">OBUKA</Link>
                    <Link href="/auth">TESTOVI</Link>
                    <Link href="/auth">KONTAKT</Link>
                </div>
            </div>
        </header>
    );
}
