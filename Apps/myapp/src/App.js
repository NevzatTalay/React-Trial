import React, {Component} from 'react';
//import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import './Viewer.js'
import Viewer from './Viewer'

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Viewer />
      </div>
    );
  }
}

export default withAuthenticator(App, true);





