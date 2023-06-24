import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";


export default function Home() {
  return (
    <main className="container h-screen">
      <HomeHeader/>

      <div className="flex flex-col items-center">
      <Image width={300} height={100} src={"/logo.png"}/>

      </div>
    </main>
  )
}
