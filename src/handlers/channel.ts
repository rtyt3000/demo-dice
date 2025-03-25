import {Composer} from "grammy";
import {env} from "../config";

const channel = new Composer()

channel.callbackQuery("dice:2",async (ctx) => {
    const replyMsg = await ctx.api.sendMessage(env.CHANNEL_ID, `@${ctx.from.first_name} выбрал чет`)
    let msg = await ctx.api.sendDice(env.CHANNEL_ID, "🎲", {reply_to_message_id: replyMsg.message_id})
    while (msg.dice.value % 2 != 0) {
        await ctx.api.deleteMessage(msg.chat.id, msg.message_id, )
        msg = await ctx.api.sendDice(env.CHANNEL_ID, "🎲", {reply_to_message_id: replyMsg.message_id})
    }
})

channel.callbackQuery("dice:1",async (ctx) => {
    const replyMsg = await ctx.api.sendMessage(env.CHANNEL_ID, `@${ctx.from.first_name} выбрал нечет`)
    let msg = await ctx.api.sendDice(env.CHANNEL_ID, "🎲", {reply_to_message_id: replyMsg.message_id})
    while (msg.dice.value % 2 == 0) {
        await ctx.api.deleteMessage(msg.chat.id, msg.message_id)
        msg = await ctx.api.sendDice(env.CHANNEL_ID, "🎲", {reply_to_message_id: replyMsg.message_id})
    }
})