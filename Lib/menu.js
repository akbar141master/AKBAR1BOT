exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Here are some of the features of this bot!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
=> * 1. STICKER MAKER *
_ $ {BotName} will send your sticker with the caption #sticker! _
Command: #sticker
Example: send an image with the caption #sticker

=> * 2. AUTO NUMBER *
_ $ {BotName} will send the text in the book as you send it! _
Command: #write [word]
Example: # writing a handsome star

=> * 3.CONNECTIVE FEATURES *
_ $ {BotName} will send a random rhyme! _
Command: #pantun
Example: #pantun

=> * 4. YOUTUBE DOWNLOADER *
_ $ {BotName} will send a video downloader from yt as per your command! _
Command: #yt [link]
Example: #yt https://youtu.be/blablabla

=> * 5. QUOTES FEATURES *
_ $ {BotName} will send a random word of wisdom! _
Command: #quotes
Example: #quotes

=> * 6.STEGAR TIMELINE *
_ $ {BotName} will send the cogan / cecan image as you send it! _
Command: #ptl [girl / boy]
Example: #ptl girl

=> * 7. ANIME FEATURES *
_ $ {BotName} will send you anime pictures randomly! _
Command: #randomanime
Example: #randomanime

=> * 8. GOOGLE VOICE CHANGER *
_ $ {BotName} will send the vn voice from google according to the command you sent! _
Command: #ttsid [word]
Example: #ttsid handsome star

=> * 9.QURAN FEATURES *
_ $ {BotName} will send random Quran verses! _
Command: #quran
Example: #quran

=> * 10. BOT INFORMATION *
_ $ {BotName} will send information about the bot! _
Command: #info
Example: #info

=> * 11. SAY FEATURES *
_ $ {BotName} will send the words as you send! _
Command: #say [word]
Example: #say hello handsome star

=> * 12.YOUTUBE MP3 DOWNLOADER *
_ $ {BotName} will send the song according to the command you sent! _
Command: # ytmp3 [link]
Example: # ytmp3 https://youtu.be/xxxx

=> * 13.INSTAGRAM VIDEO / PHOTO DOWNLOADER *
_ $ {BotName} will send the ig video / photo according to the order you sent! _
Command: #ig [link]
Example: #ig https://instagram.com/xxxx

=> * 14.FACEBOOK VIDEO / PHOTO DOWNLOADER *
_ $ {BotName} will send you the fb video / photo according to the order you sent! _
Command: #fb [link]
Example: #fb https://facebook.com/xxxx

=> * 15.TWITTER VIDEO / PHOTO DOWNLOADER *
_ $ {BotName} will send a Twitter video / photo according to the command you sent! _
Command: #twt [link]
Example: #twt https://twitter.com/xxxx

=> * 16.WIKIPEDIA *
_ $ {BotName} will send the result from wikipedia according to the command you sent! _
Command: #wiki [query]
Example: #wiki dog

♻️ DON'T FORGET TO DONATE TO CONTINUE ACTIVE BOT!
♻️ WANT TO DONATE? PLEASE TYPE # donate

📺 * Advertising *:

✅ Follow the admin $ {instagramlu} instagram account

⚠️ LATEST COVID-19 INFORMATION!

⚠️ POSITIVE: * $ {corohelp.confirmed.value} *
⚠️ HEAL: * $ {corohelp.recovered.value} *
⚠️ DIED: * $ {corohelp.deaths.value} *
⚠️ UPDATE: * $ {corohelp.lastUpdate} *

♻️ _ KEEP HEALTHY AND ALWAYS USE A MASK! _

♻️ Want to advertise on * $ {BotName}? *
☎️ WA: * $ {whatsapplu} *
  
⚠️ Use it wisely‼ ️
⚠️ This bot runs $ {when is bot active}‼ ️

✳️ Official Grub [1]: $ {grupch1}

✳️ Official Grub [2]: $ {grupch2}

  
🔰 ----- [* POWERED BY $ {BotName} *] ----- 🔰`
}