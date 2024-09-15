import scaleImg from "../../../public/performance.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="factory"
      imgTitle="Scale your app to infinity"
    />
  );
}
