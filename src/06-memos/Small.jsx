import React, { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('renderizado')
    return (
        <small>{ value }</small>
    )
});
