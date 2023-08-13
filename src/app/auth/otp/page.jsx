"use client";
import Layout from "@/app/layout/layout";
import Button from "@/components/Button";
import OtpInput from "@/components/OtpInput";
import useRequest from "@/hooks/useRequest";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import useHelpers from "@/hooks/useHelpers";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Otp() {
  const { request } = useRequest();
  const { setErrorState, setLoadingState } = useHelpers();
  const router = useRouter();
  const { mutate, data, error, isLoading, isError } = useMutation({
    mutationFn: async (options) => {
      return request(options);
    },
  });
  const [timer, setTimer] = useState(120);
  const [otp, setOtp] = useState("");

  // URLs of the API endpoints being hit
  const responseURLs = {
    register: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/users/`,
    login: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/token/login/`,
    email: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/email-otp-verify/`,
    profile: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/profile/`,
  };

  const handleOtp = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a five digit OTP!");
      console.log(otp);
      return;
    }

    const email = JSON.parse(localStorage.getItem("user")).email;

    if (email)
      mutate({
        url: "profile/email-otp-verify/",
        method: "PUT",
        data: {
          email: email,
          otp: otp,
          secret_key: "django-insecure-!u_s_(ay1c3@oc5n+w_rgw^6nztlyszij4#y=&i%$&rjmlkob_"
        },
      });
  };

  const registerUser = async () => {
    const { username, email, password } = JSON.parse(localStorage.getItem("user"));
    mutate({
      url: "auth/users/",
      method: "POST",
      data: JSON.stringify({
        username: username,
        email: email,
        password: password,
        re_password: password,
      }),
    });
  };

  // const loginUser = async () => {
  //   const { email, password } = JSON.parse(localStorage.getItem("user"));
  //   mutate({
  //     url: "auth/token/login/",
  //     method: "POST",
  //     data: {
  //       email: email,
  //       password: password,
  //     },
  //   });
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 1) setTimer(timer - 1);
      else {
        clearInterval(interval);
        localStorage.clear();
        router.push("/auth/register");
        toast.error("OTP expired! Please try again.");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (data && data.status === 200) {
      // If the response is from the email verify endpoint
      if (data?.config?.url === responseURLs.email) {
        registerUser();
        toast.success("OTP verified successfully! Creating user ...");
      }

      // If the response is from the login endpoint
      if (data?.config?.url === responseURLs.login) {
        const { email } = JSON.parse(localStorage.getItem("user"));
        // create profile object
        mutate({
          url: "profile/profile/",
          method: "POST",
          headers: {
            Authorization: `Token ${data.data.auth_token}`,
          },
          data: {
            email: email,
          },
        });

        // set token in local storage
        localStorage.setItem("token", JSON.stringify(data.data.auth_token));
      }
    }

    if (data && data.status === 201) {
      // If the response is from the register endpoint
      if (data?.config?.url === responseURLs.register) {
        toast.success("Email for activation sent successfully! Please activate your account and Login in.");
      }
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
        <div className="text-center my-0 md:my-auto mx-10 md:w-2/5">
          <h1 className="text-xl md:text-4xl font-bold">Welcome to Gurutattva</h1>
          <h2 className="md:text-2xl w-2/3 mx-auto mt-2 mb-4">
            Create an account by entering OTP sent to your email!
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOtp();
            }}
          >
            <div className="flex">
              <OtpInput maxLength={6} setState={setOtp} />
            </div>
            <div className="relative">
              <Button
                text="Verify OTP"
                style="w-full lg:w-4/5 border border-black rounded-md text-left pl-3"
              />
              <p className="absolute top-3 right-16">{timer} s</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
