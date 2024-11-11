"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Add,
  ChangeCircle,
  Delete,
  Edit,
  Save,
  Verified,
} from "@mui/icons-material";
import MainTable from "@/components/common/table/MainTable";
import SearchInput from "@/components/common/form/SearchInput";
import DatatableActionButton from "@/components/common/table/DatatableActionButton";
import PageWrapper from "@/components/layouts/PageWrapper";
import AddButton from "@/components/common/button/AddButton";
import Link from "next/link";
import ConfirmDialog from "@/components/common/dialog/ConfirmDialog";
import useDeleteWithConfirm from "@/hooks/useDeleteWithConfirm";
import { useState } from "react";
import useShowSnackbar from "@/hooks/useShowSnackbar";

const breadcrumb = [
  {
    label: "User",
    isActive: true,
    path: "",
  },
];

const users = [
  {
    id: "1234567890",
    name: "Raka Pratama",
    email: "raka.pratama@example.com",
    role: "Admin",
    last_active: "2024-10-25 14:30",
    status: true,
  },
  {
    id: "2345678901",
    name: "Alya Rahma",
    email: "alya.rahma@example.com",
    role: "Admin",
    last_active: "2024-10-24 09:15",
    status: false,
  },
  {
    id: "3456789012",
    name: "Dimas Putra",
    email: "dimas.putra@example.com",
    role: "User",
    last_active: "2024-10-23 16:50",
    status: true,
  },
  {
    id: "4567890123",
    name: "Nadira Cahaya",
    email: "nadira.cahaya@example.com",
    role: "User",
    last_active: "2024-10-22 11:10",
    status: false,
  },
  {
    id: "5678901234",
    name: "Rizky Maulana",
    email: "rizky.maulana@example.com",
    role: "User",
    last_active: "2024-10-21 13:40",
    status: true,
  },
  {
    id: "6789012345",
    name: "Salsabila Putri",
    email: "salsabila.putri@example.com",
    role: "User",
    last_active: "2024-10-20 08:25",
    status: true,
  },
  {
    id: "7890123456",
    name: "Iqbal Ardiansyah",
    email: "iqbal.ardiansyah@example.com",
    role: "User",
    last_active: "2024-10-19 12:00",
    status: false,
  },
  {
    id: "8901234567",
    name: "Zahra Nurul",
    email: "zahra.nurul@example.com",
    role: "User",
    last_active: "2024-10-18 17:45",
    status: true,
  },
  {
    id: "9012345678",
    name: "Fikri Ramadhan",
    email: "fikri.ramadhan@example.com",
    role: "User",
    last_active: "2024-10-17 10:30",
    status: true,
  },
  {
    id: "0123456789",
    name: "Nadia Safira",
    email: "nadia.safira@example.com",
    role: "User",
    last_active: "2024-10-16 15:20",
    status: false,
  },
];

const headers = ["User", "email", "Role", "Status"];

export default function Page() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const { showSuccessSnackbar } = useShowSnackbar();
  const handleDelete = () => {
    showSuccessSnackbar("delete user successfully");
    setOpenConfirm(false);
  };
  return (
    <PageWrapper
      title={"User List"}
      breadcrumb={breadcrumb}
      actionButton={
        <Link href={"/user/create"}>
          <AddButton label={"Add new user"} />
        </Link>
      }
    >
      <Card>
        <Box p={2} display={"flex"} gap={1}>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel>Role</InputLabel>
            <Select value={""} label="role">
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Admin</MenuItem>
              <MenuItem value={30}>User</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "125px" }}>
            <InputLabel>Status</InputLabel>
            <Select value={""} label="Status">
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Not Active</MenuItem>
            </Select>
          </FormControl>
          <SearchInput width={"350px"} placeholder={"Search name or id ..."} />
        </Box>

        <MainTable headers={headers}>
          {users?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display={"flex"} alignItems={"center"} gap={1.5}>
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <Box>
                    <Typography fontSize={14} fontWeight={600}>
                      {row.name}
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {row.id}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Chip label={row.role} size="small" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <Verified color={row.status ? "primary" : "error"} />
                </IconButton>
              </TableCell>
              <TableCell>
                <DatatableActionButton>
                  {/* create a custom component for menu item */}
                  <Link href={'/user/create'}>
                  <MenuItem>
                    <ListItemIcon>
                      <Edit fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                  </MenuItem></Link>
                  <MenuItem onClick={() => setOpenConfirm(true)}>
                    <ListItemIcon>
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                  </MenuItem>
                </DatatableActionButton>
              </TableCell>
            </TableRow>
          ))}
        </MainTable>

        <TablePagination
          component="div"
          count={100}
          page={1}
          onPageChange={() => console.log("oke")}
          rowsPerPage={10}
          onRowsPerPageChange={() => console.log("oke")}
        />
      </Card>
      <ConfirmDialog
        title={"Delete User"}
        description={
          "Are you sure to delete this User? this role will be lost and can't recovery."
        }
        open={openConfirm}
        handleClose={() => setOpenConfirm(false)}
        action={() => handleDelete()}
        loading={false}
      />
    </PageWrapper>
  );
}
