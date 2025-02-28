module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [["module-resolver", {
    root: ["."],
    extensions: [".js", ".ts", ".tsx", ".jsx"],

    alias: {
      "@components": "./src/components",
      "@assets": "./src/assets",
      "@screens": "./src/screens",
      "@navigation": "./src/navigation",
      "@types": "./src/types",
      "@stores": "./src/stores",
      "@constants": "./src/constants",
      "@viewmodels": "./src/viewmodels",
      "@utils": "./src/utils",
    }
  }]]
};

// module.exports = {
//   presets: ['module:@react-native/babel-preset', "nativewind/babel"],

//   plugins: [["module-resolver", {
//     root: ["./"],
//     extensions: [".js", ".ts", ".tsx", ".jsx"],

//     alias: {
//       "@": "./",
//       "tailwind.config": "./tailwind.config.js"
//     }
//   }]]
// };
