import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavDropDown({ title, items, titleLink = "", disableDrodpwon = false }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(!show)} className="flex items-center cursor-pointer">
        <Link href={titleLink ?? ""}>
          <h1 className="text-lg px-5">{title}</h1>
        </Link>
        {!disableDrodpwon && (
          <Image
            className="ml-auto mr-8 cursor-pointer"
            width={20}
            height={20}
            alt="dropdown"
            src={show ? "/image/up.svg" : "/image/down.svg"}
          />
        )}
      </div>
      {show && items && (
        <div className="grid gap-3 px-5">
          {items.map((item) => (
            <Link href={item?.link ?? ""}>
              <h3 className="text-md">{item.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
