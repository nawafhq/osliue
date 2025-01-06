import BigBamComponent from "@/components/bigbam/BigBam.component";
import BrandsComponent from "@/components/brands/Brands.component";
import HeroComponent from "@/components/hero/Hero.component";
import RecallComponent from "@/components/recall/Recall.component";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <BrandsComponent />
      <RecallComponent />
      <BigBamComponent />
    </div>
  );
}
