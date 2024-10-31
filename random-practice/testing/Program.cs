// See https://aka.ms/new-console-template for more information
Console.WriteLine("Enter a number: ");
int number = Convert.ToInt32(Console.ReadLine());
Console.ReadLine();

for(int i = 1; i <= 9; i++){
    Console.WriteLine("{0} x {1} = {2}", number, i, i * number);
}
