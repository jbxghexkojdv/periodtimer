// Imports
import update from "./update.js";
import userStyling from "./userstyling.js";
import main from "./script.js";
import lang from "./lang.js"

// Functions
function resetImage()
{
  let elem = document.createElement("img");
  window.document.getElementById("bgimg").remove();
  window.document.body.appendChild(elem);
  update("dark mode");
  elem.id = "bgimg";
  elem.style.display = "none";
  elem.alt = "background image"
}

function scheduleToggle()
{
  let settings = main.getSettings();
  if (!settings.shifting)
  {
    settings.schedule++;
  }
  else
  {
    settings.schedule--;
  }
  if (settings.schedule < 0)
  {
    settings.schedule += 3;
  }
  settings.schedule %= 3;
  if (settings.schedule === 0)
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].assembly;
  }
  else if(settings.schedule === 1)
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
  }
  else
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
  }

  main.setSettings(settings);
  main.updateTimer();
}

function toggleDarkMode()
{
  let settings = main.getSettings();
  if (!settings.shifting)
  {
    settings.darkMode++;
  }
  else
  {
    settings.darkMode--;
  }
  if (settings.darkMode < 0)
  {
    settings.darkMode += 3;
  }
  settings.darkMode %= 3;
  main.setSettings(settings);
  update("dark mode");
}

// Export
export default
{
  handleKeyUp(e)
  {
    let code = e.code;

    let settings = main.getSettings();

    switch (code)
    {
      case "Digit6": // set to 6th grade schedule
        settings.grade = 0;
        break;
      case "Digit7": // set to 7th grade schedule
        settings.grade = 1;
        break;
      case "Digit8": // set to 8th grade schedule
        settings.grade = 2;
        break;
      case "Digit9": // set to 8th grade schedule
        settings.grade = 3;
        break;
      case "Digit0": // set to 8th grade schedule
        settings.grade = 4;
        break;
      case "KeyT": // toggle testing schedule
        scheduleToggle();
        break;
      case "Space": // change background color
        toggleDarkMode();
        break;
      case "KeyI": // open image for background
      if(!settings.shifting)
      {
        document.getElementsByTagName("input")[0].click();
        document.getElementById("bgimg").style.display = "block";
      }
        break;
      case "KeyR": // reset settings
        window.settings =
        {
          schedule: 1,
          darkMode: 1,
          grade: 0,
          flipped: false,
          lang: 0,
          textColor: 0,
          paused: false,
        };
        resetImage();
        break;
      case "KeyE": // remove background image
        resetImage();
        break;
      case "KeyU": // ukrainian mode
        document.getElementById("bgimg").src = "a2.png";
        document.getElementById("bgimg").style.display = "block";
        update("dark mode");
        break;
      case "KeyF": // change font
        userStyling.cycleFonts();
        break;
      case "KeyA": // australian mode
        periodDisplay.classList.toggle("flip");
        timerDisplay.classList.toggle("flip");
        non.classList.toggle("flip");
        gradep.classList.toggle("flip");
        document.getElementById("credits").classList.toggle("flip");
        document.getElementById("bgimg").classList.toggle("flip");
        break;
      case "KeyP": // pause
        settings.paused = !settings.paused;
        break;
      case "KeyL": // language change
        userStyling.langchange();
        if (settings.schedule === 0)
        {
          document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
        }
        else
        {
          document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
        }
        document.getElementsByTagName("html")[0].lang = settings.lang == 0 ? "en" : settings.lang == 1 ? "es" : "fr";
        document.getElementById("credits").innerHTML = settings.lang == 0 ? "By Benjamin Harris" : settings.lang == 1 ? "Por Benjamin Harris" : "Par Benjamin Harris"
        break;
      case "ShiftLeft": // Stop shifting
      case "ShiftRight":
        settings.shifting = false;
        break;
      case "KeyC": // change text color; cycle between white, black and opposite
        userStyling.textColorChange();
        break;
    }
    update("grade");
    main.setSettings(settings);
  },
  handleKeyDown(e)
  {
    let code = e.code;

    if(code == "ShiftLeft" || code == "ShiftRight")
    {
      let settings = main.getSettings();
      settings.shifting = true;
      main.setSettings(settings);
    }
  },
  scheduleToggle: scheduleToggle
};