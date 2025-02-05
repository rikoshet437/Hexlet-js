
import _ from "lodash";
export const printLastMessage = (msg1, msg2,)  => {
    return console.log(_.last([msg1, msg2]));
};
