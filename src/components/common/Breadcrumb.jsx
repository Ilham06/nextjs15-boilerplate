"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

export default function Breadcrumb({ data }) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link href={'/'}>
          <Typography fontSize={14}>Dashboard</Typography>
        </Link>
        {data?.map((row, index) => {
          return row.isActive ? (
            <Typography
              fontWeight={500}
              fontSize={14}
              key={index}
              sx={{ color: "text.disable" }}
            >
              {row.label}
            </Typography>
          ) : (
            <Link key={index} href={row.path}>
              <Typography fontSize={14}>{row.label}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}
