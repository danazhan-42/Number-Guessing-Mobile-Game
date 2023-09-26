import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function ConfirmScreen({ userInfo, modalVisibility, hideModal, onConfirm }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleOnConfirm = () => {
    onConfirm(true);
  };

  return (
    <Modal visible={modalVisibility}>
      <Screen>
        <Card>
          <AppText>
            Hello {userInfo[0]}
            {"\n"}Please confirm the following information is correct by
            pressing the continue button:
          </AppText>
          <AppText style={styles.info}>
            {userInfo[1]} {"\n"}
            {userInfo[2]}
          </AppText>
          <View style={styles.buttonContainer}>
            <AppButton title="Go Back" color="red" onPress={hideModal} />
            <AppButton
              title="Continue"
              color="blue"
              onPress={handleOnConfirm}
            />
          </View>
        </Card>
      </Screen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  info: {
    color: "brown",
  },
});

export default ConfirmScreen;
