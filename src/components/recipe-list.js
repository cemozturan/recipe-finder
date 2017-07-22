import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './recipe-item';

class RecipeList extends Component {
    render() {
        return(
            <div>
            {
                this.props.recipes.map((item, index) => {
                        return (
                                <RecipeItem key={index} recipe={item}/>
                        )
                    }
                )
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);
