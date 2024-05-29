import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SignUpPage({}: Props) {
  return (
    <>
      <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className=" h-full lg:flex flex-col items-center justify-center px-4">
          <div className=" text-center space-y-4 pt-16">
            <h1 className=" font-bold text-3xl text-[#074173]">
              Welcome to My Account
            </h1>
            <p className=" text-base text-[#1679AB]">
              Sign in or Create an account to get started with{" "}
              <span className=" font-bold">My Account</span>
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
              <SignUp path="/sign-up" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className=" animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
        <div className="h-full bg-[#C5FF95] hidden lg:flex items-center justify-center">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
        </div>
      </div>
    </>
  );
}
