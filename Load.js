const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Maru Checker`,
      "description": `Info`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `UserName`,
          "value": `Nino`,
          "inline": true
        },
        {
          "name": `Keys Owner`,
          "value": `MARU-YAY`,
          "inline": true
        },
        {
          "name": `Hardware Ids`,
          "value": `Unkniwn`,
          "inline": true
        },
        {
          "name": `Blacklist`,
          "value": `True, Reason: Handsome`,
          "inline": true
        },
        {
          "name": `Roles`,
          "value": `True`,
          "inline": true
        },
        {
          "name": `DIscord Id`,
          "value": `6565656656`,
          "inline": true
        }
      ],
      "timestamp": `2001-01-31T17:00:00.000Z`,
      "image": {
        "url": `อิโมจิถูก`,
        "height": 0,
        "width": 0
      },
      "thumbnail": {
        "url": `รูป maru`,
        "height": 0,
        "width": 0
      }
    }
  ]
});
