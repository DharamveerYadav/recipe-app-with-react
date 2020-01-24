import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import HealthInfoButton from "./HealthInfo/HealthInfo";
export default class Detail extends Component {
  state = {
    recipe: null,
    healthInfo: ""
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

  showhealthInfo = () => {
    console.log("inside show Health Info");
    if (this.state.recipe.calories > 500) {
      this.setState({
        healthInfo: "Not Healthy"
      });
    }
  };

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
            <Card.Footer>{this.state.healthInfo}</Card.Footer>
            <Button variant="primary">Go Back</Button>
            <HealthInfoButton
              showHealthInfo={this.showhealthInfo}
            ></HealthInfoButton>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
