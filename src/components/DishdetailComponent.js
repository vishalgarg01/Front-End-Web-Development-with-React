import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishetailComponent extends Component {
  renderComments(comments) {
    if (comments != null) {
      let options = { year: "numeric", month: "short", day: "numeric" };
      return comments.map(comment => (
        <ul key={comment.id} className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author}{" "}
            {new Date(comment.date).toLocaleDateString("en-US", options)}
          </li>
        </ul>
      ));
    } else return <div />;
  }

  renderDish(dish){
      return(
        <Card>
          <CardImg width="10" height="400" src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    
  }

  render() {
    const { dish } = this.props;
    
    return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    }
  }
  
  export default DishetailComponent;