/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: back
CMD*/

var text =
  "Hello this is a demo crypto ad gateway\n\n/setup - setup your key\n/get - get a demo bot\n\n[-GitHub Lib](https://github.com/DevBikini/CryptoAdGateWayBot)\n[-CryptoAdGateWayBot](https://t.me/CryptoAdGateWayBot)"
var keyboard =
  "💰 Balance \n➖ Withdraw,➕ Deposit\n📋 History, Generate/Reset\n💸 Transfer"
Bot.sendKeyboard(keyboard, text, { disable_web_page_preview: true })
