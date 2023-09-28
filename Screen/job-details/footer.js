import { View, Text, TouchableOpacity, Image, Linking,StyleSheet } from "react-native";
import icons from '../../constants/icons';
import { COLORS, FONT, SIZES } from "../../constants/theme";

const Footer = ({ url }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.likeBtn}>
          <Image
            source={icons.heartOutline}
            resizeMode='contain'
            style={styles.likeBtnImage}
          />
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => Linking.openURL(url)}
        >
          <Text style={styles.applyBtnText}>Apply for job</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: SIZES.small,
      backgroundColor: "#FFF",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    likeBtn: {
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: "#F37453",
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    likeBtnImage: {
      width: "40%",
      height: "40%",
      tintColor: "#F37453",
    },
    applyBtn: {
      flex: 1,
      backgroundColor: "#FE7654",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: SIZES.medium,
      borderRadius: SIZES.medium,
    },
    applyBtnText: {
      fontSize: SIZES.medium,
      color: COLORS.white,
      fontFamily: FONT.bold,
    },
  });

  export default Footer;