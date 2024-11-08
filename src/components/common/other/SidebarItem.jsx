"use client";

import Link from "next/link";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";

export default function SidebarItem({ sidebar }) {
  const pathname = usePathname();
  const isMenuSelected = () => pathname.includes(sidebar.path);

  return (
    <Link href={sidebar.path}>
      <ListItem disablePadding sx={{ mb: 1, px: 2 }}>
        <ListItemButton
          selected={isMenuSelected()}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 1,
              //   justifyContent: "center",
              //   ml: "-12px",
            }}
          >
            <sidebar.icon />
          </ListItemIcon>
          <ListItemText
            primary={sidebar.label}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
