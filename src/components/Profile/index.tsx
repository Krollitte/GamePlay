import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/auth";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Avatar } from "../Avatar";

import { styles } from "./styles";
import { ModalView } from "../ModalView";

import { Background } from "../Background";
import { COLLECTION_USER } from "../../config/database";
import { theme } from "../../global/styles/theme";

export function Profile() {
  const { user, signOut } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  async function handleSingOut() {
    signOut();
  }

  function handleOpenGuilds() {
    setOpenLogoutModal(true);
  }

  function handleCloseGuilds() {
    setOpenLogoutModal(false);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenGuilds}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{user.username}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de ser lendário </Text>
      </View>
      <Modal
        visible={openLogoutModal}
        transparent
        statusBarTranslucent
        animationType="slide"
        style={{ height: 170 }}
      >
        <View style={{ flex: 1, backgroundColor: theme.colors.overlay }}>
          <TouchableWithoutFeedback onPress={handleCloseGuilds}>
            <View style={{ marginTop: "160%", height: 170 }}>
              <Background>
                <View
                  style={{
                    marginTop: 20,
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontFamily: theme.fonts.title700,
                    }}
                  >
                    Deseja sair do GamePlay
                  </Text>
                  <View
                    style={{
                      marginTop: 20,
                      width: "100%",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity
                      onPress={handleCloseGuilds}
                      style={{
                        height: 56,
                        width: 160,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        borderStyle: "solid",
                        justifyContent: "center",
                        borderColor: "#495BCC",
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          fontFamily: theme.fonts.text500,
                        }}
                      >
                        Não
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleSingOut}
                      style={{
                        height: 56,
                        width: 160,
                        borderRadius: 8,
                        alignItems: "center",
                        backgroundColor: "#E51C44",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          fontFamily: theme.fonts.text500,
                        }}
                      >
                        Sim
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Background>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
}
