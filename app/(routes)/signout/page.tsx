"use client";

import { useEffect } from "react";
import { signOut, auth } from "@/auth";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    console.log("SignOut useEffect");
    const checkSession = async () => {
      const session = await auth();
      if (!session) {
        router.push("/signin");
      }
    };
    checkSession();
  }, [router]);

  return <Button label="SignOut" onClick={handleSignOut} />;
};

export default SignOut;
