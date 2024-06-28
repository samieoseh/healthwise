"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LeftNavBar() {
  const pathname = usePathname();

  return (
    <div className="rounded-lg flex flex-col bg-[#fdfdfd]  w-[20%] py-12 pl-8 h-full relative">
      <div className="flex gap-4 items-center pb-12">
        <Image src="/logo.svg" alt="healthwise logo" width={32} height={32} />
        <h3>Healthwise</h3>
      </div>
      <div className="flex flex-col space-y-8 w-full">
        <Link
          className={` bg-transparent hover:text-primary hover:bg-transparent w-full text-lg  rounded-none shadow-none  text-left ${
            pathname === "/home"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/home"
        >
          Home
        </Link>
        <Link
          className={` bg-transparent hover:text-primary hover:bg-transparent w-full text-lg rounded-none shadow-none text-left ${
            pathname === "/appointments"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/appointments"
        >
          My Appointments
        </Link>
        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg rounded-none shadow-none text-left ${
            pathname === "/consultations"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/consultations"
        >
          Consultations
        </Link>
        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg rounded-none shadow-none text-left ${
            pathname === "/health-records"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/health-records"
        >
          My Health Records
        </Link>

        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg rounded-none shadow-none text-left ${
            pathname === "/diagnostic"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/diagnostic"
        >
          Diagnostic Center
        </Link>
        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg rounded-none shadow-none text-left ${
            pathname === "/billing"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/billing"
        >
          Billing and Payments
        </Link>
      </div>

      <div className="justify-end flex flex-col flex-1 space-y-8 w-full">
        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg  rounded-none shadow-none text-left ${
            pathname === "/profile"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/profile"
        >
          Notifications
        </Link>
        <Link
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg  rounded-none shadow-none text-left ${
            pathname === "/profile"
              ? "font-bold border-r border-primary text-primary"
              : "text-[#7e7e7e]"
          }`}
          href="/profile"
        >
          Profile
        </Link>
        <Button
          className={`bg-transparent hover:text-primary hover:bg-transparent w-full text-lg  rounded-none shadow-none text-left flex justify-start px-0 
            text-[#7e7e7e]
          `}
          variant="ghost"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
