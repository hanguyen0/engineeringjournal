import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavTab from './NavTab.jsx';
import Write from './Write.jsx';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      write: false,
      journal: {},
    }

    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickWrite = this.handleClickWrite.bind(this);
  }

  showSettings(event) {
    event.preventDefault();

  }

  handleClickMenu(journal) {
    this.setState({clicked: true, journal:journal});
  }

  handleClickWrite() {
    this.props.post()
    this.setState({write: true, clicked: false});
  }

  render() {
    const journals = this.props.all;
    const {clicked, write, journal} = this.state;
    let showInfo = '';
    let form = '';
    if (clicked) {
      showInfo = <NavTab info={journal}/>;
    }
    if (write) {
      form = <Write />
    }

    return (
      <div>
        <Menu >
          <h3 className="menu-item" onClick={this.handleClickWrite}>Write</h3>
          {journals.map((journal, idx) => (
            <a key={journal.title + idx} className="menu-item" onClick={() => this.handleClickMenu(journal)}>{journal.title}</a>
          ))}
        </Menu>
        {showInfo}
      </div>
    );
  }
}

export default BurgerMenu;