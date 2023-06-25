import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";


export default function Home() {
  return (
    <main className="container bg-slate-400 mx-auto">
      <HomeHeader/>

      <div className="flex flex-col item-center justify-center">

      <Image width={300} height={100} src={"/logo.png"}/>
      <form action="">
        <input type="text" />
      </form>

      </div>
    </main>
  )
}