using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClockRadio
{
    class Program
    {
        static void Main(string[] args)
        {
            
            ClockRadio banana = new ClockRadio();
            banana.SetAndToggleAlarm();
            banana.ChangeStationAndTime();
            banana.DisplayTimeAndStation();
            Console.ReadLine();
        }
    }
}
