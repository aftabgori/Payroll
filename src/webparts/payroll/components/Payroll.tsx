import * as React from "react";
import styles from "./Payroll.module.scss";
import { IPayrollProps } from "./IPayrollProps";
import {
  Box,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,

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
  payrollIdDetail: number;
  payrollResponseLength: number;
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
  payrollItem: {
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
    fileUrl:string,
    earnings:string,
    taxes:string,
    deductions:string,
    netpay:string,
    paycheckOption:string,
    paycheckType:string,
    issueDate:string
  };
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
      fileUrl:string,
      earnings:string,
      taxes:string,
      deductions:string,
      netpay:string,
      paycheckOption:string,
      paycheckType:string,
      issueDate:string
    }
  ];
  mainEarnings:[{
    paycheckNumber:number;
    beginDate:string;
    endDate:string;
    reason:string;
    employeeRecord:string;
    benefitRecord:string;
    salaryHours:string;
    salaryRate:string;
    salaryEarnings:string;
    hourlyHours:string;
    hourlyRate:string;
    hourlyEarnings:string;
    hourlyRateCode:string;
    overtimeHours:string;
    overtimeEarnings:string;
    overtimeRate:string;
    overtimeRateCode:string;
    rateUsed:string;
    state:string;
    shift:string;
    locality:string;
    shiftRate:string;
  }];
  secondaryEarnings:[{
    paycheckNumber:number;
    code:number;
    description:string;
    rateUsed:string;
    hours:number;
    amount:number;
    rate:number;
    source:string;
  }];
  taxes:[{
    paycheckNumber:number;
    taxEntity:string;
    state:string;
    resident:string;
    locality:string;
    localityName:string;
    taxClass:string;
    taxableGross:number;
    taxAmount:number;
  }];
  deductions:[{
    paycheckNumber:number;
    deductionCode:string;
    description:string;
    class:string;
    amount:number;
    calculatedBase:string;
  }];
  netPay:[{
    paycheckNumber:number;
    checkAdviceNumber:number;
    accountType:string;
    bankIds:string;
    accountNumber:number;
    amount:number;
  }]
}

export default class Payroll extends React.Component<
  IPayrollProps,
  IPayrollState
> {
  public constructor(props: IPayrollProps, state: IPayrollState) {
    super(props);

    this.state = {
      isLoading: true,
      payrollIdDetail: 0,
      payrollResponseLength: 0,
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
      payrollItem:
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
          fileUrl:"",
          earnings:"",
          taxes:"",
          deductions:"",
          netpay:"",
          paycheckOption:"",
          paycheckType:"",
          issueDate:""
        },
      
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
          fileUrl:"",
          earnings:"",
          taxes:"",
          deductions:"",
          netpay:"",
          paycheckOption:"",
          paycheckType:"",
          issueDate:""
        }],
     mainEarnings :[
        {
          paycheckNumber:0,
          beginDate:"",
          benefitRecord:"",
          endDate:"",
          reason:"",
          employeeRecord:"",
          salaryRate:"",
          salaryHours:"",
          hourlyHours:"",
          salaryEarnings:"",
          hourlyEarnings:"",
          hourlyRate:"",
          overtimeHours:"",
          hourlyRateCode:"",
          overtimeRate:"",
          overtimeEarnings:"",
          rateUsed:"",
          overtimeRateCode:"",
          shift:"",
          state:"",
          shiftRate:"",
          locality:""
        }
      ]
      ,
      secondaryEarnings:[
        {
          paycheckNumber:0,
          code:0,
          rateUsed:"",
          description:"",
          amount:0,
          hours:0,
          source:"",
          rate:0,
        }
      ],
      taxes:[{
        paycheckNumber:0,
    taxEntity:"",
    state:"",
    resident:"",
    locality:"",
    localityName:"",
    taxClass:"",
    taxableGross:0,
    taxAmount:0,
    }],
    deductions:[{
      paycheckNumber:0,
      deductionCode:"",
      description:"",
      class:"",
      amount:0,
      calculatedBase:"",
    }],
    netPay:[{
      paycheckNumber:0,
      checkAdviceNumber:0,
      accountType:"",
      bankIds:"",
      accountNumber:0,
      amount:0
   }]


    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleCreatedDateChange = this.handleCreatedDateChange.bind(this);
    this.handleDetailClick = this.handleDetailClick.bind(this);
  }

  public handleBack() {
    this.setState({ payrollIdDetail: 0 });
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
          {this.state.payrollIdDetail == 0 ? (
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
                        label="Pay Period End Date"
                        inputFormat="MM/DD/YYYY"
                        value={this.state.searchPayPeriodEndDate}
                        onChange={this.handleCreatedDateChange}
                        renderInput={(params) => <TextField1 {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
               

                
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="demo-simple-select-label">
                        Off Cycle?
                      </InputLabel>
                      <Select
                        className={styles["MuiOutlinedInput-root"]}
                        onChange={(event) => {
                          this.setState({
                            searchOffCycle: event.target.value.toString(),
                          });
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Off Cycle?"
                        value={this.state.searchOffCycle}
                        placeholder="Off Cycle?"
                        // onChange={handleChange}
                      >
                        <MenuItem value={"N"}>No</MenuItem>
                        <MenuItem value={"Y"}>Yes</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
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

              </div>
              <div className={styles["disp-flex-row2"]}>
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
                <div>
                  <Button onClick={this.handleSearch} variant="contained">
                    Search
                  </Button>
                </div>

              </div>
              <br />
              {/* Employee DataTable */}
              <div>
                {this.state.payrollResponseLength > 0 ? (
                  <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Payslip
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
                              Paycheck Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Employee ID
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Name
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.items.map((row) => {
                            return (
                              <TableRow
                                onClick={() => this.handleDetailClick(row.paycheckNumber)}
                                className={styles.tableRow}
                                key={row.employeeId}
                              >
                                {/* <TableCell component="th" scope="row" /> */}
                                <TableCell className={styles["MuiTableCell-bodyImg"]}>
                              {
                                <div className={styles.ImgCenter}>
                                  <a target="_blank" rel="noreferrer" href={row.fileUrl}>
                                    <img className={styles.centerImg} src="https://globalmindsbiz.sharepoint.com/sites/Peoplesoft/Shared%20Documents/downloadIcon.png" />
                                  </a>
                              </div>
                              }
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
                                  {new Date(
                                    row.payPeriodEndDate
                                  ).toLocaleDateString("en-GB")}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.offCycle}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.pageNbr}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.lineNbr}
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
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.paycheckNumber}
                                </TableCell>
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
            <div>Tabs for Earnings, deductions and taxes</div>
          )}
        </div>
      </>
    );
  }
  

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
      queryString += "&paygroup=" + this.state.searchPayGroup;
    }

    if (this.state.searchPayPeriodEndDate) {
      queryString += "&payperiodenddate=" + this.state.searchPayPeriodEndDate.format('MM-DD-YYYY');
    }

    if (this.state.searchOffCycle != "") {
      queryString += "&offcycle=" + this.state.searchOffCycle;
    }

    if (this.state.searchLineNbr != "") {
      queryString += "&linenbr=" + this.state.searchLineNbr;
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
    if(this.state.searchPageNbr!=""){
      queryString += "&pageNbr=" + this.state.searchPageNbr;
    }
    await axios.get(queryString).then((response) => {
      // debugger;
      this.setState({
        items: response.data,
        payrollResponseLength: response.data.length,
      });
    });
  }
  public async handleDetailClick(payCheckNo: any){
    let newArray = this.state.items.filter(function (el: any) {
      return el.paycheckNumber == payCheckNo;
     });
     let queryStringTaxes =
    "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/GetTaxDeduction/" +
     payCheckNo;
     let queryStringMainEarnings =
    " https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/GetMainEarnings/" +
     payCheckNo;
     let queryStringSecondaryEarnings =
    "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/GetSecondaryEarnings/" +
     payCheckNo;
     let queryStringDeductions =
    "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/GetDeduction/" +
     payCheckNo;
     let queryStringNetPay =
    "https://peoplesoftservice20221228200557.azurewebsites.net/api/PeopleSoft/GetNetPay/" +
     payCheckNo;

    await axios.get(queryStringMainEarnings).then((response) => {
      // debugger;
      this.setState({
        mainEarnings: response.data,

      });
    });
    await axios.get(queryStringDeductions).then((response) => {
      // debugger;
      this.setState({
        deductions: response.data,

      });
    });
    await axios.get(queryStringSecondaryEarnings).then((response) => {
      // debugger;
      this.setState({
        secondaryEarnings: response.data,

      });
    });
    await axios.get(queryStringNetPay).then((response) => {
      // debugger;
      this.setState({
        netPay: response.data,

      });
    });
    await axios.get(queryStringTaxes).then((response) => {
      // debugger;
      this.setState({
        taxes: response.data,
        payrollItem: newArray[0],
        payrollIdDetail:payCheckNo
      });
    });


  }
}
