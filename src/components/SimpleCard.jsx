export default function SimpleCard() {
  return (
    <div
      className="my-10 p-4 shadow-lg bg-white mx-8 rounded-lg h-96 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/800/300/?random')",
      }}
    >
      <div className="space-y-2">
        <h3 className="text-2xl text-white font-semibold">React Tailwind Card Title</h3>
        <p className="text-white">
          react with tailwind css simple card It is a long established fact that a reader will be
          distracted.
        </p>
      </div>
    </div>
  );
}
