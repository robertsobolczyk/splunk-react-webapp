import React from "react";
import { Button } from "semantic-ui-react";
import HighChart from './HighChart';

import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  constructor({ props }) {
    super();


  }

  componentDidMount() {
  }

  handleShowModal = () => {};

  render() {
    return (
      <>
        <h1>xxyy Content of dashboard -> AppComponent</h1>
        
        <Button
          icon="chart line"
          size="mini"
          content="Chart"
          onClick={this.handleShowModal}
        />

        <HighChart />
      </>
    );
  }
}

export default App;
