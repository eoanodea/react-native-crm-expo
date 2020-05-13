import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { getTheme } from "react-native-material-kit";
import * as actions from "../actions";

const theme = getTheme();

import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: "lightgrey",
    borderWidth: 0.5,
  },
  title1: {
    top: 10,
    left: 80,
    fontSize: 24,
  },
  title2: {
    top: 35,
    left: 82,
    fontSize: 18,
    maxWidth: 390,
    flexWrap: 'wrap'
  },
  image: {
    flex: 0,
    height: 100,
    width: 390,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 15,
    color: "red",
    backgroundColor: "rgba(255,255,255,0)",
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 0,
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
  textArea: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcons: {
    color: "#26a69a",
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  editIcon: {
    color: "#26a6e4",
  },
  deleteIcon: {
    color: "#e9a69a",
  },
  sections: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    width: 100,
  },
  editDeleteArea: {
    flexDirection: "row",
    paddingLeft: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(211,211,211, 0.3)",
    marginBottom: 10,
  },
  actionImage: {
      width: 100,
      height: 100
  }
});

class DetailView extends Component {
  updateTest() {
    this.props.updateContact(this.props.person);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../images/background.jpg")}
            style={[theme.cardImageStyle, styles.image]}
          />
          <EvilIcon name={"user"} size={100} style={styles.icon} />
          <SimpleIcon
            name={"close"}
            size={30}
            style={styles.closeIcon}
            onPress={() => this.props.noneSelected()}
          />
          <Text style={[theme.cardTitleStyle, styles.title1]}>
            {this.props.person.firstName} {this.props.person.lastName}
          </Text>
          <Text style={[theme.cardTitleStyle, styles.title2]}>
            from {this.props.person.company}
          </Text>
          <View style={styles.textArea}>
            <MaterialIcon name={"phone"} size={40} style={styles.textIcons} />
            <Text style={theme.cardContentStyle}>
              {this.props.person.phone}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={"email"} size={40} style={styles.textIcons} />
            <Text style={theme.cardContentStyle}>
              {this.props.person.email}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"assignment"}
              size={40}
              style={styles.textIcons}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.person.project}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"mode-edit"}
              size={40}
              style={styles.textIcons}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.person.notes}
            </Text>
          </View>
          <View style={styles.editDeleteArea}>
            <TouchableOpacity
              style={styles.sections}
              onPress={() => {
                this.updateTest();
              }}
            >
              <MaterialIcon
                name={"autorenew"}
                size={40}
                style={styles.editIcon}
              />
              <Text style={theme.cardContentStyle}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sections}
              onPress={() => {
                this.props.deleteContact(this.props.person._id);
              }}
            >
              <MaterialIcon
                name={"delete-forever"}
                size={40}
                style={styles.deleteIcon}
              />
              <Text style={theme.cardContentStyle}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <TouchableOpacity>
              <Image
                source={require("../images/call2x.png")}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../images/email2x.png")}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../images/sms2x.png")}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>Email</Text>
            <Text>SMS</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

/**
 * Return a list of people from our redux state
 *
 * @param {*} state
 */
const mapStateToProps = (state) => {
  return {
    person: state.personSelected,
    toUpdate: state.toUpdate,
  };
};

export default connect(mapStateToProps, actions)(DetailView);
