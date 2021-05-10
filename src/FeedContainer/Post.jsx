import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import _ from "lodash";
const Post = (props) => {
  const samplePost = {
    name: "Kill Me",
    ID: "1234",
    about: "Kill Me",
    description:
      "Lorem Ipsum is simply dummy text of the printing and \
      typesetting industry. Lorem Ipsum has been the industry's \
      standard dummy text ever since the 1500s, when an unknown \
      printer took a galley of type and scrambled it to make a \
      type specimen book. It has survived not only five centuries, \
      but also the leap into electronic typesetting, remaining \
      essentially unchanged. It was popularised in the 1960s \
      with the release of Letraset sheets containing Lorem \
      Ipsum passages, and more recently with desktop publishing \
      software like Aldus PageMaker including versions of Lorem Ipsum.",
    publisher: "lorem ipsum",
    NGO: "NGO 1",
    number: 9799666687,
    email: "killme@gmail.com",
    location: "delhi",
    volRequired: 15,
    volCurrent: 10,
    criteria: ["age above 18"],
    volunteers: _.range(1, 11),
  };

  const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 345,
    // },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <CheckCircleIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={samplePost.name}
        subheader={samplePost.publisher}
      />

      <CardContent>{samplePost.about}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* on click */}
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          {/* save post */}
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show description"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{samplePost.description}</CardContent>
      </Collapse>
    </Card>
  );

  return <div className="post w-100" id={props.id}></div>;
};

export default Post;
