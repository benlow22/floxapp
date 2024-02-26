import React, { useState } from 'react';
import {SearchParameterForm} from "../components/search/SearchParameterForm";
import SearchResultList from "../components/search/SearchResultList";

export const SearchPage = () => {
    const [searchResult, setSearchResult] = useState(null);

    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
        // Set your search result data here
        setSearchResult(values);
    };

    return (
        <>
            <h1>Search</h1>
            <SearchParameterForm onFinish={onFinish} />
            {searchResult && <SearchResultList data={searchResult} />}
        </>
    );
};

export default SearchPage;