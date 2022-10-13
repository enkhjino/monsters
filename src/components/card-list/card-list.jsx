// import { Component } from 'react';
import './card-list.css';
import Card from '../card/card.jsx';


//functions
const CardList = ({monsters}) => (
   
    <div className="card-list" >
        {monsters.map( (monster) => {
                return <Card monster={monster}/>  
        })}
    </div>
)


//class
// class CardList extends Component {
//     render(){
//         const { monsters } = this.props;
        
//         return (
//             <div className="card-list">
//                 {monsters.map( (monster) => {
//                         return (
//                         <Card monster={monster}/>
//                         )
//                 })}
//             </div>
//         );
//     }
// }

export default CardList;