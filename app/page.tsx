import Image from "next/image";

export default function Home() {
  return (
      <main className="">
        <h1>Welcome to next.js</h1>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
      </main>      
  );
}
