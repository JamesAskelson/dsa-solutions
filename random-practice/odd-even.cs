List<int> even = new List<int>();
List<int> odd = new List<int>();

for(int i = 1; i <= 20; i++){
    if(i % 2 == 0){
        even.Add(i);
    } else {
        odd.Add(i);
    }
}

foreach(var num in odd){
    Console.WriteLine(num);
}

foreach(var num in even){
    Console.WriteLine(num);
}
