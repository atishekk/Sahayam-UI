import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import _ from 'lodash';
import { useSwitch } from '../contexts/switchContext';
const Post = (props) => {
  const samplePost = {
    name: 'NGO Name',
    ID: '1234',
    about:
      "Our NGO Lorem Ipsum is simply dummy text of the printing and \
      typesetting industry. Lorem Ipsum has been the industry's \
      standard dummy text ever since the 1500s, when an unknown \
      printer took a galley of type and scrambled it to make a \
      type specimen book. It has survived not only five centuries, \
      but also the leap into electronic typesetting, remaining \
      essentially unchanged. It was popularised in the 1960s \
      with the release of Letraset sheets containing Lorem ",
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
    publisher: 'publisher field',
    NGO: 'NGO 1',
    number: 9799666687,
    email: 'killme@gmail.com',
    location: 'delhi',
    volRequired: 15,
    volCurrent: 10,
    criteria: ['age above 18'],
    volunteers: _.range(1, 11)
  };

  const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 345,
    // },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: '#64dfdf'
    },
    postTitle: {
      fontSize: '23px',
      fontFamily: 'Lato',
      textTransform: 'uppercase',
      textAlign: 'left',
      marginBottom: '-7px',
      marginTop: '3px',
      transform: 'translate(0%,10%)'
    },
    subheader: {
      fontSize: '14px',
      textTransform: 'capitalize',
      textAlign: 'left',
      marginTop: '6px'
    },
    about: {
      textAlign: 'left',
      fontFamily: 'Lato light'
    },
    CardContent: {
      textAlign: 'left',
      fontFamily: 'lato'
    }
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const { dark } = useSwitch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const styles = {
    cardStyleDark: {
      backgroundColor: '#151728',
      marginBottom: '10px',
      color: '#eee'
    },
    cardStyleLight: {
      backgroundColor: '#fff',
      marginBottom: '10px'
    }
  };

  const [fav, setfav] = useState(false);

  return (
    <Card style={dark ? styles.cardStyleDark : styles.cardStyleLight}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" className={classes.avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon style={{ color: dark ? '#ddd' : '#111' }} />
          </IconButton>
        }
        title={<Typography className={classes.postTitle}>{samplePost.name}</Typography>}
        subheader={<Typography className={classes.subheader}>{samplePost.publisher}</Typography>}
      />

      <CardContent className={classes.about}>{samplePost.about}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* on click */}
          {fav ? (
            <FavoriteIcon style={{ color: '#ef476f' }} onClick={() => setfav(!fav)} />
          ) : (
            <FavoriteBorderIcon style={{ color: '#ef476f' }} onClick={() => setfav(!fav)} />
          )}
        </IconButton>
        <IconButton aria-label="add to favorites">
          {/* save post */}
          <BookmarkBorderIcon style={{ color: dark ? '#f8edeb' : '#000' }} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show description"
        >
          <ExpandMoreIcon style={{ color: dark ? '#fff' : '#000' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.CardContent}>
          Description : {samplePost.description}
        </CardContent>
      </Collapse>
    </Card>
  );

  return <div className="post w-100" id={props.id}></div>;
};

export default Post;
