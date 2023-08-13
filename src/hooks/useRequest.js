"use client";
import axios from "axios";
import { GlobalContext } from "@/context";
import * as Actions from "@/constants/actions";
import { useContext } from "react";

export default function useRequest() {
  const { dispatch } = useContext(GlobalContext);
  const URL = process.env.SERVER_URL;

  const request = async (config) => {
    try {
      const answer = await axios({
        ...config,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${config.url}`,
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
      });
      return answer;
    } catch (error) {
      dispatch({ type: Actions.SET_ERROR, payload: error });
    }
  };

  return { request };
}
