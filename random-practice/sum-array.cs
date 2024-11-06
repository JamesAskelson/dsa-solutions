using System;
using System.Formats.Asn1;

namespace MyProject
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = new int[6] {10, 20, 30, 40, 50, 60};
            var sum = SumOfNumbers(nums);
            Console.WriteLine(sum);
        }
        static int SumOfNumbers(int[] nums)
        {

            int sum = 0;
            if(nums.Length == 0){
                return -1;
            }
            foreach(int num in nums){
                sum += num;
            }

            return sum;
        }
    }
}
