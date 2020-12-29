from channels.generic.websocket import AsyncJsonWebsocketConsumer

class DatingConsumer(AsyncJsonWebsocketConsumer):
    groups = ['test']

    async def connect(self):
        await self.channel_layer.group_add(
            group='test',
            channel=self.channel_name
        )
        await self.connect()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            group='test',
            channel=self.channel_name
        )
        await super().disconnect(code)

    async def echo_message(self, message):
        await self.send_json({
            'type': message.get('type'),
            'data': message.get('data'),
        })

    async def receive_json(self, content, **kwargs):
        message_type = content.get('type')
        if message_type == 'echo.message':
            await self.send_json({
                'type': message_type,
                'data': content.get('data'),
            })


    