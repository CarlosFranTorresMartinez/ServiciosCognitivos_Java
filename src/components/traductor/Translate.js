import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import TranslatorServices from "../../services/TranslatorServices";

class Translate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      model_id: "en-es",
      translate: [],
    };
  }

  onChangetext = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = async (e) => {
    var data = {
      text: [this.state.text],
      model_id: this.state.model_id,
    };

    e.preventDefault();
    await TranslatorServices.post(data)
      .then((response) => {
        this.setState({
          text: this.state.text,
          model_id: this.state.model_id,
          translate: [...response.data.translations],
        });
        console.log(response.data.translations);
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <Row>
              {this.state.translate.map((data, index) => (
                <Col key={index}>{data.translation}</Col>
              ))}
            </Row>
          </Container>
        </form>
      </div>
    );
  }
}

export default Translate;
