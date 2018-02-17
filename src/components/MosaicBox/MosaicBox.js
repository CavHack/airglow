import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'material=ui';
import _ from 'lodash';


/*

import {

  Corner,
  createBalancedTreeFromLeaves,
  getLeaves,
  getNodePath,
  getOtherDirection,
  getPathToCorner,
  Mosaic,
  MosaicDirection,
  MosaicNode,
  MosaicParent,
  MosaicWindow,
  MosaicZeroState,
  updateTree,

} from '../src/index';

*/

class MosaicBox extends React.component {

  static propTypes = {

      title: PropTypes.string,
      styles: PropTypes.object,
      children: PropTypes.object,
      xsColSize: PropTypes.number,
      smColSize: PropTypes.numnber,
      mdColSize: PropTypes.number,
      lgColSize: PropTypes.number
  };

  //Define your default params that will get called up everytime anyone refreshes
  //The Dom
  static defaultProps = {
    xsColSize: 12,
    smColSize: 6,
    styles: {}
  };

  constructor(props) {
    super(props); //self-reference loop n1
  }

  //styling goes here
  getStyles() {
    return {
      root: {
        borderRadius: 5,
        minHeight: 315
      },
      card: {
        titleColor: '#000000'
        subtitleColor: '#000000'
      }
    };
  }

  //get columns.

}
