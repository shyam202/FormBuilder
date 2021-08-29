import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import "./main.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 24,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    marginTop: "2em",
  },
  tableHead: {
    fontSize: "1.5em",
  },
  tableButton: {
    float: "right",
  },
  tableBody: {
    fontSize: "1.2em",
  },
});

const CreateNote = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.setFormObject({});
    props.setMode("create");
    props.setComponent("CustomForm");
  };

  const deleteNote = (index) => {
    props.editNote(index);
  };

  const editNote = (val, index) => {
    console.log(val);
    props.setMode("edit");
    props.setIndex(index);
    props.setFormObject(val);
    props.setComponent("CustomForm");
  };

  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Tobias",
    lastName: "Schlereth",
  };

  return (
    <>
      <div className="container">
        <form class="form">
          <input
            type="text"
            name="title"
            placeholder="Search Title"
            autoComplete="off"
          />
          <button type="button" onClick={handleClick}>
            {" "}
            Create New Form
          </button>
        </form>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.tableHead}>
                  Form Name
                </StyledTableCell>
                <StyledTableCell className={classes.tableHead}>
                  Created on
                </StyledTableCell>
                <StyledTableCell className={classes.tableHead}>
                  Created by
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.addItem &&
                props.addItem.map((val, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      className={classes.tableBody}
                      component="th"
                      scope="row"
                    >
                      {val.title}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableBody}
                      component="th"
                      scope="row"
                    >
                      {today}/{month}/{year}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableBody}
                      component="th"
                      scope="row"
                    >
                      {formatName(user)}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      className={classes.tableButton}
                    >
                      <div style={{ display: "flex" }}>
                        <button onClick={() => editNote(val, index)}>
                          <EditIcon className="editIcon" />
                        </button>
                        <button onClick={() => deleteNote(index)}>
                          <DeleteOutlineIcon className="deleteIcon" />
                        </button>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CreateNote;
