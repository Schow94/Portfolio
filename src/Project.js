import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

function Project(props) {
  const { item, classes } = props;
  const { id, name, picture, link, github, description } = item;
  const { pos, media, title, card } = classes;

  return (
    <Card key={id} className={card}>
      <CardContent>
        <CardActionArea>
          <CardMedia className={media} image={picture} title={name} />
        </CardActionArea>

        <Typography className={title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography className={pos} color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          Link: {link}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Github: {github}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const styles = them => ({
  media: {
    height: 200
  },
  card: {
    minWidth: 275,
    maxWidth: '400px',
    // maxHeight: '400px',
    marginTop: '2.5em',
    marginBottom: '2.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pos: {
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: '0.5em'
  }
});

export default withStyles(styles)(Project);
