async function getInput(text) {
  if (!text) {
    let pipedData = "";
    process.stdin.setEncoding("utf8");

    for await (const chunk of process.stdin) {
      pipedData += chunk;
    }

    return pipedData.trim();
  } else {
    return text;
  }
}

module.exports = getInput;
