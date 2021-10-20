import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { styles } from "./styles";
import { categories } from "../../utils/categories";

interface Props {
  categorySelected: string;
  setCategoryId: (categoryId: string) => void;
  hasCheckBox?: boolean;
}
export function CategorySelect({
  categorySelected,
  setCategoryId,
  hasCheckBox = false,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected ? true : false}
            onPress={() => setCategoryId(category.id)}
            hasCheckBox={hasCheckBox}
          />
        );
      })}
    </ScrollView>
  );
}
