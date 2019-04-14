import React, { Component } from 'react';

class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
              <h1 className='text-slanted text-capitalize'>search of recipe</h1>
              <form className='mt-4'>
                <div className='input-group mt-2'>
                  <input
                    type='text'
                    placeholder='type recipes'
                    className='form-control'
                    value={value}
                    onChange={handleChange}
                    onKeyUp={handleSubmit}
                  />
                  <div className='input-group-append'>
                    <button
                      type='submit'
                      className='input-group-text bg-primary text-white'
                    >
                      <i className='fas fa-search' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeSearch;
