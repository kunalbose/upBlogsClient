import moment from "moment/moment";

export function formatDate(date){
    return moment(date).format('h:mm A · LL');
}

export function fromNowTime(date){
    return moment(date).fromNow();
}