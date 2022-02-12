import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiTableCell from "@material-ui/core/TableCell";
import {
    Table, TableBody,
    TableContainer, TablePagination,
    TableHead, TableRow, Paper, TableFooter
}
    from '@material-ui/core';

const events = [
    { 'id': 1, 'name': 'contibuthon', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores' },
    { 'id': 2, 'name': 'hackathon', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores' },

]

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: '20px',
        marginBottom: '50px',
    },
    tableHeaderCell: {
        fontWeight: 'bolder',
        color: '#FFFFFF',
        fontSize: '14px',
        fontFamily: 'Axiforma',
    },
    tableRow: {
        backgroundColor: '#3F3F3F40',
    },
    tableRowCell: {
        color: '#FFFFFF !important',
        fontSize: '14px',
        fontFamily: 'Axiforma',
    },
    pagination: {
        color: 'white',
    },
    editRow: {
        fontSize: '12px',
        backgroundColor: '#B70569',
        color: '#FFFFFF',
        borderRadius: '2px',
        padding: '3px 15px',
        display: 'inline-block',
        marginTop: '1rem',
    },
});

function Programs() {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <div className="admin-greeting"> <p>All Programs</p></div>
            <div className="contribution-cards admin-cards">
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#3F3F3F99' }}>
                            <TableRow >
                                <TableCell className={classes.tableHeaderCell}>Program ID</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Program Name</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Start Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}>End Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="">
                            <TableRow>
                                <TableCell colSpan={6}></TableCell>
                            </TableRow>
                            {events.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map((row) => (
                                <TableRow
                                    key={row.id}
                                    className={classes.tableRow}
                                >
                                    <TableCell className={classes.tableRowCell}>{row.id}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.name}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.startTime}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.endTime}</TableCell>
                                    <TableCell className={classes.tableRowCell, classes.editRow}>
                                        Edit</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="center" colSpan={6}>
                                    <TablePagination
                                        rowsPerPageOptions={[3, 5, 10]}
                                        component="div"
                                        count={events.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                        className={classes.pagination}
                                        labelRowsPerPage={"Items Selected:"}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
}

export default Programs;