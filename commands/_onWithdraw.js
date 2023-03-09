/*CMD
  command: /onWithdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var error = options.result.error
if (error) {
  return Bot.sendMessage(options.result.error.message)
}
Bot.inspect(options)
