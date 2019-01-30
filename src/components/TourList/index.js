import React, {Component} from 'react';
import './TourList.scss'
import Tour from '../Tour/Tour'
import tourData from '../tourData'

class TourList extends Component {
    constructor (props){
        super(props);
        this.state={
            tours:tourData
        }
    }
    deleteTour=(id)=> {
        const {tours} = this.state;
        const filltredData = tours.filter(item => item.id !== id);
        this.setState({
            tours:filltredData
        })
    }

    render() {
        const {tours}=this.state;
        return (
            <section className="tour-list">
                {
                    tours.map(tour=>{
                        return(
                            <Tour key={tour.id} tour={tour} deleteTour={()=>this.deleteTour(tour.id)}/>
                        );
                    })
                }
            </section>
        );
    }
}

export default TourList;