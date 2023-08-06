import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { PersonType } from "@/types/person";

interface PersonTableProps {
  data: Array<PersonType>;
}

const PersonTable: React.FC<PersonTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>نام</TableCell>
            <TableCell>نام خانوادگی</TableCell>
            <TableCell align="center">وضعیت</TableCell>
            <TableCell align="center">اخرین تغییرات</TableCell>
            <TableCell align="center">کد ملی</TableCell>
            <TableCell>تحصیلات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((person: PersonType, index: number) => (
            <TableRow key={index}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.familyName}</TableCell>
              <TableCell align="center">
                {person.state === "active" ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <CancelIcon color="error" />
                )}
              </TableCell>
              <TableCell align="center">{person.lastModified}</TableCell>
              <TableCell align="center">{person.nationalCode}</TableCell>
              <TableCell>{person.education}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonTable;
