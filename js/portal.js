// Session check
if (!hasSession()) {
    window.location.href = "error.html";
}

// Scanner Instance
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') ,mirror: false});
let activeCamera = 0;
let cameraDevices = [];
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// QR Scan listener
scanner.addListener('scan', function (content) {
    console.log(content);
    modal.style.display = "block";
    var ref = firebase.database().ref();                           
    ref.on("value", function(snapshot){
        var json = snapshot.val();
        console.log(json);
        if(json.encryptedData) {
            var flag = 0 ;
            var contentMsg = "<center><img src='assets/loader.gif' width='50' height='50'><p style='font-size:10pt;color:#0000f0; '>Loading...<p></center>" ;
            document.getElementById("modalContent").innerHTML = contentMsg ;
            for(var i = 0 ; i < json.encryptedData.length ; i++) {
                var element = json.encryptedData[i] ;
                if(element == content) {
                    flag = 1 ; break;
                }
            }
            if(flag == 1) {
                contentMsg = "<center><img src='assets/right.png' width='50' height='50'><p style='font-size:10pt;color:#00f000; '>Passenger Check-In!<p></center>" ;
            } else {
                contentMsg = "<center><img src='assets/wrong.png' width='50' height='50'><p style='font-size:10pt;color:#f00000;'>Invalid Passenger!<p></center>" ;
            }
            document.getElementById("modalContent").innerHTML = contentMsg ;
            modal.style.display = "block";
        }
    });
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

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}