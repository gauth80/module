import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      //*<!> container provoque un débordement sous moz*
      <footer className="row">
          <div className="helper">
            Le Footer
          </div>
      </footer>
    )
  }
}

export default Footer;
