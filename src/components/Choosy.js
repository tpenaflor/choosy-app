
import React from 'react' 

import Header from './Header.js'
import Options from './Options.js'
import AddOption from './AddOption.js'
import MakeDecision from './MakeDecision.js'
import OptionModal from './OptionModal.js'

class App extends React.Component {
    state  = {
        opt:[],
        sOpt : undefined
    }

    componentDidMount(){ 
        try {
            let opt = JSON.parse(localStorage.getItem('opt'))
        
            if (opt)
            {
                this.setState(()=> ({opt}))
                console.log("local data loaded")
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
            console.log(`local data is updated`)
        }

        console.log(this.state)
    }

    clearOptions = () => {   
        this.setState(() => {
            return { 
                opt:[]
            }
        })
    }

    addOption = (val) => {   
        if (val){
            this.setState((prevState)=>{
                return {
                    opt: prevState.opt.concat(val)
                }
            })
        }
    }

    delOption = (opt) => {
        this.setState((prevState) => ({
            opt : prevState.opt.filter((option) => opt !== option)
        }))
        console.log(`del option ${opt}`)
    }

    makeDecision = () => {   
        const index = Math.floor(Math.random() * Math.floor(this.state.opt.length))
        this.setState(() => ({sOpt : this.state.opt[index]}))

        console.log(`selected option : ${this.state.sOpt}`)
        // alert(this.state.opt[sOpt])
    }

    clearSelection = () => {
        this.setState(() => ({sOpt : undefined}))
    }
    
    render (){
        return (
            <div>
                <Header appObj={this.props.appObj} />
                <div className='container'>
                    <MakeDecision opt={this.state.opt} makeDecision={this.makeDecision}/>

                    <div className='widget'>
                        <Options opt={this.state.opt} delOption={this.delOption} clearOptions={this.clearOptions}/>
                        <AddOption addOption={this.addOption}/>
                    </div>
                </div>
                <OptionModal selected={this.state.sOpt} clearSelection={this.clearSelection}/>
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


export default App