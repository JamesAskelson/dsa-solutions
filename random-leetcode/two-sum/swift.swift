func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var diff: [Int: Int] = [:]

        for i in 0...nums.count {
            let difference = target - nums[i]
            if let index = diff[difference] {
                return [index, i]
            } else {
                diff[nums[i]] = i
            }
        }

        return []
    }
