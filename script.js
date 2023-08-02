// debugger;

// Variables
let periodDisplay = document.getElementById("period-display");
let timerDisplay = document.getElementById("timer-display");
let testingButton = document.getElementById("testing-toggle");
let gradeButton = document.getElementById("grade");

function mobileCheck() 
{
  return screen.width < screen.height;
};

let settings = 
{
  schedule: 1,
  darkMode: 1,
  grade: 0,
  flipped: false,
  shifting: false,
  lang: 0,
  textColor: 0,
  paused: false,
};



// Exports

export default
{
  /**
   * 
   * @param {object} object 
   * @returns {void}
   */
  setSettings(object)
  {
    settings = object;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to set the insides of.
   * @param {string} content The insides to be the new insides.
   * @returns {void}
   */
  setElementInsides(id, content)
  {
    document.getElementById(id).innerHTML = content;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to glow up.
   * @param {string} property The way you want to glow it up.
   * @param {string} content How you will glow it up.
   */
  setStyleInfo(id, property, content)
  {
    document.getElementById(id).style[property] = content;
  },
  /**
   * @returns {object} the settings
   */
  getSettings()
  {
    return settings;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to set the insides of.
   * @returns {string} The insides of the element.
   */
  getElementInsides(id)
  {
    return document.getElementById(id).innerHTML;
  },
  /**
   * @returns {void}
   */
  updateTimer()
  {
    doTimerControl();
  }
};
// Imports
import scheduleData from "./schedules.js";
import time from "./time.js";
import lang from "./lang.js";
import keys from "./keys.js";
import color from "./color.js";
import userStyling from "./userstyling.js";
import update from "./update.js";

function range(num)
{
  let arr = [];
  for (let i = 0; i < num; i++)
  {
    arr.push(i);
  }
  return arr;
}

function noNegativeModulo(dis, dat)
{
  if ((dis >= 0) && (dat >= 0))
  {
    return dis % dat;
  }
  if (dat < 0)
  {
    dat *= -1;
    dis *= -1;
  }

  do
  {
    dis += dat;
  }
  while (dis >= 0);

  return dis % dat;
}

function updateTimer(timesIn, periodsIn)
{
  const now = (Date.now() + (time.testingOffset * 3600_000)) % 86400000;

  const startOfDay = timesIn[0];
  const endOfDay = timesIn[timesIn.length - 1];

  const lengthOfDay = endOfDay - startOfDay >= 0 ? endOfDay - startOfDay : endOfDay - startOfDay + 86400000;

  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;

  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}${lang[settings.lang].dwtd}`;

  let ending = ` ${settings.lang === 0 ? "remaining" : settings.lang === 1 ? "restante" : "restant"}${percentageString}`;

  if (!(((periodDisplay.innerHTML == lang[settings.lang].learnt) || (periodDisplay.innerHTML == lang[settings.lang].loading))) && (settings.darkMode == 0))
  {
    document.body.style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  }
  periodDisplay.innerHTML = lang[settings.lang].learnt;
  timerDisplay.innerHTML = time.fromMilliseconds((timesIn[0]+86400000-now)%86400000) + lang[settings.lang].ussa;

  for(let i = 0; i + 1 < timesIn.length; i++)
  {
    if((now > timesIn[i]) && (now < timesIn[i + 1]))
    {
      periodDisplay.innerHTML = periodsIn[i][settings.lang];
      timerDisplay.innerHTML = time.fromMilliseconds(timesIn[i + 1]-now) + ending;
    }
  }
}
function doTimerControl()
{
  const yes = new Date(Date.now() + (time.testingOffset * 3600_000));
  const timeOfWeek = (Date.now() + (time.testingOffset * 3600_000)) % 604800000;
  const timeOfDay = (Date.now() + (time.testingOffset * 3600_000)) % 86400000;
  const isWeekend = ((time.ofWeek(15,  0,  0, 1) < timeOfWeek) && (timeOfWeek < time.ofWeek(7, 50, 1, 4)));
  let isSummer = ((yes.getMonth() >= 4) && (yes.getMonth() <= 7));
  //                   August               the 8th                    May                 the 23rd
  if ((yes.getMonth() == 7 && yes.getDate() >= 8) || (yes.getMonth() == 4 && yes.getDate() <= 23))
  {
    isSummer = false;
  }
  if (!isSummer && !settings.paused)
  {
    if (!isWeekend)
    {
      if (settings.schedule === 0)
      {
        updateTimer(scheduleData.times.assembly[settings.grade], scheduleData.names.assembly[settings.grade]);
      }
      else if(settings.schedule === 1)
      { //                        Is middle school        Is Monday                          Block schedule
        updateTimer(scheduleData.times.normal[settings.grade < 3 || yes.getDay() == 1 ? settings.grade : settings.grade + 2],
        //                                                                                    Is Tuesday or Thursday                 Even block schedule  Odd block schedule
                    scheduleData.names.normal[settings.grade < 3 || yes.getDay() == 1 ? settings.grade : yes.getDay() == 2 || yes.getDay() == 4 ? settings.grade + 4 : settings.grade + 2]);
      }
      else
      {
        updateTimer(scheduleData.times.test[settings.grade], scheduleData.names.test[settings.grade]);
      }
    }
    else
    {
      periodDisplay.innerHTML = lang[settings.lang].learnt;
      timerDisplay.innerHTML = time.fromMilliseconds(time.ofWeek(7, 50, 0, 4)-timeOfWeek) + lang[settings.lang].ussa;
    }
  }
  else if(!settings.paused)
  {
    periodDisplay.innerHTML = lang[settings.lang].summer;
    const dayIfNecessary = settings.grade ? 86400000 : 0
    timerDisplay.innerHTML = time.fromMilliseconds(Number(new Date("Aug 8, 2023 07:50:00")) - Number(yes) + dayIfNecessary) + lang[settings.lang].ussa;
  }
  update("dark mode");
}

function handleImage(event)
{
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}

function openHotkeys(e)
{
  document.getElementById("hotkey-screen").style.display = "block";
}
function closeHotkeys(e)
{
  document.getElementById("hotkey-screen").style.display = "none";
}


/**
 * @returns {void}
 */
function main()
{
  doTimerControl();
  update("dark mode");
  setInterval(doTimerControl, 1000/9);
  document.getElementById("hotkey-button").onclick = openHotkeys;
  document.getElementById("close-hotkeys").onclick = closeHotkeys;
  document.getElementById("image-selector").onchange = handleImage;
  document.addEventListener("keyup", keys.handleKeyUp);
  document.addEventListener("keydown", keys.handleKeyDown);
}

main();