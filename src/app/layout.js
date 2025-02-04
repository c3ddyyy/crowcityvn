import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "@/components/navbar";
import Head from "next/head";

export const metadata = {
  title: "Crow City VN, Reality Roleplay",
  description: "Một thành phố nhập vai thực tế, nơi bạn có thể hóa thân vào nhiều nhân vật, trải nghiệm cuộc sống chân thực và xây dựng câu chuyện của riêng mình!",
};

export default function Layout({ children }) {
  return (
    <>
    <Head></Head>
      <head>
        <link rel="icon" href="/favicons/crow_logo.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+AU+SA:wght@100..400&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Crow City VN, Reality Roleplay</title>
      </head>
      <html lang="en">
        <body className="antialiased">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
