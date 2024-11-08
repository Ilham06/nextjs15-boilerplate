"use client";

import Link from "next/link";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";

export default function SidebarItem({ sidebar }) {
  const [openExpand, setOpenExpand] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter()
  const isMenuSelected = () => pathname.includes(sidebar.path);

  const handleClick = () => {
    return sidebar.hasChild ? setOpenExpand(!openExpand) : router.push(sidebar.path);
  };

  return (
    <ListItem disablePadding sx={{ mb: 1, px: 2, display: 'block' }}>
      <ListItemButton selected={isMenuSelected()} onClick={handleClick}>
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
        <ListItemText primary={sidebar.label} />
        {sidebar.hasChild && (
          <>
            {!openExpand ? (
              <KeyboardArrowRight/>
            ) : (
              <ExpandMore/>
            )}
          </>
        )}
      </ListItemButton>
      {sidebar.hasChild && (
        <Collapse in={openExpand} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            {sidebar.children.map((childMenu, index) => {
              return <SidebarItem sidebar={childMenu} key={index} />;
            })}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
}
