using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClockRadio
{
    class Clock
    {
        //member variables (Has a)
        string time;
        bool alarmStatus;
        string alarmTime;

        //constructor
        public Clock()
        {
            time = "12:00am";
            alarmStatus = false;
            alarmTime = "12:00am";
        }
        //member methods (Can do)

        public void SetTime()
        {
            Console.WriteLine("What is the new time");
            time = Console.ReadLine();
        }
        public void ToggleAlarm()
        {
            alarmStatus = !alarmStatus;
        }

        public void SetAlarm()
        {
            Console.WriteLine("What is the new alarm time");
            alarmTime = Console.ReadLine();
        }

        public void DisplaySettings()
        {
            Console.WriteLine("Current time is: " + time);
            Console.WriteLine(alarmStatus);
            Console.WriteLine(alarmTime);
        }
    }
}
