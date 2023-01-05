import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Label } from 'office-ui-fabric-react';
import styles from "./EmployeeData.module.scss";
import {Button} from "@material-ui/core";


export default function LabTabs(props: any) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  debugger;
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Employee Details" value="1" />
            <Tab label="Assignment Details" value="2" />
          </TabList>
      </Box> 
        <TabPanel value="1">
        <div className={styles.empDetails}>
          <Label className={styles.secondLabel}>  {props.itemEmployee['title']+ ' ' + props.itemEmployee['firstName']+ ' ' + props.itemEmployee['lastName']} </Label>
           
          <br />
          <div className={styles.emp}>
          <div>{'Employee Id: ' + ' ' + props.itemEmployee['employeeId']}<br/><br/>
          <div>{'Mobile: ' + ' ' + props.itemEmployee['mobile']}<br/><br />
          {'Gender: ' + ' ' + props.itemEmployee['gender']} <br /><br/>
          {'Joining Date: ' + ' ' + new Date(props.itemEmployee['employmentStartDate']).toLocaleDateString("en-GB") }
          </div>
          </div> 
          <div>{'Email: ' + ' ' + props.itemEmployee['email']}<br /><br />
            {'Address: ' + ' ' + props.itemEmployee['address']} <br/><br/>
            {'Birth Date: ' + ' ' + new Date( props.itemEmployee['birthDate']).toLocaleDateString("en-GB")} <br /><br />
            {(props.itemEmployee['employmentEndDate']) ? <div> {'Leaving Date: ' + ' ' + new Date(props.itemEmployee['employmentEndDate']).toLocaleDateString("en-GB") }</div> : <div></div>}
          </div>  
          </div>
          <br />

          <div>
            <Button onClick={props.handleBack} variant="contained">
                Back
            </Button>
        
        </div>
        </div>
        </TabPanel>

        <TabPanel value="2">
        <div className={styles.empDetails}>
          <Label className={styles.secondLabel}>  {props.itemEmployee['title']+ ' ' + props.itemEmployee['firstName']+ ' ' + props.itemEmployee['lastName']} </Label>
           
          <br />
          <div className={styles.emp}>
          <div>{'Assignment No: ' + ' ' + props.assignmentItems[0]['assignmentNumber']}<br/><br/>
          <div>
          {'Position: ' + ' ' + props.assignmentItems[0]['position']} <br /><br/>
          {'Location: ' + ' ' + props.assignmentItems[0]['location']} <br/><br/>
          {'Address: ' + ' ' + ( props.assignmentItems[0]['siteAddress']) }<br /><br />
          {'Expense Account: ' + ' ' + props.assignmentItems[0]['defaultExpenseAccount']}<br /><br />
          </div>
          </div> 
          
          <div>
            {'Job: ' + ' ' + props.assignmentItems[0]['job']}<br/><br />
            {'Supervisor: ' + ' ' +(props.assignmentItems[0]['supervisor'])}<br/> <br/>
            {'Style: ' + ' ' + ( props.assignmentItems[0]['style'])} <br /><br />
            {'Street: ' + ' ' + ( props.assignmentItems[0]['street'])} <br /><br />
          
          </div>  
          </div>
          <br />
          
        </div>
        <br />
        <div>
        <Button onClick={props.handleBack} variant="contained">
            Back
        </Button>
        
        </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}