import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, errorMessage, searchApi] = useResults();

    const filterByResult = price => {
        return result.filter(item => {
            return item.price == price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage.length > 0 ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    results={filterByResult('$')}
                    title="Cost Effective"
                />
                <ResultList
                    results={filterByResult('$$')}
                    title="Bit Pricier"
                />
                <ResultList
                    results={filterByResult('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;