const path = require('path');

module.exports = {
  dependencies: {
    'react-native-google-cast': {
      platforms: {
        android: {
          sourceDir: path.join(__dirname, 'node_modules/react-native-google-cast/android'),
          packageImportPath: 'import com.reactnative.googlecast.GoogleCastPackage;',
          packageInstance: 'new GoogleCastPackage()',
        },
      },
    },
  },
};
