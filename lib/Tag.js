var React = require('react');
var { DragSource, DropTarget } = require('react-dnd');
var flow = require('lodash/function/flow');

const ItemTypes = { TAG: 'tag' };

var tagSource = {
};

var tagTarget = {
};

var Tag = React.createClass({
    propTypes: {
        labelField: React.PropTypes.string,
        onDelete: React.PropTypes.func.isRequired,
        tag: React.PropTypes.object.isRequired,
    },
    getDefaultProps: function() {
        return {
            labelField: 'text'
        };
    },
    render: function(){
        var label = this.props.tag[this.props.labelField];
        return (
            <span className="ReactTags__tag">{label}
                <a className="ReactTags__remove" 
                       onClick={this.props.onDelete}>x</a>
            </span>
        );
    }
});

module.exports = Tag;
