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

console.log(appState.phoneA);

const specsDisplayEls = document.querySelectorAll('#compare__box--display p');

specsDisplayEls[0].innerHTML = appState.phoneA.specifications[3]?.specs[0]?.val[0];
specsDisplayEls[1].innerHTML = 'type';
specsDisplayEls[2].innerHTML = appState.phoneB.specifications[3]?.specs[0]?.val[0];

specsDisplayEls[3].innerHTML = appState.phoneA.specifications[3]?.specs[1]?.val[0];
specsDisplayEls[4].innerHTML = 'size';
specsDisplayEls[5].innerHTML = appState.phoneB.specifications[3]?.specs[1]?.val[0];

specsDisplayEls[6].innerHTML = appState.phoneA.specifications[3]?.specs[2]?.val[0];
specsDisplayEls[7].innerHTML = 'resolution';
specsDisplayEls[8].innerHTML = appState.phoneB.specifications[3]?.specs[2]?.val[0];

const specsCameraMainEls = document.querySelectorAll('#compare__box--camera-main p');

specsCameraMainEls[0].innerHTML = appState.phoneA.specifications[6]?.specs[0]?.val[0];
specsCameraMainEls[1].innerHTML = '';
specsCameraMainEls[2].innerHTML = appState.phoneB.specifications[6]?.specs[0]?.val[0];

specsCameraMainEls[3].innerHTML = appState.phoneA.specifications[6]?.specs[1]?.val[0];
specsCameraMainEls[4].innerHTML = 'features';
specsCameraMainEls[5].innerHTML = appState.phoneB.specifications[6]?.specs[1]?.val[0];

specsCameraMainEls[6].innerHTML = appState.phoneA.specifications[6]?.specs[2]?.val[0];
specsCameraMainEls[7].innerHTML = 'video';
specsCameraMainEls[8].innerHTML = appState.phoneB.specifications[6]?.specs[2]?.val[0];

const specsCameraSelfieEls = document.querySelectorAll('#compare__box--camera-selfie p');

specsCameraSelfieEls[0].innerHTML = appState.phoneA.specifications[7]?.specs[0]?.val[0];
specsCameraSelfieEls[1].innerHTML = '';
specsCameraSelfieEls[2].innerHTML = appState.phoneB.specifications[7]?.specs[0]?.val[0];

specsCameraSelfieEls[3].innerHTML = appState.phoneA.specifications[7]?.specs[1]?.val[0];
specsCameraSelfieEls[4].innerHTML = 'features';
specsCameraSelfieEls[5].innerHTML = appState.phoneB.specifications[7]?.specs[1]?.val[0];

specsCameraSelfieEls[6].innerHTML = appState.phoneA.specifications[7]?.specs[2]?.val[0];
specsCameraSelfieEls[7].innerHTML = 'video';
specsCameraSelfieEls[8].innerHTML = appState.phoneB.specifications[7]?.specs[2]?.val[0];

const specsCameraPlatformEls = document.querySelectorAll('#compare__box--camera-platform p');

specsCameraPlatformEls[0].innerHTML = appState.phoneA.specifications[4]?.specs[1]?.val[0];
specsCameraPlatformEls[1].innerHTML = 'chipset';
specsCameraPlatformEls[2].innerHTML = appState.phoneB.specifications[4]?.specs[1]?.val[0];

specsCameraPlatformEls[3].innerHTML = appState.phoneA.specifications[4]?.specs[2]?.val[0];
specsCameraPlatformEls[4].innerHTML = 'CPU';
specsCameraPlatformEls[5].innerHTML = appState.phoneB.specifications[4]?.specs[2]?.val[0];

specsCameraPlatformEls[6].innerHTML = appState.phoneA.specifications[4]?.specs[3]?.val[0];
specsCameraPlatformEls[7].innerHTML = 'GPU';
specsCameraPlatformEls[8].innerHTML = appState.phoneB.specifications[4]?.specs[3]?.val[0];

const specsCameraMemoryEls = document.querySelectorAll('#compare__box--camera-memory p');

specsCameraMemoryEls[0].innerHTML = appState.phoneA.specifications[5]?.specs[0]?.val[0];
specsCameraMemoryEls[1].innerHTML = 'card slot';
specsCameraMemoryEls[2].innerHTML = appState.phoneB.specifications[5]?.specs[0]?.val[0];

specsCameraMemoryEls[3].innerHTML = appState.phoneA.specifications[5]?.specs[1]?.val[0];
specsCameraMemoryEls[4].innerHTML = 'internal';
specsCameraMemoryEls[5].innerHTML = appState.phoneB.specifications[5]?.specs[1]?.val[0];

const specsCameraBatteryEls = document.querySelectorAll('#compare__box--camera-battery p');

specsCameraBatteryEls[0].innerHTML = appState.phoneA.specifications[11]?.specs[0]?.val[0];
specsCameraBatteryEls[1].innerHTML = 'type';
specsCameraBatteryEls[2].innerHTML = appState.phoneB.specifications[11]?.specs[0]?.val[0];

specsCameraBatteryEls[3].innerHTML = appState.phoneA.specifications[11]?.specs[1]?.val[0];
specsCameraBatteryEls[4].innerHTML = 'charging';
specsCameraBatteryEls[5].innerHTML = appState.phoneB.specifications[11]?.specs[1]?.val[0];

const specsCameraNetworkEls = document.querySelectorAll('#compare__box--camera-network p');

specsCameraNetworkEls[0].innerHTML = appState.phoneA.specifications[0]?.specs[0]?.val[0];
specsCameraNetworkEls[1].innerHTML = '';
specsCameraNetworkEls[2].innerHTML = appState.phoneB.specifications[0]?.specs[0]?.val[0];

const specsCameraBodyEls = document.querySelectorAll('#compare__box--camera-body p');

specsCameraBodyEls[0].innerHTML = appState.phoneA.specifications[2]?.specs[0]?.val[0];
specsCameraBodyEls[1].innerHTML = 'dimentions';
specsCameraBodyEls[2].innerHTML = appState.phoneB.specifications[2]?.specs[0]?.val[0];

specsCameraBodyEls[3].innerHTML = appState.phoneA.specifications[2]?.specs[1]?.val[0];
specsCameraBodyEls[4].innerHTML = 'weight';
specsCameraBodyEls[5].innerHTML = appState.phoneB.specifications[2]?.specs[1]?.val[0];

specsCameraBodyEls[6].innerHTML = appState.phoneA.specifications[2]?.specs[2]?.val[0];
specsCameraBodyEls[7].innerHTML = 'build';
specsCameraBodyEls[8].innerHTML = appState.phoneB.specifications[2]?.specs[2]?.val[0];

specsCameraBodyEls[9].innerHTML = appState.phoneA.specifications[2]?.specs[3]?.val[0];
specsCameraBodyEls[10].innerHTML = 'sim';
specsCameraBodyEls[11].innerHTML = appState.phoneB.specifications[2]?.specs[3]?.val[0];
