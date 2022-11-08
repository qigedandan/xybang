class Time {
    // 格式化时间
    formatTime(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        return year + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0")
            + " " + hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0");
    }
}

const time = new Time();
export default time;