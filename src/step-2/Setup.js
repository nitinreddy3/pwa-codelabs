import React, {Component} from 'react';
import Highlight from '../Highlight';

class Setup extends Component {
  render() {
    const code = 'git clone https://github.com/code-kotis/pwa-codelabs.git';
    return(
      <div>
        <h1>2. Setup</h1>
        <p>To setup the codelabs, follow the below steps.</p>
        <b>Steps</b>
        <ul className="setup__steps">
          <li>Clone the repo via command line.</li>
          <Highlight>
            <span className="bash">
              <span className="no--select space">$</span>{code}</span>
          </Highlight>
          <li>Download this chrome extention to run your code in localhost server.</li>
          <a className="btn" href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb" target="_blank">Web Server</a>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/AK6swHiPtew" frameBorder="0" allowFullScreen></iframe>
        </ul>
      </div>
    );
  }
}

export default Setup;
