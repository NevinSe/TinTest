using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClockRadio
{
    class ClockRadio
    {
        //member variables (Has a)
        Clock clock;
        Radio radio;
        //constructor
        public ClockRadio()
        {
            clock = new Clock();
            radio = new Radio();
        }
        //member methods (Can do)

        public void DisplayTimeAndStation()
        {
            clock.DisplaySettings();
            radio.DisplayStation();
        }

        public void SetAndToggleAlarm()
        {
            clock.SetAlarm();
            clock.ToggleAlarm();
        }
        public void ChangeStationAndTime()
        {

        }

    }
}
