import React, {Component} from 'react';
import './App.css';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ImageViewer from './components/ImageViewer';


class App extends Component {
  render() {
    return (
      <MuiThemProvider>
        <div className="App">
          <AppBar
            title= 'Image Viewer'
            showMenuIconButton={false}/>
          <ImageViewer />
        </div>
      </MuiThemProvider>
    );
  }
}

export default App;
