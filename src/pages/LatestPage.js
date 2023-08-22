import React from "react";
import Header from "../components/Header";
import NewComponent from "../components/NewComponent";
import VideoCarousel from "../components/VideoCarousel";
import Footer from "../components/Footer";

function LatestPage() {
  const video = [
    { url: "https://www.youtube.com/embed/JZk6T1TmIrs" },
    { url: "https://www.youtube.com/embed/BSOvXn0d8xI" },
    { url: "https://www.youtube.com/embed/7gXqHZdupD4" },
    { url: "https://www.youtube.com/embed/uJA6_A7Vc-U" },
  ];
  return (
    <div>
      <Header />
      <NewComponent />
      <VideoCarousel video={video} />
      <Footer />
    </div>
  );
}

export default LatestPage;