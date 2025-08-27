import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-left px-4 py-2">
        <Image
          src=""
          alt="Leaser Logo"
          width={100}
          height={100}
          className="rounded-full"
        />{" "}
      </header>
      <div>
        <h1>Welcome to Leaser</h1>
      </div>
      // Main Content // Welcome Message // Moving images // Login Button //
      Example listings below // Footer
    </main>
  );
}
