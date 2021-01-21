"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("hello form app.js - again");

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.clearOptions = _this.clearOptions.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.delOption = _this.delOption.bind(_this);

        _this.state = {
            opt: _this.props.appObj.options
        };
        return _this;
    }

    _createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            try {
                var opt = JSON.parse(localStorage.getItem('opt'));

                if (opt) {
                    this.setState(function () {
                        return { opt: opt };
                    });
                }
            } catch (e) {
                console.log("can't load local datas");
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(preProp, preState) {
            if (preState.opt.length !== this.state.opt.length) {
                localStorage.setItem('opt', JSON.stringify(this.state.opt));
                console.log("data is updated");
            }
        }
    }, {
        key: "clearOptions",
        value: function clearOptions() {
            this.setState(function () {
                return {
                    opt: []
                };
            });
        }
    }, {
        key: "addOption",
        value: function addOption(val) {
            if (val) {
                this.setState(function (prevState) {
                    // prevState.opt.push(val)
                    return {
                        opt: prevState.opt.concat(val)
                    };
                });
            }
        }
    }, {
        key: "delOption",
        value: function delOption(opt) {
            this.setState(function (prevState) {
                return {
                    opt: prevState.opt.filter(function (option) {
                        return opt !== option;
                    })
                };
            });
            console.log("del option " + opt);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { appObj: this.props.appObj }),
                React.createElement(MakeDecision, { opt: this.state.opt }),
                React.createElement(Options, { opt: this.state.opt, delOption: this.delOption }),
                React.createElement(AddOption, { addOption: this.addOption }),
                React.createElement(ClearOptions, { clearOptions: this.clearOptions })
            );
        }
    }]);

    return App;
}(React.Component);

App.defaultProps = {
    appObj: {
        title: "Default Title",
        options: []
    }
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.appObj.title
        ),
        props.appObj.subtitle && React.createElement(
            "p",
            null,
            props.appObj.subtitle
        )
    );
};

var Options = function Options(props) {
    var uKey = 0;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            props.opt.length > 0 ? "Here are your options" : "No Options"
        ),
        props.opt.map(function (opt) {
            return React.createElement(Option, { key: uKey++, opt: opt, delOption: props.delOption });
        })
    );
};

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                this.props.opt,
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            _this3.props.delOption(_this3.props.opt);
                        } },
                    "Remove"
                )
            );
        }
    }]);

    return Option;
}(React.Component);
// const Option = (props) => {
//     return (
//         <div>{props.opt}</div>
//     )
// }

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        return _this4;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var val = e.target.elements.option.value.trim();

            if (val) {
                e.target.elements.option.value = '';
                this.props.addOption(val);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var ClearOptions = function ClearOptions(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.clearOptions },
            "Clear Options"
        )
    );
};

var MakeDecision = function (_React$Component4) {
    _inherits(MakeDecision, _React$Component4);

    function MakeDecision(props) {
        _classCallCheck(this, MakeDecision);

        var _this5 = _possibleConstructorReturn(this, (MakeDecision.__proto__ || Object.getPrototypeOf(MakeDecision)).call(this, props));

        _this5.makeDecision = _this5.makeDecision.bind(_this5);
        return _this5;
    }

    _createClass(MakeDecision, [{
        key: "makeDecision",
        value: function makeDecision() {
            var index = Math.floor(Math.random() * Math.floor(this.props.opt.length));
            console.log(index);
            alert(this.props.opt[index]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.opt.length > 0 && React.createElement(
                    "button",
                    { onClick: this.makeDecision },
                    "Decide"
                )
            );
        }
    }]);

    return MakeDecision;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

// const makeDecision = () =>
// {   
//     const index = Math.floor(Math.random() * Math.floor(appObj.options.length))
//     console.log(index)
//     alert(appObj.options[index])
// }


// const renderPage = (appObj) => 
// {
//     const temp = (
//         <div>
//             <h1> {appObj.title} </h1>
//             {appObj.subtitle && <p> {appObj.subtitle} </p>}
//             <p>{appObj.options.length > 0 ? "Here are your options" : "No Options"}</p>         

//             {appObj.options.length > 0 && <p>Option Count is: {appObj.options.length}</p>}
//             <button disabled = {appObj.options.length == 0 } onClick={makeDecision}>What should I do?</button>
//             <button onClick={clearOptions}>Remove All Options</button>


//             <ol>
//                 {showOptions()}
//             </ol>

//             <form onSubmit={submit}>
//                 <input type="text" name="option"/>
//                 <button >Add Option</button>
//             </form>
//         </div>
//     );

//     ReactDOM.render(temp, appRoot);
// }

// renderPage(appObj);

// AllMightyRender(appObj)
