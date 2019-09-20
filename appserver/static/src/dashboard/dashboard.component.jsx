import React from "react";
import {Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

class DashboardComponent extends React.Component {
  render() {
    return [
      <div>
        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    ]

  }
}

export default DashboardComponent;
