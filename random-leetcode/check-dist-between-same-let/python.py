def checkDistances(self, s: str, distance: List[int]) -> bool:
        new_set = set()

        for i in range(len(s)):
            letter = s[i]
            letter_code = ord(letter) - 97
            if letter not in new_set:
                next_letter = s.rfind(letter, i+1)
                dist = next_letter - (i+1)
                if distance[letter_code] is not dist:
                    return False
                new_set.add(letter)
        return True
