const generateButton = document.getElementById("generateButton");
const selectionSortButton = document.getElementById("selectionSort");
const bubbleSortButton = document.getElementById("bubbleSort");
const insertionSortButton = document.getElementById("insertionSort");
const mergeSortButton = document.getElementById("mergeSort");
const arrayContainer = document.getElementById("display-sec"); // Fixed typo here
const resetButton = document.getElementById("resetButton"); // Fixed typo here
const arraySizeInput = document.getElementById("arraySize");
const colorInput1 = document.getElementById("color1");
const colorInput2 = document.getElementById("color2");
const colorInput3 = document.getElementById("color3");
const colorHexElement1 = document.getElementById("colorHex1");
const colorHexElement2 = document.getElementById("colorHex2");
const colorHexElement3 = document.getElementById("colorHex3");
const speedInput = document.getElementById("speed");
const stopButton = document.getElementById("stopButton");
let isSorting = false;
let stopRequested = false;

function stopSorting() {
  stopRequested = true;
}

//------------------------------------- Extras

colorInput1.addEventListener("input", () => {
  const selectedColor1 = colorInput1.value;
  colorHexElement1.textContent = selectedColor1; // Update the content of the h2 element
});
colorInput2.addEventListener("input", () => {
  const selectedColor2 = colorInput2.value;
  colorHexElement2.textContent = selectedColor2; // Update the content of the h2 element
});
colorInput3.addEventListener("input", () => {
  const selectedColor3 = colorInput3.value;
  colorHexElement3.textContent = selectedColor3; // Update the content of the h2 element
});

let array = [];

function generateArray(size) {
  arrayContainer.innerHTML = "";

  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  displayArray();
}

function displayArray() {
  if (array.length === 0) {
    arrayContainer.classList.remove("array-container");
    arrayContainer.classList.add("display-sec");
    arrayContainer.innerHTML =
      '<p class="message">No array to display. Generate an array first.</p>';
  } else {
    arrayContainer.classList.add("array-container");
    arrayContainer.classList.remove("display-sec");

    const maxBarValue = Math.max(...array);
    const barsCount = array.length;
    const containerWidth = arrayContainer.clientWidth;
    const barWidth = containerWidth / barsCount;
    const selectedColor1 = colorInput1.value;

    // Create an array of bar elements
    const bars = array.map((value) => {
      const bar = document.createElement("div");
      bar.style.height = 0 + "%";
      bar.className = "array-bar";
      bar.style.width = barWidth - 10 + "px";
      bar.style.backgroundColor = selectedColor1;
      bar.innerHTML = "<p>" + parseInt(value) + "</p>";
      return bar;
    });

    // Clear the container and append the bars
    arrayContainer.innerHTML = "";

    // Add a slight delay before changing the bar heights
    setTimeout(() => {
      bars.forEach((bar, index) => {
        const value = array[index];
        bar.style.height = (value / maxBarValue) * 80 + "%";
      });
    }, 100); // Adjust the delay as needed
    bars.forEach((bar) => arrayContainer.appendChild(bar));
  }
}

function getSpeed() {
  const speed = parseInt(speedInput.value);
  return 150 - speed;
}

async function bubbleSort() {
  isSorting = true;
  stopRequested = false;
  const sortingColor1 = colorInput2.value;
  const sortingColor2 = colorInput3.value;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      arrayContainer.children[j].style.backgroundColor = sortingColor1;
      arrayContainer.children[j + 1].style.backgroundColor = sortingColor2;

      // Compare values and swap heights if needed
      if (array[j] > array[j + 1]) {
        // Swap heights of the bars
        const tempHeight = arrayContainer.children[j].style.height;
        arrayContainer.children[j].style.height =
          arrayContainer.children[j + 1].style.height;
        arrayContainer.children[j + 1].style.height = tempHeight;
        const tempHTML = arrayContainer.children[j].innerHTML;
        arrayContainer.children[j].innerHTML =
          arrayContainer.children[j + 1].innerHTML;
        arrayContainer.children[j + 1].innerHTML = tempHTML;

        // Swap values in the array
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Delay to see the animation (optional)
        await new Promise((resolve) => setTimeout(resolve, getSpeed()));
      }

      // Reset color after comparison (optional)
      arrayContainer.children[j].style.backgroundColor = colorInput1.value;
      if (stopRequested) return; // Exit the sorting function
    }
  }

  // Sorting is complete; reset colors
  for (let i = 0; i < array.length; i++) {
    arrayContainer.children[i].style.backgroundColor = colorInput1.value;
  }
  isSorting = false;
}

async function selectionSort() {
  isSorting = true;
  stopRequested = false;
  const sortingColor1 = colorInput2.value;
  const sortingColor2 = colorInput3.value;

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      arrayContainer.children[minIndex].style.backgroundColor = sortingColor1;
      arrayContainer.children[j].style.backgroundColor = sortingColor2;

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }

      // Delay to see the animation (optional)
      await new Promise((resolve) => setTimeout(resolve, getSpeed()));
      if (stopRequested) return;
    }

    // Swap heights of the bars
    const tempHeight = arrayContainer.children[i].style.height;
    const tempInnerHTML = arrayContainer.children[i].innerHTML;
    arrayContainer.children[i].style.height =
      arrayContainer.children[minIndex].style.height;
    arrayContainer.children[minIndex].style.height = tempHeight;

    arrayContainer.children[i].innerHTML =
      arrayContainer.children[minIndex].innerHTML;
    arrayContainer.children[minIndex].innerHTML = tempInnerHTML;

    // Swap values in the array
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;

    // Reset color after comparison (optional)
    for (let k = 0; k < array.length; k++) {
      arrayContainer.children[k].style.backgroundColor = colorInput1.value;
    }
  }

  // Sorting is complete; reset colors
  for (let i = 0; i < array.length; i++) {
    arrayContainer.children[i].style.backgroundColor = colorInput1.value;
  }
}

async function insertionSort() {
  isSorting = true;
  stopRequested = false;
  const sortingColor1 = colorInput2.value;
  const sortingColor2 = colorInput3.value;
  let swap = 0;

  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && currentElement < array[j]) {
      if (stopRequested) return;
      arrayContainer.children[j].style.backgroundColor = sortingColor1;
      arrayContainer.children[j + 1].style.backgroundColor = sortingColor2;
      swap = 1;

      // Move the greater elements to the right
      array[j + 1] = array[j];

      // Move the corresponding bar's height and innerHTML to the right
      arrayContainer.children[j + 1].style.height =
        arrayContainer.children[j].style.height;
      arrayContainer.children[j + 1].innerHTML =
        arrayContainer.children[j].innerHTML;

      // Delay to see the animation (optional)
      await new Promise((resolve) => setTimeout(resolve, getSpeed()));

      // Move to the next position
      j--;

      // Reset color after comparison (optional)
      for (let k = 0; k < array.length; k++) {
        arrayContainer.children[k].style.backgroundColor = colorInput1.value;
      }
    }

    // Place the current element in the correct position
    array[j + 1] = currentElement;

    // Update the corresponding bar's height and innerHTML
    arrayContainer.children[j + 1].style.height =
      (currentElement / Math.max(...array)) * 80 + "%";
    arrayContainer.children[j + 1].innerHTML = parseInt(
      arrayContainer.children[j + 1].style.height
    );

    // Reset color after sorting (optional)
    arrayContainer.children[j + 1].style.backgroundColor = colorInput1.value;
    if (stopRequested) return;
  }
  // Sorting is complete; reset colors
  for (let i = 0; i < array.length; i++) {
    arrayContainer.children[i].style.backgroundColor = colorInput1.value;
  }
}
// Add more colors if needed

const pivotColor = "green";

async function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = await partition(arr, low, high);
    await Promise.all([
      quickSort(arr, low, pivotIndex - 1),
      quickSort(arr, pivotIndex + 1, high),
    ]);
  }
  for (let i = 0; i < array.length; i++) {
    arrayContainer.children[i].style.backgroundColor = colorInput1.value;
  } 
}

async function partition(arr, low, high) {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;
  arrayContainer.children[low].style.backgroundColor = pivotColor;

  while (true) {
    while (left <= right && arr[left] <= pivot) {
      arrayContainer.children[left].style.backgroundColor = colorInput2.value;
      left++;
      await sleep(getSpeed());
    }

    while (left <= right && arr[right] >= pivot) {
      arrayContainer.children[right].style.backgroundColor = colorInput2.value;
      right--;
      await sleep(getSpeed());
    }

    if (left <= right) {
      arrayContainer.children[left].style.backgroundColor = colorInput3.value;
      arrayContainer.children[right].style.backgroundColor = colorInput3.value;
      await sleep(getSpeed());
      swap(arr, left, right);
      arrayContainer.children[left].style.backgroundColor = colorInput2.value;
      arrayContainer.children[right].style.backgroundColor = colorInput2.value;
    } else {
      break;
    }
  }

  arrayContainer.children[low].style.backgroundColor = colorInput2.value;
  arrayContainer.children[right].style.backgroundColor = colorInput2.value;
  await sleep(getSpeed());
  swap(arr, low, right);
  arrayContainer.children[low].style.backgroundColor = colorInput3.value;
  arrayContainer.children[right].style.backgroundColor = colorInput3.value;

  return right;
}

// Rest of the code remains the same

// Event listeners and other functions remain unchanged

// Helper function to swap elements in the array
function swap(arr, i, j) {
  // Swap bar height and innerHTML directly in the arrayContainer
  const tempHeight = arrayContainer.children[i].style.height;
  const tempInnerHTML = arrayContainer.children[i].innerHTML;

  arrayContainer.children[i].style.height =
    arrayContainer.children[j].style.height;
  arrayContainer.children[i].innerHTML = arrayContainer.children[j].innerHTML;

  arrayContainer.children[j].style.height = tempHeight;
  arrayContainer.children[j].innerHTML = tempInnerHTML;

  // Swap values in the array if necessary
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Helper function to introduce a delay using Promises for visualization
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Generate an initial array

function resetArray() {
  const newSize = parseInt(arraySizeInput.value);
  generateArray(newSize);
}

// Call the function to initialize the button state

generateButton.addEventListener("click", () =>
  generateArray(parseInt(arraySizeInput.value))
);
bubbleSortButton.addEventListener("click", async () => {
  await bubbleSort();
});
selectionSortButton.addEventListener("click", async () => {
  await selectionSort();
});
insertionSortButton.addEventListener("click", async () => {
  await insertionSort();
});
mergeSortButton.addEventListener("click", async () => {
  await quickSort(array, 0, array.length - 1);
});
stopButton.addEventListener("click", () => stopSorting());
resetButton.addEventListener("click", () =>
  generateArray(parseInt(arraySizeInput.value))
);
