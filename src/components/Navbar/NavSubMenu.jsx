export default function NavSubMenu({ menuTitles, setOpenModal, action }) {
  return (
    <div className="relative flex gap-10 justify-center">
      {menuTitles.map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            action(item);
            setOpenModal((prev) => !prev);
          }}
          onMouseOver={() => {
            action(item);
            setOpenModal(true);
          }}
          className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
