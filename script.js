// ==========================================
// Navigation & Menu Toggle
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section, .hero');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Initialize calculator tabs
    initCalculatorTabs();

    // Add animations on scroll
    observeElements();
});

// ==========================================
// Scroll Functions
// ==========================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==========================================
// Calculator Tabs
// ==========================================

function initCalculatorTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const calculatorContents = document.querySelectorAll('.calculator-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            calculatorContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// ==========================================
// Statistical Functions
// ==========================================

// T-Distribution Critical Values (improved approximation)
function getTCritical(df, alpha, twoTailed = true) {
    if (twoTailed) {
        alpha = alpha / 2;
    }

    // Z-values for large samples
    const z = {
        0.05: 1.645,
        0.025: 1.96,
        0.005: 2.576
    };

    // For large df (>100), t-distribution approximates z-distribution
    if (df > 100) {
        return z[alpha] || 1.96;
    }

    // Comprehensive t-table for common df values
    const tTable = {
        1: { 0.05: 6.314, 0.025: 12.706, 0.005: 63.657 },
        2: { 0.05: 2.920, 0.025: 4.303, 0.005: 9.925 },
        3: { 0.05: 2.353, 0.025: 3.182, 0.005: 5.841 },
        4: { 0.05: 2.132, 0.025: 2.776, 0.005: 4.604 },
        5: { 0.05: 2.015, 0.025: 2.571, 0.005: 4.032 },
        6: { 0.05: 1.943, 0.025: 2.447, 0.005: 3.707 },
        7: { 0.05: 1.895, 0.025: 2.365, 0.005: 3.499 },
        8: { 0.05: 1.860, 0.025: 2.306, 0.005: 3.355 },
        9: { 0.05: 1.833, 0.025: 2.262, 0.005: 3.250 },
        10: { 0.05: 1.812, 0.025: 2.228, 0.005: 3.169 },
        15: { 0.05: 1.753, 0.025: 2.131, 0.005: 2.947 },
        20: { 0.05: 1.725, 0.025: 2.086, 0.005: 2.845 },
        25: { 0.05: 1.708, 0.025: 2.060, 0.005: 2.787 },
        30: { 0.05: 1.697, 0.025: 2.042, 0.005: 2.750 },
        40: { 0.05: 1.684, 0.025: 2.021, 0.005: 2.704 },
        50: { 0.05: 1.676, 0.025: 2.009, 0.005: 2.678 },
        60: { 0.05: 1.671, 0.025: 2.000, 0.005: 2.660 },
        80: { 0.05: 1.664, 0.025: 1.990, 0.005: 2.639 },
        100: { 0.05: 1.660, 0.025: 1.984, 0.005: 2.626 }
    };

    // Find closest df in table
    const dfKeys = Object.keys(tTable).map(Number);
    const closestDf = dfKeys.reduce((prev, curr) => 
        Math.abs(curr - df) < Math.abs(prev - df) ? curr : prev
    );

    const alphaKey = alpha.toFixed(3);
    return tTable[closestDf][alphaKey] || tTable[closestDf][0.025] || 2.0;
}

// Calculate p-value approximation from t-statistic (improved)
function approximatePValue(tStat, df) {
    const absTStat = Math.abs(tStat);
    
    // Better approximation based on t-value and df
    if (df < 5) {
        if (absTStat > 4.0) return 0.001;
        if (absTStat > 3.0) return 0.01;
        if (absTStat > 2.5) return 0.05;
        if (absTStat > 2.0) return 0.10;
    } else if (df < 15) {
        if (absTStat > 3.5) return 0.001;
        if (absTStat > 2.7) return 0.01;
        if (absTStat > 2.1) return 0.05;
        if (absTStat > 1.8) return 0.10;
    } else {
        // For larger df, approximates z-distribution
        if (absTStat > 3.3) return 0.001;
        if (absTStat > 2.6) return 0.01;
        if (absTStat > 2.0) return 0.05;
        if (absTStat > 1.65) return 0.10;
    }
    
    return 0.20;
}

// ==========================================
// T-Test Calculator
// ==========================================

function calculateTTest() {
    const sampleMean = parseFloat(document.getElementById('sample-mean').value);
    const popMean = parseFloat(document.getElementById('pop-mean').value);
    const sampleSD = parseFloat(document.getElementById('sample-sd').value);
    const sampleSize = parseInt(document.getElementById('sample-size').value);
    const alpha = parseFloat(document.getElementById('alpha-level').value);

    // Validation
    if (isNaN(sampleMean) || isNaN(popMean) || isNaN(sampleSD) || isNaN(sampleSize)) {
        showResult('ttest-result', '<p style="color: #ef4444;">Please fill in all fields with valid numbers.</p>');
        return;
    }

    if (sampleSize < 2) {
        showResult('ttest-result', '<p style="color: #ef4444;">Sample size must be at least 2.</p>');
        return;
    }

    if (sampleSD <= 0) {
        showResult('ttest-result', '<p style="color: #ef4444;">Standard deviation must be positive.</p>');
        return;
    }

    // Calculate t-statistic
    const standardError = sampleSD / Math.sqrt(sampleSize);
    const tStatistic = (sampleMean - popMean) / standardError;
    const degreesOfFreedom = sampleSize - 1;

    // Get critical value
    const tCritical = getTCritical(degreesOfFreedom, alpha, true);

    // Approximate p-value
    const pValue = approximatePValue(tStatistic, degreesOfFreedom);

    // Determine result
    const reject = Math.abs(tStatistic) > tCritical;

    // Display results
    let resultHTML = `
        <h4>📊 T-Test Results</h4>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; margin-top: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p><strong>Test Statistic (t):</strong> <span style="color: #6366f1; font-weight: 700; font-size: 1.1rem;">${tStatistic.toFixed(4)}</span></p>
            <p><strong>Degrees of Freedom:</strong> ${degreesOfFreedom}</p>
            <p><strong>Standard Error:</strong> ${standardError.toFixed(4)}</p>
            <p><strong>Critical Value (±):</strong> ${tCritical.toFixed(4)}</p>
            <p><strong>Approximate p-value:</strong> <span style="color: ${pValue < 0.05 ? '#ef4444' : '#10b981'}; font-weight: 700;">${pValue < 0.001 ? '< 0.001' : pValue.toFixed(3)}</span></p>
        </div>
        <div style="background: ${reject ? 'linear-gradient(135deg, #fee2e2, #fecaca)' : 'linear-gradient(135deg, #d1fae5, #a7f3d0)'}; padding: 1.8rem; border-radius: 12px; margin-top: 1rem; border-left: 6px solid ${reject ? '#ef4444' : '#10b981'}; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <p style="font-size: 1.2rem; font-weight: 700; color: #1e293b; margin-bottom: 0.8rem;">
                ${reject ? '🚫' : '✅'} <strong>Decision:</strong> ${reject ? 'Reject' : 'Fail to reject'} H₀
            </p>
            <p style="font-size: 0.95rem; color: #475569; line-height: 1.7;">
                <strong>Interpretation:</strong> ${reject ? 
                    `At the ${(alpha * 100)}% significance level, there is sufficient evidence to conclude that the sample mean (${sampleMean}) is significantly different from the population mean (${popMean}).` :
                    `At the ${(alpha * 100)}% significance level, there is insufficient evidence to conclude that the sample mean (${sampleMean}) is significantly different from the population mean (${popMean}).`
                }
            </p>
        </div>
    `;

    showResult('ttest-result', resultHTML);
}

// ==========================================
// Confidence Interval Calculator
// ==========================================

function calculateCI() {
    const mean = parseFloat(document.getElementById('ci-mean').value);
    const sd = parseFloat(document.getElementById('ci-sd').value);
    const size = parseInt(document.getElementById('ci-size').value);
    const confidenceLevel = parseInt(document.getElementById('confidence-level').value);

    // Validation
    if (isNaN(mean) || isNaN(sd) || isNaN(size)) {
        showResult('ci-result', '<p style="color: #ef4444;">Please fill in all fields with valid numbers.</p>');
        return;
    }

    if (size < 2) {
        showResult('ci-result', '<p style="color: #ef4444;">Sample size must be at least 2.</p>');
        return;
    }

    if (sd <= 0) {
        showResult('ci-result', '<p style="color: #ef4444;">Standard deviation must be positive.</p>');
        return;
    }

    // Calculate standard error
    const standardError = sd / Math.sqrt(size);

    // Get critical value based on confidence level
    let criticalValue;
    if (confidenceLevel === 90) {
        criticalValue = 1.645;
    } else if (confidenceLevel === 95) {
        criticalValue = 1.96;
    } else if (confidenceLevel === 99) {
        criticalValue = 2.576;
    }

    // For smaller samples, use t-distribution
    if (size < 30) {
        const df = size - 1;
        const alpha = 1 - (confidenceLevel / 100);
        criticalValue = getTCritical(df, alpha, true);
    }

    // Calculate margin of error
    const marginOfError = criticalValue * standardError;

    // Calculate confidence interval
    const lowerBound = mean - marginOfError;
    const upperBound = mean + marginOfError;

    // Display results
    let resultHTML = `
        <h4>📊 Confidence Interval Results</h4>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; margin-top: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p><strong>Sample Mean (x̄):</strong> <span style="color: #6366f1; font-weight: 700;">${mean.toFixed(4)}</span></p>
            <p><strong>Standard Error:</strong> ${standardError.toFixed(4)}</p>
            <p><strong>Critical Value:</strong> ${criticalValue.toFixed(4)} ${size < 30 ? '(t-value)' : '(z-value)'}</p>
            <p><strong>Margin of Error:</strong> <span style="color: #ec4899; font-weight: 700;">±${marginOfError.toFixed(4)}</span></p>
            <p><strong>Sample Size:</strong> n = ${size}</p>
        </div>
        <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 2rem; border-radius: 12px; margin-top: 1rem; border-left: 6px solid #3b82f6; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
            <p style="font-size: 1.4rem; font-weight: 700; color: #1e293b; text-align: center; margin-bottom: 1rem;">
                📈 ${confidenceLevel}% Confidence Interval
            </p>
            <p style="font-size: 1.8rem; font-weight: 700; color: #1e40af; text-align: center; margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.6); border-radius: 8px;">
                [${lowerBound.toFixed(4)}, ${upperBound.toFixed(4)}]
            </p>
            <p style="color: #475569; text-align: center; font-size: 1.05rem; line-height: 1.7;">
                <strong>Interpretation:</strong> We are ${confidenceLevel}% confident that the true population mean μ lies between ${lowerBound.toFixed(2)} and ${upperBound.toFixed(2)}.
            </p>
        </div>
    `;

    showResult('ci-result', resultHTML);
}

// ==========================================
// Z-Test Calculator
// ==========================================

function calculateZTest() {
    const sampleMean = parseFloat(document.getElementById('z-sample-mean').value);
    const popMean = parseFloat(document.getElementById('z-pop-mean').value);
    const popSD = parseFloat(document.getElementById('z-pop-sd').value);
    const sampleSize = parseInt(document.getElementById('z-sample-size').value);
    const alpha = parseFloat(document.getElementById('z-alpha-level').value);

    // Validation
    if (isNaN(sampleMean) || isNaN(popMean) || isNaN(popSD) || isNaN(sampleSize)) {
        showResult('ztest-result', '<p style="color: #ef4444;">Please fill in all fields with valid numbers.</p>');
        return;
    }

    if (sampleSize < 1) {
        showResult('ztest-result', '<p style="color: #ef4444;">Sample size must be at least 1.</p>');
        return;
    }

    if (popSD <= 0) {
        showResult('ztest-result', '<p style="color: #ef4444;">Standard deviation must be positive.</p>');
        return;
    }

    // Calculate z-statistic
    const standardError = popSD / Math.sqrt(sampleSize);
    const zStatistic = (sampleMean - popMean) / standardError;

    // Get critical value for two-tailed test
    let zCritical;
    if (alpha === 0.01) {
        zCritical = 2.576;
    } else if (alpha === 0.05) {
        zCritical = 1.96;
    } else if (alpha === 0.10) {
        zCritical = 1.645;
    }

    // Approximate p-value
    const absZ = Math.abs(zStatistic);
    let pValue;
    if (absZ > 3.5) pValue = 0.0005;
    else if (absZ > 2.8) pValue = 0.005;
    else if (absZ > 2.3) pValue = 0.02;
    else if (absZ > 1.96) pValue = 0.05;
    else if (absZ > 1.645) pValue = 0.10;
    else pValue = 0.30;

    // Determine result
    const reject = Math.abs(zStatistic) > zCritical;

    // Display results
    let resultHTML = `
        <h4>📊 Z-Test Results</h4>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; margin-top: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p><strong>Test Statistic (z):</strong> <span style="color: #6366f1; font-weight: 700; font-size: 1.1rem;">${zStatistic.toFixed(4)}</span></p>
            <p><strong>Standard Error:</strong> ${standardError.toFixed(4)}</p>
            <p><strong>Critical Value (±):</strong> ${zCritical.toFixed(4)}</p>
            <p><strong>Approximate p-value:</strong> <span style="color: ${pValue < 0.05 ? '#ef4444' : '#10b981'}; font-weight: 700;">${pValue < 0.001 ? '< 0.001' : pValue.toFixed(3)}</span></p>
            <p><strong>Sample Size:</strong> n = ${sampleSize}</p>
        </div>
        <div style="background: ${reject ? 'linear-gradient(135deg, #fee2e2, #fecaca)' : 'linear-gradient(135deg, #d1fae5, #a7f3d0)'}; padding: 1.8rem; border-radius: 12px; margin-top: 1rem; border-left: 6px solid ${reject ? '#ef4444' : '#10b981'}; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <p style="font-size: 1.2rem; font-weight: 700; color: #1e293b; margin-bottom: 0.8rem;">
                ${reject ? '🚫' : '✅'} <strong>Decision:</strong> ${reject ? 'Reject' : 'Fail to reject'} H₀
            </p>
            <p style="font-size: 0.95rem; color: #475569; line-height: 1.7;">
                <strong>Interpretation:</strong> ${reject ? 
                    `At the ${(alpha * 100)}% significance level, there is sufficient evidence to conclude that the sample mean (${sampleMean}) is significantly different from the population mean (${popMean}).` :
                    `At the ${(alpha * 100)}% significance level, there is insufficient evidence to conclude that the sample mean (${sampleMean}) is significantly different from the population mean (${popMean}).`
                }
            </p>
        </div>
    `;

    showResult('ztest-result', resultHTML);
}

// ==========================================
// Correlation Calculator
// ==========================================

function calculateCorrelation() {
    const xInput = document.getElementById('x-values').value;
    const yInput = document.getElementById('y-values').value;

    // Parse input values
    const xValues = xInput.split(',').map(val => parseFloat(val.trim())).filter(val => !isNaN(val));
    const yValues = yInput.split(',').map(val => parseFloat(val.trim())).filter(val => !isNaN(val));

    // Validation
    if (xValues.length === 0 || yValues.length === 0) {
        showResult('correlation-result', '<p style="color: #ef4444;">Please enter valid numeric values separated by commas.</p>');
        return;
    }

    if (xValues.length !== yValues.length) {
        showResult('correlation-result', '<p style="color: #ef4444;">X and Y must have the same number of values.</p>');
        return;
    }

    if (xValues.length < 2) {
        showResult('correlation-result', '<p style="color: #ef4444;">At least 2 data points are required.</p>');
        return;
    }

    // Calculate means
    const n = xValues.length;
    const xMean = xValues.reduce((sum, val) => sum + val, 0) / n;
    const yMean = yValues.reduce((sum, val) => sum + val, 0) / n;

    // Calculate correlation coefficient
    let numerator = 0;
    let xSquaredSum = 0;
    let ySquaredSum = 0;

    for (let i = 0; i < n; i++) {
        const xDiff = xValues[i] - xMean;
        const yDiff = yValues[i] - yMean;
        numerator += xDiff * yDiff;
        xSquaredSum += xDiff * xDiff;
        ySquaredSum += yDiff * yDiff;
    }

    const denominator = Math.sqrt(xSquaredSum * ySquaredSum);
    
    if (denominator === 0) {
        showResult('correlation-result', '<p style="color: #ef4444;">Cannot calculate correlation: no variation in data.</p>');
        return;
    }

    const correlationCoefficient = numerator / denominator;
    const rSquared = correlationCoefficient * correlationCoefficient;

    // Determine strength and direction
    const absR = Math.abs(correlationCoefficient);
    let strength;
    if (absR >= 0.9) strength = 'Very Strong';
    else if (absR >= 0.7) strength = 'Strong';
    else if (absR >= 0.5) strength = 'Moderate';
    else if (absR >= 0.3) strength = 'Weak';
    else strength = 'Very Weak';

    const direction = correlationCoefficient >= 0 ? 'Positive' : 'Negative';

    // Display results
    let resultHTML = `
        <h4>📊 Correlation Analysis Results</h4>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; margin-top: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p><strong>Number of Data Points:</strong> n = ${n}</p>
            <p><strong>Mean of X:</strong> ${xMean.toFixed(4)}</p>
            <p><strong>Mean of Y:</strong> ${yMean.toFixed(4)}</p>
            <p><strong>X Values:</strong> [${xValues.map(v => v.toFixed(2)).join(', ')}]</p>
            <p><strong>Y Values:</strong> [${yValues.map(v => v.toFixed(2)).join(', ')}]</p>
        </div>
        <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 2rem; border-radius: 12px; margin-top: 1rem; border-left: 6px solid #3b82f6; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
            <p style="font-size: 1.4rem; font-weight: 700; color: #1e293b; text-align: center;">
                📈 Correlation Coefficient (r)
            </p>
            <p style="font-size: 2.5rem; font-weight: 700; color: #1e40af; text-align: center; margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.6); border-radius: 8px;">
                ${correlationCoefficient.toFixed(4)}
            </p>
            <p style="color: #475569; text-align: center; font-size: 1.05rem;">
                <strong>R² (Coefficient of Determination):</strong> <span style="color: #1e40af; font-weight: 700;">${rSquared.toFixed(4)}</span> (${(rSquared * 100).toFixed(2)}% of variance explained)
            </p>
        </div>
        <div style="background: linear-gradient(135deg, #f0fdfa, #ccfbf1); padding: 1.8rem; border-radius: 12px; margin-top: 1rem; border-left: 6px solid #14b8a6; box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);">
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>Strength:</strong> <span style="color: #0f766e; font-weight: 700;">${strength}</span></p>
            <p style="font-size: 1.1rem; margin-bottom: 1rem;"><strong>Direction:</strong> <span style="color: #0f766e; font-weight: 700;">${direction}</span></p>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.7;">
                <strong>Interpretation:</strong> ${strength === 'Very Weak' || strength === 'Weak' ?
                    'This indicates little to no linear relationship between the variables. Other types of relationships (non-linear) might exist.' :
                    `This indicates a ${strength.toLowerCase()} ${direction.toLowerCase()} linear relationship between X and Y. Approximately ${(rSquared * 100).toFixed(1)}% of the variance in Y can be explained by X through a linear model.`
                }
            </p>
        </div>
    `;

    showResult('correlation-result', resultHTML);
}

// ==========================================
// Helper Function to Show Results
// ==========================================

function showResult(elementId, htmlContent) {
    const resultBox = document.getElementById(elementId);
    resultBox.innerHTML = htmlContent;
    resultBox.classList.add('show');
    resultBox.style.display = 'block';

    // Scroll to result
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// Intersection Observer for Animations
// ==========================================

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and boxes
    const animatedElements = document.querySelectorAll(
        '.content-card, .step-card, .test-card, .theory-box, .formula-box, .level-card, .metric-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ==========================================
// Interactive P-Value Markers
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const pValueMarkers = document.querySelectorAll('.p-value-marker');
    
    pValueMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const message = `P-value interpretation: ${this.textContent.split('\n')[0]}`;
            
            // Create temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = message;
            tooltip.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => tooltip.remove(), 300);
            }, 2000);
        });
    });
});

// ==========================================
// Keyboard Navigation Support
// ==========================================

document.addEventListener('keydown', function(e) {
    // Press Escape to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }

    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            scrollToTop();
        }
    }
});

// ==========================================
// Form Input Enhancement
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Add enter key support for calculators
    const calculatorInputs = document.querySelectorAll('.calculator-form input');
    
    calculatorInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const form = this.closest('.calculator-form');
                const calculateBtn = form.querySelector('.calculate-btn');
                if (calculateBtn) {
                    calculateBtn.click();
                }
            }
        });
    });

    // Auto-format number inputs
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !isNaN(this.value)) {
                // Optional: format the number
                const value = parseFloat(this.value);
                if (this.step && this.step !== 'any') {
                    const decimals = this.step.split('.')[1]?.length || 0;
                    this.value = value.toFixed(Math.min(decimals, 2));
                }
            }
        });
    });
});

// ==========================================
// Export/Print Functions (Optional Enhancement)
// ==========================================

function printResults(resultId) {
    const resultBox = document.getElementById(resultId);
    if (resultBox && resultBox.classList.contains('show')) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Statistical Analysis Results</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 2rem; }
                    h4 { color: #6366f1; }
                    p { line-height: 1.6; }
                </style>
            </head>
            <body>
                ${resultBox.innerHTML}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// ==========================================
// Performance Optimization
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// Dark Mode Toggle (Bonus Feature)
// ==========================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// ==========================================
// Clear Form Functions
// ==========================================

function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (input.type === 'text' || input.type === 'number') {
                input.value = '';
            } else if (input.tagName === 'SELECT') {
                input.selectedIndex = 0;
            }
        });
        
        // Hide result boxes
        const resultBoxes = ['ttest-result', 'ci-result', 'ztest-result', 'correlation-result'];
        resultBoxes.forEach(id => {
            const box = document.getElementById(id);
            if (box) {
                box.style.display = 'none';
                box.classList.remove('show');
            }
        });
    }
}

// Add clear buttons to all calculators
document.addEventListener('DOMContentLoaded', function() {
    const calculatorForms = document.querySelectorAll('.calculator-form');
    
    calculatorForms.forEach(form => {
        // Check if clear button already exists
        if (!form.querySelector('.clear-btn')) {
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.className = 'clear-btn';
            clearBtn.textContent = 'Clear';
            clearBtn.style.cssText = `
                grid-column: 1 / -1;
                padding: 0.8rem 2rem;
                background: white;
                color: var(--text-color);
                border: 2px solid var(--border-color);
                border-radius: 12px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-top: 0.5rem;
            `;
            
            clearBtn.addEventListener('click', function() {
                const inputs = form.querySelectorAll('input, select');
                inputs.forEach(input => {
                    if (input.type === 'text' || input.type === 'number') {
                        input.value = '';
                    }
                });
                
                // Hide result box
                const resultBox = form.parentElement.querySelector('.result-box');
                if (resultBox) {
                    resultBox.style.display = 'none';
                    resultBox.classList.remove('show');
                }
            });
            
            clearBtn.addEventListener('mouseenter', function() {
                this.style.borderColor = '#ef4444';
                this.style.color = '#ef4444';
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.2)';
            });
            
            clearBtn.addEventListener('mouseleave', function() {
                this.style.borderColor = '#e2e8f0';
                this.style.color = '#1e293b';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
            
            form.appendChild(clearBtn);
        }
    });
});

// ==========================================
// Input Validation Helper
// ==========================================

function validateNumericInput(value, fieldName, options = {}) {
    const { min, max, allowZero = true, allowNegative = true } = options;
    
    if (isNaN(value) || value === null || value === '') {
        return { valid: false, message: `${fieldName} must be a valid number.` };
    }
    
    if (!allowNegative && value < 0) {
        return { valid: false, message: `${fieldName} must be non-negative.` };
    }
    
    if (!allowZero && value === 0) {
        return { valid: false, message: `${fieldName} cannot be zero.` };
    }
    
    if (min !== undefined && value < min) {
        return { valid: false, message: `${fieldName} must be at least ${min}.` };
    }
    
    if (max !== undefined && value > max) {
        return { valid: false, message: `${fieldName} must be at most ${max}.` };
    }
    
    return { valid: true };
}

// ==========================================
// Loading State Management
// ==========================================

function showLoading(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.textContent = 'Calculating...';
    buttonElement.style.opacity = '0.7';
}

function hideLoading(buttonElement, originalText = 'Calculate') {
    buttonElement.disabled = false;
    buttonElement.textContent = originalText;
    buttonElement.style.opacity = '1';
}

console.log('📊 Inferential Statistics Tutorial - Interactive features loaded successfully!');

