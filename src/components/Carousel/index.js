import React, { Component } from 'react'
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default class Carousel extends Component {
    constructor(props){
        super(props)
        this.state={
            filmes:[]
        }
        
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
        const settings ={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            swipe:true,
            slidesToScroll: 5,
            className:"slide"
        }
        return (
            <div className='carousel-container'>
                <h2>Category</h2>
                <Slider {...settings}>
                
                {this.state.filmes.map(filme=>{
                    return(
                        <div className="item-slide">
                            <img src={filme.foto} alt="cover"/>
                        </div>
                    )
                })}
                </Slider>
            </div>
        )
    }
}
