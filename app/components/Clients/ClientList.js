import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { clientData } from "./data";
import VerticalFlatListItem from "./VerticalFlatListItem";

class ClientList extends Component {
  render() {
    return (
      <View>
        <View style={{ height: 100 + "%" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{
              padding: 5
            }}
            data={clientData}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <VerticalFlatListItem
                    key={item.key}
                    item={item}
                    index={index}
                    parentFlatList={this}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default ClientList;
