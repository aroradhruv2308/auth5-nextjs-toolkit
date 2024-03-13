import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface socialArgumentProp {
  socialType: string;
  socialLabel: string;
}
export default function Social({
  socialType,
  socialLabel,
}: socialArgumentProp) {
  var Icon: React.ReactNode;
  if (socialType == "google") {
    Icon = <FcGoogle />;
  } else if (socialType == "github") {
    Icon = <FaGithub />;
  }
  return (
    <Button variant={"outline"} className="flex gap-x-2">
      {Icon}
      <div className="">{socialLabel}</div>
    </Button>
  );
}
