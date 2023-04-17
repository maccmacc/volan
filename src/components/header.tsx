import Link from 'next/link';
// import SteeringWheelIcon from "../../public/steering-wheel-icon.svg";
import './styles.scss';
import Logo from '@/assets/images/logo';
export default function Header() {
    return (
        <header>
            <div className='background'>
                <div className='background__header-info-container'>
                    <div>Radno Vreme: 08-15h</div>
                    <div>Telefon: 021 662 27 32</div>
                    <div>Lokacija: Žitni trg broj 9</div>
                </div>
                <div className='background__navigation-content'>
                    <Logo />

                    <Link href='/'>POČETNA</Link>
                    <Link href='/about'>O NAMA</Link>
                    <Link href='/prices'>CENOVNIK</Link>
                    <Link href='/education'>EDUKACIJA</Link>
                    <Link href='/vehicles'>VOZNI PARK</Link>
                    <Link href='/apply'>PRIJAVA</Link>
                    <Link href='/contact'>KONTAKT</Link>
                </div>
            </div>
        </header>
    );
}

