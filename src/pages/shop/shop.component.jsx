import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
  console.log('collections', collections);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps, null)(ShopPage);
