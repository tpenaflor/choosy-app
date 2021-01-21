console.log("hello form app.js - again");

class App extends React.Component {
    constructor (props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)

        this.state = {
            isVisible : false
        }
    }

    handleToggle() {
        this.setState((prevState) =>{
            return {
                isVisible : !prevState.isVisible
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggle}> {!this.isVisible ? "Show Details" : "Hide Details"}</button>
                <p hidden = {this.state.isVisible} >I am details</p>
            </div>
        )
    }
}     

ReactDOM.render(<App/>, document.getElementById("app"));

// const toggleVisibility = () =>
// {   
//     isVisible = !isVisible
//     console.log("visibility is ", isVisible)

//     renderPage()
// }

// let isVisible = false

// const renderPage = () => 
// {
//     const temp = (
//         <div>
//             <h1> Visibility Toggle </h1>
//             <button onClick = {toggleVisibility}> {!isVisible ? "Show Details" : "Hide Details"}</button>

//             <p hidden = {isVisible} >I am details</p>
//         </div>
//     );
    
//     ReactDOM.render(temp, document.getElementById("app"));
// }

// renderPage();