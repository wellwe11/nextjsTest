"use client";

import useNavigator from "@/hooks/useNavigator";

const Button = () => {
  const handleNavigate = useNavigator("/gallery");

  return (
    <button
      onClick={handleNavigate}
      className="col-start-1 row-start-1 z-10 bg-gray-300 w-35 h-15 cursor-pointer m-auto"
    >
      Explore
    </button>
  );
};

export default Button;
