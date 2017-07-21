import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      dish: ''
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    /*
    This throws the following error:

    Fetch API cannot load http://www.recipepuppy.com/api/?i=sdf&q=sdfsdf.
    No 'Access-Control-Allow-Origin' header is present on the requested resource.
    Origin 'http://localhost:3000' is therefore not allowed access.
    If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

    A simple workaround is to use the Allow-Control-Allow-Origin extension for Chrome.
    */
    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.props.setRecipes(json.results));
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={event => this.setState({ ingredients: event.target.value })}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
