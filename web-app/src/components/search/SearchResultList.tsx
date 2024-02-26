import React from 'react';

interface ResultItem {
    id: string;
    title: string;
    description: string;
}

interface SearchResultListProps {
    data: ResultItem[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResultList;