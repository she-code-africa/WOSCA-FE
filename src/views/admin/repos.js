import React from 'react';
import Header from '../../components/admin-head';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiTableCell from "@material-ui/core/TableCell";
import {
    Table, TableBody,
    TableContainer, TablePagination,
    TableHead, TableRow, Paper, TableFooter
}
    from '@material-ui/core';

const reposi = [
    { 'id': 1, 'username': 'maryam', 'link': 'github.com', 'status': 'accepted' },
    { 'id': 2, 'username': 'maryam', 'link': 'github.com', 'status': 'rejected' },
    { 'id': 3, 'username': 'elizabeth', 'link': 'github.com', 'status': 'accepted' },
    { 'id': 4, 'username': 'esse', 'link': 'github.com', 'status': 'pending' },
    { 'id': 5, 'username': 'esse', 'link': 'github.com', 'status': 'accepted' },
    { 'id': 6, 'username': 'elizabeth', 'link': 'github.com', 'status': 'accepted' },
    { 'id': 7, 'username': 'esse', 'link': 'github.com', 'status': 'pending' },
    { 'id': 8, 'username': 'esse', 'link': 'github.com', 'status': 'accepted' },
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
    statusRow: {
        fontSize: '12px',
        backgroundColor: '#FFFFFF',
        borderRadius: '2px',
        padding: '3px 10px',
        display: 'inline-block',
        marginTop: '1rem',
    },
    pagination: {
        color: 'white',
    }
});


function Repos() {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>All PRs</p></div>
                <div className="contribution-cards admin-cards">
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead style={{ backgroundColor: '#3F3F3F99' }}>
                                <TableRow >
                                    <TableCell className={classes.tableHeaderCell}>Repo ID</TableCell>
                                    <TableCell className={classes.tableHeaderCell}>Link</TableCell>
                                    <TableCell className={classes.tableHeaderCell}>Owner</TableCell>
                                    <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="">
                                <TableRow>
                                    <TableCell colSpan={4}></TableCell>
                                </TableRow>
                                {reposi.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map((row) => (
                                    <TableRow
                                        key={row.id}
                                        className={classes.tableRow}
                                    >
                                        <TableCell className={classes.tableRowCell}>{row.id}</TableCell>
                                        <TableCell className={classes.tableRowCell}>{row.link}</TableCell>
                                        <TableCell className={classes.tableRowCell}>{row.username}</TableCell>
                                        <TableCell className={classes.tableRowCell, classes.statusRow} style={{
                                            color:
                                                ((row.status === "accepted" && "green") ||
                                                    (row.status === "pending" && "blue") ||
                                                    (row.status === "rejected" && "red"))
                                        }}>
                                            {row.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell align="center" colSpan={4}>
                                        <TablePagination
                                            rowsPerPageOptions={[3, 5, 10]}
                                            component="div"
                                            count={reposi.length}
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
            </div>
        </React.Fragment>
    );
}

export default Repos;
