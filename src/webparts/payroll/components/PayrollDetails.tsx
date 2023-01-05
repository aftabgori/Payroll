import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Label } from 'office-ui-fabric-react';
import styles from "./Payroll.module.scss";
import {Button} from "@material-ui/core";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper/";


export default function LabTabs(props: any) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Paycheck Earnings" value="1" />
            <Tab label="Paycheck Taxes" value="2" />
            <Tab label="Paycheck Deductions" value="3" />
          </TabList>
      </Box> 
        <TabPanel value="1">
        <div className={styles.empDetails}>
          <Label className={styles.secondLabel}>  {'Employee Id: '+ ' ' + props.payrollItem['employeeId']} </Label> 
           
          <br />
          <div className={styles.emp}>
          <div>{'Company: ' + ' ' + props.payrollItem['company']}<br/><br/>
          </div> 
          <div>{'Pay Group: ' + ' ' + props.payrollItem['payGroup']}<br /><br />
          </div>  
          <div>{'Pay Period End: ' + ' ' + new Date(props.payrollItem['payPeriodEndDate']).toLocaleDateString("en-GB")}<br /><br />
          </div>
          <div>{'Page: ' + ' ' + props.payrollItem['pageNbr']}<br /><br />
          </div>
          <div>{'Line: ' + ' ' + props.payrollItem['lineNbr']}<br /><br />
          </div>
          </div>
          <br />
          <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Paycheck Information and Totals</Label>
        </AccordionSummary>
        <AccordionDetails>
                  <div className={styles.paychekToatls}>

                    <div className={styles.information}>{<Label className={styles.secondLabel}>Information</Label>}<br />

                      {'Paycheck Status: ' + ' Confirmed'}<br />
                      {'Paycheck Option: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Issue Date: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Paycheck Number: ' + ' ' + new Date(props.payrollItem['issueDate']).toLocaleDateString("en-GB")}<br />
                      {'Paycheck Type: ' + ' ' + props.payrollItem['paycheckType']}<br />
                    </div>
                    <div className={styles.totals}>{<Label className={styles.secondLabel}>Totals</Label>}<br />

                      {'Earnings: ' + ' ' + props.payrollItem['earnings']}<br />
                      {'Taxes: ' + ' ' + props.payrollItem['taxes']}<br />
                      {'Deductions: ' + ' ' + props.payrollItem['deductions']}<br />
                      {'Net Pay: ' + ' ' + props.payrollItem['netPay']}<br />
                    </div>

                  </div>
        </AccordionDetails>
      </Accordion></div>

      <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Earnings</Label>
        </AccordionSummary>
        <AccordionDetails>
        <div className={styles.emp}>
        <div>{'Begin Date: ' + ' ' + new Date(props.mainEarnings[0]['beginDate']).toLocaleDateString("en-GB")}<br/><br/>
          </div> 
          <div>{'End Date: ' + ' ' + new Date(props.mainEarnings[0]['endDate']).toLocaleDateString("en-GB")}<br /><br />
          </div>  
          <div>{'Reason: ' + ' ' + props.mainEarnings[0]['reason']}<br /><br />
          </div>
          <div>{'Employee Record: ' + ' ' +props.mainEarnings[0]['employeeRecord']}<br /><br />
          </div>
          <div>{'Benifit Record: ' + ' ' + props.mainEarnings[0]['benefitRecord']}<br /><br />
          </div>
        </div><br/>
                  <div className={styles.paychekToatls}>

                    <div className={styles.earningbox}>
                      {<Label className={styles.secondLabel}>Salaried</Label>}<br />

                      {'Hours: ' + ' ' + props.mainEarnings[0]['salaryHours']}<br />
                      {'Rate: ' + ' ' + props.mainEarnings[0]['salaryRate']}<br />
                      {'Earnings: ' + ' ' +props.mainEarnings[0]['salaryEarnings']}<br />
                    </div>
                    <div className={styles.earningbox}>{<Label className={styles.secondLabel}>Hourly</Label>}<br />

                      {'Hours: ' + ' ' + props.mainEarnings[0]['hourlyHours']}<br />
                      {'Rate: ' + ' ' + props.mainEarnings[0]['hourlyRate']}<br />
                      {'Earnings: ' + ' ' + props.mainEarnings[0]['hourlyEarnings']}<br />
                      { (props.mainEarnings[0]['hourlyRateCode'])?'RateCode: ' + ' ' +props.mainEarnings[0]['hourlyRateCode']:'RateCode: ' + ' '}<br />
                    </div>
                    <div className={styles.earningbox}>{<Label className={styles.secondLabel}>Overtime</Label>}<br />

                      {'Hours: ' + ' ' + props.mainEarnings[0]['overtimeHours']}<br />
                      {'Rate: ' + ' ' + props.mainEarnings[0]['overtimeRate']}<br />
                      {'Earnings: ' + ' ' + props.mainEarnings[0]['overtimeEarnings']}<br />
                      { (props.mainEarnings[0]['overtimeRateCode'])?'Rate Code: ' + ' ' +props.mainEarnings[0]['overtimeRateCode']:'Rate Code: ' + ' ' }<br />
                    </div>

                  </div><br/>
                  <div className={styles.emp}>
        <div>{'Rate Used: ' + ' ' + props.mainEarnings[0]['rateUsed']}<br/><br/>
          </div> 
          <div>{'Shift: ' + ' ' + props.mainEarnings[0]['shift']}<br /><br />
          </div>  
          <div>{  (props.mainEarnings[0]['shiftRate'])?'Shift Rate: ' + ' '+props.mainEarnings[0]['shiftRate']:'Shift Rate: ' + ' '}<br />
          </div>
          <div>{ (props.mainEarnings[0]['state'])?'State: ' + ' '+props.mainEarnings[0]['state']:+'State: ' + ' '}<br />
          </div>
          <div>{ (props.mainEarnings[0]['locality'])?'Locality: ' + ' '+props.mainEarnings[0]['locality']:'Locality: ' + ' '}<br />
          </div> 
        </div>
        </AccordionDetails>
      </Accordion></div>
          

      <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Other Earnings</Label>
        </AccordionSummary>
        <AccordionDetails>
        <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Code
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Description
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Rate Used
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Hours
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                             Rate
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Amount
                            </TableCell> 
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Source
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.secondaryEarnings.map((row:any) => {
                            return (
                              
                              <TableRow
                                
                                className={styles.tableRow}
                                key={row.code}
                              >                                                             
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.code}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.description}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.rateUsed}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.hours}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.rate}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.amount}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.source}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

        </AccordionDetails>
      </Accordion>
      </div>


          <div>
            <Button onClick={props.handleBack} variant="contained">
                Back
            </Button>
        
        </div>
        </div>
        </TabPanel>

        <TabPanel value="2">
        <div className={styles.empDetails}>
        <Label className={styles.secondLabel}>  {'Employee Id: '+ ' ' + props.payrollItem['employeeId']} </Label> 
           
          <br />
          <br />
          <div className={styles.emp}>
          <div>{'Company: ' + ' ' + props.payrollItem['company']}<br/><br/>
          </div> 
          <div>{'Pay Group: ' + ' ' + props.payrollItem['payGroup']}<br /><br />
          </div>  
          <div>{'Pay Period End: ' + ' ' +  new Date(props.payrollItem['payPeriodEndDate']).toLocaleDateString("en-GB")}<br /><br />
          </div>
          <div>{'Page: ' + ' ' + props.payrollItem['pageNbr']}<br /><br />
          </div>
          <div>{'Line: ' + ' ' + props.payrollItem['lineNbr']}<br /><br />
          </div>
          </div>
          <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Paycheck Information and Totals</Label>
        </AccordionSummary>
        <AccordionDetails>
                  <div className={styles.paychekToatls}>

                    <div className={styles.information}>{<Label className={styles.secondLabel}>Information</Label>}<br />

                      {'Paycheck Status: ' + ' Confirmed'}<br />
                      {'Paycheck Option: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Issue Date: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Paycheck Number: ' + ' ' + new Date(props.payrollItem['issueDate']).toLocaleDateString("en-GB")}<br />
                      {'Paycheck Type: ' + ' ' + props.payrollItem['paycheckType']}<br />
                    </div>
                    <div className={styles.totals}>{<Label className={styles.secondLabel}>Totals</Label>}<br />

                      {'Earnings: ' + ' ' + props.payrollItem['earnings']}<br />
                      {'Taxes: ' + ' ' + props.payrollItem['taxes']}<br />
                      {'Deductions: ' + ' ' + props.payrollItem['deductions']}<br />
                      {'Net Pay: ' + ' ' + props.payrollItem['netPay']}<br />
                    </div>

                  </div>
        </AccordionDetails>
      </Accordion></div>
      <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Taxes</Label>
        </AccordionSummary>
        <AccordionDetails>
        <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Tax Entity
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              State
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Resident
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Locality
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Locality Name
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Tax Class
                            </TableCell> 
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Taxable Gross
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Tax Amount
                            </TableCell>                           
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.taxItems.map((row:any) => {
                            return (
                              
                              <TableRow
                                
                                className={styles.tableRow}
                                key={row.paycheckNumber}
                              >                                                             
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.taxEntity}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.state}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.resident}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.locality}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.localityName}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.taxClass}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.taxableGross}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {(row.taxAmount)?row.taxAmount:""}
                                </TableCell>

                                
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

        </AccordionDetails>
      </Accordion>
      </div>



        </div>
        <br />
        <div>
        <Button onClick={props.handleBack} variant="contained">
            Back
        </Button>
        
        </div>
        </TabPanel>
        <TabPanel value="3">
        <div className={styles.empDetails}>
          <Label className={styles.secondLabel}>  {'Employee Id: '+ ' ' + props.payrollItem['employeeId']} </Label> 
           
          <br />
          <div className={styles.emp}>
          <div>{'Company: ' + ' ' + props.payrollItem['company']}<br/><br/>
          </div> 
          <div>{'Pay Group: ' + ' ' + props.payrollItem['payGroup']}<br /><br />
          </div>  
          <div>{'Pay Period End: ' + ' ' + new Date(props.payrollItem['payPeriodEndDate']).toLocaleDateString("en-GB")}<br /><br />
          </div>
          <div>{'Page: ' + ' ' + props.payrollItem['pageNbr']}<br /><br />
          </div>
          <div>{'Line: ' + ' ' + props.payrollItem['lineNbr']}<br /><br />
          </div>
          </div>
          <br />
          <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Paycheck Information and Totals</Label>
        </AccordionSummary>
        <AccordionDetails>
                  <div className={styles.paychekToatls}>

                    <div className={styles.information}>{<Label className={styles.secondLabel}>Information</Label>}<br />

                      {'Paycheck Status: ' + ' Confirmed'}<br />
                      {'Paycheck Option: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Issue Date: ' + ' ' + props.payrollItem['paycheckOption']}<br />
                      {'Paycheck Number: ' + ' ' + new Date(props.payrollItem['issueDate']).toLocaleDateString("en-GB")}<br />
                      {'Paycheck Type: ' + ' ' + props.payrollItem['paycheckType']}<br />
                    </div>
                    <div className={styles.totals}>{<Label className={styles.secondLabel}>Totals</Label>}<br />

                      {'Earnings: ' + ' ' + props.payrollItem['earnings']}<br />
                      {'Taxes: ' + ' ' + props.payrollItem['taxes']}<br />
                      {'Deductions: ' + ' ' + props.payrollItem['deductions']}<br />
                      {'Net Pay: ' + ' ' + props.payrollItem['netPay']}<br />
                    </div>

                  </div>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Deductions</Label>
        </AccordionSummary>
        <AccordionDetails>
        <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Deduction Code
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Description
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Class
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Amount
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Calculated Base
                            </TableCell>                            
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.deductions.map((row:any) => {
                            return (
                              <TableRow
                                
                                className={styles.tableRow}
                                key={row.deductionCode}
                              >                                                             
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.deductionCode}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.description}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.class}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.amount}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {(row.calculatedBase)? row.calculatedBase:""}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className={styles.accordianDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Label className={styles.secondLabel}> Net Pay Distribution</Label>
        </AccordionSummary>
        <AccordionDetails>
        <div>
                    <TableContainer component={Paper}>
                      <Table className={styles["MuiTable-root"]}>
                        <TableHead className={styles["MuiTableHead-root"]}>
                          <TableRow>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Check / Advice Number
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Account Type
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Bank ID
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Account Number 
                            </TableCell>
                            <TableCell className={styles["MuiTableCell-head"]}>
                              Amount
                            </TableCell>                            
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.netpay.map((row:any) => {
                            return (
                              
                              <TableRow
                                
                                className={styles.tableRow}
                                key={row.checkAdviceNumber}
                              >                                                             
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.checkAdviceNumber}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.accountType}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.bankId}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.accountNumber}
                                </TableCell>
                                <TableCell
                                  className={styles["MuiTableCell-body"]}
                                >
                                  {row.amount}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

        </AccordionDetails>
      </Accordion>
      </div>
          <div>
            <Button onClick={props.handleBack} variant="contained">
                Back
            </Button>
        
        </div>
        </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}