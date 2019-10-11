import React, { useState } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Project from './Project';
import image_calculator from './pictures/image_calculator.png';
import image_magnitude from './pictures/image_magnitude.png';
import image_shoppingCart from './pictures/image_shoppingCart.png';
import image_weather from './pictures/image_weather.png';
import image_emaily from './pictures/image_emaily.png';
import image_wifree from './pictures/image_wifree.png';
import image_reactNative2 from './pictures/image_reactNative2.png';
import image_blog from './pictures/image_blog.png';

const initialValue = [
  {
    id: 1,
    name: 'Calculator',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'https://schow94.github.io/calculator-react/',
    github: 'https://github.com/Schow94/calculator-react',
    picture: image_calculator,
    stack: ['React.js', 'Node.js'],
    APIs: []
  },
  {
    id: 2,
    name: 'Weather',
    description: 'Weather app with five day forecast.',
    link: 'https://schow94.github.io/Weather/',
    github: 'https://github.com/Schow94/Weather',
    picture: image_weather,
    stack: ['React.js', 'Node.js'],
    APIs: ['OpenWeather API', 'geolocation']
  },
  {
    id: 3,
    name: 'Emaily',
    description: 'Full stack MERN app with O-Auth, Stripe API, & SendGrid API.',
    link: 'https://warm-thicket-82476.herokuapp.com/',
    github: 'https://github.com/Schow94/emaily---MERN',
    picture: image_emaily,
    stack: ['React.js', 'Node.js', 'Mongo.db', 'Express.js'],
    APIs: [
      'OpenWeather API',
      'geolocation',
      'Material-CSS',
      'SendGrid API',
      'Stripe API',
      'O-Auth'
    ]
  },
  {
    id: 4,
    name: 'Wifree',
    description:
      'Built with React hooks. Utilizes Yelp API, Google Maps API & geolocation',
    link: 'none',
    github: 'https://github.com/Schow94/WifiApp-Hooks',
    picture: image_wifree,
    stack: ['React.js', 'Node.js'],
    APIs: ['Yelp API', 'geolocation', 'Material-UI', 'Google Maps API']
  },
  {
    id: 5,
    name: 'React Native Todo List',
    description:
      'Was interested in React Native so I played around with it and built a basic Todo List.',
    link: 'none',
    github: 'https://github.com/Schow94/todoList-reactNative',
    picture: image_reactNative2,
    stack: ['React Native', 'Node.js', 'Expo', 'Xcode'],
    APIs: ['React Native Elements']
  },
  {
    id: 6,
    name: 'Shopping Cart',
    description:
      "Practicing Redux & decided to build a shopping cart modeled after Nordstrom's online store.",
    link: 'https://schow94.github.io/Redux-ShoppingCart/',
    github: 'https://github.com/Schow94/Redux-ShoppingCart',
    picture: image_shoppingCart,
    stack: ['React.js', 'Node.js'],
    APIs: ['Redux', 'Material-UI']
  },
  {
    id: 7,
    name: 'Classroom Management',
    description:
      'Tool for teachers to better manage their classes and students.',
    link: 'https://schow94.github.io/Magnitude-ReactAssignment/',
    github: 'https://github.com/Schow94/Magnitude-ReactAssignment',
    picture: image_magnitude,
    stack: ['React.js', 'Node.js'],
    APIs: ['Material-UI']
  },
  {
    id: 8,
    name: 'Code Blogz',
    description: 'Blog for new coders to share their experiences.',
    link: 'https://code-blogz.herokuapp.com/',
    github: 'https://github.com/Schow94/CodeBlog',
    picture: image_blog,
    stack: ['Node.js', 'Mongo.db', 'Express.js'],
    APIs: ['Bootstrap', 'Passport.js']
  }
];

function Projects(props) {
  const { classes } = props;
  const { root, paper, image, projectContainer } = classes;

  const [projects] = useState(initialValue);

  return (
    <div>
      <h1>Projects</h1>
      <div className={projectContainer}>
        {projects.map(item => {
          return <Project item={item} />;
        })}
      </div>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  projectContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

export default withStyles(styles)(Projects);
