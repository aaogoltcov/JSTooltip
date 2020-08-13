'use strict';

const toolTipList = Array.from(document.querySelectorAll('a.has-tooltip'));

toolTipList.forEach(function (tip) {
    tip.onclick = function () {
        let topCoordinate = tip.getBoundingClientRect().top < window.innerHeight / 2 ?  tip.getBoundingClientRect().bottom + 10 : tip.getBoundingClientRect().top - 30;
        let leftCoordinate = tip.getBoundingClientRect().left < window.innerWidth / 2 ? tip.getBoundingClientRect().left + 10 : tip.getBoundingClientRect().left - 10;
        let html = `<div class="tooltip tooltip_active" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">${tip.title}</div>`;
        let activeTooltip = document.querySelector('div.tooltip_active');
        if (activeTooltip) {
            activeTooltip.style.left = `${leftCoordinate}px`;
            activeTooltip.style.top = `${topCoordinate}px`;
            activeTooltip.textContent = `${tip.title}`;
        } else {
            tip.insertAdjacentHTML('afterend', html);
        };
        return false;
    };
});