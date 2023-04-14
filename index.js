fetch("https://hypnobean.github.io/time-tracking-dashboard/data.json")
.then(results => results.json())
.then(data => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let timeFrame = document.querySelectorAll('input[type="radio"]:checked')[0].id.slice(6);

    function hours(timeFrame) {
        switch (timeFrame) {
            case 'daily':
                previousText = 'Yesterday'
                break;
            case 'weekly':
                previousText = 'Last Week'
                break;
            case 'monthly':
                previousText = 'Last Month'
                break;
            default:
                break;
        }

        for (i = 0; i < data.length; i++) {
            for (i = 0; i < document.querySelectorAll('section').length; i++) {
                showCurrentHours = data[i].timeframes[timeFrame].current
                if (showCurrentHours == 1) {
                    cHrs = 'hr'
                } else {
                    cHrs = 'hrs'
                }
                document.querySelectorAll('section')[i].children[0].children[1].children[2].innerHTML =
                showCurrentHours + cHrs
            }
            for (i = 0; i < document.querySelectorAll('section').length; i++)   {
                showPreviousHours = data[i].timeframes[timeFrame].previous
                if (showPreviousHours == 1) {
                    pHrs = 'hr'
                } else {
                    pHrs = 'hrs'
                }
                document.querySelectorAll('section')[i].children[0].children[1].children[3].innerHTML =
                previousText + ' - ' + showPreviousHours + pHrs
                }
            }    
        }

    hours(timeFrame);

    radioButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            timeFrame = btn.id.slice(6);
            hours(timeFrame);
            console.log(timeFrame)
        });
    });
});
