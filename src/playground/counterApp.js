class Counter extends React.Component {
    constructor(props)
    {
        super(props)
        this.addCount = this.addCount.bind(this)
        this.subCount = this.subCount.bind(this)
        this.resetCount = this.resetCount.bind(this)
        this.state = {
            count : this.props.count
        }
    }

    componentWillMount(){
        try {
            const count = parseInt(localStorage.getItem('count'))
            if (count) {
                this.setState(()=> ({count}))
                console.log(`local storage startup success`)
            }
                
        }
        catch (e) {
            console.log(`local storage startup failed`)
        }
    }

    componentDidUpdate(preProp, preState) {
        if (preState.count != this.state.count)
        {
            localStorage.setItem('count', this.state.count)
        }
    }

    addCount (){
        this.setState((preState) => {
            return {
                count : preState.count+1
            }
        })
    }
    subCount () {
        
        this.setState((preState) => {
            return {
                count : preState.count-1
            }
        })
    }

    resetCount () {
        this.setState(() => {
            return {
                count : 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>    
                <button onClick = {this.addCount}>+1</button>
                <button onClick = {this.subCount}>-1</button>
                <button onClick = {this.resetCount}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 0
}

let appRoot = document.getElementById("app");
ReactDOM.render(<Counter />, appRoot); 

// const renderPage = () => 
// {
//     const temp3 =(
//         <div>
//             <h1>COUNT : {count}</h1>    
//             <button onClick = {addCount}>+1</button>
//             <button onClick = {subCount}>-1</button>
//             <button onClick = {resetCount}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(temp3, appRoot);
// }

// renderPage();