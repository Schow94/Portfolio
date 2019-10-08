import React, { useState } from 'react';
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
    picture: image_calculator
  },
  {
    id: 2,
    name: 'Weather',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'https://schow94.github.io/Weather/',
    github: 'https://github.com/Schow94/Weather',
    picture: image_weather
  },
  {
    id: 3,
    name: 'Emaily',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'https://warm-thicket-82476.herokuapp.com/',
    github: 'https://github.com/Schow94/emaily---MERN',
    picture: image_emaily
  },
  {
    id: 4,
    name: 'Wifree',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'none',
    github: 'https://github.com/Schow94/WifiApp-Hooks',
    picture: image_wifree
  },
  {
    id: 5,
    name: 'React Native Todo List',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'none',
    github: 'https://github.com/Schow94/todoList-reactNative',
    picture: image_reactNative2
  },
  {
    id: 6,
    name: 'Shopping Cart',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'https://schow94.github.io/Redux-ShoppingCart/',
    github: 'https://github.com/Schow94/Redux-ShoppingCart',
    picture: image_shoppingCart
  },
  {
    id: 7,
    name: 'Classroom Management',
    description:
      'Tool for teachers to better manage their classes and students.',
    link: 'https://schow94.github.io/Magnitude-ReactAssignment/',
    github: 'https://github.com/Schow94/Magnitude-ReactAssignment',
    picture: image_magnitude
  },
  {
    id: 8,
    name: 'Code Blogz',
    description:
      'First React project I did independently. Calculator built in React. Handled math logic myself.',
    link: 'https://code-blogz.herokuapp.com/',
    github: 'https://github.com/Schow94/CodeBlog',
    picture: image_blog
  }
];

function Projects() {
  const { image } = styles;
  const [state, setState] = useState(initialValue);

  return (
    <div>
      <h1>Projects</h1>
      {state.map(item => {
        return (
          <div key={item.id}>
            <h3>Name: {item.name}</h3>
            <p>Description: {item.description}</p>
            <h4>Link: {item.link}</h4>
            <h4>Github: {item.github}</h4>
            <img style={image} src={item.picture} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

const styles = {
  image: {
    width: '100%'
  }
};
