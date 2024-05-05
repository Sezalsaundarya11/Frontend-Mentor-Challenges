displayWorkHour = document.querySelectorAll('.display-work-hr');
previousWork = document .querySelectorAll('.previous-work');
dailySwitch = document.querySelector('#daily-section');
weeklySwitch = document.querySelector('#weekly-section');
monthlySwitch = document.querySelector('#monthly-section');

apiData = fetch('data.json').then((response)=>{
    return response.json();
})
const updateValues = (timeframes)=>{
    apiData.then((data)=>{
        data.forEach((element,index) => {
            const categoryIndex = ['Work','Play','Study','Exercise','Social','Self Care'].indexOf(element.title)
            displayWorkHour[categoryIndex].innerText = element.timeframes[timeframes].current;
            previousWork[categoryIndex].innerText = element.timeframes[timeframes].previous;
        });
        
    })
}

apiData.then((data)=>{
        updateValues('daily'); // Update with daily data when API data is fetched   
});

dailySwitch.addEventListener("click",()=>{
    updateValues('daily');
})

monthlySwitch.addEventListener("click",()=>{
    updateValues('monthly');
});

weeklySwitch.addEventListener("click",()=>{
    updateValues('weekly');
})