fetch('./data.json').then(item => item.json()).then(
    data => {
        for (let i = 0; i < data.length; i++) {
            document.getElementsByClassName(`${data[i].day}`)[0].style.height = `${data[i].amount * 3}px`;
            document.getElementsByClassName(`${data[i].day}`)[0].onmouseover = function() {
                document.getElementsByClassName('overlay')[i].innerHTML = "$" + data[i].amount;
            }

            document.getElementsByClassName(`${data[i].day}`)[0].onmouseout = function() {
                document.getElementsByClassName('overlay')[i].innerHTML = '';
            }

        }
    }
);



