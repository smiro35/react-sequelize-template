import React from 'react';
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
import Actions from './Actions';
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Person() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          // <IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>
        //   <IconButton aria-label="add to favorites">
        //   <FavoriteIcon />
        // </IconButton>

        <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
        }
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     Like Icon
        //   </Avatar>
        // }
        title="next pic sliders here"
        
      />
      <CardMedia
        className={classes.media}
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/a-young-girl-and-her-dog-joshua-reynolds.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>Hana and Chewy </p>
          <p>5 miles</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button size="small" color="primary"
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        
        >
          Show More
        </Button>
        {/* <IconButton
          
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Hana Age: 25
            Dog Age: 3</Typography>
          <Typography paragraph>
          Chewy and I love long evening walks.

          </Typography>
          


          {/* another card her */}
          
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
          title="Contemplative Reptile"
        />
       
      </CardActionArea>
     
    </Card>
        </CardContent>
      </Collapse>
    </Card>
  );
}



export default Person





































































// import React from 'react';
// import Actions from './Actions';

// const Person = ({ person, modifySuperficialChoices }) => {
//   const { name, desc, age, image } = person;

//   return (
//     <>
//       <div className="person">
//         <div className="person-photo">
//           <img src={`/images/users/${image}`} alt={name} />
//         </div>

//         <div className="person-description">
//           <p className="person-name-age">
//             {name}, <span>{age}</span>
//           </p>
//           <p className="person-info">{desc}</p>
//         </div>
//       </div>

//       <Actions
//         person={person}
//         modifySuperficialChoices={modifySuperficialChoices}
//       />
//     </>
//   );
// };

// export default Person;