import React from "react";
import NavBar from "../components/Navbar";
import CryptoHeroSection from "../components/CryptoHeroSection";
import VideoCarousel from "../components/VideoCarousel";
import Footer from "../components/Footer";

function HomePage() {
  const video = [
    { url: "https://www.youtube.com/embed/JZk6T1TmIrs" },
    { url: "https://www.youtube.com/embed/BSOvXn0d8xI" },
    { url: "https://www.youtube.com/embed/7gXqHZdupD4" },
    { url: "https://www.youtube.com/embed/uJA6_A7Vc-U" },
  ];
  return (
    <>
      <NavBar />
      <CryptoHeroSection />
      <br />
      <br />
      <br />
      <br />
      <VideoCarousel video={video} />
      <Footer />
    </>
  );
}

export default HomePage;