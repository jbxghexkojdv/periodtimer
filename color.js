export default
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