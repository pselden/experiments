/** @jsx React.DOM */
var React = require('react');
var CommentBox = require('./components/commentBox');

var data = [
  {author: "Pete Hunt", text: "This is one comment", id: 1},
  {author: "Jordan Walke", text: "This is another comment", id: 2}
];

React.renderComponent(
  <CommentBox data={data} />,
  document.getElementById('content')
);