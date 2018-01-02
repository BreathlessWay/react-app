import React, { PureComponent } from 'react';

const avatar = require('@static/img/avatar.jpeg');
export default class Footer extends PureComponent {
  componentDidUpdate () {
    console.log('footer is updated');
  }

  render () {
    return (
      <footer className='footer-index bg-dark'>
        <section className="container py-5 text-white text-center">
          <h3>
            <a href='https://github.com/BreathlessWay' target='_blank' rel="noopener noreferrer">
              <img src={ avatar } alt="BreathlessWay" className="rounded-circle" width={ 80 }/>
            </a>
            <span className='pl-3'>
          Powered by BreathlessWay
        </span>
          </h3>
        </section>
      </footer>
    );
  }
};
