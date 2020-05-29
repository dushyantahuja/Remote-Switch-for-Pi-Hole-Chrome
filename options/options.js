//Function that saves the key to storage
function setStorage() {
    chrome.storage.local.set({api_key: document.getElementById("api_key").value, max_time: document.getElementById("max_time").value}, default_snooze: document.getElementById("default_snooze").value}, function () {
        document.getElementById("confirmation_status").innerHTML = "Saved Successful!";
    });
}

//Function that get the API key from the storage
function getStorage() {
    chrome.storage.local.get(null, function (data) {
        document.getElementById("api_key").defaultValue = data.api_key;
        document.getElementById("max_time").defaultValue = data.max_time;
        document.getElementById("default_snooze").defaultValue = data.default_snooze;
    });
}

document.getElementById("save_button").addEventListener("click", setStorage);   //Action event for when save is pressed
window.addEventListener("load", getStorage);    //Get the API key when the page loads
