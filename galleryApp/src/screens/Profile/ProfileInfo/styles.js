import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, backgroundColor: "#fcfcff", paddingHorizontal: 10 },

  profile_info_container : { justifyContent: "center", alignItems: "center", marginTop: 100 },
  profile_name : {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },

  report_area : { marginTop: 20, flexDirection: "row", alignItems: "center" },

  left_report_area : {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  left_report_title : { color: "black", fontWeight: "bold", fontSize: 15 },
  left_report_text : { marginTop: 15, fontSize: 20, color: "black", fontWeight: "bold" },

  right_report_area : {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  right_report_title : { color: "black", fontWeight: "bold" },
  right_report_text : { marginTop: 15, fontSize: 20, color: "black", fontWeight: "bold" },


  logout_area : { marginVertical: 40, justifyContent: "center", alignItems: "center" },
  logout_button : { padding: 10, borderWidth: 0.7, borderColor: "#ccc", borderRadius: 8 },
  logout_text : { color: "black", fontWeight: "bold", fontSize: 20 },

  last_photos_area : { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  last_photos_left_title : { fontWeight: "bold", color: "black" },
  last_photos_right_text : { fontWeight: "bold", color: "#785af1" },

  last_photos_card_area : {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 15,
  },
  last_photos_card_image : (position,width,height)=>({
    width: (position==="PORTRAIT") ? width * 0.20 : height*0.20,
    height: (position==="PORTRAIT") ? width * 0.20 : height*0.20,
    objectFit: "cover"
  }),

  last_photos_detail_area : { marginLeft: 20, flex: 1, justifyContent: "center" },
  last_photos_detail_date : {
    color: "black",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  last_photos_detail_info : { marginTop: 10 },
  last_photos_detail_name : { color: "black", fontWeight: "bold" },
  last_photos_detail_text : { color: "black", fontWeight: "bold" }
});

export default styles;
