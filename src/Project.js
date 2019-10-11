import React from 'react';

import MoreInfo from './MoreInfo';
import { ReactComponent as NodeIcon } from './logos/logo_node.svg';
import { ReactComponent as ReactIcon } from './logos/logo_react.svg';
import { ReactComponent as MongoIcon } from './logos/logo_mongo.svg';
import { ReactComponent as ExpressIcon } from './logos/logo_express_1.svg';

import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const colors = [
  '#77aafc',
  '#4bfa5a',
  '#db5ffa',
  '#ffa136',
  '#ffa136',
  '#f1f50c',
  '#f50c3b',
  '#0ceef2',
  '#f20ccc'
];

const frameworks = [
  {
    name: 'React.js',
    comp: () => (
      <ReactIcon
        style={{ width: '3vw', height: 'auto', marginLeft: '1em' }}
        alt="nodeLogo"
      />
    )
  }
];

function Project(props) {
  const { item, classes, color } = props;
  const { id, name, picture, link, github, description, stack, APIs } = item;
  const {
    pos,
    media,
    title,
    card,
    button,
    icons,
    fab,
    expressBtn,
    buttons
  } = classes;

  return (
    <Card key={id} className={card}>
      <CardContent>
        <CardActionArea>
          <a href={item.link}>
            <CardMedia className={media} image={picture} title={name} />
          </a>
        </CardActionArea>

        <Typography className={title} color="textSecondary" gutterBottom>
          {name}
        </Typography>

        <div className={buttons}>
          {stack.map(item => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];

            return (
              <Button
                variant="contained"
                size="small"
                className={button}
                style={{ backgroundColor: randomColor }}
              >
                {item}
              </Button>
            );
          })}
        </div>
        {/* <div className={icons}>
          <Fab className={fab}>
            <NodeIcon
              onClick={() => alert('what is Node.js')}
              style={{
                width: '3vw',
                height: 'auto',
                marginLeft: '1em'
              }}
              alt="nodeLogo"
            />
          </Fab>

          <ReactIcon
            style={{ width: '3vw', height: 'auto', marginLeft: '1em' }}
            alt="nodeLogo"
          />
          <MongoIcon
            style={{ width: '5vw', height: 'auto', marginLeft: '1em' }}
            alt="nodeLogo"
          />
          <Button variant="contained" className={expressBtn}>
            <ExpressIcon
              style={{
                marginLeft: '1em'
              }}
              alt="nodeLogo"
            />
          </Button>
        </div> */}

        <div className={buttons}>
          {APIs.map(item => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            // return (
            //   <Button
            //     variant="contained"
            //     className={button}
            //     style={{ backgroundColor: randomColor }}
            //   >
            //     {item === tool.name ? tool.comp : null}
            //   </Button>
            // );

            return (
              <Button
                variant="contained"
                size="small"
                className={button}
                style={{ backgroundColor: randomColor }}
              >
                {item}
              </Button>
            );
          })}
        </div>

        <Typography className={pos} color="textSecondary">
          {description}
        </Typography>
        <br />
      </CardContent>
      <CardActions>
        <Button variant="contained" className={button}>
          <Typography>
            <Link href={github} className={classes.link}>
              Github
            </Link>
          </Typography>
        </Button>
        <MoreInfo project={item} />
      </CardActions>
    </Card>
  );
}

const styles = theme => ({
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
  },
  button: {
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expressBtn: {
    align: 'center',
    paddingLeft: 0,
    paddingRight: '8px',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
    margin: theme.spacing(1)
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center'
  },
  fab: {
    margin: theme.spacing(1)
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default withStyles(styles)(Project);
