'use strict';

var React = require('react');

var _require = require('react-dnd');

var flow = require('lodash/function/flow');

var ItemTypes = { TAG: 'tag' };

};

var Tag = React.createClass({
    displayName: 'Tag',

    propTypes: {
        labelField: React.PropTypes.string,
        onDelete: React.PropTypes.func.isRequired,
        tag: React.PropTypes.object.isRequired,
    },
    getDefaultProps: function getDefaultProps() {
        return {
            labelField: 'text'
        };
    },
    render: function render() {
        var label = this.props.tag[this.props.labelField];
        var _props = this.props;

           return React.createElement(
            'span',
            { className: 'ReactTags__tag' },
            label,
            React.createElement(
                'a',
                { className: 'ReactTags__remove',
                    onClick: this.props.onDelete },
                'x'
            )
        );
    }
});

module.exports = Tag;
