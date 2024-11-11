"use client";

import SaveButton from "@/components/common/button/SaveButton";
import FormWithLabel from "@/components/common/form/FormWithLabel";
import PageWrapper from "@/components/layouts/PageWrapper";
import useShowSnackbar from "@/hooks/useShowSnackbar";
import { Card, CardContent, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const breadcrumb = [
  {
    label: "Users",
    isActive: false,
    path: "/user",
  },
  {
    label: "Create user",
    isActive: true,
    path: "",
  },
];

export default function Page() {
  const router = useRouter();
  const { showSuccessSnackbar } = useShowSnackbar();
  const handleSubmit = (event) => {
    event.preventDefault();
    showSuccessSnackbar("New user successfully created");
    router.push("/user");
  };
  return (
    <PageWrapper title={"Create User"} breadcrumb={breadcrumb}>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Stack gap={3} mb={4}>
              <FormWithLabel label={"User name"}>
                <TextField placeholder="ex: Jonh Doe" />
              </FormWithLabel>
              <FormWithLabel label={"User ID"}>
                <TextField placeholder="ex: Jonh Doe" />
              </FormWithLabel>
              <FormWithLabel label={"Email"}>
                <TextField placeholder="ex: Jonh Doe" />
              </FormWithLabel>
              <FormWithLabel label={"Phone"}>
                <TextField placeholder="ex: Jonh Doe" />
              </FormWithLabel>
            </Stack>
            <SaveButton label={"Create User"} />
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
