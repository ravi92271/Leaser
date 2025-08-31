"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  "/portal_images/apartment1.jpg",
  "/portal_images/apartment2.JPG",
  "/portal_images/apartment3.JPG",
  "/portal_images/apartment4.JPG",
  "/portal_images/apartment5.JPG",
  "/portal_images/apartment6.JPG",
] as const;

function ImageCarousel() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 5300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex relative w-[600px] h-[400px] overflow-hidden rounded-lg shadow-lg">
      {IMAGES.map((src, index) => (
        <div
          key={index + src}
          className={`${
            index === image ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out absolute`}
        >
          <Image
            src={src}
            alt={`Carousel Image ${index + 1}`}
            width={600}
            height={400}
            className="scale-100 animate-kenburns"
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="flex flex-row items-center px-4 py-2">
        <Image
          src="" //No logo yet
          alt="Leaser Logo"
          width={100}
          height={100}
          className="rounded-full justify-left"
        />
        <button className="bg-brightpink rounded-full px-2">Login</button>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-screen items-start px-6 pt-20 lg:translate-x-30">
        {/* Wrapper with max width */}
        <div className="flex w-full max-w-7xl justify-between gap-20">
          {/* Text Section */}
          <div className="flex flex-col max-w-mg space-y-5">
            <h1 className="text-4xl font-semibold">
              Student Lease Transfers, Made Simple
            </h1>
            <p className="text-lg">
              Find a subletter or take over a lease in minutes—student-only,
              verified.
            </p>
            <nav className="flex space-x-4">
              <button className="font-medium bg-brightpink rounded-full px-7">
                Get Started
              </button>
            </nav>
          </div>
          {/* Image Carousel */}
          <div className="flex-1 max-w-2xl">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <ul></ul>
      </footer>
    </main>
  );
}
// Welcome Message // Moving images // Login Button //
// Example listings below // Footer
