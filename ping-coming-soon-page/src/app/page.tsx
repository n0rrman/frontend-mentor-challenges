import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import dashboardImg from "/public/illustration-dashboard.png";
import logo from "/public/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <header>
        <div className="relative w-36 h-12">
          <Image alt="" src={logo.src} fill />
        </div>
      </header>
      <main className="flex flex-col justify-around items-center">
        <div className="text-center">
          <h1 className="text-5xl">We are launching soon!</h1>
          <p className="text-2xl">Subscribe and get notified</p>
        </div>
        <div>Notify Me</div>

        <div className="relative w-full aspect-video">
          <Image alt="" src={dashboardImg.src} fill />
        </div>
      </main>
      <footer>
        <div className="flex flex-row justify-center items-center">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div>&copy; Copyright Ping. All rights reserved.</div>
      </footer>
    </div>
  );
}
