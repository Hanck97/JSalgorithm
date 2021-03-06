// 插入排序 O(n2)
let arr = [1,3,2,1,7,9,5,2];
function insertSort (array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j;
        for (j = i - 1;j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

// 希尔排序 O(nlogn)

function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j]> temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

// 冒泡排序 O(n2)

function bubbleSort (array) {
    let i,j;
    for (i = 0; i < array.length - 1; i++) {
        for (j = 0; j < array.length -1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return array;
}   


// 归并排序
function mergeSort(arr) {
    if(arr.length < 2) return arr
    let mid = parseInt(arr.length/2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function merge(leftArr, rightArr) {
    var resultArr = []
    while(leftArr.length && rightArr.length) {
      resultArr.push(leftArr[0] <= rightArr[0] ? leftArr.shift() : rightArr.shift())
    }
    return resultArr.concat(leftArr).concat(rightArr)
}

// 快速排序
function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivotIndex = Math.floor(arr.length - 1);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    arr.map((item) => {
        if(item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    })

    return quickSort(left).concat([pivot], quickSort(right));
}