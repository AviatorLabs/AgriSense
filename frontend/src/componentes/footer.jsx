import React from "react";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-foreground">
      <div className="max-w-7xl mx-auto px-3 flex flex-col gap-y-5">
        <div className="container py-32 grid grid-cols-[2fr_1fr_2fr] gap-36">
          <div className="flex flex-col gap-y-3">
            <img src="" alt="logo" />
            <p className="text-sm text-background font-mono">
              Agricultural intelligence for confident, resilient farming across
              Ethiopia.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-background font-sans font-semibold">
              Explore
            </p>
            <ul className="flex flex-col gap-2 text-sm text-background">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Get Started</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-background font-sans font-semibold">
              Stay connected
            </p>
            <address className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-3">
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialLinkedin className="w-4 h-4 fill-background" />{" "}
                  </span>
                </a>
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialFacebook className="w-4 h-4 fill-background" />{" "}
                  </span>
                </a>
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialInstagram className="w-4 h-4 fill-background" />{" "}
                  </span>
                </a>
              </div>
              <a
                href=""
                className="text-background text-sm font-mono flex items-center gap-2"
              >
                <MdOutlineMailOutline />
                hello@agrisense.et
              </a>
            </address>
          </div>
        </div>
      <div className="container flex items-center justify-between p-6 border-t-2 border-primary">
        <p className="text-xs text-background font-mono">
          © 2026 AgriSense. Built for better farm decisions.
        </p>
        <a href="" className="text-xs text-background font-mono">
          Privacy Policy
        </a>
      </div>
      </div>
    </footer>
  );
}
