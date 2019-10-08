import React, { useState } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { classes, project, media, card, pos, title, image } = props;
  // const { media, card, pos, title } = classes;
  const { name, description, id, picture, link, github } = project;
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{name}</DialogTitle>

      {/* <Typography>{description}</Typography> */}

      <Card key={id} className={card}>
        <CardContent>
          <CardActionArea>
            {/* <img className={image} src={picture} alt={name} /> */}
            {/* <CardMedia className={media} image={picture} title={name} /> */}
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
        <CardActions></CardActions>
      </Card>
    </Dialog>
  );
}

function MoreInfo(props) {
  const { project } = props;
  //Hooks to handle toggleOpen/Close
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(project[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        project={project}
      />
    </div>
  );
}

const styles = theme => ({
  media: {
    height: 200
  },
  image: {
    height: '50px'
  },
  card: {
    minWidth: 275,
    // maxWidth: '400px',
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

export default withStyles(styles)(MoreInfo);
