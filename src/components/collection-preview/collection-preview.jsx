import React from 'react';

import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className-="title">{title.toLowerCase()}</h1>
        <div className="preview">
            {items.filter( (item, idx) => idx < 4 ).map(( { id, ...otherCollectionItems } ) => (
                <CollectionItem key={id} {...otherCollectionItems} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;