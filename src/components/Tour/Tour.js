import React, {Component} from 'react';
import './Tour.scss'
class Tour extends Component {
    constructor (props){
        super(props);
        this.state={
            showInfo:false
        }
    }
    showInfoClick=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const {city,img,name,info}=this.props.tour;
        const {deleteTour}=this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img
                        src={img}
                        alt=""/>
                    <span onClick={deleteTour} className="close-btn">
                        <i className="fas fa-window-close" />
                    </span>
                    <div className="tour-info">
                        <h3>{city}</h3>
                        <h4>{name}</h4>
                        <h5>info <span onClick={this.showInfoClick} className="show-btn">
                           <i className="fas fa-caret-square-down"></i>
                        </span>
                        </h5>
                        {this.state.showInfo &&<p>{info}</p> }

                    </div>

                </div>
            </article>
        );
    }
}

export default Tour;