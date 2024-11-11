import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Box,
  TablePagination,
  Typography,
} from "@mui/material";
import React from "react";
import SkeletonLoadingTable from "../loading/SkeletonLoadingTable";

export default function MainTable({
  headers,
  children,
  hasPagination,
  handlePageChange,
  handleRowsPerPageChange,
  page,
  rowsPerPage,
  totalData,
  isFetching,
}) {
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
            <TableCell width={"5%"}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching ? (
            <SkeletonLoadingTable headers={headers} />
          ) : totalData != 0 ? (
            children
          ) : (
            <TableRow>
              <TableCell colSpan={headers.length} align="center">
                <Typography color="text.secondary" fontWeight={500}>
                  Data Not Found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {hasPagination && (
        <TablePagination
          component="div"
          count={totalData}
          page={page - 1}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
    </TableContainer>
  );
}
