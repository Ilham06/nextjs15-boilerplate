import Breadcrumb from "@/components/common/Breadcrumb";
import { Add, ArrowBack, ArrowBackIos } from "@mui/icons-material";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function PageWrapper({
  children,
  title,
  actionButton,
  breadcrumb,
}) {
  return (
    <Box>
      <Box
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={2}
      >
        <Box>
          <Typography fontSize={24} fontWeight={700} mb={1}>
            {title}
          </Typography>
          {breadcrumb && <Breadcrumb data={breadcrumb} />}
        </Box>
        {actionButton}
      </Box>
      {children}
    </Box>
  );
}
