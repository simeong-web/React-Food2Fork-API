import React from 'react';

const resultsItem = () => {
    return (
        <div className="ui container">
            <div className="four wide column">
                <img className="ui image" src={/*Include the source from the API call of the image here*/} />
                <div className="content">
                    <div className="header">{/*Include the title from the API call here*/}</div>
                </div>
            </div>
        </div>
    )
}

export default resultsItem;