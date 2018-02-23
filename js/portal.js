// Session check
if (!hasSession()) {
    window.location.href = "error.html";
}

// Scanner Instance
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
let activeCamera = 0;
let cameraDevices = [];
// QR Scan listener
scanner.addListener('scan', function (content) {
    document.getElementById('qrcontent').innerHTML = content ;
    document.getElementById('qrbtn').style.display = "block" ;
    console.log(content);
});

// Get All Camera Devices
Instascan.Camera.getCameras().then(function (cameras) {
    cameraDevices = cameras ;
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function (e) {
    console.error(e);
});

function showBtn() {
    document.getElementById('qrbtn').style.display = "none" ;
}

function selectCamera() {
    if(cameraDevices.length == 1) {
        alert("You have only one camera device!");
    }else if(cameraDevices.length == 0) {
        alert("You don't have any camera devices!");
    } else {
        activeCamera = (1 - activeCamera) ;
        scanner.start(cameraDevices[activeCamera]);
    }
}

function hasSession() {
    var jsonData = dataObject;
    var flag = 0;
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].token == localStorage.getItem("driverToken")) {
            return true;
        }
    }
    return false;
}