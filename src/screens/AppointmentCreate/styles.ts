import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },

  form: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  select: {
    height: 68,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    borderColor: theme.colors.secondary50,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 64,
    height: 68,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary50,
  },

  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 18,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },

  characterLimit: {
    fontSize: 13,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
  },

  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});
