import Button from "./components/Button/button";
import Logo from "./logo";

const ButtonsContainer = () => {
  const buttons = [
    {
      link: "/",
      text: "HOME",
    },
    { link: "/gallery", text: "GALLERY" },
    {
      link: "/contact",
      text: "CONTACT",
    },
  ];

  return (
    <div className="flex cursor-pointer w-60 h-[clamp(50px,5vw,75px)]">
      {buttons.map(({ link, text }, i) => (
        <Button key={"navButton " + i} link={link}>
          {text}
        </Button>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="z-50 w-screen fixed top-0 left-0 flex justify-center">
      <nav className="px-2 w-[clamp(400px,calc(100vw-10px),1910px)] flex justify-between align-middle">
        <Logo />
        <ButtonsContainer />
      </nav>
    </div>
  );
};

export default Navbar;
