import _ from "lodash";

const printLastMessage = (msg1, msg2) => {
 return console.log(_.last([msg1, msg2]));
};
export default printLastMessage;
