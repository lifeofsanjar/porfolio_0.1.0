import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hamburgerIcon from "../../../../public/icons/hamburger-svg.svg";
function Header() {
  //xl lg md sm prior
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (event: React.MouseEvent<HTMLUListElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="w-full bg-white sticky top-0 shadow-lg ">
      <header className="header1 md:hidden sm:hidden smdown:hidden container max-w-[1320px] m-auto px-[20px] flex justify-center items-center ">
        <nav className="w-[700px] font-primary-one " onClick={stopPropagation}>
          <ul className="flex text-2xl">
            <li className="h-full py-[20px] px-[20px]  hover:bg-black hover:text-white">
              <Link href={"#home"}>Home</Link>
            </li>
            <li className="h-full py-[20px] px-[20px]  hover:bg-black hover:text-white">
              <Link href={"#portfolio"}>Portfolio</Link>
            </li>
            <li className="h-full py-[20px] px-[20px]  hover:bg-black hover:text-white">
              <Link href={"#resume"}>Resume</Link>
            </li>
            <li className="h-full py-[20px] px-[20px]  hover:bg-black hover:text-white">
              <Link href={"#biography"}>Biography</Link>
            </li>
            <li className="h-full py-[20px] px-[20px]  hover:bg-black hover:text-white">
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="header2 2xl:hidden xl:hidden lg:hidden container max-w-[1320px] m-auto px-[20px] flex shadow-lg">
        <button
          type="button"
          className="py-[10px]"
          onClick={toggleMenu}
        >
          <Image
            src={hamburgerIcon}
            alt="menu"
            width={40}
          />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 w-full h-screen bg-white shadow-lg" onClick={toggleMenu}>
            <ul className="flex flex-col text-2xl">
              <li className="h-full py-[15px] px-[15px]  hover:bg-black hover:text-white">
                <Link href={"#home"}>Home</Link>
              </li>
              <li className="h-full py-[15px] px-[15px]  hover:bg-black hover:text-white">
                <Link href={"#portfolio"}>Portfolio</Link>
              </li>
              <li className="h-full py-[15px] px-[15px]  hover:bg-black hover:text-white">
                <Link href={"#resume"}>Resume</Link>
              </li>
              <li className="h-full py-[15px] px-[15px]  hover:bg-black hover:text-white">
                <Link href={"#biography"}>Biography</Link>
              </li>
              <li className="h-full py-[15px] px-[15px]  hover:bg-black hover:text-white">
                <Link href={"#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
