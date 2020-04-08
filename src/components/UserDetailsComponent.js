import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Grid, Button, Typography, Dialog, IconButton }
    from '@material-ui/core';
import './../static/css/UserDetailsComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import UserService from './../services/UserService';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment/moment.js';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 300,
        borderTopWidth: 1,

    },
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

class UserDetailsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [],
            selectedDate: new Date(),
            open: false,
            selectedUser: {},
            activityPeriods: []
        }
    }

    handleClickOpen = (selectedUser) => {
        console.log(this.state.selectedDate);
        console.log("im in handleclick open");
        var selectedMonth = this.state.selectedDate.getMonth();
        var selectedDate = this.state.selectedDate.getDate();
        var selectedYear = this.state.selectedDate.getFullYear();
        var activityPeriods = selectedUser.activity_periods;
        var i;
        var activityPeriodsMatched = [];
        for (i = 0; i < activityPeriods.length; i++) {
            var activityDate = moment(activityPeriods[i].start_time, 'MMM DD YYYY HH:mmA');
            if (activityDate.month() === selectedMonth && activityDate.year() === selectedYear && activityDate.date() === selectedDate) {
                activityPeriodsMatched.push(activityPeriods[i]);
            }
        }
        this.setState({ open: true, selectedUser: selectedUser, activityPeriods: activityPeriodsMatched })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    componentDidMount() {
        this.fetchUserDetails();
    }

    fetchUserDetails = () => {
        UserService.fetchUserDetails()
            .then((res) => {
                this.setState({
                    members: res.data
                })

            });
    }

    handleDateChange = (e) => {
        this.setState({
            selectedDate: e
        })

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={"dateStyle"}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container >
                            <KeyboardDatePicker
                                disableToolbar
                                disableFuture
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Pick User Date"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
                <TableContainer >
                    <Table border="2px solid black"  >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.members.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.real_name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button variant="contained" color="primary" onClick={() => this.handleClickOpen(row)}>
                                            Get Activity Data
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Dialog onClose={() => this.handleClose()} aria-labelledby="customized-dialog-title" open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={() => this.handleClose()}>
                            <b>User Activity Period</b>
                        </DialogTitle>
                        <DialogContent dividers>
                            {this.state.activityPeriods.length > 0 ?
                                <div className="ActivityTableStyle">
                                    <Table border="2px solid black"  >
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="center">Start Time</StyledTableCell>
                                                <StyledTableCell align="center">End Time</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.activityPeriods.map((activityPeriod) => (
                                                <StyledTableRow >
                                                    <StyledTableCell align="center">{activityPeriod.start_time}</StyledTableCell>
                                                    <StyledTableCell align="center">{activityPeriod.end_time}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                :
                                " No User Actvity Data Found For the Selected Date :\n " + moment(this.state.selectedDate).format("ddd, MMM Do YYYY ")
                            }
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(UserDetailsComponent);