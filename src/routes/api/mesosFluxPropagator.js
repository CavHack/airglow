import request from 'superagent';

var IOTA = require('../lib/iota');

//import ClusterStore from '../../stores/ClusterStore';

import mesos from './mesos'

//Multisignature
var Address = iota.multisig.address;

let mesosFluxPropagator = {


//EventEmitter -> Broadcast JSON message
propagateNewMetrics() {

  mesos.getMetrics(function(err, response) {

    if (err) {
      console.log(err);
      return;
    }
    ClusterStore.metricsReceived(response.body);
  });

    var address = new Address()

      //absorb
      .absorb(digestOne)

      .absorb(digestTwo)

      .finalize();



}

},

propagateNewLogs() {

  //Get the metrics we need
  mesos.getLogs(function(err, response) {
    let size = response.body.offset;
    let offset = parseInt(size-60000)>0 ? parseInt(60000) : 0;
    let url = mesos.baseUrl + 'files/read.json?path=/master/log&offset=' + offset + '&length' + parseInt(offset+100000);

    //unload the req.
    request
      //url
      .get(url)
      .end(function(err, response) {

        if (err) {
          console.log(err);
          return;
        }
        ClusterStore.logsReceiver(response.body);
      });





  });


},
