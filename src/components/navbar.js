import Link from "next/link";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar-container">
            
            <img className="server-logo" src="image/crow_logo.png"/>
            <Link href="http://localhost:3000/" className="navbar-header">Crow City</Link>
            <Link href="https://discord.gg/ZqPaSvQR" target="_blank" rel="noopener noreferrer" className="navbar-discord">
                <img className="discord-link" src="image/toppng.com-discord-logo-3000x2000.png" alt="Discord" />
            </Link>
        </div>

    );
}
export default Navbar;