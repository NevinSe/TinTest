using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PayCalc
{
    class PayCalculator
    {
        //member variables (HAS A)
        double payRate;
        double hoursWorked;
        double overTimeHours;
        double overTimePay;
        double overTimeMultiplier;
        double regWorkWeekHours;
        double totalPay;

        //constructor (BUILDS OBJECT)
        public PayCalculator()
        {
            regWorkWeekHours = 40;
            overTimeMultiplier = 1.5;
        }

        //member methods (CAN DO)

        public void RunCalc()
        {
            payRate = GetUserInputConvertToDouble("Please enter your pay rate");
            hoursWorked = GetUserInputConvertToDouble("Please enter your hours worked");
            if (CheckOverTime())
            {
                
                totalPay = CalculatePay(regWorkWeekHours) + CalcOvertime();
            }
            else
            {
                totalPay = CalculatePay(hoursWorked);
            }
            Console.WriteLine(totalPay);
            Console.ReadLine();
        }
        public double CalcOvertime()
        {
            overTimeHours = hoursWorked - regWorkWeekHours;
            double overTimePayRate = payRate * overTimeMultiplier;
            overTimePay = overTimeHours * overTimePayRate;
            return overTimePay;
        }
        public bool CheckOverTime()
        {
            if(hoursWorked > regWorkWeekHours)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public double CalculatePay(double hoursWorked)
        {
            return payRate* hoursWorked;
        } 
        public double GetUserInputConvertToDouble(string output)
        {
            Console.WriteLine(output);
            string input = Console.ReadLine();
            return double.Parse(input);
        }


    }
}
