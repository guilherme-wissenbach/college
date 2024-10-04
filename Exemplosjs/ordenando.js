let swap = (array) => {
    let firstElement = array [0];
    let lastElement = array[array.length-1]

    array[0] = lastElement;
    array[array.length-1] = firstElement;
}

let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let bubbleSort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

let selectionSort = (array) => {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }
}

let quickSort = (array, left, right) => {
    if (left < right) {
        let pivotIndex = partition(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
}

let partition = (array, left, right) => {
    let pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    return i + 1;
}