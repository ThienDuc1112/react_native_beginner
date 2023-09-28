import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as Yup from 'yup';
// import { TextInput } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    body: Yup.string().required('body is required'),
    rating: Yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  });

export default function ReviewForm({addReview}) {

  return (
    // <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", rating: "", body: "" }}
        validationSchema={validationSchema}
        onSubmit={(value,actions) => {
            actions.resetForm();
            addReview(value);
            console.log(value);
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange("title")}
              value={values.title}
            />
              {errors.title && <Text style={styles.error}>{errors.title}</Text>}

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={handleChange("body")}
              value={values.body}
            />
              {errors.body && <Text style={styles.error}>{errors.body}</Text>}

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />
              {errors.rating && <Text style={styles.error}>{errors.rating}</Text>}

            <Button title="submit" color="#21bfbd" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    // </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    container: {
        flex: 1,
        padding: 16,
      },
    error: {
        color: 'red',
        marginBottom: 10,
      },
});
