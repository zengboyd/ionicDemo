set -o errexit
PKG_NAME='ionicDemo'
BUILD_HOME=./platforms/ios/build/device

echo '--------Build Android--------'
cordova build android || { echo "building android failed"; exit 1; }

if [ "$(uname)" == "Darwin" ]; then
    
    echo '--------Build iOS--------'
    cordova build ios --release --device || { echo "building ios failed"; exit 1; }


    for appname in $BUILD_HOME/'*.app'
    do
        echo $appname
        xcrun -sdk iphoneos PackageApplication -v $appname -o `pwd`/ionic.ipa
    done
fi
