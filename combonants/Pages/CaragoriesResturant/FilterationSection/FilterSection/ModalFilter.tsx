import React, { useContext, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Filtration_Create_Context } from "../../ContextApi/FilterContext";
import FilterSectio from "./FilterSectio";

const ModalFilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const ModelContext=useContext(Filtration_Create_Context);

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={ModelContext.ModalFilter}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FilterSectio/>
      </Modal>
    </View>
  );
};


export default ModalFilter;