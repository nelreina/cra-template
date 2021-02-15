export REACT_APP_API=https://tracking.lcmbv.com/lcm-api
npm run build
zip -r -X build.zip build
scp ./build.zip  root@lcm-pro:/opt/back-office/webapp