import * as React from "react";
import styles from "./Payroll.module.scss";
import { IPayrollProps } from "./IPayrollProps";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
// import { Label } from 'office-ui-fabric-react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper/";
import axios from "axios";

import FormControl from "@mui/material/FormControl";
// import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField1 from "@mui/material/TextField";
import { Dayjs } from "dayjs";
// import { filter } from "lodash";
// import LabTabs from "./EmployeeDetails";

export interface IPayrollState {
  isLoading: boolean;
  empIdDetail: number;
  employeeResponseLength: number;
  searchCompany: string;
  searchPayGroup: string;
  searchPayPeriodEndDate: Dayjs;
  searchOffCycle: string;
  searchPageNbr: string;
  searchLineNbr: string;
  searchSeparateCheckNbr: string;
  SearchPaycheckNumber: string;
  SearchEmpId: string;
  SearchName: string;

  items: [
    {
      employeeId: 0,
      company: string,
      payGroup: string,
      payPeriodEndDate: string,
      offCycle: string,
      paycheckNumber: string,
      name: string,
      pageNbr: string,
      lineNbr: string,
      seperateCheckNbr: string,
      formIdentification: string,
    }
  ];
}

export default class Payroll extends React.Component<
  IPayrollProps,
  IPayrollState
> {
  public constructor(props: IPayrollProps, state: IPayrollState) {
    super(props);

    this.state = {
      isLoading: true,
      empIdDetail: 0,
      employeeResponseLength: 0,
      searchCompany: "",
      searchPayGroup: "",
      searchPayPeriodEndDate: null,
      searchOffCycle: "",
      searchPageNbr: "",
      searchLineNbr: "",
      searchSeparateCheckNbr: "",
      SearchPaycheckNumber: "",
      SearchEmpId: "",
      SearchName: "",

      items: [
        {
          employeeId: 0,
          company: "",
          payGroup: "",
          payPeriodEndDate: "",
          offCycle: "",
          paycheckNumber: "",
          name: "",
          pageNbr: "",
          lineNbr: "",
          seperateCheckNbr: "",
          formIdentification: "",
        },
      ],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  public handleBack() {
    this.setState({ empIdDetail: 0 });
  }

  public render(): React.ReactElement<IPayrollProps> {
    return (
      <>
        {/* <div>
          <h1 className={styles.heading}>Employee Data</h1>
        </div> */}

        {/* <div>
          <EmployeeDetails  empDetail={this.state.itemEmployee} assignmentDetail={this.state.assignmentItems} /> 
        </div> */}
        <div className={styles.mainDivMargin}>
          {this.state.empIdDetail == 0 ? (
            <div>
              <div className={styles["disp-flex"]}>
                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchCompany: event.target.value });
                    }}
                    value={this.state.searchCompany}
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchPayGroup: event.target.value });
                    }}
                    value={this.state.searchPayGroup}
                    id="outlined-basic"
                    label="Pay Group"
                    variant="outlined"
                  />
                </div>

                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        InputProps={{ style: { height: "43px" } }}
                        // className={styles["MuiInputBase-root"]}
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={this.state.searchPayPeriodEndDate}
                        onChange={this.handleCreatedDateChange}
                        renderInput={(params) => <TextField1 {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchOffCycle: event.target.value });
                    }}
                    value={this.state.searchOffCycle}
                    id="outlined-basic"
                    label="Off Cycle"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchPageNbr: event.target.value });
                    }}
                    value={this.state.searchPageNbr}
                    id="outlined-basic"
                    label="Page Number"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchLineNbr: event.target.value });
                    }}
                    value={this.state.searchLineNbr}
                    id="outlined-basic"
                    label="Line Number"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchSeparateCheckNbr: event.target.value });
                    }}
                    value={this.state.searchSeparateCheckNbr}
                    id="outlined-basic"
                    label="Separate Check Number"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ SearchPaycheckNumber: event.target.value });
                    }}
                    value={this.state.SearchPaycheckNumber}
                    id="outlined-basic"
                    label="PayCheck Number"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ SearchEmpId: event.target.value });
                    }}
                    value={this.state.SearchEmpId}
                    id="outlined-basic"
                    label="Employee Id"
                    variant="outlined"
                  />
                </div>

                <div>
                  {/* <Label className={styles.label}>Employee ID:</Label> */}
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ SearchName: event.target.value });
                    }}
                    value={this.state.SearchName}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </div>

                {/* <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        className={styles["MuiOutlinedInput-root"]}
                        onChange={(event) => {
                          this.setState({
                            searchGender: event.target.value.toString(),
                          });
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Gender"
                        value={this.state.searchGender}
                        placeholder="Gender"
                        // onChange={handleChange}
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div> */}

                {/* <div>
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchName: event.target.value });
                    }}
                    value={this.state.searchName}
                    id="outlined-basic"
                    label="Employee Name"
                    variant="outlined"
                  />
                </div> */}

                {/* <div className={styles["disp-flex-row2"]}> */}

                {/* <div>
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchEmail: event.target.value });
                    }}
                    value={this.state.searchEmail}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </div> */}

                {/* <div>
                  <TextField
                    inputProps={{
                      style: {
                        height: "6px",
                      },
                    }}
                    onChange={(event) => {
                      this.setState({ searchMobile: event.target.value });
                    }}
                    value={this.state.searchMobile}
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                  />
                </div> */}

                <div>
                  <Button onClick={this.handleSearch} variant="contained">
                    Search
                  </Button>
                </div>
                {/* </div> */}
              </div>
              <br />
              {/* Employee DataTable */}
              <div>
                {this.state.employeeResponseLength > 0 ? (
                  <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Employee Id
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Company
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Pay Group
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Pay Period EndDate
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Off Cycle
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              PayCheck Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Name
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Page Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Line Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Separate Check Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Form Indentification
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Line Number
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.items.map((row) => {
                            return (
                              <TableRow
                                // onClick={() => this.handleClick(row.employeeId)}
                                className={styles.tableRow}
                                key={row.employeeId}
                              >
                                {/* <TableCell component="th" scope="row" /> */}
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.employeeId}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.company}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.payGroup}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.paycheckNumber}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.offCycle}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {new Date(
                                    row.payPeriodEndDate
                                  ).toLocaleDateString("en-GB")}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.lineNbr}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.pageNbr}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.seperateCheckNbr}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.formIdentification}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                ) : (
                  <div className={styles.noData}>
                    <h4>No data available,please search to get data</h4>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>abcd</div>
          )}
        </div>
      </>
    );
  }
  // public async handleClick(empId: any) {
  //   let queryString =
  //     "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/" +
  //     empId;

  //   let newArray = this.state.items.filter(function (el: any) {
  //     return el.employeeId == empId;
  //   });
  //   await axios.get(queryString).then((response) => {
  //     // debugger;
  //     this.setState({
  //       assignmentItems: response.data,
  //       itemEmployee: newArray[0],
  //       empIdDetail: empId,
  //     });
  //   });
  // }

  public handleCreatedDateChange(newValue: Dayjs) {
    debugger;
    this.setState({ searchPayPeriodEndDate: newValue });
  }

  public async handleSearch() {
    // debugger;

    let queryString =
      "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/SearchPayroll?";
    if (this.state.searchCompany != "") {
      queryString += "&company=" + this.state.searchCompany;
    }

    if (this.state.searchPayGroup != "") {
      queryString += "&payGroup=" + this.state.searchPayGroup;
    }

    if (this.state.searchPayPeriodEndDate) {
      queryString += "&payPeriodEndDate=" + this.state.searchPayPeriodEndDate;
    }

    if (this.state.searchOffCycle != "") {
      queryString += "&offCycle=" + this.state.searchOffCycle;
    }

    if (this.state.searchLineNbr != "") {
      queryString += "&lineNbr=" + this.state.searchLineNbr;
    }

    if (this.state.searchSeparateCheckNbr != "") {
      queryString += "&seperateCheckNbr=" + this.state.searchSeparateCheckNbr;
    }

    if (this.state.SearchPaycheckNumber != "") {
      queryString += "&paycheckNumber=" + this.state.SearchPaycheckNumber;
    }

    if (this.state.SearchEmpId != "") {
      queryString += "&employeeId=" + this.state.SearchEmpId;
    }

    if (this.state.SearchName != "") {
      queryString += "&name=" + this.state.SearchName;
    }

    await axios.get(queryString).then((response) => {
      // debugger;
      this.setState({
        items: response.data,
        employeeResponseLength: response.data.length,
      });
    });
  }
}
