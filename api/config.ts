import { z } from "zod";
import {Bot} from "grammy";

export const env = z.object({
    BOT_TOKEN: z.string(),
    CHANNEL_ID: z.string(),
    WEBHOOK_URL: z.string(),
}).parse(process.env)


export const bot = new Bot(env.BOT_TOKEN)