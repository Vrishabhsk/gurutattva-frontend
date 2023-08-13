"use client";
import Layout from "@/app/layout/layout";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useRequest from "@/hooks/useRequest";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Auth() {
  const { request } = useRequest();
  const router = useRouter();
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationFn: async (options) => {
      return request(options);
    },
  });
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = async () => {
    mutate({
      url: "auth/token/login/",
      method: "POST",
      data: {
        username: details.username,
        password: details.password,
      },
    });
  };

  useEffect(() => {
    if (data && data.data.auth_token) {
      localStorage.setItem("user", JSON.stringify(details));
      localStorage.setItem("token", JSON.stringify(data.data.auth_token));
      toast.success("Login Successful!");
      router.push("/dashboard");
    }
  }, [data]);

  return (
    <Layout>
      <div className="grid md:flex justify-center md:h-screen">
        <Image
          width={400}
          height={400}
          className="rounded-full mx-auto my-14 md:mx-0 w-52 md:w-[300px] self-center md:my-0"
          src="/image/guruji.jpeg"
          alt="Guruji"
        />
        <div className="text-center my-0 md:my-auto md:w-2/5">
          <h1 className="text-xl md:text-4xl font-bold">Welcome to Gurutattva</h1>
          <h2 className="md:text-2xl w-2/3 mx-auto mt-2 mb-4">
            Create an account to begin your inner journey
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <Input
              name="username"
              value={details.username}
              placeholder="Username"
              onChange={handleChange}
            />
            <Input
              name="password"
              value={details.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="xl:flex gap-4 justify-center">
              <Button
                onClick={handleLogin}
                text="Login"
                style="w-[70%] xl:w-fit border-violet-600 rounded-2xl shadow-xl px-8"
              />
              <Link href="/auth/register">
                <Button
                  text="New user? Register Here"
                  style="w-[70%] xl:w-fit border-violet-600 rounded-2xl px-7 shdaow-xl"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
