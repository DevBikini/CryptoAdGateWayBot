/*CMD
  command: 📋 History
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
Libs.CryptoAdGateWayBot.History({
  api_key: api_key,
  secret_key: secret_key,
  user: user.id,
  success: "/onHistory"
})

