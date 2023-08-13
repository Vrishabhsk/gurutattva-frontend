import Navmenu from "@/components/Navbar/NavMenu";
import { ToastContainer } from "react-toastify";

export default function Layout({ children, isDashboard }) {
  return (
    <div className="max-w-[1280px] mx-auto">
      {isDashboard && <Navmenu />}
      {children}
    </div>
  );
}
