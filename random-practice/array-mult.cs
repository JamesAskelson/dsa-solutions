int num = 22;
int length = 10;
int[] array = new int[length];


for(int i = 0; i < array.Length; i++){
    array[i] = num * (i+1);
}

foreach(var val in array){
    Console.WriteLine($"{val}");
}
