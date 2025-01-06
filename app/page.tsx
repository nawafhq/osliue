import BriefComponent from "@/components/brief/Brief.component";
import HeroComponent from "@/components/hero/Hero.component";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroComponent />
      <BriefComponent />
    </div>
  );
}
