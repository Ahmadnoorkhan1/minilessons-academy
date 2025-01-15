"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {  Loader2 } from "lucide-react";
import { cn } from "../../utilities/lib/utils";
import { Icon } from "@iconify/react";
import googleIcon from "/images/auth/google.png";
import { useMediaQuery } from "../../utilities/hooks/use-media-query";
import { NavLink, useNavigate } from "react-router";
import apiService from "../../utilities/service/api";

// Zod schema
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

// Define form input types based on schema
type FormData = z.infer<typeof schema>;

const SignUpForm: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = useState<"password" | "text">("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const navigate = useNavigate();
  //   const router = useRouter();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const togglePasswordType = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const onSubmit: SubmitHandler<FormData> = async (data:any) => {
    try {
      const api:any = await apiService.post('auth/register',data);
      if(api.success){
        navigate('/login')
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <NavLink to="/">
          {/* <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" /> */}
          <img src="/images/logo.png" height="30" width="147" alt="logo" />
        </NavLink>
      </div>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-gray-900">
        Hey, Hello 👋
      </div>
      <div className="2xl:text-lg text-base text-gray-600 mt-2 leading-6">
        Create account to start using DashTail
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 xl:mt-7">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="mb-2 font-medium text-gray-600">
              Full Name{" "}
            </Label>
            <Input
              disabled={isPending}
              {...register("name")}
              type="text"
              id="name"
              className={cn("", { "border-red-500": errors.name })}
              size={!isDesktop2xl ? "xl" : "lg"}
            />
            {errors.name && <div className="text-red-500 mt-2 mb-4">{errors.name.message}</div>}
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 font-medium text-gray-600">
              Email{" "}
            </Label>
            <Input
              disabled={isPending}
              {...register("email")}
              type="email"
              id="email"
              className={cn("", { "border-red-500": errors.email })}
              size={!isDesktop2xl ? "xl" : "lg"}
            />
            {errors.email && <div className="text-red-500 mt-2 mb-4">{errors.email.message}</div>}
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 font-medium text-gray-600">
              Password{" "}
            </Label>
            <div className="relative">
              <Input
                type={passwordType}
                id="password"
                size={!isDesktop2xl ? "xl" : "lg"}
                disabled={isPending}
                {...register("password")}
                className={cn("", { "border-red-500": errors.password })}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                onClick={togglePasswordType}
              >
                <Icon
                  icon={passwordType === "password" ? "heroicons:eye" : "heroicons:eye-slash"}
                  className="w-5 h-5 text-gray-400"
                />
              </div>
            </div>
            {errors.password && <div className="text-red-500 mt-2">{errors.password.message}</div>}
          </div>
        </div>
        {/* <div className="mt-5 flex items-center gap-1.5 mb-8">
          <Checkbox size="sm" className="border-gray-300 text-gray-50 mt-[1px]" id="terms" />
          <Label
            htmlFor="terms"
            className="text-sm text-gray-600 cursor-pointer whitespace-nowrap"
          >
            You accept our Terms & Conditions
          </Label>
        </div> */}
        <Button
          className="w-full mt-5"
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <span className="text-gray-50"> {isPending ? "Registering..." : "Create an Account"}</span>
        </Button>
      </form>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {[googleIcon].map((icon, index) => (
          <Button
            key={index}
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full border-gray-300 hover:bg-transparent"
          >
            <img src={icon} alt="social media icon" className="w-6 h-6" />
          </Button>
        ))}
      </div>
      <div className="mt-5 2xl:mt-8 text-center text-base text-gray-600">
        Already Registered?{" "}
        <NavLink className="text-primary" to="/login"> Sign in{" "}</NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;
