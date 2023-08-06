import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [theme, setTheme] = useState("dark");
  const [toggle, setToggle] = useState(false);
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  console.log(theme);
  const options = [
    {
      name: "light",
      icon: "pi pi-sun",
    },
    {
      name: "dark",
      icon: "pi pi-moon",
    },
  ];
  useEffect(() => {
    if (darkQuery) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const onWindowMatch = () => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) && darkQuery.matches)
  //   ) {
  //     element.classList.add("dark");
  //   } else {
  //     element.classList.remove("dark");
  //   }
  // };
  // onWindowMatch();
  // useEffect(() => {
  //   switch (theme) {
  //     case "dark":
  //       element.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //       break;
  //     case "light":
  //       element.classList.remove("dark");
  //       localStorage.setItem("theme", "light");

  //       break;

  //     default:
  //       localStorage.removeItem("theme");
  //       onWindowMatch();
  //       break;
  //   }
  // }, [theme]);

  // if (localStorage.getItem("theme") != null) {
  //   console.log(localStorage.getItem("theme"));
  // }
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center  py-5 fixed top-0 z-20 dark:bg-primary bg-[#B4E4DA]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="dark:bg-transparent flex justify-center items-center w-9 h-9 rounded-full bg-gray-600">
            {" "}
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </div>
          <p className="dark:text-white text-gray-500 text-[18px] font-bold cursor-pointer flex ">
            Ahmed&nbsp;<span className="sm:block hidden">| Hany</span>
          </p>
        </Link>
        <ul
          className="list-none hidden sm:flex
        flex-row gap-10
        "
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-gray-800 font-bold dark:text-white"
                  : " text-gray-500 dark:text-secondary"
              } dark:hover:text-white hover:text-gray-800 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center gap-10">
          {options.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setTheme(item.name)}
                className={`${theme === item.name && "text-violet-600 "}`}
                style={{ fontSize: "1.4rem" }}
              >
                <i className={`${item.icon}`}></i>
              </button>
            );
          })}

          {/* <i
            className={`${options[0].icon}`}
            style={{ fontSize: "1rem", color: "white" }}
          ></i>
          <i
            className={`${options[1].icon}`}
            style={{ fontSize: "1rem", color: "white" }}
          ></i> */}
          {/* <i
            className={`pi pi-moon`}
            style={{ fontSize: "1rem", color: "white" }}
          ></i> */}

          {/* <button onClick={() => setLight(true)}>
            <BsFillSunFill
              style={{ fontSize: "1.8rem" }}
              className={`${light === true && "text-white"}`}
            />
          </button>
          <button onClick={() => setDark(true)}>
            <BsFillMoonStarsFill
              style={{ fontSize: "1.4rem" }}
              className={`${dark === true && "text-violet-500"}`}
            />
          </button> */}
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className="list-none flex 
        justify-end items-start flex-col gap-4
        "
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-black dark:text-white"
                      : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
