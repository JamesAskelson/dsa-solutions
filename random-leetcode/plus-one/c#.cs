    public int[] PlusOne(int[] digits) {
        digits[digits.Length-1] += 1;

        for(int i = digits.Length - 1; i >= 0; i--){
            if(digits[i] > 9){
                if(i == 0){
                    digits[i] = 0;
                    digits = digits.Prepend(1).ToArray();
                } else{
                    digits[i] = 0;
                    digits[i-1] += 1;
                }
            } else{
                break;
            }
        }
        return digits;
    }
