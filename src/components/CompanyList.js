import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import CompanyItem from "./CompanyItem";
import { Icon } from "react-native-vector-icons/EvilIcons";
import _ from "lodash";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "#e5e5e5",
  },
});

class CompanyList extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.props.companies}
          renderItem={({ item }) => <CompanyItem companies={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const people = state.people;
  const companies = _.chain(people)
    .groupBy("company")
    .map((value, i) => {
      return { company: i, names: value };
    })
    .value()

  return {
    companies,
  };
};

export default connect(mapStateToProps)(CompanyList);
