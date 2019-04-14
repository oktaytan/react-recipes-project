import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;

    return (
      <React.Fragment>
        <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
          <div className='card'>
            <img
              src={image_url}
              className='img-card-top'
              style={{ height: '14rem' }}
              alt='recipe'
            />
            <div className='card-body text-capitalize'>
              <h6>{title}</h6>
              <h6 className='text-warning text-slanted'>
                provided by {publisher}
              </h6>
            </div>
            <div className='card-footer'>
              <Link
                to={`/details/${recipe_id}`}
                className='btn btn-primary text-capitalize'
              >
                details
              </Link>
              <a
                href={source_url}
                className='btn btn-success text-capitalize mx-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
