import {bot, env} from "./config";
import {sendChannelMessage} from "./startup";
import {webhookCallback} from "grammy";




bot.catch((err) => {
    console.error(err)
})



export default webhookCallback(bot, "https");
sendChannelMessage()
bot.api.setWebhook(env.WEBHOOK_URL)