import React from "react";
import Link from "next/link";
import userData from "../constants/data";
import { socialMedia } from "./SocialMedia";
import { GithubIcon } from "./projects/icons";

export default function Footer() {
  return (
    <div className="bg-dark_gray">
      <div className="max-w-6xl mx-auto px-4 md:py-20">
        <div className="flex flex-col md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="text-ivory">
            <p>&copy; {userData.fullName}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-ivory">
              Developed by {userData.name}
            </p>
            <Link href="https://github.com/jonathantan1425/jonathantan1425-portfolio">
              <button>
                {GithubIcon("2em", "ivory")}
              </button>
            </Link>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            {socialMedia("ivory")}
          </div>
        </div>
      </div>
    </div>
  )
}