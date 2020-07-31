import React from 'react';
import {
    FlatList, StyleSheet,
    Text, TouchableHighlight, View,
} from 'react-native';

const ItemList = (props) => {
    const renderItem = ({ item }) => (
        <TouchableHighlight
            style={styles.item}
            key={item.index}
            onPress={() => props.callback(item)}
            underlayColor='#aee6e0'>
            <View>
                <Text selectionColor='white'>
                    {item.name.first} {item.name.last}
                </Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.index.toString()}
        />
    )
}

export default ItemList;

const styles = StyleSheet.create({
    item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
        marginVertical: 0,
        borderBottomColor: 'black',

        borderStyle: 'solid',
        borderBottomWidth: 0.3,
    },
});
