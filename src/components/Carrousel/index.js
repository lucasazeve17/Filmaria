import React, { Component } from 'react'
import './style.css'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'

export default class Carrousel extends Component {
    constructor(props){
        super(props)
        this.state={
            filmes:[]
        }
        this.prox = this.prox.bind(this)
    }
    prox(){
        const carou =  document.querySelector('.carrousel')
        carou.scrollWidth= 32

        console.log(window.scrollX)
    }
    componentDidMount(){
        let url=`https://sujeitoprogramador.com/r-api/?api=filmes/`
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            this.setState({filmes:json})
        })
    }
    
    render() {
        return (
            <div className="carrousel-container">
                <div className="carrousel">
                    <FiArrowLeftCircle size={50} color='#333' className="arrow-left"/>
                    {this.state.filmes.map(filme=>{
                        return(
                            <div >
                                <img src={filme.foto}/>
                            </div>
                        )
                    })}
                    <FiArrowRightCircle size={50} color='#333' className="arrow-right" onClick={this.prox}/>
                </div>
            </div>
        )
    }
}
