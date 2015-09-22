## Simple Plotly Demo with Tessel 2 & Accelerometer Module

This example gives a very simple demonstration of how to start sending module data (in this case, accelerometer) to Plotly. Plotly makes it easy to plot beautiful graphs.

## Setup

You'll need to create a `config.json` file that is structured like so:
```
{
  "username" : "YOUR PLOTLY USERNAME",
  "key" : "YOUR PLOTLY KEY",
  "streamingToken" : "YOUR PLOTLY STREAMING TOKEN"
}
```

See [the Plotly getting started guide](https://plot.ly/nodejs/getting-started) for more info on finding your username, key, or streaming token.

## Is it working?

Once you deploy this script to your Tessel (`t2 run index.js`), you should see a URL printed out on your command line. Go to this URL to see a live stream of the accelerometer's z-axis data!