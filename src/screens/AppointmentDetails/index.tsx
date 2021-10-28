import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member, MemberProps } from "../../components/Members";
import { ButtonIcon } from "../../components/ButtonIcon";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Load";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};
export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o widget está habilitado ?"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);
  console.log("widget", widget);

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={22} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget && widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}
      <View style={styles.footer}>
        {guildSelected.guild.owner && (
          <ButtonIcon onPress={handleOpenGuild} title="Entrar na partida" />
        )}
      </View>
    </Background>
  );
}
