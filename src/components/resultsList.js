import React from 'react';
import resultsItem from './resultsItem';

const resultsList = ({ recipes }) => {
    // Map the entire array of item comming in, so they can be displayed in a list later.
    const mapResultItems = resultsItem.map((recipe) => {
        return <resultsItem key={recipe.id.recipeId} recipe={recipe} />
    })

    return (
        <div className="ui relaxed divided list">
            {mapResultItems}
        </div>
    )
}

export default resultsList;