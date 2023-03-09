/*CMD
  command: 💸 Transfer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var api_key = "YOUR API KEY HERE"
var secret_key = "SECRET KEY HERE"
Libs.CryptoAdGateWayBot.Transfer({
  api_key: api_key,
  secret_key: secret_key,
  amount: 1,
  currency: "DGB",
  address: "telegramid",
  user: user.id,
  success: "/onTransfer"
})
