import Menu from "./menu";
import Image from "next/image";
import ODlogo from "@/public/images/onda_dura_logo.png";

const currentIndex = 0; // Set to 0 or manage with state if needed

export default function Header() {
  return (
    <header className="flex flex-row justify-around items-center py-6 bg-white text-lg font-bold text-stone-950">
      <div className="relative w-20 h-14">
        <Image
          src={ODlogo.src}
          alt={`Onda Dura Logo`}
          width={100}
          height={100}
          style={{objectFit:"cover"}}
          className="transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <Menu />
    </header>
  );
}
