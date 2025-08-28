"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  "/portal_images/apartment1.jpg",
  "/portal_images/apartment2.JPG",
  "/portal_images/apartment3.JPG",
  "/portal_images/apartment4.JPG",
  "/portal_images/apartment5.JPG",
] as const;

function ImageCarousel() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Image
        src={IMAGES[image]}
        alt={`Carousel Image ${image + 1}`}
        width={600}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-left px-4 py-2">
        {/* <Image
          src=""
          alt="Leaser Logo"
          width={100}
          height={100}
          className="rounded-full"
        /> */}
      </header>
      <div className="flex items-center justify-center">
        <h1>Welcome to Leaser</h1>
        <ImageCarousel />
      </div>
    </main>
  );
}
// Main Content // Welcome Message // Moving images // Login Button //
// Example listings below // Footer
