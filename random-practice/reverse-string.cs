Console.WriteLine("Enter a word: ");
string word = Console.ReadLine();
string res = "";

for(int i = word.Length - 1; i >= 0; i--)
    res += word[i];
Console.WriteLine(res);
