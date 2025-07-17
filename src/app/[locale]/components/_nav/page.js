"use client";
import React from "react";
import Image from "next/image";
import usa from "../../../../../public/flags/usa.png";
import jp from "../../../../../public/flags/jp.png";
import spain from "../../../../../public/flags/spain.png";
import Theme from "@/app/[locale]/components/theme";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Languages, Menu } from "lucide-react";

const Nav = ({ onOpen }) => {
  const router = useRouter();
  const t = useTranslations("Index");
  const handleMenuOpen = (event) => {
    onOpen && onOpen(event);
  };

  const gotoMain = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="flex justify-between items-center sm:p-8 p-4 fixed bg-white w-full z-10 dark:bg-dark dark:text-white">
        <div
          className="sm:text-xl font-bold text-black dark:text-white cursor-pointer"
          onClick={gotoMain}
        >
          MinThantMaung
        </div>
        <div className="flex mt-2">
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#home">{t("nav_home")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#about">{t("nav_about")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#achievments">{t("nav_achievements")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#timeline">{t("nav_career")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#skill">{t("nav_skill")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#project">{t("nav_project")}</a>
          </div>
          <div className="hidden sm:block sm:text-base font-bold sm:ml-8 hover:text-blue-600">
            <a href="#contact">{t("nav_contact")}</a>
          </div>
          <div className="ml-10 mt-[2px] sm:-mt-[4px]">
            <Theme />
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open language selection"
              className="sm:ml-8 sm:text-base font-bold ml-3 mt-[6px] sm:mt-0"
            >
              <Languages width={23} height={23} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white dark:text-white dark:bg-base-100 rounded-box w-[90px] sm:mt-2"
            >
              <li>
                <a href="/en">
                  <div className="flex">
                    <div>en</div>
                    <div className="flex ml-2 mt-[2px]">
                      <Image src={usa} alt="flag_usa" className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/ja">
                  <div className="flex">
                    <div>ja</div>
                    <div className="flex ml-3 mt-[2px]">
                      <Image src={jp} alt="flag_usa" className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/es">
                  <div className="flex">
                    <div>es</div>
                    <div className="flex ml-[8px] mt-[2px]">
                      <Image src={spain} alt="flag_spain" className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex sm:hidden ml-4">
            <Menu className="w-7 h-7 mt-[5px]" onClick={handleMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
