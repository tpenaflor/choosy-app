console.log("hello form app.js - again");

class App extends React.Component {
    constructor (props) {
        super(props)

        this.clearOptions = this.clearOptions.bind(this)
        this.addOption = this.addOption.bind(this)
        this.delOption = this.delOption.bind(this)

        this.state = {
            opt : this.props.appObj.options
        }
    }

    componentWillMount(){ 
        try {
            let opt = JSON.parse(localStorage.getItem('opt'))
        
            if (opt)
            {
                this.setState(()=> ({opt}))
            }
        }
        catch (e){
            console.log("can't load local datas")
        }

        
    }

    componentDidUpdate(preProp, preState){
        if (preState.opt.length !== this.state.opt.length)
        {
            localStorage.setItem('opt', JSON.stringify(this.state.opt))
            console.log(`data is updated`)
        }
    }

    clearOptions() {   
        this.setState(() => {
            return { 
                opt:[]
            }
        })
    }

    addOption(val){   
        if (val){
            this.setState((prevState)=>{
                // prevState.opt.push(val)
                return {
                    opt: prevState.opt.concat(val)
                }
            })
        }
    }

    delOption(opt){
        this.setState((prevState) => ({
            opt : prevState.opt.filter((option) => opt !== option)
        }))
        console.log(`del option ${opt}`)
    }
    
    render (){
        return (
            <div>
                <Header appObj={this.props.appObj} />
                <MakeDecision opt={this.state.opt}/>
                <Options opt={this.state.opt} delOption={this.delOption}/>
                <AddOption addOption={this.addOption}/>
                <ClearOptions clearOptions={this.clearOptions}/>
            </div>
        )
    }
}

App.defaultProps = {
    appObj : {
        title : "Default Title",
        options : []
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.appObj.title}</h1>
            {props.appObj.subtitle && <p>{props.appObj.subtitle}</p>}
        </div>
    )
}

const Options = (props) => {
    let uKey = 0
    return (
        <div>
            <p>{props.opt.length > 0 ? "Here are your options" : "No Options"}</p>                      
            {props.opt.map((opt) => <Option key={uKey++} opt={opt} delOption={props.delOption}/>)} 
        </div>
    )
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.opt}
            <button onClick={ () => {
                    this.props.delOption(this.props.opt)
                }
                }>Remove</button>
            </div>
        )
    }
}
// const Option = (props) => {
//     return (
//         <div>{props.opt}</div>
//     )
// }

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleAddOption(e) {
        e.preventDefault()
        const val = e.target.elements.option.value.trim()
    
        if (val) {
            e.target.elements.option.value = ''
            this.props.addOption(val)
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

const ClearOptions = (props) => {
    return (
        <div>
            <button onClick = {props.clearOptions}>Clear Options</button>
        </div>
    )
}

class MakeDecision extends React.Component {
    constructor(props){
        super(props)
        this.makeDecision = this.makeDecision.bind(this)
    }

    makeDecision(){   
        const index = Math.floor(Math.random() * Math.floor(this.props.opt.length))
        console.log(index)
        alert(this.props.opt[index])
    }

    render() {
        return (
            <div>
                {this.props.opt.length > 0 && <button onClick = {this.makeDecision}>Decide</button>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
