import os

import discord
from dotenv import load_dotenv

load_dotenv()

def env(k):
    if os.getenv(k):
        return os.getenv(k)
    else:
        return  ""

class MemeScrapper(discord.Client):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def setup_hook(self) -> None:
        # create the background task and run it in the background
        self.bg_task = self.loop.create_task(self.my_background_task())

    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    async def my_background_task(self):
        try:
            await self.wait_until_ready()
            channel = self.get_channel(int(env("memesch")))  # channel ID goes here
            log_channel = self.get_channel(int(env("logchan")))
            while not self.is_closed():
                self.imageLinks:str = []
                async for message in channel.history(limit=200):
                    if len(message.attachments) > 0:
                        for a in message.attachments:
                            self.imageLinks.append(a.url)
                await self.close()
        except Exception:
            await log_channel.send("memes fetch failed, something went wrong")
            await self.close()



def get_memes():
    intents = discord.Intents.default()
    intents.members = True
    client = MemeScrapper(intents=intents)
    client.run(env("disbotok"))
    return client.imageLinks
