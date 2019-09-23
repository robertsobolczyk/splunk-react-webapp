import React from "react";
import {Menu, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import CsdList from './csd/csd.list';
import EventList from './event/event.list';

class SettingsComponent extends React.Component {

  state = {activeItem: 'csd'};

  handleClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return [
      <div>
        <Menu pointing secondary>
          <Menu.Item name='csd' active={activeItem === 'csd'} onClick={this.handleClick}/>
          <Menu.Item name='event' active={activeItem === 'event'} onClick={this.handleClick}/>
          <Menu.Item name='domain' active={activeItem === 'domain'} onClick={this.handleClick}/>
          <Menu.Item name='task' active={activeItem === 'task'} onClick={this.handleClick}/>
          <Menu.Item name='dependency' active={activeItem === 'dependency'} onClick={this.handleClick}/>
          <Menu.Item name='archive' active={activeItem === 'archive'} onClick={this.handleClick}/>
          <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleClick}/>
          <Menu.Item name='parameters' active={activeItem === 'parameters'} onClick={this.handleClick}/>
        </Menu>

        <Segment>

          {activeItem === 'csd' && <CsdList/>}
          {activeItem === 'event' && <EventList/>}
          {(activeItem !== 'csd' && activeItem !== 'event') && <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />}


        </Segment>
      </div>
    ]

  }
}

export default SettingsComponent;
