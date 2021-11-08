import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiTableCell from "@material-ui/core/TableCell";
import {
    Table, TableBody,
    TableContainer, TablePagination,
    TableHead, TableRow, Paper, TableFooter
}
    from '@material-ui/core';

const users = [
    { 'id': 1, 'username': 'maryam', 'email': 'maryam@maryam.com', 'total': '12' },
    { 'id': 2, 'username': 'ola', 'email': 'ola@ola.com', 'total': '13' },
    { 'id': 3, 'username': 'elizabeth', 'email': 'oal@ola.com', 'total': '14' },
    { 'id': 4, 'username': 'olu', 'email': 'olu@o.com', 'total': '16' },
    { 'id': 5, 'username': 'esse', 'email': 'esse@ol.com', 'total': '22' },
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
    }
});

function Users() {
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
            <div className="admin-greeting"> <p>My Users</p></div>
            <div className="contribution-cards admin-cards">
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#3F3F3F99' }}>
                            <TableRow >
                                <TableCell className={classes.tableHeaderCell}>User ID</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Username</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Total Contributions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="">
                            <TableRow>
                                <TableCell colSpan={4}></TableCell>
                            </TableRow>
                            {users.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map((row) => (
                                <TableRow
                                    key={row.id}
                                    className={classes.tableRow}
                                >
                                    <TableCell className={classes.tableRowCell}>{row.id}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.username}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.email}</TableCell>
                                    <TableCell className={classes.tableRowCell}>
                                        {row.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="center" colSpan={4}>
                                    <TablePagination
                                        rowsPerPageOptions={[3, 5, 10]}
                                        component="div"
                                        count={users.length}
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

export default Users;