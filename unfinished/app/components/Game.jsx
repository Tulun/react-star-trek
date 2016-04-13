var React = require('react');
var starData = require('../data/starData');
var StarChart = require('./StarChart.jsx');

module.exports = React.createClass({
  render: function() {
    return <StarChart starData={starData} />
  }
});

