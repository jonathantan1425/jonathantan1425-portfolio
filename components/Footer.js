import React from "react";
import userData from "../constants/data";
import { socialMedia } from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-dark_gray">
      <div className="max-w-6xl mx-auto px-4 md:py-20">
        <div className="flex flex-col md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="text-ivory">
            <p>&copy; {userData.fullName}. All rights reserved.</p>
          </div>
          <div className="text-ivory">
            Developed by {userData.name}
          </div>
          <div className="space-x-4 flex flex-row items-center">
            {socialMedia("ivory")}
          </div>
        </div>
      </div>
    </div>
  )
}