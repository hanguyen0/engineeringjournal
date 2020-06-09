import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavTab from './NavTab.jsx';
// import Write from './Write.jsx';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      journal: {},
    }

    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickWrite = this.handleClickWrite.bind(this);
  }

  showSettings(event) {
    event.preventDefault();

  }

  handleClickMenu(journal) {

    this.props.post(false);
    this.setState({clicked: true, journal:journal});
  }

  handleClickWrite() {
    this.setState({clicked: false});
    this.props.post(true)
  }

  render() {
    const journals = this.props.all;
    const {clicked, journal} = this.state;
    let showInfo = '';
    // let form = '';
    if (clicked) {
      showInfo = <NavTab info={journal}/>;
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