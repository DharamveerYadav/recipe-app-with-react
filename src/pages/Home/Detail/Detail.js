import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
export default class Detail extends Component {
  state = {
    recipe: null
  };
  static propTypes = {
    prop: PropTypes
  };

  componentWillMount() {
    const { currRecipe } = this.props.location.state;
    this.setState({
      recipe: currRecipe.recipe
    });
    console.log("printign current recipe ", currRecipe);
  }

  render() {
    console.log("data ", this.state.recipe);
    return (
      <div className="container ">
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.recipe.image} />
          <Card.Body>
            <Card.Title>{this.state.recipe.label} </Card.Title>
            <Card.Text>
              <ul>
                {this.state.recipe.ingredients.map(element => (
                  <li>{element.text}</li>
                ))}
              </ul>
            </Card.Text>
            <Button variant="primary">Go Back</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
