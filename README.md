# 🔢 Sorting Visualizer

A **responsive, animated sorting visualizer** that generates arrays, allows users to tune array size and animation speed, select custom colors, and run multiple sorting algorithms with **step-by-step highlights**.

---

## ✨ Features

- 🎛️ **Interactive Controls**
  - Generate or reset arrays dynamically.
  - Adjust array **size** and **animation speed** with sliders.
  - Option to **stop an in-progress sort** at any time.

- 🧮 **Implemented Algorithms**
  - 🫧 Bubble Sort  
  - 🔍 Selection Sort  
  - 🧩 Insertion Sort  
  - ⚡ Quick Sort (with pivot partitioning)

- 📊 **Bar Chart Visualization**
  - Bars represent array elements with dynamic heights.
  - **Color-coded** animations show comparisons and swaps.
  - **Custom color palette** to personalize your visualization.

- 💻 **Modern & Responsive UI**
  - Header navigation with branding.
  - Left panel for settings, center display for visualization, right grid for actions.
  - Optimized for **wide screens** with responsive scaling for smaller devices.

---

## 🗂️ Project Structure

sorting-visualizer/
│
├── home.html # Optional landing page (home route for navigation)
├── Sorting.html # Main visualizer page with all controls and visualization container
│
├── script.js # Core logic for generating arrays, rendering bars, and sorting algorithms
│
├── style2.css # Theming and layout for header, controls, array container, buttons, and color pickers
└── style.css # Additional/general styles used across pages

## ⚙️ How It Works

1. Choose the desired **array size** and **speed** using the sliders.  
2. Click **“Generate Array”** to create a new random dataset.  
3. Select a **sorting algorithm** and click **“Start”** to visualize it.  
4. Watch as bars change height and color in real time to represent comparisons and swaps.  
5. Use the **stop** button to halt any ongoing sort.

---

## 📱 Responsive Design

- Works seamlessly across desktop, tablet, and mobile screens.  
- Uses **CSS Grid** and **Flexbox** for flexible layouts.  
- Controls and bar containers automatically adjust for small screens.  

---

## 📈 Future Enhancements

- 🧠 Add **Merge Sort** and **Heap Sort** algorithms.  
- 🎨 Provide **custom color themes** and dark/light mode.  
- 📏 Display **numeric values** on hover for precision.  
- ⏱️ Include **step-by-step playback** and pause/resume controls.  
- 📊 Add **statistics panel** showing total swaps and comparisons.  

---

## 🚀 Technologies Used

- **HTML5** — Structure and layout  
- **CSS3** — Styling and responsiveness  
- **JavaScript (ES6)** — Sorting algorithms and DOM manipulation  

---
