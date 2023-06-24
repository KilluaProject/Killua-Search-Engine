import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <HomeHeader/>
      <Image src={"logo.png"}/>
    </main>
  )
}
