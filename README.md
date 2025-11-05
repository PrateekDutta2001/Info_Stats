 # 📊 Inferential Statistics - Complete Tutorial Web Application

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> A comprehensive, interactive web-based tutorial covering all aspects of inferential statistics with working calculators, detailed formulas, and modern UI design.

**Personalized content curated by Prateek Dutta**

---

## 🌟 Features

### 📚 Complete Educational Content
- **6 Main Sections:** Introduction, Hypothesis Testing, Confidence Intervals, Statistical Tests, Regression Analysis, and Interactive Calculators
- **50+ Mathematical Formulas** with proper notation (subscripts, superscripts, Greek letters)
- **Real-world Examples** for every statistical concept
- **Detailed Explanations** suitable for university-level learning
- **Visual Learning Aids** with color-coded cards and interactive elements

### 🧮 Interactive Statistical Calculators
All calculators are fully functional with:
- **T-Test Calculator** - One-sample t-test with complete statistical output
- **Confidence Interval Calculator** - Supports 90%, 95%, and 99% confidence levels
- **Z-Test Calculator** - For known population variance scenarios
- **Correlation Calculator** - Pearson correlation coefficient with R² computation

**Calculator Features:**
- ✅ Real-time calculations with detailed results
- ✅ Color-coded outputs (green for non-significant, red for significant)
- ✅ Step-by-step interpretation
- ✅ Automatic form validation
- ✅ Clear buttons for easy reset
- ✅ Export-ready results

### 🎨 Modern UI/UX Design
- **Gradient Backgrounds** with smooth animations
- **Glass Morphism** effects on navigation and cards
- **Hover Animations** with 3D transforms
- **Responsive Design** for all devices (mobile, tablet, desktop, ultra-wide)
- **Smooth Scroll Navigation** with active link indicators
- **Floating Statistical Symbols** in hero section
- **Color-Coded Components** for easy visual recognition

### 📱 Responsive & Device-Friendly
Optimized breakpoints for:
- 🖥️ **Ultra-wide screens** (1920px+)
- 💻 **Large desktops** (1400px-1920px)
- 🖥️ **Standard laptops** (1024px-1400px)
- 📱 **Tablets** (768px-1024px)
- 📱 **Mobile devices** (480px-768px)
- 📱 **Small mobile** (360px-480px)
- 📱 **Extra small** (<360px)

---

## 📖 Content Coverage

### 1. **Introduction to Inferential Statistics**
- Population vs Sample (with notation N and n)
- Parameters vs Statistics (μ, σ, p vs x̄, s, p̂)
- Central Limit Theorem with formulas
- Standard Error calculations
- Sampling Distributions
- Law of Large Numbers

### 2. **Hypothesis Testing**
**Complete 4-Step Process:**
- State Hypotheses (H₀ and H₁/Hₐ)
- Set Significance Level (α = 0.01, 0.05, 0.10)
- Calculate Test Statistics (z, t, F, χ²)
- Make Decisions (p-value vs critical value approach)

**Error Types:**
- Type I Error (α) - False Positive
- Type II Error (β) - False Negative
- Statistical Power (1 - β)

**P-Value Interpretation:**
- Complete definition with formula
- 4 evidence levels (very strong to weak)
- Common misconceptions clarified

### 3. **Confidence Intervals**
**Four Complete Formulas:**
1. Population Mean (σ known): x̄ ± z<sub>α/2</sub> × (σ/√n)
2. Population Mean (σ unknown): x̄ ± t<sub>α/2</sub> × (s/√n)
3. Population Proportion: p̂ ± z<sub>α/2</sub> × √[p̂(1-p̂)/n]
4. Difference Between Means: Complete pooled SE formula

**Includes:**
- Critical values for 90%, 95%, 99% confidence levels
- Margin of error calculations
- Correct vs incorrect interpretations
- Factors affecting interval width

### 4. **Statistical Tests**

#### **T-Tests**
- **One-Sample T-Test:** t = (x̄ - μ₀) / (s/√n)
- **Two-Sample T-Test:** Pooled and Welch's methods
- **Paired T-Test:** t = d̄ / (s<sub>d</sub>/√n)

#### **ANOVA (Analysis of Variance)**
- F-statistic: F = MS<sub>between</sub> / MS<sub>within</sub>
- Sum of Squares formulas (SS<sub>total</sub>, SS<sub>between</sub>, SS<sub>within</sub>)
- Degrees of freedom calculations
- Post-hoc tests (Tukey HSD, Bonferroni)

#### **Chi-Square Tests**
- **Goodness-of-Fit:** χ² = Σ[(O<sub>i</sub> - E<sub>i</sub>)² / E<sub>i</sub>]
- **Test of Independence:** With contingency tables
- Expected frequency calculations
- Degrees of freedom formulas

#### **Z-Test**
- Formula: z = (x̄ - μ₀) / (σ/√n)
- Critical values for all α levels
- Z-test for proportions

### 5. **Regression Analysis**

#### **Simple Linear Regression**
- Equation: ŷ = β₀ + β₁x + ε
- Slope calculation: β₁ = Σ[(x<sub>i</sub>-x̄)(y<sub>i</sub>-ȳ)] / Σ(x<sub>i</sub>-x̄)²
- Intercept: β₀ = ȳ - β₁x̄

#### **Multiple Linear Regression**
- General form with k predictors
- Matrix notation: Y = Xβ + ε
- Solution: β = (X'X)⁻¹X'Y

#### **Key Metrics**
- **R² (Coefficient of Determination):** Complete SS formulas
- **Correlation Coefficient (r):** Pearson's formula
- **Standard Error of Estimate:** SE<sub>est</sub> = √[SS<sub>residual</sub>/(n-2)]
- **Adjusted R²** for multiple regression

#### **Assumptions (LINE)**
- **L**inearity - Check with scatter plots
- **I**ndependence - Durbin-Watson test
- **N**ormality - Q-Q plots, Shapiro-Wilk test
- **E**qual Variance - Residual plots

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- No additional software or installations required!

### Installation

1. **Clone or Download the Repository**
```bash
git clone https://github.com/prateekdutta2001/inferential-statistics-tutorial.git
```

2. **Navigate to the Project Directory**
```bash
cd inferential-statistics-tutorial
```

3. **Open in Browser**
- Simply double-click `index.html` or
- Right-click → Open with → Your preferred browser

**That's it! No build process, no dependencies, no server required.**

---

## 📁 Project Structure

```
inferential-statistics-tutorial/
│
├── index.html          # Main HTML file (834 lines)
│   ├── Navigation
│   ├── Hero Section
│   ├── Introduction Section
│   ├── Hypothesis Testing Section
│   ├── Confidence Intervals Section
│   ├── Statistical Tests Section
│   ├── Regression Analysis Section
│   ├── Interactive Calculators
│   └── Footer
│
├── styles.css          # Complete styling (1644 lines)
│   ├── CSS Variables
│   ├── Navigation Styles
│   ├── Hero & Animations
│   ├── Content Cards
│   ├── Formulas & Theory Boxes
│   ├── Calculator Styles
│   ├── Responsive Media Queries
│   └── Print Styles
│
├── script.js           # All functionality (889 lines)
│   ├── Navigation Logic
│   ├── Statistical Functions
│   ├── T-Test Calculator
│   ├── Confidence Interval Calculator
│   ├── Z-Test Calculator
│   ├── Correlation Calculator
│   ├── Form Validation
│   ├── Clear Functions
│   └── Animations
│
└── README.md           # This file
```

---

## 🎯 Usage Guide

### Navigation
- Click on navigation links to jump to different sections
- Active section is highlighted in the navbar
- On mobile (<900px), tap the hamburger menu (☰)

### Using Calculators

#### **T-Test Calculator**
1. Navigate to "Calculator" section
2. Click "T-Test" tab
3. Enter:
   - Sample Mean (x̄)
   - Population Mean (μ₀)
   - Sample Standard Deviation (s)
   - Sample Size (n)
   - Significance Level (α)
4. Click "Calculate"
5. View detailed results with interpretation

#### **Confidence Interval Calculator**
1. Click "Confidence Interval" tab
2. Enter sample statistics
3. Select confidence level (90%, 95%, or 99%)
4. Get interval with margin of error

#### **Example Calculations**

**T-Test Example:**
```
Sample Mean: 75
Population Mean: 70
Sample SD: 8.5
Sample Size: 30
Alpha: 0.05
```

**Confidence Interval Example:**
```
Sample Mean: 100
Standard Deviation: 15
Sample Size: 50
Confidence Level: 95%
```

**Correlation Example:**
```
X Values: 1, 2, 3, 4, 5
Y Values: 2, 4, 5, 4, 5
```

---

## 🎨 Customization

### Changing Colors
Edit CSS variables in `styles.css` (lines 11-30):
```css
:root {
    --primary-color: #6366f1;      /* Main purple */
    --secondary-color: #ec4899;     /* Pink accent */
    --accent-color: #14b8a6;        /* Teal */
    /* Add your custom colors */
}
```

### Modifying Content
All content is in `index.html` with semantic HTML structure:
- Find sections by ID: `#intro`, `#hypothesis`, `#confidence`, etc.
- Edit formulas using HTML entities and `<sub>`/`<sup>` tags
- Add new examples in `.test-example` divs

### Adding New Calculators
1. Add tab button in `.calculator-tabs` section
2. Create new `.calculator-content` div
3. Add calculation function in `script.js`
4. Style in `styles.css` if needed

---

## 🧪 Testing

### Browser Testing
Tested and verified on:
- ✅ Chrome 120+
- ✅ Firefox 121+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### Responsive Testing
Use browser DevTools:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test different screen sizes
4. Verify all calculators work

### Calculator Validation
All calculators include:
- Input type validation
- Range checking
- Error messages for invalid input
- Edge case handling (division by zero, etc.)

---

## 📊 Performance

### Metrics
- **Load Time:** < 1 second (no external dependencies)
- **First Paint:** < 0.5 seconds
- **Interactive:** Immediate
- **File Sizes:**
  - index.html: ~42 KB
  - styles.css: ~32 KB
  - script.js: ~31 KB
  - **Total:** ~105 KB (extremely lightweight!)

### Optimizations
- Pure vanilla JavaScript (no libraries/frameworks)
- CSS animations use GPU acceleration
- Debounced scroll events
- Optimized selector queries
- Minimal DOM manipulation

---

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Flexbox, Grid
- **Vanilla JavaScript** (ES6+) - No dependencies
- **Google Fonts** - Poppins font family

### Key Features Implemented
- Responsive design with mobile-first approach
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Smooth scroll behavior
- Intersection Observer API for animations
- Local Storage for theme preferences
- Print-friendly styles

### Browser APIs Used
- `IntersectionObserver` for scroll animations
- `localStorage` for dark mode preference (if enabled)
- Native form validation
- Smooth scroll API

---

## 📝 Formula Notation Guide

The application uses HTML entities and tags for mathematical notation:

| Notation | HTML Code | Example |
|----------|-----------|---------|
| Subscript | `<sub>` | x<sub>1</sub> |
| Superscript | `<sup>` | x<sup>2</sup> |
| Greek μ | `&mu;` or `μ` | μ |
| Greek σ | `&sigma;` or `σ` | σ |
| Greek α | `&alpha;` or `α` | α |
| Greek β | `&beta;` or `β` | β |
| X-bar | `x&#772;` or `x̄` | x̄ |
| Plus-minus | `&plusmn;` or `±` | ± |
| Not equal | `&ne;` or `≠` | ≠ |
| Less/equal | `&le;` or `≤` | ≤ |
| Greater/equal | `&ge;` or `≥` | ≥ |
| Square root | `&radic;` or `√` | √ |
| Chi-square | `&chi;&sup2;` | χ² |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- Add more statistical tests (Mann-Whitney U, Kruskal-Wallis, etc.)
- Implement data visualization (charts/graphs)
- Add sample datasets for practice
- Create quiz/assessment sections
- Translate to other languages
- Add more calculator types
- Improve mobile UX

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 Prateek Dutta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👤 Author

**Prateek Dutta**

- GitHub: [@prateekdutta2001](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- Google Fonts for Poppins font family
- Statistical formulas based on standard textbooks
- Inspired by modern web design practices
- Built with educational goals in mind

---

## 🌐 Live Demo

[View Live Demo](https://prateekdutta2001.github.io/Info_Stats/)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own use
- 📢 Sharing with students and educators
- 💬 Providing feedback and suggestions

---

<div align="center">

**Built with ❤️ for Statistics Education**

Made by [Prateek Dutta](https://github.com/yourusername) | 2025

</div>
