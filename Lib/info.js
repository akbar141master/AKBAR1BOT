exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ * GITHUB *: https://github.com/Bintang73/botst4rz
⚜ * AUTHOR *: AKBAR
⚜ * DESIGNER *: AKBAR
⚜ * YOUTUBE *: https://www.youtube.com/channel/UC55ezJ-mYFw0x_XQ5nFq0Ag
⚜ * SCRIPT ORIGINAL BY *: ABDUL MUTTAQIN / AKBAR

♻ OTHER INFO! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE BINTANG NUR PRADANA

♻️ DO NOT FORGET TO DONATE TO CONTINUE ACTIVE BOT!
♻️ WANT TO DONATE? PLEASE TYPE # donate

📺 *Advertisement* :

✅ Follow the admin instagram account ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIVE: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ DIED: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _KEEP YOUR HEALTH AND ALWAYS USE A MASK!_

♻️ Want to place an ad di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use it wisely ‼️
⚠️ This bot is running ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
