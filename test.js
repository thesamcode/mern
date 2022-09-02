

function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
      const pivotIndex = partition(nums, left, right);
      quickSort(nums, left, pivotIndex);
      quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
  }