import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";


export default function Home() {
  return (
    <main>

      <HomeHeader/>

      <div className="flex justify-center flex-col">

        <Image width={300} height={100} src={"/logo.png"}/>

        <HomeSearch/>

      </div>
    </main>
  )
}
