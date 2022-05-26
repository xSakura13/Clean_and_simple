document.getElementById('navbar-toggler').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('navbarNavAltMarkup1').classList.toggle('show');
});
function outNum(num, elem, t, step = 1){
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
const element = document.querySelector('.analytics')
function Visible(target) {
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        outNum(89, 'productivity-amount', 2000);
        outNum(3120, 'users-amount', 1000, 10);
    }
}
window.addEventListener('scroll', function() {
    Visible (element);
}, {once: true});