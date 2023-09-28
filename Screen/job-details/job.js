import {
  StyleSheet,
  Text,
  View,
  TextInput,
  RefreshControl,
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useCallback } from "react";
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";
import useFetch from "../../hook/useFetch";
import { JobAbout, JobTabs, JobFooter, Specifics, Company } from "./index";

const tabs = ["About", "Qualifications", "Responsibilities"];
export default function Job({ navigation, route }) {
  const { job_id } = route.params;
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: job_id,
  });
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
    </SafeAreaView>
  );
}
