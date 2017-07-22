import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './recipe-item';

class FavoriteRecipeList extends Component {
    render() {
        return (
            <div>
                <h4>Favorite Recipes:</h4>
            {
                this.props.favoriteRecipes.map((item, index) => {
                        return (
                                <RecipeItem
                                    key={index}
                                    recipe={item}
                                    favoriteButton={false}/>
                        )
                    }
                )
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    };
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
