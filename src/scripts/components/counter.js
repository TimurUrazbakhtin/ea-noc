const ease = {
    linear: (t) => t,
    inOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    // Find out more at: https://gist.github.com/gre/1650294
};

const counter = (EL) => {
    const duration = 4000; // Animate all counters equally for a better UX

    const start = parseInt(EL.textContent, 10); // Get start and end values
    const end = parseInt(EL.dataset.counter, 10); // PS: Use always the radix 10!

    if (start === end) return; // If equal values, stop here.

    const range = end - start; // Get the range
    let curr = start; // Set current at start position

    const timeStart = Date.now();

    const loop = () => {
        let elaps = Date.now() - timeStart;
        if (elaps > duration) elaps = duration; // Stop the loop
        const norm = ease.inOutQuad(elaps / duration); // normalised value + easing
        const step = norm * range; // Calculate the value step
        curr = start + step; // Increment or Decrement current value
        EL.textContent = Math.trunc(curr); // Apply to UI as integer
        if (elaps < duration) requestAnimationFrame(loop); // Loop
    };

    requestAnimationFrame(loop); // Start the loop!
};

// Функция обратного вызова для обработки изменений пересечения
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-counter]").forEach(counter);
        }
    });
};

// Опции для наблюдателя
const options = {
    root: null, // В качестве корня используется viewport
    rootMargin: "0px",
    threshold: 0.1, // Процент видимости элемента (0.1 = 10%)
};

// Создание наблюдателя с использованием callback и options
const observer = new IntersectionObserver(callback, options);

// Целевой элемент, за которым нужно наблюдать
const targetElement = document.querySelector(".counter");

// Начало наблюдения за целевым элементом
if(document.querySelector(".counter")) observer.observe(targetElement);