import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Javascript - ES12</Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            JavaScript (JS) is a high-level, dynamic, and interpreted
            programming language widely used for web development. It was first
            introduced by Netscape in 1995 and quickly became a crucial
            component of the web ecosystem. By the early 2000s, it had gained
            popularity due to its ability to create interactive and responsive
            web pages.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/its__prateek28/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 300,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks: {},
});
