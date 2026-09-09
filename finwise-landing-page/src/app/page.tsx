import { Suspense } from "react";
import Hero from "@/components/Hero";
import HeroSkeleton from "@/components/HeroSkeleton";
import ScrollyGrid from "@/components/ScrollyGrid";
import Conclusion from "@/components/Conclusion";

const HomePage: React.FC = () => {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <ScrollyGrid />
      <Conclusion />
    </>
  );
};

export default HomePage;