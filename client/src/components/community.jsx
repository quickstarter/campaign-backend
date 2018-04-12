import React, { Component } from 'react';


class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: null,
      backers: null
    }
  }

  render() {
    return (
      <h1>We are in business</h1>
    )
  }
}

export default Community;