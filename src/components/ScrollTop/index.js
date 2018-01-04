import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {

  componentDidUpdate (prevProps) {
    console.log('scroll top is updated');
    if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
    }
  }

  render () {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
