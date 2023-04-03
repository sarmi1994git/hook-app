import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Quote = (props) => {
    const { quote } = props;
    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display: 'flex'}} >
                <p ref={pRef} className="mb-1">{ quote?.quote }</p>
                <footer className="blockquote-footer">{ quote?.author }</footer>
            </blockquote>
            <code>
                { JSON.stringify(boxSize) }
            </code>
        </>
    );
}

Quote.propTypes = {
    quote: PropTypes.object
}