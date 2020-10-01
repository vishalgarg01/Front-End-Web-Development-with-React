import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


  function RenderComments({comments}) {
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

  function RenderDish({dish}){
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );   
  }

  // render() {
  //   const dish = this.props.dish;
    
  //   return (
  //       <div className="row">
  //         <div className="col-12 col-md-5 m-1">
  //         {this.renderDish(dish)}
  //         </div>
  //         <div className="col-12 col-md-5 m-1">
  //           <h4>Comments</h4>
  //           {this.renderComments(dish.comments)}
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  const DishDetail=(props)=>{
    if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.dish.comments }/>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
  export default DishDetail;