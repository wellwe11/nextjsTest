import getData from "../functions/getData";
import CollectionsScoller from "./components/CollectionsScroller/collectionsScoller";
import HeroSection from "./components/HeroSection/heroSection";
import WelcomeSection from "./components/WelcomeSection/welcomeSection";

export interface HomeSection {
  index: number;
  text: {
    title: string;
    info: string;
    bio: string;
  };
  images: string[];
}

export default async function Home() {
  const data = await getData("HomeData");

  return (
    <div className="p-0 m-0 box-border w-full">
      <HeroSection />
      <WelcomeSection />
      <CollectionsScoller data={data} />
    </div>
  );
}
