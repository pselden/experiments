/** @jsx React.DOM */
var React = require('react');
var CommentBox = require('./components/commentBox');

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);