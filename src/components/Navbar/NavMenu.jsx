"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavSubMenu from "./NavSubMenu";
import NavModal from "./NavModal";
import NavDropDown from "./NavDropDown";
import { menuTitles, menuItems, dropDownItems } from "@/constants/data";
import Link from "next/link";

export default function NavMenu() {
  const [openModal, setOpenModal] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleMouseOver = (item) => {
    if (menuItems[item]) {
      setSubMenuItems(menuItems[item]);
    }
  };

  return (
    <div className="relative z-50">
      <div className="flex lg:bg-transparent bg-white items-center">
        <Link href="/dashboard">
          <Image
            alt="Gurutattva Logo"
            width={150}
            height={150}
            priority
            src="/image/text-icon.png"
            className="md:w-[150px] w-32 md:ml-0 ml-4"
          />
        </Link>
        <div className="mx-auto lg:block hidden">
          <NavSubMenu
            menuTitles={menuTitles}
            setOpenModal={setOpenModal}
            action={handleMouseOver}
          />
        </div>
        <NavModal openModal={openModal} setOpenModal={setOpenModal} items={subMenuItems} />
        <button className="ml-auto mr-8">
          <Image
            onClick={() => setOpenSideMenu(!openSideMenu)}
            width={30}
            height={30}
            alt="Menu"
            src={openSideMenu ? "/image/close.svg" : "/image/menu.svg"}
          />
        </button>
      </div>
      {openSideMenu && (
        <React.Fragment>
          <div className="lg:hidden block bg-white border border-gray-100 shadow-xl pb-5">
            <div className="flex flex-col gap-5">
              {menuTitles.map((item, idx) => (
                <React.Fragment key={idx}>
                  <hr />
                  <NavDropDown title={item} items={menuItems[item]} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="lg:block absolute right-8 top-24 w-72 hidden bg-white border border-gray-100 shadow-xl">
            {menuItems.Others.map((item, idx) => (
              <div className="my-3" key={idx}>
                <NavDropDown title={item?.title} titleLink={item?.link} disableDrodpwon />
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
