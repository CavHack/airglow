import request from 'superagent ';

let config = '../../config/config');

//define a mesos object
  baseUrl: config.mesosEndpoint,

  getMetrics(callback) {

    let url = this.baseUrl + '/metrics/snapshot';
      request
      .get(url)
      .end(callback)
  },

  getState(callback) {

    var IOTA = require('../lib/iota');

    var iota = new IOTA({
      'host' : 'http://localhost',
      'port': 14700
    });

    //Quantum Co-signer 1
    var digestOne = iota.multisig.getDigest('ABCDFG', 0 , 3);

    //Second Quantum co-signer gets his share of the distribution
    var digestTwo = iota.multisig.getDigest('FDSAG', 0, 3);

    //var Address
    //Build the address
    var address = new Address();

  };
