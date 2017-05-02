var React = require('react'),
    _ = require('lodash'),
    d3 = require('d3'),
    ReactDOM = require('react-dom');

var H1BGraph = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <svg width="700" height="500">

                    </svg>
                </div>
            </div>
        ); 
    }
});

ReactDOM.render(
    <H1BGraph url="data/h1bs.csv" />,
    document.querySelectorAll('.h1bgraph')[0]
)