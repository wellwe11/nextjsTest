"use client";

import useNavigator from "../../../../hooks/useNavigator";

const Button = ({ children, link }: { children: string; link: string }) => {
  const handleNavigate = useNavigator(link);

  return (
    <button
      onClick={handleNavigate}
      className="cursor-pointer flex-1 flex items-center justify-center hover:bg-gray-50/50 hover:backdrop-blur-xs transition-colors duration 400 ease"
      type="button"
    >
      <h5 className="text-[13px] font-light ">{children}</h5>
    </button>
  );
};

export default Button;
