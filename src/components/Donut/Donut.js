import React from 'react';
import d3 from 'd3';
import { Styles } from 'material-ui';
let { Colors } = Styles;
import Legend from './Legend';
import _ from 'lodash';

class Donut extends React.Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    colors: React.PropTypes.object,
    transitionDuration: React.PropTypes.number
};

static contextTypes = {
  muiTheme: React.PropTypes.object
};

//default
static defaultProps = {
  width: 200,
    height: 200,
    title: '',
    data: [],
    transitionDuration: 1000,
    colors: {
      green: Colors.green500,
      red: Colors.red500,
      amber: Colors.amber500,
      grey: Colors.grey300,
      deepPurple: Colors.deepPurple700,
      cyan: Colors.cyan500,
      orange: Colors.orange500

    }
};

getDonutLegend() {
  let data = this.props.data;
  let colors = this.props.colors;
  return data.map(function(item, i) {
    return React.createElement(Legend, { key: i, color: colors[item.color], item: item});

  });
}

drawInitialComponent(props) {
  let colors = props.colors;
  let data = props.data;
}
