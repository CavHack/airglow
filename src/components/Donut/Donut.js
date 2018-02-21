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

constructor(props) {
  super(props);
  this.update = this.update.bind(this);
  this.drawInitialComponent = this.drawInitialComponent.bind(this);
}

componentDidMount() {
  let props = this.props;
  let data = props.data;

  //if we have data, draw the donut
  if(data.filter(function(d) { return d.count > 0;}).length > 0) {
    this.drawInitialComponent(props);
  }
}

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
  let paperColour = this.context.muiTheme.component.paper.backgroundColor;
  let transitionDuration = props.transitionDuration;

  let color = data.map(function(item) {
    return colors[item.color];
  });

  let svg = d3.select(React.findDOMNode(this.refs.svg))
    .append('g')
    .attr('transform', 'translate(' + (props.width) / 2 + ',' + (props.height) / 2 + ')');

    let d3Colors = d3.scale.ordinal().range(color);
    let outerRadius = props.width / 2.2;
    let innerRadius = props.width / 2;
    let arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);


      let pie = d3.layout.pie()
      .value(function(d) { return d.count; })
      .sort(null);

      this.patth = svg.datum(data).selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('fill', function(d, i) {return d3Colors(i); })
        .attr('d', arc)
        .each(function(d) {
            this.current = d;
        });

        this.path.transition()
          .ease('exp')
          .duration(transitionDuration)
          .attrTween('d', function(b){

            var i = d3.interpolate({ starAngle: 1.1 * Math.PI,  endAngle: 1.1 * Math.PI}, b);

          })


}










