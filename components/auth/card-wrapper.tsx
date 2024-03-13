import React from "react";
import Social from "@/components/auth/socials";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Header from "../auth/header";
interface CardWrapperProps {
  children: React.ReactNode;
  cardLabel: string;
  backButtomLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
export default function CardWrapper({
  children,
  cardLabel,
  backButtomLabel,
  backButtonHref,
  showSocial = true,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px]  shadow-md">
      <CardHeader>
        <Header headerLabel="Welcome Back"></Header>
      </CardHeader>
      <CardContent className="flex gap-x-2 mr-2 justify-center">
        <Social socialLabel="SignIn Google" socialType="google" />
        <Social socialLabel="SignIn GitHub" socialType="github" />
      </CardContent>
    </Card>
  );
}
