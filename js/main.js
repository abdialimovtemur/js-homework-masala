// 53. Berilgan foydalanuvchilar massividan yoshiga ko'ra foydalanuvchilarni filtrlash.

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 15 }
];

function filterAdultUsers(users) {
    let newArr = users.filter((users) => (users.age > 18));
    return newArr
}

// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]





// 54. Berilgan ikki o'lchovli massiv (matritsa) ichidagi nol elementlarning indekslarini toping.

function findZeroIndices(matrix) {
    let newArr = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let g = 0; g < matrix[i].length; g++) {
            if (matrix[i][g] === 0) {
                newArr.push([i, g]);
            }
        }
    }
    return newArr;
}

// console.log(findZeroIndices([
//     [1, 0, 3],
//     [4, 5, 0],
//     [7, 0, 9]
// ])); 


// Output: [[0, 1], [1, 2], [2, 1]]






// 55. Berilgan sonli massivdagi eng ko'p takrorlangan elementni toping. Agar bir nechta element teng takrorlangan bo'lsa, ulardan birini qaytaring.

function mostFrequentElement(arr) {
    const frequency = {};

    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    let maxCount = 0;
    let mostFrequent = arr[0];

    Object.entries(frequency).forEach(([num, count]) => {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = Number(num);
        }
    });

    return mostFrequent;
}

// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4






// 56. Berilgan ikki o'lchovli massivni (matritsa) 90 daraja o'ngga burang.

function rotateMatrix(matrix) {
    const len = matrix.length;

    let newArr = [];
    for (let i = 0; i < len; i++) {
        newArr.push([]);
    }

    for (let i = 0; i < len; i++) {
        for (let g = 0; g < len; g++) {
            newArr[g][len - 1 - i] = matrix[i][g];
        }
    }

    return newArr;
}

// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])); 
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]






// 57. Berilgan massivdagi faqat bir marta uchraydigan elementlarni qaytaring.

function filterUniqueElements(arr) {
    let newArr = arr.filter((i) => (arr.indexOf(i) === arr.lastIndexOf(i)))
    return newArr
}
// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]



// 58. Berilgan sonlar qatorini k qadamga o'ngga rotatsiya qiling.

function rotateArray(nums, k) {
    k = k % nums.length;

    return nums.slice(-k).concat(nums.slice(0, -k));
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]
