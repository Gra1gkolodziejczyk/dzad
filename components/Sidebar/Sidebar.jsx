import { AiFillHome, AiFillTwitterSquare } from "react-icons/ai";
import { BsBell, BsBookmark, BsPerson } from "react-icons/bs";

import { BiMessageDetail } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import Image from "next/image";
import Profile from "../../assets/profile.jpeg";
import SidebarMenuItems from "../SidebarMenu/SidebarMenuItems";
import { TbHash } from "react-icons/tb";
import Twitter from "../../assets/twitter-logo.png";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-1 xl:items-start fixed h-full xl:ml-24">
      <div className="hoverEffect p-2 hover:bg-gray-700 xl:px-1">
        <Image src={Twitter} height="40" width="40" alt={""}></Image>
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItems text="Home" Icon={AiFillHome} active />
        <SidebarMenuItems text="Twitter Blue" Icon={AiFillTwitterSquare} />
        <SidebarMenuItems text="Explore" Icon={TbHash} />
        <SidebarMenuItems text="Notifications" Icon={BsBell} />
        <SidebarMenuItems text="Messages" Icon={BiMessageDetail} />
        <SidebarMenuItems text="Signets" Icon={BsBookmark} />
        <SidebarMenuItems text="Profile" Icon={BsPerson} />
        <SidebarMenuItems text="More" Icon={CiCircleMore} />
      </div>
      <div>
        <button className="transition ease-in-out delay-200 bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:bg-blue-500 text-lg hidden xl:inline ">
          Tweet
        </button>
      </div>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          src={Profile}
          height="100"
          width="100"
          alt={""}
          className="h-10 w-10 rounded-full xl:mr-2"
        ></Image>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold text-white">Graig kolodziejczyk</h4>
          <p className="text-gray-500">@GraigCode</p>
        </div>
        <FiMoreHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
