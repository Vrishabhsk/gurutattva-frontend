"use client";
import Layout from "@/app/layout/layout";
import Input from "@/components/Input";
import { useState } from "react";
import { startCase } from "lodash";
import Button from "@/components/Button";
import Image from "next/image";

export default function PrathanaDham() {
  const [fields, setFields] = useState({
    name: "",
    area: "",
    city: "",
    state: "",
    country: "",
    age: "",
    description: "",
  });

  

  return (
    <Layout isDashboard>
      <div
        style={{ backgroundImage: "url(/image/background.jpeg)" }}
        className="bg-white rounded-lg shadow-xl mb-2 bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-2xl mx-auto w-4/5 pt-10">Prarthana Dham</h1>
        <h2 className="text-lg w-4/5 mx-auto py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim. Enim nec
          dui nunc mattis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Enim nunc
          faucibus a pellentesque sit amet porttitor. Aliquet eget sit amet tellus cras adipiscing
          enim.
        </h2>
        <div className="flex gap-8">
          <form className="grid lg:w-2/3 lg:ml-32 mx-10 md:mx-auto pb-10">
            {Object.keys(fields).map((field) => (
              <div>
                <label>
                  {startCase(field)} <span className="text-red-500">*</span>
                </label>
                <Input
                  style="w-full border-violet-600"
                  type={field === "age" ? "number" : "text"}
                  name={field}
                  value={fields[field]}
                  onChange={(e) =>
                    setFields({
                      ...fields,
                      [field]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <div className="w-full flex gap-5">
              <Button
                text="Submit Details"
                style="my-4 rounded-xl w-full border-violet-600 bg-violet-300 shadow-xl py-2"
              />
              <Button
                text="Clear Form"
                style="my-4 rounded-xl w-full border-red-600 bg-red-300 shadow-xl py-2"
              />
            </div>
          </form>
          <Image
            width={800}
            height={800}
            className="rounded-full lg:block hidden my-20 md:mx-10 w-2/3 object-cover self-center md:my-0"
            src="/image/guruji.jpeg"
            alt="Guruji"
          />
        </div>
      </div>
    </Layout>
  );
}
