using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClockRadio
{
    class Radio
    {
        //member variables (Has a)
        string currentStation;

        //constructor
        public Radio()
        {

        }
        //member methods (Can do)

        public void ChangeStation()
        {
            Console.WriteLine("What is the new radio Station");
            currentStation = Console.ReadLine();
        }

        public void DisplayStation()
        {
            Console.WriteLine(currentStation);
        }

    }
}
