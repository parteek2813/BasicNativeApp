import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428.jpg?impolicy=website&width=1600&height=900',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahel</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDesc}>
            The Hawa Mahel is a palace in the city jaipur , India. Built from
            red and pink sandstone , it is on the edge of the City Palace
          </Text>
          <Text style={styles.cardFooter}>12 Mins, Away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDesc: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
  },
});
