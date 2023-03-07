/*CMD
  command: /onDeposit
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

var error = options.result.error
if (error) {
  return Bot.sendMessage(options.result.error.message)
}
Bot.inspect(options)

