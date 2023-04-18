let periodDisplay = document.getElementById("period-display");
let timerDisplay = document.getElementById("timer-display");
let non = document.getElementById("testing-toggle");
let gradep = document.getElementById("grade");

window.mobileCheck = function() 
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
};

function range(num)
{
  let arr = [];
  for (let i = 0; i < num; i++)
  {
    arr.push(i);
  }
  return arr;
}

const color = 
{
  toHue(color_code)
  {
    color_code = Math.round(color_code);
    let r;
    let g;
    let b;
    const stage = Math.floor(color_code / 255);
    const theWayThrough = color_code % 255;
    switch(stage)
    {
      case 0:
        r = 255;
        g = theWayThrough;
        b = 0;
        break;
      case 1:
        r = 255-theWayThrough;
        g = 255;
        b = 0;
        break;
      case 2:
        r = 0;
        g = 255;
        b = theWayThrough;
        break;
      case 3:
        r = 0;
        g = 255-theWayThrough;
        b = 255;
        break;
      case 4:
        r = theWayThrough;
        g = 0;
        b = 255;
        break;
      case 5:
        r = 255;
        g = 0;
        b = 255-theWayThrough;
        break;
      default:
        print("Something went wrong.");
    }
    return `rgb(${r}, ${g}, ${b})`;
  },
  decimalToColor(dec)
  {
    return dec*1530;
  }
};

const functions_general = 
{
  update: 
  {
    grade()
    {
      switch(settings.grade)
      {
        case 0:
          gradep.innerHTML = lang[settings.lang].gr6sched;
          break;
        case 1:
          gradep.innerHTML = lang[settings.lang].gr7sched;
          break;
        case 2: 
          gradep.innerHTML = lang[settings.lang].gr8sched;
          break;
        case 3:
          gradep.innerHTML = lang[settings.lang].paused;
          break;
        default:
          gradep.innerHTML = "why you do dat";
      }
    },
    darkMode()
    {
      if (settings.darkMode == 1)
      {
        document.body.style.backgroundColor = "#000000";
      }
      else if (settings.darkMode == 2)
      {
        document.body.style.backgroundColor = "#FFFFFF";
      }
      else if(periodDisplay.innerHTML == lang[settings.lang].learnt || periodDisplay.innerHTML == lang[settings.lang].summer)
      {
        const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time_obj.ofWeek(7, 45, 1, 4)));
        const timeUntilSchool = isWeekend ? (time_obj.ofWeek(7, 45, 1, 4)-(Date.now()%604800000)) : ((time_obj.ofDay(7, 45, 1)+86400000)-(Date.now()%86400000))%86400000;
        const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
        const bgColor = color.toHue(color.decimalToColor(TUSFraction));
        document.body.style.backgroundColor = bgColor;
      }
    },
  },
  gradechange()
  {
    if (!settings.shifting)
    {
      settings.grade++;
    }
    else
    {
      settings.grade--;
    }
    if (settings.grade < 0)
    {
      settings.grade += 3;
    }
    settings.grade %= 3;
    this.update.grade();
  },
  langchange()
  {
    if (!settings.shifting)
    {
      settings.lang++;
    }
    else
    {
      settings.lang--;
    }
    if (settings.lang < 0)
    {
      settings.lang += 3;
    }
    settings.lang %= 3;
  },
  cycleFonts()
  {
    if (!settings.shifting)
    {
      font_num++;
    }
    else
    {
      font_num--;
    }
    if (font_num < 0)
    {
      font_num += fonts.length;
    }
    font_num %= fonts.length;
    periodDisplay.style.fontFamily = fonts[font_num];
    timerDisplay.style.fontFamily = fonts[font_num];
    non.style.fontFamily = fonts[font_num];
    gradep.style.fontFamily = fonts[font_num];
    document.getElementById("credits").style.fontFamily = fonts[font_num];
    document.getElementById("issue-link").style.fontFamily = fonts[font_num];
    document.getElementById("hotkey-button").style.fontFamily = fonts[font_num];
  },
  textColorChange()
  {
    if (!settings.shifting)
    {
      settings.textColor++;
    }
    else
    {
      settings.textColor--;
    }
    if (settings.textColor < 0)
    {
      settings.textColor += 3;
    }
    settings.textColor %= 3;
    if(settings.textColor === 0)
    {
      periodDisplay.style.color = "#fff";
      timerDisplay.style.color = "#fff";
      non.style.color = "#fff";
      gradep.style.color = "#fff";
      document.getElementById("credits").style.color = "#fff";
      document.getElementById("hotkey-button").style.color = "#fff";
      periodDisplay.style.mixBlendMode = "difference";
      timerDisplay.style.mixBlendMode = "difference";
      non.style.mixBlendMode = "difference";
      gradep.style.mixBlendMode = "difference";
      document.getElementById("credits").style.mixBlendMode = "difference";
      document.getElementById("hotkey-button").style.mixBlendMode = "difference";
    }
    else if(settings.textColor === 1)
    {
      periodDisplay.style.color = "#fff";
      timerDisplay.style.color = "#fff";
      non.style.color = "#fff";
      gradep.style.color = "#fff";
      document.getElementById("credits").style.color = "#fff";
      document.getElementById("hotkey-button").style.color = "#fff";
      periodDisplay.style.mixBlendMode = "normal";
      timerDisplay.style.mixBlendMode = "normal";
      non.style.mixBlendMode = "normal";
      gradep.style.mixBlendMode = "normal";
      document.getElementById("credits").style.mixBlendMode = "normal";
      document.getElementById("hotkey-button").style.mixBlendMode = "normal";
    }
    else
    {
      periodDisplay.style.color = "#000";
      timerDisplay.style.color = "#000";
      non.style.color = "#000";
      gradep.style.color = "#000";
      document.getElementById("credits").style.color = "#000";
      document.getElementById("hotkey-button").style.color = "#000";
      periodDisplay.style.mixBlendMode = "normal";
      timerDisplay.style.mixBlendMode = "normal";
      non.style.mixBlendMode = "normal";
      gradep.style.mixBlendMode = "normal";
      document.getElementById("credits").style.mixBlendMode = "normal";
      document.getElementById("hotkey-button").style.mixBlendMode = "normal";
    }
  },
};

function resetImage()
{
  document.getElementById("bgimg").remove();
  document.body.appendChild(
  elem = document.createElement("img"));
  functions_general.update.darkMode();
  elem.id = "bgimg";
  elem.style.display = "none";
  elem.alt = "background image"
}

const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Courier New"];
let font_num = 0;

function zeroify(num, digits = 2)
{
  let nums = num.toString(10);
  an = digits - (nums.length);
  for (let j = 0; j < an; j++)
  {
    nums = "0" + nums;
  }
  return nums;
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

function testt()
{
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

  think();
}

function updateTimer(timesIn, periodsIn)
{
  const now = Date.now() % 86400000;

  const startOfDay = time_obj.ofDay(7, 50);
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
  timerDisplay.innerHTML = time_obj.fromMilliseconds((time_obj.ofDay(7, 50)+86400000-now)%86400000) + lang[settings.lang].ussa;

  for(let i = 0; i + 1 < timesIn.length; i++)
  {
    if((now > timesIn[i]) && (now < timesIn[i + 1]))
    {
      periodDisplay.innerHTML = periodsIn[i][settings.lang];
      timerDisplay.innerHTML = time_obj.fromMilliseconds(timesIn[i + 1]-now) + ending;
    }
  }
}
function think()
{
  const yes = new Date();
  const timeOfWeek = Date.now() % 604800000;
  const timeOfDay = Date.now() % 86400000;
  const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < timeOfWeek) && (timeOfWeek < time_obj.ofWeek(7, 45, 1, 4)));
  let isSummer = ((yes.getMonth() >= 4) && (yes.getMonth() <= 7));
  if ((yes.getMonth() == 7 && yes.getDate() >= 11) || (yes.getMonth() == 4 && yes.getDate() <= 23))
  {
    isSummer = false;
  }
  if ((yes.getMonth() == 7 && (((settings.grade ? 11 : 10) <= yes.getDate()) && (yes.getDate() <= (settings.grade ? 17 : 16)))) && (yes.getDay() >= (settings.grade ? 4 : 3)))
  {
    isSummer = false;
  }
  if (!isSummer)
  {
    if (!isWeekend)
    {
      if (settings.schedule === 0)
      {
        updateTimer(times.assembly[settings.grade], stuff.assembly[settings.grade]);
      }
      else if(settings.schedule === 1)
      {
        updateTimer(times.normal[settings.grade], stuff.normal[settings.grade]);
      }
      else if(settings.schedule !== 3)
      {
        updateTimer(times.test[settings.grade], stuff.test[settings.grade]);
      }
    }
    else if(settings.schedule !== 3)
    {
      periodDisplay.innerHTML = lang[settings.lang].learnt;
      timerDisplay.innerHTML = time_obj.fromMilliseconds(time_obj.ofWeek(7, 50, 0, 4)-timeOfWeek+(settings.grade*180000)) + lang[settings.lang].ussa;
    }
  }
  else if(settings.schedule !== 3)
  {
    periodDisplay.innerHTML = lang[settings.lang].summer;
    const dayIfNecessary = settings.grade ? 86400000 : 0
    timerDisplay.innerHTML = time_obj.fromMilliseconds(Number(new Date("Aug 10, 2022 07:50:00")) - Number(yes) + dayIfNecessary) + lang[settings.lang].ussa;
  }
  functions_general.update.darkMode();
}
setInterval(think, 1000/8);
function tdm()
{
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
  functions_general.update.darkMode();
}
document.addEventListener("keyup", () => {

  let evt = window.event;
  let code = evt.code;

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
    case "KeyT": // toggle testing schedule
      testt();
      break;
    case "Space": // change background color
      tdm();
      break;
    case "KeyI": // open image for background
    if(!settings.shifting)
    {
      document.getElementsByTagName("input")[0].click();
      document.getElementById("bgimg").style.display = "block";
    }
      break;
    case "KeyR": // reset settings
      settings =
      {
        schedule: 1,
        darkMode: 1,
        grade: 0,
        flipped: false,
        lang: 0,
        textColor: 0,
      };
      resetImage();
      break;
    case "KeyE": // remove background image
      resetImage();
      break;
    case "KeyU": // ukrainian mode
      document.getElementById("bgimg").src = "a2.png";
      document.getElementById("bgimg").style.display = "block";
      functions_general.update.darkMode();
      break;
    case "KeyF": // change font
      functions_general.cycleFonts();
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
      settings.grade = 3;
      break;
    case "KeyL": // language change
      functions_general.langchange();
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
      functions_general.textColorChange();
      break;
  }
  functions_general.update.grade();
});
document.addEventListener("keydown", () => {

  let evt = window.event;
  let code = evt.code;
  switch(code)
  {
    case "ShiftLeft": // Start shifting
    case "ShiftRight":
      settings.shifting = true;
      break;
  }
});
function handleImage(event)
{
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}
think();
functions_general.update.darkMode();

function openHotkeys()
{
  document.getElementById("hotkey-screen").style.display = "block";
}
function closeHotkeys()
{
  document.getElementById("hotkey-screen").style.display = "none";
}