import React, { Component } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

class Index extends Component {
  state = {
    text: [],
    model_id: "",
  };

  onChangetext = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/add", {
        text: [this.state.text],
        model_id: "en-es",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({ text: [], model_id: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Container fluid="md">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Traductor</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={this.state.text}
                type="text"
                onChange={this.onChangetext}
              />
              <Button variant="primary" type="submit" on>
                Traducir
              </Button>
            </InputGroup>
          </Container>
        </form>
      </div>
    );
  }
}

export default Index;
