import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { HeaderBar } from "../components";
import MainLayout from "./MainLayout";
import { FONTS, COLORS, SIZES, icons, dummyData } from "../constants";

const SectionTitle = ({ title }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
      }}
    >
      <Text
        style={{
          color: COLORS.lightGray3,
          ...FONTS.h4,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const Setting = ({ title, value, type, onPress }) => {
  if (type == "Button") {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginRight: SIZES.radius,
              color: COLORS.lightGray3,
              ...FONTS.h3,
            }}
          >
            {value}
          </Text>
          <Image
            source={icons.rightArrow}
            style={{
              height: 15,
              width: 15,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
        <Switch value={value} onValueChange={(value) => onPress(value)} />
      </View>
    );
  }
};

const Profile = () => {
  const [faceId, setFaceId] = useState(true);
  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header  */}
        <HeaderBar title="Profile" />
        {/* Details  */}

        <ScrollView>
          {/* Email & User Id  */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
            }}
          >
            {/* Email and ID  */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3,
                }}
              >
                {dummyData.profile.email}
              </Text>
              <Text
                style={{
                  color: COLORS.lightGray3,
                  ...FONTS.body4,
                }}
              >
                ID: {dummyData.profile.id}
              </Text>
            </View>

            {/* Status */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.verified}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  color: COLORS.lightGreen,
                  ...FONTS.body4,
                }}
              >
                Veryfied
              </Text>
            </View>
          </View>

          {/* APP */}
          <SectionTitle title="APP" />

          <Setting
            title="Launch Screen"
            value="Home"
            type="Button"
            onPress={() => console.log("Click")}
          />

          <Setting
            title="Appearance"
            value="Dark"
            type="Button"
            onPress={() => console.log("Click")}
          />

          {/* ACCOUNT */}
          <SectionTitle title="ACCOUNT" />

          <Setting
            title="Payment Currency"
            value="USD"
            type="Button"
            onPress={() => console.log("Click")}
          />

          <Setting
            title="Language"
            value="English"
            type="Button"
            onPress={() => console.log("Click")}
          />

          {/* SECURITY */}
          <SectionTitle title="SECURITY" />

          <Setting
            title="FaceID"
            value={faceId}
            type="Switch"
            onPress={(value) => setFaceId(value)}
          />

          <Setting
            title="Password Settings"
            value=""
            type="Button"
            onPress={() => console.log("Click")}
          />

          <Setting
            title="Change Password"
            value=""
            type="Button"
            onPress={() => console.log("Click")}
          />

          <Setting
            title="2-Factor Authentication"
            value=""
            type="Button"
            onPress={() => console.log("Click")}
          />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Profile;
