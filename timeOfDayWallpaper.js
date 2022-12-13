import xapi from 'xapi';

const morning = "8"; // 8:00am
const afternoon = "12"; // 12:00pm
const evening = "18"; // 6:00pm

const morningUrl = "https://www.employees.org/~dhenwood/WbxWallpaper/MorningBackground.zip";
const afternoonUrl = "https://www.employees.org/~dhenwood/WbxWallpaper/AfternoonBackground.zip";

function init(){
  const now = new Date();
  const myHour = now.getHours();
  if (myHour >= morning && myHour < afternoon){
    // Set Morning
    updateWallpaper(morningUrl);
  }else if(myHour >= afternoon && myHour < evening){
    // Set Afternoon
    updateWallpaper(afternoonUrl);
  }else{
    // Set Night
    xapi.command("UserInterface Branding Clear")
  }

  tick();
}

function tick() {
  setTimeout(tick, 60000); // check every minute
  checkDetails();
}

function checkDetails(){
  const now = new Date();
  const myHour = now.getHours();
  const myMinute = now.getMinutes();
  
  if(myHour == morning && myMinute == "0"){
    // Switch to Morning
    updateWallpaper(morningUrl);
  }else if(myHour == afternoon && myMinute == "0"){
    // Switch to Afternoon
    updateWallpaper(afternoonUrl);
  }else if(myHour == evening && myMinute == "0"){
    // Switch to Evening
    xapi.command("UserInterface Branding Clear")
  }
}

function updateWallpaper(url){
  xapi.command("Provisioning Service Fetch", {URL: url})
}


init();
