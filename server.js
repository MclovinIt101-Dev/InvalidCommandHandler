AddEventHandler("chatMessage", (source, name, message) => {
  try {
    let args = message.split(" ");
    CancelEvent();
    if (args[0].startsWith("/")) {
      const [command, ...restArgs] = args;
    } else {
      TriggerClientEvent("chatMessage", -1, name, [255, 255, 255], message);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

/**
 * Splits the input string into an array using the specified separator.
 * @param {string} inputstr - The input string to be split.
 * @param {string} [sep="%s"] - The separator used to split the input string. Defaults to "%s".
 * @returns {string[]} - An array of substrings.
 */
const stringsplit = (inputstr, sep = "%s") => {
  try {
    return inputstr.split(sep);
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
};
