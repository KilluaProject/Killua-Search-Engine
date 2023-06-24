import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";


export default function Home() {
  return (
    <main className="container flex flex-col justify-center items-center mx-auto">

      <HomeHeader/>

      <div className="flex flex-col item-center justify-center mt-32">

      <Image width={300} height={100} src={"/logo.png"}/>
      <form className="border rounded-full p-2 w-full">
        <input>
        Cari apa aja yang lu mau selagi gak kena Internet sehat....
        </input>
      </form>

      </div>
    </main>
  )
}
