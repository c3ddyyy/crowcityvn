"use client";
import React, { useEffect, useState } from "react";
import "./loadingScreen.css";

const LoadingScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return (
            <div className="loading-screen">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    return null;
};

export default LoadingScreen;
