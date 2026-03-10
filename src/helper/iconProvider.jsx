

import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { HiMiniBars3CenterLeft } from "react-icons/hi2";



const allIcons = {
  navIconItems: [
    {
      id: 1,
      name: "Search",
      icon: <GoSearch />,
      link: "#",
      badge: null,
    },
    {
      id: 2,
      name: "Account",
      icon: <FaRegUser />,
      link: "/account",
      badge: null,
    },
    {
      id: 3,
      name: "Wishlist",
      icon: <FiHeart />,
      link: "/wishlist",
      badge: null,
    },
    {
      id: 4,
      name: "Cart",
      icon: <HiOutlineShoppingBag />,
      link: "/cart",
      badge: 3,
    },
    {
      id: 5,
      name: "Mobile Menu",
      icon: <HiMiniBars3CenterLeft />,
      link: "#",
      badge: null,
    },
  ],
};

export default allIcons;
