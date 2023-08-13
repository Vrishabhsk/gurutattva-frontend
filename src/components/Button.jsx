import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Button({ text, onClick, style = "" }) {
  const { state } = useContext(GlobalContext);

  return (
    <button disabled={state?.loading} className={`border p-1 my-2 ${style}`} onClick={onClick}>
      {text}
    </button>
  );
}
