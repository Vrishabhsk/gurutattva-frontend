/**
 * Contains the Global State Configuration.
 */
"use client";
import { createContext, useReducer } from "react";
import * as Actions from "../constants/actions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const GlobalContext = createContext();

const Initial = {
  user: null,
  loading: false,
  error: null,
};

const queryClient = new QueryClient();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // User Actions
      case Actions.SET_USER:
        return { ...state, user: action.payload };
      case Actions.UPDATE_USER:
        return { ...state, user: { ...state.user, ...action.payload } };
      case Actions.CLEAR_USER:
        return { ...state, user: null };

      // Loading Actions
      case Actions.START_LOAD:
        return { ...state, loading: true };
      case Actions.STOP_LOAD:
        return { ...state, loading: false };

      // Error Actions
      case Actions.SET_ERROR:
        return { ...state, error: action.payload };
      case Actions.CLEAR_ERROR:
        return { ...state, error: null };
    }
  }, Initial);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
      <ToastContainer />
    </QueryClientProvider>
  );
};

export { GlobalContext, StateProvider };
