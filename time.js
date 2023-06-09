const testOffset = 0;// forward offset, in hours
const time_obj = {

    /**
    * Returns the date value mod 86400 seconds of the hour, minute, and seconds
    * @param {Number} h The hour, in local time
    * @param {Number} m The minute, in local time
    */
    ofDay(h, m, s = 0)
    {
      let retval = ((((((h+(new Date().getTimezoneOffset()/60)-testOffset)*60)+m)*60)+s)*1000)%86400000;
      while(true)
      {
        if(retval >= 0)
        {
          return retval;
        }
        else
        {
          retval += 86400000;
        }
      }
    },
    /**
    * Returns the date value mod 86400 seconds of the hour, minute, and seconds
    * @param {Number} h The hour in local time
    * @param {Number} m The minute in local time
    * @param {Number} s The second in local time
    * @param {Number} d The day in local time, Thursday is 0, Wednesday is 6
    */
    ofWeek(h, m, s = 0, d = 0)
    {
      /*
      Thu:0
      Fri:1
      Sat:2
      Sun:3
      Mon:4
      Tue:5
      Wed:6
      */
      let retval =  ((((((((h+(new Date().getTimezoneOffset()/60)-testOffset)*60)+m)*60)+s)*1000)+(d*86400000))%604800000);
      while(true)
      {
        if(retval >= 0)
        {
          return retval;
        }
        else
        {
          retval += 604800000;
        }
      }
    },
    /**
     * 
     * @param {Number} seconds 
     * @param {string} unit
     */
    fromSeconds(seconds, unit = "auto")
    {
      if (unit == "auto")
      {
        if (seconds >= 86400)
        {
          unit = "days";
        }
        else if (seconds >= 3600)
        {
          unit = "hours";
        }
        else
        {
          unit = "minutes";
        }
      }
      if (unit == "minutes")
      {
        return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
      }
      else if (unit == "hours")
      {
        return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
      }
      else if (unit == "days")
      {
        return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
      }
    },
    fromMilliseconds(ms, unit = "auto")
    {
      seconds = Math.round(ms/1000);
      if (unit == "auto")
      {
        if (seconds >= 86400)
        {
          unit = "days";
        }
        else if (seconds >= 3600)
        {
          unit = "hours";
        }
        else
        {
          unit = "minutes";
        }
      }
      if (unit == "minutes")
      {
        return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
      }
      else if (unit == "hours")
      {
        return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
      }
      else if (unit == "days")
      {
        return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
      }
    }
  };