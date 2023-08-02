// Imports
import update from "./update.js";
import main from "./script.js";

// Variables
let font_num = 0;

// Constants
const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Courier New"];

// Export
export default
{
  gradechange()
  {
    let settings = main.getSettings();
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
      settings.grade += 5;
    }
    settings.grade %= 5;
    main.setSettings(settings);
    update("grade");
  },
  langchange()
  {
    let settings = main.getSettings();
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
    main.setSettings(settings);
  },
  cycleFonts()
  {
    let settings = main.getSettings();
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
    main.setStyleInfo("period-display", "fontFamily", fonts[font_num]);
    main.setStyleInfo("timer-display", "fontFamily", fonts[font_num]);
    main.setStyleInfo("testing-toggle", "fontFamily", fonts[font_num]);
    main.setStyleInfo("grade", "fontFamily", fonts[font_num]);
    main.setStyleInfo("credits", "fontFamily", fonts[font_num]);
    main.setStyleInfo("issue-link", "fontFamily", fonts[font_num]);
    main.setStyleInfo("hotkey-button", "fontFamily", fonts[font_num]);
  },
  textColorChange()
  {
    let settings = main.getSettings();
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
      main.setStyleInfo("period-display", "color", "#fff");
      main.setStyleInfo("timer-display", "color", "#fff");
      main.setStyleInfo("testing-toggle", "color", "#fff");
      main.setStyleInfo("grade", "color", "#fff");
      main.setStyleInfo("credits", "color", "#fff");
      main.setStyleInfo("hotkey-button", "color", "#fff");
      main.setStyleInfo("period-display", "mixBlendMode", "difference");
      main.setStyleInfo("timer-display", "mixBlendMode", "difference");
      main.setStyleInfo("testing-toggle", "mixBlendMode", "difference");
      main.setStyleInfo("grade", "mixBlendMode", "difference");
      main.setStyleInfo("credits", "mixBlendMode", "difference");
      main.setStyleInfo("hotkey-button", "mixBlendMode", "difference");
    }
    else if(settings.textColor === 1)
    {
      main.setStyleInfo("period-display", "color", "#fff");
      main.setStyleInfo("timer-display", "color", "#fff");
      main.setStyleInfo("testing-toggle", "color", "#fff");
      main.setStyleInfo("grade", "color", "#fff");
      main.setStyleInfo("credits", "color", "#fff");
      main.setStyleInfo("hotkey-button", "color", "#fff");
      main.setStyleInfo("period-display", "mixBlendMode", "normal");
      main.setStyleInfo("timer-display", "mixBlendMode", "normal");
      main.setStyleInfo("testing-toggle", "mixBlendMode", "normal");
      main.setStyleInfo("grade", "mixBlendMode", "normal");
      main.setStyleInfo("credits", "mixBlendMode", "normal");
      main.setStyleInfo("hotkey-button", "mixBlendMode", "normal");
    }
    else
    {
      main.setStyleInfo("period-display", "color", "#000");
      main.setStyleInfo("timer-display", "color", "#000");
      main.setStyleInfo("testing-toggle", "color", "#000");
      main.setStyleInfo("grade", "color", "#000");
      main.setStyleInfo("credits", "color", "#000");
      main.setStyleInfo("hotkey-button", "color", "#000");
      main.setStyleInfo("period-display", "mixBlendMode", "normal");
      main.setStyleInfo("timer-display", "mixBlendMode", "normal");
      main.setStyleInfo("testing-toggle", "mixBlendMode", "normal");
      main.setStyleInfo("grade", "mixBlendMode", "normal");
      main.setStyleInfo("credits", "mixBlendMode", "normal");
      main.setStyleInfo("hotkey-button", "mixBlendMode", "normal");
    }
  },
};