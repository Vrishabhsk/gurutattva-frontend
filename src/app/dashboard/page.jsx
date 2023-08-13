"use client";
import TemplateCard from "@/components/TemplateCard";
import Layout from "../layout/layout";
import Carousel from "@/components/Carousel/Carousel";
import UserCard from "@/components/UserCard";
import SimpleCard from "@/components/SimpleCard";
import { FaPhone, FaPhoneVolume, FaWalking } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Dashboard() {
  const slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  const frames = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5126705754424!2d73.94223297500443!3d18.550911768247175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d5a9659f1f%3A0xe95a272c0fddfd47!2sEC%20STAYS%20PG%20for%20LADIES!5e0!3m2!1sen!2sin!4v1685800766523!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.677462450986!2d73.93339927500426!3d18.54347196847473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7ceffffff%3A0x3e68c253e3b02e03!2sPride%20Icon!5e0!3m2!1sen!2sin!4v1685802519738!5m2!1sen!2sin",
  ];

  const [stateFrame, setStateFrame] = useState(frames[0]);

  return (
    <Layout isDashboard>
      <div className="mt-16 relative md:block hidden">
        <Carousel slides={slides} autoplay={true} interval={2000} />
      </div>
      <TemplateCard />
      <div className="lg:flex mx-auto max-w-screen overflow-x-scroll">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="shrink-0 my-2">
              <UserCard />
            </div>
          ))}
      </div>
      <TemplateCard />
      <SimpleCard />
      <div className="my-10 p-4 shadow-lg bg-white mx-8 rounded-lg">
        <div className="lg:flex">
          <div className="grid gap-8 lg:w-[50%] lg:ml-10 p-10 mx-auto">
            <h1 className="">
              <b>
                Village: Shilla, Post Office: Pantehar, District: Kangra, Dharmashala, Himachal
                Pradesh - 176057, India
              </b>
            </h1>
            <div className="grid gap-5">
              <h2 onClick={() => setStateFrame(frames[0])} className="flex items-center">
                <FaPhone /> <span className="ml-6">+91 9418 037 370</span>
              </h2>
              <h2 onClick={() => setStateFrame(frames[1])} className="flex items-center">
                <MdEmail /> <span className="ml-6">yes@oshonisarga.com</span>
              </h2>
              <h2 className="flex">
                <FaPhoneVolume className="mt-1" />{" "}
                <span className="ml-6">
                  Call Timings for Bookings <br /> <b>2 PM to 5 PM Only</b>
                </span>
              </h2>
              <h2 className="flex">
                <FaWalking className="mt-1" />{" "}
                <span className="ml-6">
                  Visiting hours <br /> only by prior appointment <br />{" "}
                  <b>10:00 AM to 12:00 NOON</b> <br /> <b>3:00 PM to 4:00 PM</b>
                </span>
              </h2>
            </div>
          </div>
          <div>
            {stateFrame && (
              <iframe
                src={stateFrame}
                className="lg:w-[600px] lg:h-[400px] w-full mx-auto my-10"
              ></iframe>
            )}
          </div>
        </div>
        <div className="flex my-10">
          <div className="mx-auto">
            <h1>To get latest updates, Sign up to your newsletter</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="relative"
            >
              <input
                placeholder="example@example.com"
                className="border border-violet-600 rounded-[30px] lg:w-96 w-full mt-5 py-3 pl-3 pr-24"
              />
              <button className="absolute top-[30px] text-black right-4 border border-violet-600 p-1 text-sm rounded-[20px] px-3">
                Enroll
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
