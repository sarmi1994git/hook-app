import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    if (isLoading) {
        return (
            <LoadingQuote />
        );
    } else if (hasError) {
        return (
            <div className="alert alert-danger text-center">
                {hasError}
            </div>
        );
    } else {
        return (
            <>
                <h1>BreakingBad Quotes</h1>
                <hr/>
    
                <Quote 
                    quote={data[0]} />

                <button className="btn btn-primary" onClick={() => increment()}>
                    Next quote
                </button>
    
            </>
        );
    }
}
