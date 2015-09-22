// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api

// Import our Plotly account info
var config = require('./config.json');
// Initialize the plotly API with our account info
var plotly = require('plotly')(config.username, config.key);
// Import the Tessel library
var tessel = require('tessel');
// Conenct to the accelerometer on port A
var accel = require('accel-mma84').use(tessel.port.A);

// Create the initial plot data and layout 
var initdata = [{x:[], y:[], stream:{token:config.streamingToken, maxpoints:200}}];
var initlayout = {fileopt : 'overwrite', filename : 'accel-stream'};

// When the accelerometer is ready
accel.on('ready', function() {
  // Create a new plot
  plotly.plot(initdata, initlayout, function (err, msg) {
    if (err) {
      throw(err);
    }
    else {
      console.log('Check out the live streaming chart at: ', msg.url);
    }

    // Create a new data stream
    var stream1 = plotly.stream(config.streamingToken, function (err, res) {
      if (err) throw err;
    });

    // Data sample counter
    var i = 0;
    // When we have new accelerometer data
    accel.on('data', function(xyz) {
      // Use the counter as the x data point and the z-axis as y data point
      var data = { x : i++, y : xyz[2] };
      // Stringify the data
      var streamObject = JSON.stringify(data);
      // Write it to the sream
      stream1.write(streamObject+'\n');
    });
  });
});


