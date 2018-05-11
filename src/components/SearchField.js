import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const API_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '8924314-228bdbb635ad056bd9b355c71';

class SearchField extends Component {
  state = {
    images: [],
    searchText: '',
    per_page: 5
  };

  fetchAPI = () => {
      fetch(API_URL + API_KEY + '&q=' + this.state.searchText + '&per_page=' + this.state.per_page)
        .then(response => response.json())
        .then(data => this.setState({images: data.hits}));


  };

  onSelectChange = (event, index, value) => {
    this.setState({per_page: value}, this.fetchAPI)

  };

  onSearchTextChange = event => {
    this.setState({searchText: event.target.value}, this.fetchAPI)};

  render() {
    let gridcontent;

    if (this.state.searchText!==''){
      gridcontent = (
        <GridList cols={3}>
          {this.state.images.map((image) => {
            return (
              <GridTile key={image.id}>
                <img src={image.largeImageURL} alt=""/>
              </GridTile>
            )
          })}
        </GridList>
      )}
      else {gridcontent=null}

    return (
      <div>
        <SelectField
          value={this.state.per_page}
          onChange={this.onSelectChange}>
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={20} primaryText="20" />
        </SelectField>
        <br/>
        <TextField
          onChange={this.onSearchTextChange}
          hintText='Enter Image Tag...'
          fullWidth={false}/>
        <br/>
        {gridcontent}
      </div>
    );
  }
}

export default SearchField;
