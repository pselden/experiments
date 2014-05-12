/** @jsx React.DOM */
var React = require('react');
var CommentForm = require('./commentForm');
var CommentList = require('./commentList');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;