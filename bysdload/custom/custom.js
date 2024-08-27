const iosPackage = "itms-services://?action=download-manifest&url=https://nqxhbdl.doido123.com/shidai/shidai.plist"; // iOS
const androidPackage = "https://nqxhbdl.doido123.com/shidai/buyushidai.apk"; // Android

isBrowser();

function isBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if ((ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/")) {
        $('.showbg').show();
        $('.isweixin').hide();
    } else {
        $('.isweixin').show();
        $('.showbg').show();
        downLoadPackage();
    }
}

const $btnDown = $('#download');
$btnDown.click(function () {
    downLoadPackage();
});

function downLoadPackage() {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = androidPackage;
    } else if (iOSType) {
        window.location.href = iosPackage;
    }
}