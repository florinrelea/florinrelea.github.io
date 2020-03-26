let date = new Date();
let crt_day = date.getDay();
let crt_hour = date.getHours();
let week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day_holder = document.getElementById("day-holder");
let current_time = document.getElementById("current-time");
let hour_holder = document.getElementById("hour-holder");
let anim_holder = document.getElementById("anim-holder");
//hours from 7:00 to 14:00
let schedule = {
    1: { 8: 'M3', 9: 'M5', 10: 'History', 11: 'Francais', 12: 'English', 13: 'Phisics' },
    2: { 8: 'Romanian Lang', 9: 'Francais', 10: 'Math', 11: 'Chemistry', 12: 'M3', 13: 'M5' },
    3: { 7: 'English', 8: 'M4', 9: 'Romanian Lang', 10: 'Math', 11: 'Geography', 12: 'Phisics' },
    4: { 7: 'M4', 8: 'M4', 9: 'TIC', 10: 'Economy', 11: 'Romanian Lang', 12: 'Math', 13: 'POP' },
    5: { 8: 'Phisics', 9: 'Sport', 10: 'M3', 11: 'M5', 12: 'Religion', 13: 'POP' }
};
let gif_list = {
    'M3': 'M3.jpg', 'Romanian Lang': 'Romanian.jpg', 'Chemistry': 'Chemistry.jpeg', 'English': 'English.jpg',
    'Francais': 'Francais.jpg', 'History': 'history.jpg', 'Phisics': 'Phisics.jpg', 'POP': 'POP.jpg',
    'Religion': 'Religion.png', 'Sport': 'Sport.jpg', 'Weekend': 'Weekend.gif', 'Math': 'Math.jpg',
    'Economy': 'Economy.jpg',
};
day_holder.textContent = week_days[crt_day];
current_time.textContent = crt_hour + " o'clock";
if ((crt_day > 0) && (crt_day < 6)) {
    let day_schedule = document.getElementById("text-container");
    let hours_array = Object.keys(schedule[crt_day]);
    hour_holder.textContent = null;
    if (crt_hour < Number(hours_array[0])) {
        day_schedule.innerHTML = '<p class="font-black bold">Today</p>';
        Object.keys(schedule[crt_day]).forEach(hour => {
            hour_holder.innerHTML += schedule[crt_day][hour] + "<br>";
        });
    } else if (crt_hour > Number(hours_array[hours_array.length - 1])) {
        day_schedule.innerHTML = '<p class="font-black bold">Tomorrow</p>';
        Object.keys(schedule[crt_day + 1]).forEach(hour => {
            hour_holder.innerHTML += schedule[crt_day + 1][hour] + "<br>";
        });
    } else {
        hour_holder.textContent = schedule[crt_day][crt_hour];
        let gif_finder = hour_holder.textContent;
        if ((gif_finder == 'M3') || (gif_finder == 'M5') || gif_finder == 'M4') {
            anim_holder.src = "resources/" + gif_list.M3;
        } else {
            anim_holder.src = "resources/" + gif_list[gif_finder];
        }
    }
} else {
    hour_holder.textContent = "Weekend";
    anim_holder.src = "resources/" + gif_list['Weekend'];
}