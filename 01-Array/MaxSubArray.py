'''
Maximum Subarray

Given an integer array 'nums', find the subarray with the largest sum, and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
'''
class Solution:
    def maxSubArray1(self, nums) -> int:
        '''Brute Force - O(n^2)'''
        max_sum = -float('inf')
        for i in range(len(nums)):
            cur_sum = 0
            for j in range(i, len(nums)):
                cur_sum += nums[j]
                max_sum = max(max_sum, cur_sum)
        return max_sum
    
    def maxSubArray2(self, nums) -> int:
        '''Kadane's Algorithm - O(n)'''
        max_sum = -float('inf')
        cur_sum = 0
        for n in nums:
            cur_sum = max(cur_sum + n, n)   
            max_sum = max(max_sum, cur_sum) 
        return max_sum
    
    def maxSubArray3(self, nums) -> int:
        '''Divide and Conquer - O(nlogn)'''
        def helper(nums, left, right):
            if left == right:
                return nums[left]
            
            mid = (left + right) // 2
            left_sum = -float('inf')
            right_sum = -float('inf')
            
            # Calculate the maximum sum of the left subarray that includes the mid element
            cur_sum = 0
            for i in range(mid, left - 1, -1):
                cur_sum += nums[i]
                left_sum = max(left_sum, cur_sum)
            
            # Calculate the maximum sum of the right subarray that NOT include the mid element
            cur_sum = 0
            for i in range(mid + 1, right + 1):
                cur_sum += nums[i]
                right_sum = max(right_sum, cur_sum)
            
            # Return the maximum of:
            # 1. Maximum subarray sum in the left half
            # 2. Maximum subarray sum in the right half
            # 3. Maximum subarray sum that crosses the midpoint
            return max(helper(nums, left, mid), helper(nums, mid + 1, right), left_sum + right_sum)

        return helper(nums, 0, len(nums) - 1)

if __name__ == '__main__':
    arr = [
        [-2,1,-3,4,-1,2,1,-5,4],
        [1],
        [5,4,-1,7,8]
    ]
    for i in arr:
        print(Solution().maxSubArray3(i))
