import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          source={IllustrationImg}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas {"\n"} GamePlays
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"} favoritos com seus amigos{" "}
          </Text>

          <ButtonIcon onPress={handleSignIn} title={"Entrar com Discord"} />
        </View>
      </View>
    </Background>
  );
}
