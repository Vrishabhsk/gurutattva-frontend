"use client";
import Layout from "@/app/layout/layout";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useHelpers from "@/hooks/useHelpers";
import useRequest from "@/hooks/useRequest";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Auth() {
  const { request } = useRequest();
  const { setLoadingState, setErrorState } = useHelpers();
  const router = useRouter();
  const { mutate, data, error, isLoading, isError } = useMutation({
    mutationFn: async (options) => {
      return request(options);
    },
  });

  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
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

  const handleRegister = async () => {
    if (!details.username || !details.email || !details.password || !details.re_password) {
      toast.error("Please fill all the fields");
      return;
    }
    if (details.password !== details.re_password) {
      toast.warning("Passwords do not match");
      return;
    }
    mutate({
      url: "profile/email-otp-send/",
      method: "POST",
      headers: {
        Authorization: "Token django-insecure-!u_s_(ay1c3@oc5n+w_rgw^6nztlyszij4#y=&i%$&rjmlkob_",
      },
      data: {
        email: details.email,
      },
    });
  };

  useEffect(() => {
    if (data && data.status === 201) {
      localStorage.setItem("user", JSON.stringify(details));
      toast.success("OTP sent to your email");
      router.push("/auth/otp");
    }
  }, [data]);

  useEffect(() => {
    setLoadingState(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      setErrorState(error);
    }
  }, [isError]);

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
              handleRegister();
            }}
          >
            <Input
              name="username"
              value={details.username}
              placeholder="Username"
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              value={details.email}
              placeholder="E-Mail"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              value={details.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="re_password"
              value={details.re_password}
              placeholder="Re-Enter Password"
              onChange={handleChange}
            />
            <div className="xl:flex gap-4 justify-center">
              <Button
                text="Register"
                style="w-[70%] xl:w-fit border-black rounded-2xl shadow-xl px-6"
              />
              <Link href="/auth/login">
                <Button
                  text="Already a user? Login Here"
                  style="w-[70%] xl:w-fit border-black rounded-2xl px-4 shdaow-xl"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
