import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default class Tabelle extends Component {
  render(){
  return (
  <GridList cols={3}>
    {this.state.images.map((image) => {
      return (
        <GridTile key={image.id}>
          <img src={image.largeImageURL} alt=""/>
        </GridTile>
      )
    })}
  </GridList>
)
}};
