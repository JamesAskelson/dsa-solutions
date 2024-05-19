    def calPoints(self, operations: List[str]) -> int:
        record = []
        not_Score = '+DC'
        while operations:
            score = operations.pop(0)
            if score not in not_Score:
                record.append(int(score))
            elif score is '+':
                record_sum = record[-1] + record[-2]
                record.append(record_sum)
            elif score is 'D':
                record_double = record[-1]*2
                record.append(record_double)
            else:
                record.pop(-1)
        return sum(record)
