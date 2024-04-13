/*
Prepare a notification of the given message which will be displayed on a mobile device. The message is made of words separated by single spaces. The length of the notification is limited to K characters. If the message is too long to be displayed fully, some words from the end of the message should be cropped, keeping in mind that:
the notification should be as long as possible,
only whole words can be cropped;
if any words are cropped, the notification should end with"..."; the dots should be separated from the last word by a single space;
the notification may not exceed the K-character limit, including the dots.
If all the words need to be cropped, the notification is"..." (three dots without a space).
For example, for message="And now here is my secret" and K-15, the notification is "And now .... Note that:
the notification "And...would be incorrect, because there is a longer correct notification;
the notification "And now her..."would be incorrect, because the original message is cropped through the middle of a word;
the notification "And now... would be incorrect, because it ends with a space;
the notification "And now here..."would be incorrect, because there is no space before the three dots;
the notification "And now here..."would be incorrect, because it exceeds the 15-character limit.
Write a function:
that, given a string message and an integer K, returns the notification to display, which has no more than K characters, as described above.
Examples:
For message="And now here is my secret" and K=15, the function should return "And now...as explained above.
For message "There is an animal with four legs and K=15, the function should return "There is an ....
For message "super dog" and K=4, the function should return".....
For message="how are you" and K=20, the function should return "how are you".
Assume that:
K is an integer within the range [3..500);
the length of string message is within the range [1..500);

*/

function prepareNotification(message, k) {
  if (message.length <= k) return message;
  const words = message.split(' ');
  let notification = '';
  for (let i = 0; i < words.length; i++) {
    if (
      notification.length +
        words[i].length +
        (notification.length > 0 ? 1 : 0) >=
      k - 3
    ) {
      if (notification === '') return '...';
      return notification + ' ...';
    }
    notification += (notification.length > 0 ? ' ' : '') + words[i];
  }
  return notification;
}
console.log(prepareNotification('And now here is my secret', 15)); // "And now..."
console.log(prepareNotification('There is an animal with four legs', 15)); // "There is an..."
console.log(prepareNotification('super dog', 4)); // "..."
console.log(prepareNotification('how are you', 20)); // "how are you"
