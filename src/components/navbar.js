"use client"
import Link from "next/link";
import "./navbar.css";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function Navbar() {
        const [isPlaying, setIsPlaying] = useState(false);
        const [showScrollToTop, setShowScrollToTop] = useState(false);
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

        const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="navbar-main">
        <div className="navbar-container">
            <Link href='/'>
            <img className="server-logo" src="image/crow_logo.png"/>
            </Link>
            <Link href="/" className="navbar-header">Crow City</Link>
            <Link href="https://discord.gg/ZqPaSvQR" target="_blank" rel="noopener noreferrer" className="navbar-discord">
                <img className="discord-link" src="image/toppng.com-discord-logo-3000x2000.png" alt="Discord" />
            </Link>
        </div>
        <div
                className={`scroll-to-top ${showScrollToTop ? "visible" : ""}`}
                onClick={scrollToTop}
            >
                ↑
            </div>

            <button
            className="play-button" onClick={togglePlay}>
                {isPlaying ? "Pause music" : "Play music"}
            </button>
            {isClient && (
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=0vtDMBk4hFI"
                    playing={isPlaying}
                    controls={true}
                    width="0px"
                    height="0px"
                    volume={0.1}
                    loop={true}
                />
            )}

        </div>

    );
}
export default Navbar;