'use strict';

const toolTipList = Array.from(document.querySelectorAll('a.has-tooltip'));

toolTipList.forEach(function (tip) {
    tip.onclick = function () {
        try {
            document.querySelector('div.tooltip_active').remove();
        } catch (e) {
        };
        let topCoordinate = tip.getBoundingClientRect().top < window.innerHeight / 2 ?  tip.getBoundingClientRect().bottom + 10 : tip.getBoundingClientRect().top - 30;
        let leftCoordinate = tip.getBoundingClientRect().left < window.innerWidth / 2 ? tip.getBoundingClientRect().left + 10 : tip.getBoundingClientRect().left - 10;
        tip.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">${tip.title}</div>`);
        return false;
    };
});