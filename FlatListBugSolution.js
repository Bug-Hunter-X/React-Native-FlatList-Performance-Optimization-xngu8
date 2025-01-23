```javascript
import React from 'react';
import { FlatList, Text, View, StyleSheet, SectionList } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

const ItemSeparator = () => (
  <View style={styles.separator} />
);

const FlatListOptimized = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};

export default FlatListOptimized;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});
```