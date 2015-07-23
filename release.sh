#BUILD_HOME=./platforms/android/ant-build #cordova < 5.0
BUILD_HOME=./platforms/android/build/outputs/apk #cordova > 5.0
TARGET_DIR=./outputs
PKG_NAME='ionic-demo'

set -o errexit

if [ ! -x "$TARGET_DIR" ]; then
    #echo 'target dir not exit'
    mkdir $TARGET_DIR
fi

echo '--------Release Android-------'
cp -rf $BUILD_HOME/android-debug.apk $TARGET_DIR/$PKG_NAME.apk

echo '--------Release iOS-------'
mv ./ionic.ipa $TARGET_DIR/$PKG_NAME.ipa
