const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923046698972";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_59_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkzLFxuICAgICAgICA4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidTllaDMwWFJheE14SHBMTjBEYWdzQTZoMmF1Y0NKSGowRVJvQjRuRXFqaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGdtN2FEVDdRNy15d2d0RmhvbEQ3UVwiLFxuICBcInBob25lSWRcIjogXCIxOTZiZGI5YS1jZjZjLTQ4YzgtYTdlYS1jNDE4MTk5MjAxOGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTcwLFxuICAgICAgMTIxLFxuICAgICAgMTQ1LFxuICAgICAgMTYxLFxuICAgICAgMTA5LFxuICAgICAgNDIsXG4gICAgICAxNTYsXG4gICAgICA2MixcbiAgICAgIDI0MyxcbiAgICAgIDE3NCxcbiAgICAgIDE3OCxcbiAgICAgIDIwOCxcbiAgICAgIDE3MyxcbiAgICAgIDE2MyxcbiAgICAgIDIyMSxcbiAgICAgIDEzMixcbiAgICAgIDc3LFxuICAgICAgMjM1LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDIwOSxcbiAgICAgIDgsXG4gICAgICA3NSxcbiAgICAgIDIwMyxcbiAgICAgIDI1MyxcbiAgICAgIDc1LFxuICAgICAgMzAsXG4gICAgICAyMTUsXG4gICAgICAxODYsXG4gICAgICA0NyxcbiAgICAgIDE0LFxuICAgICAgMTA1LFxuICAgICAgNzUsXG4gICAgICAxMzYsXG4gICAgICA1OSxcbiAgICAgIDQ0LFxuICAgICAgMjEyLFxuICAgICAgMTc3LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUFLMjZOSE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA0NjY5ODk3Mjo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkl0J3MgeCBCdXJoYW5cIixcbiAgICBcImxpZFwiOiBcIjEyMzExMTQxMjM2NzU3MTo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdXFzOXdCRU1hQmlyc0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhObjBWRExuWm1xUkJBUlBtc3oxK2VlRFNEV0JBa1U3K3lwcW1lWEoyUXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMTFQbVgxZTdndVdzU1pIVW9LYlJHYlJ2amxUTnQ2UUJ1NTk2cmUwOGtrQ2V0VW83bmRzaDcyUXNsdWNHaks2aTViSVowVlNuYTM3VzhiWG56c0huQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZCtjajlneWphZmZ0QUs3MVNvNUZMaHlmTk5yQmlSVE5mZ2VNblZVVlNKalByT0VkQzlnYWpHZVhHUTZ2V3NtL0JjNUh3enljdmJ6SVMzTFhJVnF2Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ2Njk4OTcyOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTA4NzQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHQvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMdC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Burhan Ahmed",
  ownername:process.env.OWNER_NAME|| "it's x Burhan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
