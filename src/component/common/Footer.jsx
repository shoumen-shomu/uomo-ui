import React from "react";
import Container from "./Container";
import allImages from "@/helper/imagesProvider";
import { footerData } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Images from "./Images";


const Footer = () => {
  const { navLogo, footerPaymenetImg } = allImages;
  const { socialIcons } = allIcons;

  return (
    <footer className="bg-footer">
      <Container>
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-7 pt-[100px] pb-[88px]">
          {/* ── COL 1-2 : Brand info ── */}
          <div className="col-span-2 flex flex-col">
            {/* Logo */}
            <Images
              imgSrc={navLogo}
              imgAlt={"footerlogo"}
              className={`h-[27px] w-[111px] object-contain object-left   `}
            />

            <div className="pt-[44px] pb-[47px]">
              {/* Address */}
              <div>
                <p className="texts_14_regular text-head ">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622
                </p>
                <p className="texts_14_regular text-head  ">United States</p>
              </div>

              <div className="mt-4">
                {/* Contact */}
                <a
                  href="mailto:sale@uomo.com"
                  className="texts_14_medium text-head "
                >
                  sale@uomo.com
                </a>
                <a
                  href="tel:+12463450695"
                  className="texts_14_medium text-head   block  "
                >
                  +1 246-345-0695
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-x-9">
              {socialIcons.map(({ id, icon: Icon, link, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-second hover:text-head transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 3-5 : Nav columns (COMPANY, SHOP, HELP) ── */}
          {footerData.columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {/* Column Title */}
              <h4
                className="texts_18_medium   text-head mb-[27px]"
                style={{ fontWeight: 600, letterSpacing: "0.08em" }}
              >
                {col.title}
              </h4>

              {/* Links */}
              <ul className="flex flex-col">
                {col.links.map((item) => (
                  <li key={item.id} className="relative group w-fit">
                    <Link
                      to={item.link}
                      className={`texts_14_regular text-head  !leading-[40px]`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── COL 6-7 : Subscribe ── */}
          <div className="col-span-2 flex flex-col">
            {/* Title */}
            <h4
              className="texts_18_medium text-head mb-[27px]"
              style={{ fontWeight: 600, letterSpacing: "0.08em" }}
            >
              SUBSCRIBE
            </h4>

            {/* Subtitle */}
            <p className="texts_14_regular text-head  mb-[15px] max-w-[270px]">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            {/* Email Input */}
            <div className="flex items-stretch border border-[#CFCDCD] bg-white mb-[41px] ">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-[21px] pt-[17px] pb-[14px] texts_14_regular text-head placeholder:text-second bg-transparent"
              />

              <button
                className="px-[18px]  texts_13_regular text-head  border-[#CFCDCD] hover:bg-head hover:text-white transition-colors duration-200"
                style={{ fontWeight: 600, letterSpacing: "0.08em" }}
              >
                {" "}
                JOIN
              </button>
            </div>

            {/* Secure Payments */}
            <p
              className="texts_14_regular text-head mb-[11px]"
              style={{ fontWeight: 500 }}
            >
              Secure payments
            </p>
            <img
              src={footerPaymenetImg}
              alt="Payment methods"
              className="h-auto w-auto max-w-full object-contain object-left"
            />
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex items-center justify-between pt-[34px] pb-[28px] border-t border-[#CFCDCD]">
          {/* Copyright */}
          <p className="texts_13_regular text-head">©2020 Uomo</p>

          {/* Language & Currency */}
          <div className="flex items-center gap-[48px]">
            {/* Language */}
            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Language</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head hover:text-second transition-colors duration-200">
                United Kingdom | English
                <RiArrowUpSLine size={15} />
              </button>
            </div>

            {/* Currency */}
            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Currency</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head hover:text-second transition-colors duration-200">
                $ USD
                <RiArrowUpSLine size={15} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
