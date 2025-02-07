import { Platform } from "react-native";

import { withModalScreen } from "@showtime-xyz/universal.modal-screen";

import { TopCreatorTokens } from "app/components/creator-token/top-creator-token";
import { withColorScheme } from "app/components/memo-with-theme";
import { useTrackPageViewed } from "app/lib/analytics";

const TopCreatorTokenModalScreen = withModalScreen(TopCreatorTokens, {
  title: "",
  matchingPathname: "/creator-token/[profileId]/top",
  matchingQueryParam: "TopcreatorTokenScreenModal",
  enableContentPanningGesture: false,
  snapPoints: ["90%"],
});

export const TopCreatorTokenScreen = withColorScheme(() => {
  useTrackPageViewed({ name: "TopCreatorTokensScreen" });
  if (Platform.OS === "web") {
    return <TopCreatorTokenModalScreen />;
  }
  return <TopCreatorTokens />;
});
