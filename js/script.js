document.getElementById('navbar-toggler').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('navbarNavAltMarkup1').classList.toggle('show');
});
const element = document.querySelector('.analytics');
function counter(num, elem, t, step = 1){
    let element = document.querySelector('#' + elem);
    let number = 0;
    let timeInInterval = Math.round(t/ (num / step));
    let interval = setInterval(() => {
            number = number + step;
            if (num === number){
                clearInterval(interval);
            }
            element.innerHTML = number;
        },
        timeInInterval);
}
const obsOptions = {
    root: null,
    threshold: 1,
};
const obsCallback = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    counter(89, 'productivity-amount', 2000);
    counter(3120, 'users-amount', 1000, 10);
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(element);