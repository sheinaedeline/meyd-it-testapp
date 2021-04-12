/*
Making a new Project is in 3 steps. Step 1 involves 
getting the required tags and picture for the project
*/

import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../src/utils/theme";
import { ThemeProvider } from "@material-ui/styles";
import { Button, Typography, Box, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

const useStyles = makeStyles({
  root: {
    color: "#8460C2",
  },
  box: {
    width: "94%",
    align: "center",
    display: "block",
    margin: "0 auto",
    textAlign: "center",
    height: "150px",
  },
  centered: {
    textAlign: "center",
    display: "block",
    margin: "0 auto",
  },
  tag: {
    borderRadius: "25px",
    color: "#ffffff",
    backgroundColor: "#8460c2",
    margin: "8px",
  },
});

const Part1 = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const tick = () => {
    return <CheckIcon />;
  };

  const items = [{}, {}, {}, {}];

  return (
    <div>
      <Box border={1} classes={{ root: classes.box }} borderColor="#C2B0E1">
        <Typography
          classes={{ root: classes.centered }}
          style={{ color: "#8460C2", marginTop: "6vh" }}
        >
          Add an image of what you want made to start defining
          <br />
          <Button classes={{ root: classes.root }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              classes={{ root: classes.root }}
            >
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>{" "}
            <Typography color="#8460C2">&nbsp;&nbsp;UPLOAD</Typography>
          </Button>
        </Typography>
      </Box>

      <Typography
        align="center"
        style={{
          margin: "6vh",
        }}
      >
        or start adding tags right away
      </Typography>

      <Box padding="30px" display="inline-block">
        <Chip
          classes={{ root: classes.tag }}
          label="School Graduation"
          onClick={handleClick}
        />
        <Chip
          classes={{ root: classes.tag }}
          label="Princess Style"
          onClick={handleClick}
        />

        <Button
          style={{
            borderRadius: "25px",
            color: "#8460C2",
            flexWrap: "wrap",
            flex: "1",
          }}
        >
          <AddIcon />
          &nbsp;&nbsp;FIND MORE
        </Button>
      </Box>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Masonry gutter="100" className={classes.masonryContainer}>
          {items.map((item, i) => (
            <Chip
              onClick={tick}
              style={{
                backgroundColor: "#8460C2",
                padding: "3px",
                marginBottom: "10px",
                height: "50vh",
                width: "23vw",
                borderRadius: "0px",
              }}
            >
              <CheckIcon />
            </Chip>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Part1;
