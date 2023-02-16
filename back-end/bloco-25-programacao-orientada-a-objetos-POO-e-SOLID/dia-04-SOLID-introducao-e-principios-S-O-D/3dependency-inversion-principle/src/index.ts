import ConsoleNotification from "./ConsoleNotification";
import ReadingTracker from "./ReadingTracker";

const test = new ReadingTracker(12, new ConsoleNotification('Bob'));
test.trackReadings(11);
console.log(test);
test.trackReadings(1);
console.log(test);
