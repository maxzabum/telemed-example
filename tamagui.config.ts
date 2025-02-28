import { defaultConfig } from "@tamagui/config/v4"
import { notoSansFont, tokens } from "src/configs/token"
import { createFont, createTamagui } from "tamagui";
import { themes } from "@tamagui/themes";
// you usually export this from a tamagui.config.ts file
export const config = createTamagui({
  ...defaultConfig,
  tokens:{
    ...defaultConfig.tokens,
    color:tokens.color,
    space: tokens.space,
    radius:tokens.radius,
    size:tokens.size,
    zIndex:tokens.zIndex,
    shadow:tokens.shadow,
  },
  fonts:{
    heading:notoSansFont,
    body:{
      ...defaultConfig.fonts.body,
      size:{
        ...defaultConfig.fonts.body.size,
        ...notoSansFont.size
      },
      face:notoSansFont.face
      // ...notoSansFont
    },
  }
})



type Conf = typeof config

// make imports typed
export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}
