import HeroComponent from "@/components/hero/Hero.component";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroComponent />
    </div>
  );
}
