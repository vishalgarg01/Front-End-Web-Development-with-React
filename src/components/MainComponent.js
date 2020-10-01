import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import { DISHES } from "../shared/dishes";

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      SelectedDish:null
    };
}
    onDishSelect(dishId){
        this.setState({SelectedDish: dishId});
        
      }
  
  render() {
    return (
      <div >
        <Header/>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>      {/*props*/}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id===this.state.SelectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
