import { Platform } from "react-native";

import Constants from "expo-constants";

import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { useSafeAreaInsets } from "@showtime-xyz/universal.safe-area";
import { Text } from "@showtime-xyz/universal.text";

import { Messages } from "app/components/creator-channels/messages";
import { useHandleNotification } from "app/hooks/use-handle-notification";
import { useNetWorkConnection } from "app/hooks/use-network-connection";
import { screenOptions } from "app/navigation/navigator-screen-options";
import { AppleMusicAuthNativeWebViewScreen } from "app/screens/apple-music-auth-native-webview";
import { BlockedListScreen } from "app/screens/blocked-list";
import { UnlockedChannelScreen } from "app/screens/channel-unlocked";
import { ClaimLimitExplanationScreen } from "app/screens/claim-limit-explanation";
import { CollectorsScreen } from "app/screens/collectors";
import { CommentsScreen } from "app/screens/comments";
import { CreatorChannelsCongratsScreen } from "app/screens/creator-channels-congrats";
import { CreatorChannelsIntroScreen } from "app/screens/creator-channels-intro";
import { CreatorChannelsMembersScreen } from "app/screens/creator-channels-members";
import { CreatorChannelsMessageReactionsScreen } from "app/screens/creator-channels-message-reactions";
import { CreatorChannelsSettingsScreen } from "app/screens/creator-channels-settings";
import { CreatorChannelsShareScreen } from "app/screens/creator-channles-share";
import { CreatorTokenBuyScreen } from "app/screens/creator-token/buy-creator-token";
import { CreatorTokenCollectedScreen } from "app/screens/creator-token/creator-token-collected";
import { CreatorTokenCollectorsScreen } from "app/screens/creator-token/creator-token-collectors";
import { InviteCreatorTokenScreen } from "app/screens/creator-token/invite-creator-token";
import { CreatorTokenInviteSignInScreen } from "app/screens/creator-token/invite-sign-in";
import { ReviewCreatorTokenScreen } from "app/screens/creator-token/review-creator-token";
import { TopCreatorTokenScreen } from "app/screens/creator-token/top-creator-token";
import { CreatorTokensExplanationScreen } from "app/screens/creator-tokens-explanation";
import { CreatorTokensSelfServeExplainerScreen } from "app/screens/creator-tokens-self-serve-explainer";
import { CreatorTokensShareModalScreen } from "app/screens/creator-tokens-share";
import { EnterInviteCodeModalScreen } from "app/screens/creatro-tokens-enter-invite-modal";
import { DetailsScreen } from "app/screens/details";
import { DropScreen } from "app/screens/drop";
import { DropEditDetailsScreen } from "app/screens/drop-edit-details";
import { DropImageShareScreen } from "app/screens/drop-image-share";
import { DropUpdateScreen } from "app/screens/drop-update";
import { DropViewShareScreen } from "app/screens/drop-view-share";
import { EditProfileScreen } from "app/screens/edit-profile";
import { FollowersScreen } from "app/screens/followers";
import { FollowingScreen } from "app/screens/following";
import { LoginScreen } from "app/screens/login";
import { NftScreen } from "app/screens/nft";
import { NotificationSettingsScreen } from "app/screens/notification-settings";
import { PayoutsSetupScreen } from "app/screens/payouts/setup";
import { PrivacySecuritySettingsScreen } from "app/screens/privacy-and-security-settings";
import { CreatorTokensImportAllowlistScreen } from "app/screens/profile/import-allowlist";
import { CreatorTokensImportAllowlistSuccessScreen } from "app/screens/profile/imported-allowlist-succeeded";
import { ProfileScreen } from "app/screens/profile/profile";
import { QRCodeShareScreen } from "app/screens/qr-code-share";
import { ReportScreen } from "app/screens/report";
import { SearchScreen } from "app/screens/search";
import { SettingsScreen } from "app/screens/settings";
import { AddEmailScreen } from "app/screens/settings-add-email";
import { VerifyPhoneNumberScreen } from "app/screens/settings-verify-phone-number";
import { TrendingScreen } from "app/screens/trending";

import packageJson from "../../../package.json";
import { OnboardingScreen } from "../screens/onboarding";
import { BottomTabNavigator } from "./bottom-tab-navigator";
import { createStackNavigator } from "./create-stack-navigator";
import { RootStackNavigatorParams } from "./types";

const Stack = createStackNavigator<RootStackNavigatorParams>();

export function RootStackNavigator() {
  const { top: safeAreaTop } = useSafeAreaInsets();
  useNetWorkConnection();
  useHandleNotification();
  const isDark = useIsDarkMode();

  return (
    <Stack.Navigator>
      {/* Bottom tab navigator */}
      <Stack.Screen
        name="bottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* Screens without default header */}
      <Stack.Group
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          animationDuration: Platform.OS === "ios" ? 400 : undefined,
          animation: Platform.OS === "android" ? "fade_from_bottom" : "default",
          statusBarStyle: isDark ? "light" : "dark",
        }}
      >
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          getId={({ params }) => params?.username}
          options={{
            statusBarStyle: "light",
          }}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{
            animation: Platform.OS === "android" ? "fade_from_bottom" : "fade",
            animationDuration: 200,
          }}
        />
        <Stack.Screen
          name="nft"
          component={NftScreen}
          getId={({ params }) => Object.values(params).join("-")}
          options={{
            statusBarStyle: "light",
          }}
        />
        <Stack.Screen
          name="dropSlug"
          component={NftScreen}
          getId={({ params }) => Object.values(params).join("-")}
          options={{
            statusBarStyle: "light",
            contentStyle: {
              backgroundColor: "black",
            },
            navigationBarColor: "black",
          }}
        />
        <Stack.Screen name="channelsMessage" component={Messages} />
        <Stack.Screen
          name="channelUnlocked"
          component={UnlockedChannelScreen}
          options={{
            animation:
              Platform.OS === "android"
                ? "fade_from_bottom"
                : "slide_from_bottom",
            animationDuration: 200,
          }}
        />
        <Stack.Screen
          name="creatorTokensShare"
          component={CreatorTokensShareModalScreen}
          options={{
            animation:
              Platform.OS === "android"
                ? "fade_from_bottom"
                : "slide_from_bottom",
            animationDuration: 200,
          }}
        />

        <Stack.Screen
          name="dropViewShareModal"
          component={DropViewShareScreen}
          options={{
            animation:
              Platform.OS === "android"
                ? "fade_from_bottom"
                : "slide_from_bottom",
            animationDuration: 200,
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen
          name="reviewCreatorToken"
          component={ReviewCreatorTokenScreen}
        />
        <Stack.Screen
          name="creatorTokensImportAllowlistSuccess"
          component={CreatorTokensImportAllowlistSuccessScreen}
          options={{
            animation:
              Platform.OS === "android"
                ? "fade_from_bottom"
                : "slide_from_bottom",
            animationDuration: 200,
          }}
        />
      </Stack.Group>

      {/* Screens accessible in most of the navigators */}
      <Stack.Group screenOptions={screenOptions({ safeAreaTop, isDark })}>
        <Stack.Screen
          name="settings"
          options={{
            headerTitle: "Settings",
            headerRight: () => (
              <Text tw="text-xl font-extrabold text-gray-100 dark:text-gray-900">
                v{Constants?.expoConfig?.version ?? packageJson?.version}
              </Text>
            ),
          }}
          component={SettingsScreen}
        />
        <Stack.Screen
          name="privacySecuritySettings"
          component={PrivacySecuritySettingsScreen}
        />
        <Stack.Screen
          name="notificationSettings"
          component={NotificationSettingsScreen}
        />
        <Stack.Screen name="blockedList" component={BlockedListScreen} />
        <Stack.Screen
          name="followers"
          component={FollowersScreen}
          options={{ headerTitle: "Followers" }}
        />
        <Stack.Screen
          name="following"
          options={{ headerTitle: "Following" }}
          component={FollowingScreen}
        />
        <Stack.Screen
          name="collectors"
          options={{ headerTitle: "Collectors" }}
          component={CollectorsScreen}
        />
        <Stack.Screen
          name="comments"
          options={{
            headerTitle: "Comments",
            animation: Platform.OS === "android" ? "fade_from_bottom" : "fade",
            animationDuration: Platform.OS === "android" ? undefined : 200,
          }}
          component={CommentsScreen}
        />

        <Stack.Screen
          name="channelsMembers"
          options={{ headerTitle: "Members" }}
          component={CreatorChannelsMembersScreen}
        />
        <Stack.Screen
          name="dropUpdate"
          options={{ headerTitle: "Update Spotify Link" }}
          component={DropUpdateScreen}
        />
        <Stack.Screen
          name="channelsMessageReactions"
          component={CreatorChannelsMessageReactionsScreen}
        />
        <Stack.Screen
          name="trending"
          options={{ headerTitle: "Trending" }}
          component={TrendingScreen}
        />
        <Stack.Screen
          name="topCreatorToken"
          options={{ headerTitle: "Top Creator Tokens" }}
          component={TopCreatorTokenScreen}
        />
        <Stack.Screen
          name="creatorTokenCollected"
          options={{ headerTitle: "Creator Tokens Collected" }}
          component={CreatorTokenCollectedScreen}
        />
        <Stack.Screen
          name="creatorTokenCollectors"
          options={{ headerTitle: "Creator Tokens Collectors" }}
          component={CreatorTokenCollectorsScreen}
        />
        <Stack.Screen
          name="creatorTokensSelfServeExplainer"
          component={CreatorTokensSelfServeExplainerScreen}
        />
        <Stack.Screen
          name="inviteCreatorToken"
          options={{ headerTitle: "Invite friends" }}
          component={InviteCreatorTokenScreen}
        />
      </Stack.Group>

      {/* Modals */}
      <Stack.Group
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === "ios" ? "default" : "none",
          presentation: Platform.OS === "ios" ? "modal" : "transparentModal",
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
        <Stack.Screen name="editProfile" component={EditProfileScreen} />
        <Stack.Screen
          name="appleMusicAuthNativeWebView"
          component={AppleMusicAuthNativeWebViewScreen}
        />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="addEmail" component={AddEmailScreen} />
        <Stack.Screen
          name="verifyPhoneNumber"
          component={VerifyPhoneNumberScreen}
        />
        <Stack.Screen name="payoutsSetup" component={PayoutsSetupScreen} />
        <Stack.Screen name="qrCodeShare" component={QRCodeShareScreen} />
        <Stack.Screen name="dropImageShare" component={DropImageShareScreen} />
        <Stack.Screen
          name="dropEditDetailsModal"
          component={DropEditDetailsScreen}
        />
        <Stack.Screen
          name="channelsIntro"
          options={{ gestureEnabled: false }}
          component={CreatorChannelsIntroScreen}
        />
        <Stack.Screen
          name="channelsCongrats"
          component={CreatorChannelsCongratsScreen}
        />
        <Stack.Screen
          name="channelsShare"
          component={CreatorChannelsShareScreen}
        />
        <Stack.Screen
          name="creatorTokenBuy"
          component={CreatorTokenBuyScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          animation: "none",
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen
          name="claimLimitExplanation"
          component={ClaimLimitExplanationScreen}
        />
        <Stack.Screen name="report" component={ReportScreen} />
        <Stack.Screen name="drop" component={DropScreen} />
        <Stack.Screen
          name="channelsSettings"
          component={CreatorChannelsSettingsScreen}
        />
        <Stack.Screen
          name="creatorTokensExplanation"
          component={CreatorTokensExplanationScreen}
        />
        <Stack.Screen
          name="enterInviteCode"
          component={EnterInviteCodeModalScreen}
        />
        <Stack.Screen
          name="creatorTokenInviteSignIn"
          component={CreatorTokenInviteSignInScreen}
        />
        <Stack.Screen
          name="creatorTokensImportAllowlist"
          component={CreatorTokensImportAllowlistScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
