import Image from "next/image";

export default function UserCard() {
  return (
    <div className="relative border border-gray-200 shadow-xl mx-8 lg:my-0 my-5 rounded-lg">
      <div className="bg-black w-full h-32 rounded-tl-lg rounded-tr-lg" />
      <div className="absolute w-20 top-20 left-5 p-1 bg-gray-400 rounded-full">
        <Image
          src="https://avatars.githubusercontent.com/u/31819732?v=4"
          className="rounded-full"
          width={150}
          height={150}
          alt="user avatar"
        />
      </div>
      <div className="p-8 pt-10 bg-white">
        <h1>
          <b>Phineas</b> #0001
        </h1>
        <h2>About</h2>
        <h2>Phin · 20 yrs</h2>
        <h2>
          Co-Founder & Dev @ gigi - <a href="https://gigi.gi">https://gigi.gi</a>
        </h2>
        <br />
        <h2>
          <b>web: </b>
          <a href="https://phin.dev">https://phin.dev</a>
        </h2>
        <h2>
          <b>web: </b>
          <a href="https://phin.dev">https://phin.dev</a>
        </h2>
        <h2>
          <b>web: </b>
          <a href="https://phin.dev">https://phin.dev</a>
        </h2>
      </div>
    </div>
  );
}
