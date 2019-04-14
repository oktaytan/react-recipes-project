import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: ''
    };
  }

  componentDidMount() {
    const { recipes } = this.props;
    const recipe = recipes.filter(recipe => {
      return recipe.recipe_id === this.props.match.params.id;
    });

    this.setState({
      recipe: recipe[0]
    });
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-5'>
              <Link to='/' className='btn btn-warning mb-5 text-capitalize'>
                back to recipe list
              </Link>
              <img src={image_url} className='d-block w-100' alt='recipe' />
            </div>
            {/* details */}
            <div className='col-10 mx-auto col-md-6 my-5 details'>
              <h6 className='text-uppercase'>{title}</h6>
              <h6 className='text-warning text-capitalize text-slanted'>
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                className='btn btn-primary text-capitalize mt-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                publisher webpage
              </a>
              <a
                href={source_url}
                className='btn btn-success text-capitalize mt-2 mx-3'
                target='_blank'
                rel='noopener noreferrer'
              >
                recipe url
              </a>
            </div>
            {/* end of details */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
