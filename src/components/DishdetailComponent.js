import React,{Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem,Breadcrumb ,
  Label,Row,Col,Modal,ModalBody,ModalHeader,Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { Control,Errors,LocalForm } from "react-redux-form";
import { addComment } from "../redux/ActionCreators";
import {Loading} from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    
      handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
       }
    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"  defaultValue="1" 
                                    className="form-control" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                        required,minLength: minLength(3), maxLength: maxLength(15) }}
                                    />
                                    <Errors className="text-danger" model=".author" show="touched"
                                      messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 numbers. ',
                                        maxLength: 'Must be 15 numbers or less. '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
  function RenderComments({comments,addComment,dishId}) {
    if (comments != null) {
       let options = { year: "numeric", month: "short", day: "numeric" };
      return(
        <div className="col-12 col-md-10 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
          {comments.map((comment)=>{
            return(
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}{"  "},{new Date(comment.date).toLocaleDateString("en-US", options)}</p>
              </li>
            );
          })}
          </ul>
          <CommentForm dishId={dishId} addComment={addComment}/>   
        </div>
      );
      
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
  
  // const DishDetail=(props)=>
  function DishDetail(props)
  {
    if(props.isLoading){
      return(
        <div className="container">
          <div className="row">
            <Loading/>
          </div>
        </div>
      );
    }
    else if(props.errMess){
      return(
        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );      
    }
    else if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to='/home'>Home</Link>  
                </BreadcrumbItem> 
                <BreadcrumbItem>
                  <Link to='/menu'>Menu</Link>  
                </BreadcrumbItem>   
                <BreadcrumbItem active>
                  {props.dish.name}  
                </BreadcrumbItem>               
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr/>
              </div>
            </div>
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
              </div>
              <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments }
                addComment={props.addComment}
                dishId={props.dish.id}/>
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