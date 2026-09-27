import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Khối 1: Ô 1 và Ô 2 (Xếp dọc) */}
      <View style={styles.blockVertical}>
        <View style={[styles.box, { backgroundColor: "#1E88E5" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#E53935" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>2</Text>
        </View>
      </View>

      {/* Khối 2: Ô 3, 4, 5 và 1 khoảng trống (Xếp ngang) */}
      <View style={styles.blockHorizontal}>
        <View style={[styles.box, { backgroundColor: "#FDD835" }]}>
          <Text style={[styles.textNumber, { color: "#000000" }]}>3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#43A047" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>4</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#8E24AA" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>5</Text>
        </View>
        {/* Thẻ khoảng trống chiếm 1/4 chiều rộng */}
        <View style={{ flex: 1 }} />
      </View>

      {/* Khối 3: Ô 6 (Màu cam) */}
      <View style={[styles.box, { flex: 1.8, backgroundColor: "#FB8C00" }]}>
        <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>6</Text>
      </View>

      {/* Khoảng trống đẩy phần tên sinh viên xuống đáy */}
      <View style={{ flex: 1 }} />

      {/* Tên sinh viên */}
      <Text style={styles.studentInfo}>Cao Hương Quỳnh - BIT240202</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  blockVertical: {
    flex: 2.2,
  },
  blockHorizontal: {
    flex: 2.2,
    flexDirection: "row",
    marginTop: 2,
  },
  box: {
    flex: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textNumber: {
    fontSize: 36,
    fontWeight: "bold",
  },
  studentInfo: {
    textAlign: "center",
    paddingBottom: 8,
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold",
  },
});
