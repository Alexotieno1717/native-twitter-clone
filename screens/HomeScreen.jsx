import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  function gotoProfile() {
    navigation.navigate("Profile Screen");
  }

  function gotoSingleTweet() {
    navigation.navigate("Tweet Screen");
  }

  function gotoNewTweet() {
    navigation.navigate("New Tweet");
  }

  const Item = ({ title }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => gotoProfile()}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.flexRow} onPress={() => gotoProfile()}>
          <Text numberOfLines={1} style={styles.tweetName}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            @Alexoiteno900
          </Text>
          <Text numberOfLines={1}>&middot;</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            9min
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tweetContentContainer}
          onPress={() => gotoSingleTweet()}
        >
          <Text style={styles.tweetContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint amet
            ab sequi voluptatum culpa mollitia quaerat aspernatur repellendus
            sunt alias.
          </Text>
        </TouchableOpacity>

        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name="comment"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>465</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="retweet"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>465</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="heart"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>1,250</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name={Platform.OS === "ios" ? "share-apple" : "share-google"}
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeparator}></View>
        )}
      />
      <Pressable style={styles.floatingButton} onPress={() => gotoNewTweet()}>
        <AntDesign name="plus" size={26} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: "gray",
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  textGray: {
    color: "gray",
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
  ml4: {
    marginLeft: 16,
  },
});
