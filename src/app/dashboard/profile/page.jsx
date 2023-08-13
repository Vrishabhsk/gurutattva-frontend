"use client";
import Layout from "@/app/layout/layout";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Profile() {
  const { request } = useRequest();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: "profile",
    queryFn: async (options) => {
      return request({
        url: "profile/profile/",
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      });
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!isLoading) {
    return (
      <Layout isDashboard>
        <div>
          <Spinner />
        </div>
      </Layout>
    );
  }

  return <Layout isDashboard></Layout>
}
