import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll_container: { flex: 1, backgroundColor: "#fcfcff" },

  image : (width)=>({width : width,height : width*0.7,objectFit : "cover"}),

  detail_container_area : {
    backgroundColor: "#fff",
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  detail_title_area : { justifyContent: "center", alignItems: "center", marginTop: 20 },
  detail_title : { color: "black", fontWeight: "bold", fontSize: 20 },
  detail_desc : { marginTop: 20, color: "black", fontSize: 14 }
});

export default styles;
