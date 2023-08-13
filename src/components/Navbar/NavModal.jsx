import Link from "next/link";

export default function NavModal({ items, openModal, setOpenModal }) {
  return (
    <div
      onMouseLeave={() => setOpenModal(false)}
      className={`w-[90%] left-0 right-0 ml-auto mr-auto rounded-lg shadow-xl transition duration-150 ease-in-out absolute mt-3 border border-gray-200 top-24 bg-white rounded-lg p-10 ${
        openModal ? "lg:block hidden" : "lg:hidden hidden"
      }`}
    >
      <div className="flex gap-x-20 gap-y-8 flex-wrap">
        {items.map((item) => (
          <Link
            href={item?.link ?? ""}
            className="w-60 hover:bg-gray-100 cursor-pointer p-5 rounded-md"
          >
            <h1 className="text-lg font-bold">{item.title}</h1>
            <h3 className="text-xs">{item.description}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
