var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var maxBotId = Math.max(...input.match(/bot \d+/g)
    .map(bot => parseInt(bot.substring('bot '.length))));
  var maxOutputId = Math.max(...input.match(/output \d+/g)
    .map(bot => parseInt(bot.substring('output '.length))));
  var instructions = input.split('\n');
  var bots = new Array(maxBotId + 1);
  var outputs = new Array(maxOutputId + 1).fill(null).map((_, id) => { return { id: id, chips: [] }; });

  instructions.forEach(inst => {
    if (inst.startsWith('value')) {
      var rule = inst.match(/value (\d+) goes to bot (\d+)/);
      var botId = parseInt(rule[2]);
      var bot = bots[botId] = bots[botId] || { id: botId };
      bot.chips = bot.chips || [];
      bot.chips.push(parseInt(rule[1]));
    } else {
      var rule = inst.match(/bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)/);
      var botId = parseInt(rule[1]);
      var bot = bots[botId] = bots[botId] || { id: botId };
      bot.lowType = rule[2];
      bot.lowId = parseInt(rule[3]);
      bot.highType = rule[4];
      bot.highId = parseInt(rule[5]);
      bot.chips = bot.chips || [];
    }
  });

  var bot = bots.find(bot => bot.chips.length === 2);
  while (bot) {
    var low = Math.min(...bot.chips);
    var high = Math.max(...bot.chips);
    if (bot.lowType === 'bot') {
      var lowBot = bots[bot.lowId];
      if (lowBot.chips.indexOf(low) === -1) {
        lowBot.chips.push(low);
      }
    } else if (bot.lowType === 'output') {
      var lowOutput = outputs[bot.lowId];
      if (lowOutput.chips.indexOf(low) === -1) {
        lowOutput.chips.push(low);
      }
    }
    if (bot.highType === 'bot') {
      var highBot = bots[bot.highId];
      if (highBot.chips.indexOf(high) === -1) {
        highBot.chips.push(high);
      }
    } else if (bot.highType === 'output') {
      var highOutput = outputs[bot.highId];
      if (highOutput.chips.indexOf(high) === -1) {
        highOutput.chips.push(high);
      }
    }
    bot.done = true;
    bot = bots.find(bot => (bot.chips.length === 2) && !bot.done);
  }

  return outputs[0].chips[0] * outputs[1].chips[0] * outputs[2].chips[0];
}
