// Imports
import time from "./time.js";
import color from "./color.js";
import lang from "./lang.js";
import main from "./script.js";

// Functions
/**
 * @param {string} subject "grade" or "dark mode"
 */
function update(subject)
{
  const settings = main.getSettings();
  if(subject == "grade")
  {
    switch(main.getSettings().grade)
    {
      case 0:
        main.setElementInsides("grade", lang[main.getSettings().lang].gr6sched);
        break;
      case 1:
        main.setElementInsides("grade", lang[main.getSettings().lang].gr7sched);
        break;
      case 2: 
        main.setElementInsides("grade", lang[main.getSettings().lang].gr8sched);
        break;
      case 3: 
        main.setElementInsides("grade", lang[main.getSettings().lang].ths1);
        break;
      case 4: 
        main.setElementInsides("grade", lang[main.getSettings().lang].ths2);
        break;
      default:
        main.setElementInsides("grade", "why you do dat");
    }
  }
  if(subject == "dark mode")
  {
    if (main.getSettings().darkMode == 1)
    {
      window.document.body.style.backgroundColor = "#000000";
    }
    else if (main.getSettings().darkMode == 2)
    {
      window.document.body.style.backgroundColor = "#FFFFFF";
    }
    else if(main.getElementInsides("period-display") == lang[settings.lang].learnt || main.getElementInsides("period-display") == lang[settings.lang].summer)
    {
      const isWeekend = ((time.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time.ofWeek(7, 45, 1, 4)));
      const timeUntilSchool = isWeekend ? (time.ofWeek(7, 45, 1, 4)-(Date.now()%604800000)) : ((time.ofDay(7, 45, 1)+86400000)-(Date.now()%86400000))%86400000;
      const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
      const bgColor = color.toHue(color.decimalToColor(TUSFraction));
      window.document.body.style.backgroundColor = bgColor;
    }
  }
};

export default update;