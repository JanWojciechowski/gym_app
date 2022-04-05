import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'grey'
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "black",
  },
  icoSquat: {
    width: 65,
    height: 30,
    marginBottom: 15,
    position: "absolute",
    left: 5,
    top: 10,
  },
  input: {
    margin: 10,
    width: 90,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "white",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  itemContainer: {
    alignItems: "center",
  },
  inputText: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    height: 60,
    width: 100,
    margin: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(12,116,118,0.9)",
  },
  addContainer: {
    display: "flex",
    alignItems: "center",
  },

  // table View

  body: {
    flex: 1,
  },
  listWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
  },
  row: {
    flex: 1,
    fontSize: 17,
    paddingHorizontal: 0,
    paddingVertical: 5,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(16, 110, 111,0.8)",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
  },
  firstRow: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 1,
    paddingVertical: 5,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    flexGrow: 2,
    backgroundColor: "rgba(16, 110, 111,0.8)",
    borderRightWidth: 0.5,
    borderRightColor: "white",
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  tHead: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 2,
    paddingVertical: 7,
    textAlign: "center",
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  tHeadFirst: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 2,
    paddingVertical: 7,
    textAlign: "center",
    color: "black",
    flexGrow: 2,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
});

export default styles;
