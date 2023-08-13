import { CLEAR_ERROR, SET_ERROR, START_LOAD, STOP_LOAD } from "@/constants/actions";
import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function useHelpers() {
  const { dispatch } = useContext(GlobalContext);

  const setLoadingState = (loading) => {
    if (loading) dispatch({ type: START_LOAD });
    else dispatch({ type: STOP_LOAD });
  };

  const setErrorState = (error) => {
    dispatch({ type: SET_ERROR, payload: error });
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 1000);
  };

  return { setLoadingState, setErrorState };
}
