import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Boomani_Trans6', 'Bangalore', 'Email', '26/05/2019', 'Ashish Sanjeev'),
  createData('Boomani_Trans12', 'Bangalore', 'Voice', '12/05/2019', 'Daniel K'),
  createData('Boomani_Trans6', 'Bangalore', 'Voice', '13/05/2019', 'Venkatraman Narayan'),
  createData('Boomani_Trans4', 'Bangalore', 'Voice', '13/05/2019', 'Mohammed Khizar'),
  createData('Boomani_Trans3', 'Bangalore', 'Voice', '13/05/2019', 'Esha Savla'),
];

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


function Audit() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value=""
        
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Locations"
        className={classes.textField}
        
        
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select locations"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Product"
        className={classes.textField}
        
        
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select product"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </form>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Tansaction ID</TableCell>
              <TableCell align="right">Locations</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Agent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Audit;