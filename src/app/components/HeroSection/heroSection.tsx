import Image from "next/image";

import heroImage from "../../resources/imageThree.avif";
import Button from "./exploreButton";

const HeroSection = () => {
  return (
    <div className="w-full h-screen z-30 sticky grid place-items-center overflow-hidden grid-cols-1 grid-rows-1">
      <Button />

      <Image
        className="h-full w-full object-center object-cover col-start-1 row-start-1"
        src={heroImage}
        alt=""
      />
    </div>
  );
};

export default HeroSection;
