const appState = JSON.parse(window.localStorage.getItem('appState'));

const compareImgAEl = document.querySelector('#compare__img--a');
const compareImgBEl = document.querySelector('#compare__img--b');
const compareNameAEl = document.querySelector('#compare__name--a');
const compareNameBEl = document.querySelector('#compare__name--b');
const compareBrandAEl = document.querySelector('#compare__brand--a');
const compareBrandBEl = document.querySelector('#compare__brand--b');

compareImgAEl.src = appState.phoneA.phone_images[0];
compareImgBEl.src = appState.phoneB.phone_images[0];

compareNameAEl.innerHTML = appState.phoneA.phone_name;
compareNameBEl.innerHTML = appState.phoneB.phone_name;

compareBrandAEl.innerHTML = appState.phoneA.brand;
compareBrandBEl.innerHTML = appState.phoneB.brand;

const categories = ['os', 'display', 'main camera', 'selfie camera','platform', 'memory', 'battery', 'network', 'body'];
document.querySelectorAll('.category--name').forEach((el, i) => {
    el.innerHTML = categories[i];
});

const compareBoxOsEl = document.querySelector('#compare__box--os');
compareBoxOsEl.querySelector('.specs--a').innerHTML = appState.phoneA.os;
compareBoxOsEl.querySelector('.specs--b').innerHTML = appState.phoneB.os;

console.log(appState);

const specsDisplayEls = document.querySelectorAll('#compare__box--display p');

specsDisplayEls[0].innerHTML = 'type';
specsDisplayEls[1].innerHTML = appState.phoneA.specifications[3]?.specs[0]?.val[0];
specsDisplayEls[2].innerHTML = appState.phoneB.specifications[3]?.specs[0]?.val[0];

specsDisplayEls[3].innerHTML = 'size';
specsDisplayEls[4].innerHTML = appState.phoneA.specifications[3]?.specs[1]?.val[0];
specsDisplayEls[5].innerHTML = appState.phoneB.specifications[3]?.specs[1]?.val[0];

specsDisplayEls[6].innerHTML = 'resolution';
specsDisplayEls[7].innerHTML = appState.phoneA.specifications[3]?.specs[2]?.val[0];
specsDisplayEls[8].innerHTML = appState.phoneB.specifications[3]?.specs[2]?.val[0];

const specsCameraMainEls = document.querySelectorAll('#compare__box--camera-main p');

specsCameraMainEls[0].innerHTML = '';
specsCameraMainEls[1].innerHTML = appState.phoneA.specifications[6]?.specs[0]?.val[0];
specsCameraMainEls[2].innerHTML = appState.phoneB.specifications[6]?.specs[0]?.val[0];

specsCameraMainEls[3].innerHTML = 'features';
specsCameraMainEls[4].innerHTML = appState.phoneA.specifications[6]?.specs[1]?.val[0];
specsCameraMainEls[5].innerHTML = appState.phoneB.specifications[6]?.specs[1]?.val[0];

specsCameraMainEls[6].innerHTML = 'video';
specsCameraMainEls[7].innerHTML = appState.phoneA.specifications[6]?.specs[2]?.val[0];
specsCameraMainEls[8].innerHTML = appState.phoneB.specifications[6]?.specs[2]?.val[0];

const specsCameraSelfieEls = document.querySelectorAll('#compare__box--camera-selfie p');

specsCameraSelfieEls[0].innerHTML = '';
specsCameraSelfieEls[1].innerHTML = appState.phoneA.specifications[7]?.specs[0]?.val[0];
specsCameraSelfieEls[2].innerHTML = appState.phoneB.specifications[7]?.specs[0]?.val[0];

specsCameraSelfieEls[3].innerHTML = 'features';
specsCameraSelfieEls[4].innerHTML = appState.phoneA.specifications[7]?.specs[1]?.val[0];
specsCameraSelfieEls[5].innerHTML = appState.phoneB.specifications[7]?.specs[1]?.val[0];

specsCameraSelfieEls[6].innerHTML = 'video';
specsCameraSelfieEls[7].innerHTML = appState.phoneA.specifications[7]?.specs[2]?.val[0];
specsCameraSelfieEls[8].innerHTML = appState.phoneB.specifications[7]?.specs[2]?.val[0];

const specsCameraPlatformEls = document.querySelectorAll('#compare__box--platform p');

specsCameraPlatformEls[0].innerHTML = 'chipset';
specsCameraPlatformEls[1].innerHTML = appState.phoneA.specifications[4]?.specs[1]?.val[0];
specsCameraPlatformEls[2].innerHTML = appState.phoneB.specifications[4]?.specs[1]?.val[0];

specsCameraPlatformEls[3].innerHTML = 'CPU';
specsCameraPlatformEls[4].innerHTML = appState.phoneA.specifications[4]?.specs[2]?.val[0];
specsCameraPlatformEls[5].innerHTML = appState.phoneB.specifications[4]?.specs[2]?.val[0];

specsCameraPlatformEls[6].innerHTML = 'GPU';
specsCameraPlatformEls[7].innerHTML = appState.phoneA.specifications[4]?.specs[3]?.val[0];
specsCameraPlatformEls[8].innerHTML = appState.phoneB.specifications[4]?.specs[3]?.val[0];

const specsCameraMemoryEls = document.querySelectorAll('#compare__box--memory p');

specsCameraMemoryEls[0].innerHTML = 'card slot';
specsCameraMemoryEls[1].innerHTML = appState.phoneA.specifications[5]?.specs[0]?.val[0];
specsCameraMemoryEls[2].innerHTML = appState.phoneB.specifications[5]?.specs[0]?.val[0];

specsCameraMemoryEls[3].innerHTML = 'internal';
specsCameraMemoryEls[4].innerHTML = appState.phoneA.specifications[5]?.specs[1]?.val[0];
specsCameraMemoryEls[5].innerHTML = appState.phoneB.specifications[5]?.specs[1]?.val[0];

const specsCameraBatteryEls = document.querySelectorAll('#compare__box--battery p');

specsCameraBatteryEls[0].innerHTML = 'type';
specsCameraBatteryEls[1].innerHTML = appState.phoneA.specifications[11]?.specs[0]?.val[0];
specsCameraBatteryEls[2].innerHTML = appState.phoneB.specifications[11]?.specs[0]?.val[0];

specsCameraBatteryEls[3].innerHTML = 'charging';
specsCameraBatteryEls[4].innerHTML = appState.phoneA.specifications[11]?.specs[1]?.val[0];
specsCameraBatteryEls[5].innerHTML = appState.phoneB.specifications[11]?.specs[1]?.val[0];

const specsCameraNetworkEls = document.querySelectorAll('#compare__box--network p');

specsCameraNetworkEls[0].innerHTML = '';
specsCameraNetworkEls[1].innerHTML = appState.phoneA.specifications[0]?.specs[0]?.val[0];
specsCameraNetworkEls[2].innerHTML = appState.phoneB.specifications[0]?.specs[0]?.val[0];

const specsCameraBodyEls = document.querySelectorAll('#compare__box--body p');

specsCameraBodyEls[0].innerHTML = 'dimentions';
specsCameraBodyEls[1].innerHTML = appState.phoneA.specifications[2]?.specs[0]?.val[0];
specsCameraBodyEls[2].innerHTML = appState.phoneB.specifications[2]?.specs[0]?.val[0];

specsCameraBodyEls[3].innerHTML = 'weight';
specsCameraBodyEls[4].innerHTML = appState.phoneA.specifications[2]?.specs[1]?.val[0];
specsCameraBodyEls[5].innerHTML = appState.phoneB.specifications[2]?.specs[1]?.val[0];

specsCameraBodyEls[6].innerHTML = 'build';
specsCameraBodyEls[7].innerHTML = appState.phoneA.specifications[2]?.specs[2]?.val[0];
specsCameraBodyEls[8].innerHTML = appState.phoneB.specifications[2]?.specs[2]?.val[0];

specsCameraBodyEls[9].innerHTML = 'sim';
specsCameraBodyEls[10].innerHTML = appState.phoneA.specifications[2]?.specs[3]?.val[0];
specsCameraBodyEls[11].innerHTML = appState.phoneB.specifications[2]?.specs[3]?.val[0];
