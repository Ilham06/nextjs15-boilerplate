import React from "react";
import { Skeleton, TableCell, TableRow } from "@mui/material";

const skeletonRows = Array.from({ length: 5 });

export default function SkeletonLoadingTable({ headers }) {
  return skeletonRows.map((_, rowIndex) => (
    <TableRow
      key={rowIndex}
    >
      {headers.map((header, colIndex) => (
        <TableCell key={colIndex}>
          <Skeleton />
        </TableCell>
      ))}
    </TableRow>
  ));
}
