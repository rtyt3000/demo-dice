import {bot, env} from "./config";

export const sendChannelMessage = async () =>{
    const post = await bot.api.sendMessage(env.CHANNEL_ID, "Выберите с каким значением хотите получить кубик", {
        reply_markup: {
            inline_keyboard: [[{ text: "Чет", callback_data: "dice:2" }, { text: "Нечет", callback_data: "dice:1" }]]
        }

    })
    await bot.api.pinChatMessage(env.CHANNEL_ID, post.message_id)
}