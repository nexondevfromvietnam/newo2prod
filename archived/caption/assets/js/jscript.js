function getDataFromField(){
    const caption = document.getElementById('caption').value;
    const author = document.getElementById('author').value;
    const location = document.getElementById('location').value;

    var typical_1 = `${caption}
    ------
    📸 by ${author}
    📍${location}
    ------
    📣O2 Production - 𝘾𝙝𝙪𝙮ê𝙣 𝙘𝙝ụ𝙥 ả𝙣𝙝 𝙩𝙝ể 𝙩𝙝𝙖𝙤, 𝙨ự 𝙠𝙞ệ𝙣, 𝙘𝙝â𝙣 𝙙𝙪𝙣𝙜, 𝙗𝙖𝙮 𝙛𝙡𝙮𝙘𝙖𝙢, 𝙩ư 𝙫ấ𝙣 𝙩ổ 𝙘𝙝ứ𝙘 𝙜𝙞ả𝙞 đấ𝙪,...
    🏆𝐂𝐡ú𝐧𝐠 𝐭ô𝐢 𝐜𝐚𝐦 𝐤ế𝐭: 
    📌𝐆𝐢á 𝐫ẻ, 𝐜ạ𝐧𝐡 𝐭𝐫𝐚𝐧𝐡 𝐧𝐡ấ𝐭 𝐭𝐡ị 𝐭𝐫ườ𝐧𝐠
    📌𝐓𝐡𝐢ế𝐭 𝐛ị 𝐱ị𝐧, đả𝐦 𝐛ả𝐨 𝐭𝐫𝐨𝐧𝐠 𝐪𝐮á 𝐭𝐫ì𝐧𝐡 𝐭á𝐜 𝐧𝐠𝐡𝐢ệ𝐩
    📌𝐂𝐡ấ𝐭 𝐥ượ𝐧𝐠 𝐡ì𝐧𝐡 ả𝐧𝐡 ở 𝐦ứ𝐜 𝐤𝐡á 𝐭𝐫ở 𝐥ê𝐧
    📌𝐂𝐡ỉ𝐧𝐡 ả𝐧𝐡, 𝐠𝐡é𝐩 𝐥𝐨𝐠𝐨 𝐤𝐡ô𝐧𝐠 𝐥ấ𝐲 𝐭𝐡ê𝐦 𝐩𝐡í
    ------
    ☎️TEL: 0975660601 (Zalo - Minh)
    📩Mail: contact@o2production.ndqm.site
    ✨Book lịch chụp inbox vào O2 Production hoặc qua SDT
    📷Website: https://o2production.ndqm.site/
    ------
    #o2production #no1sportphotography #giarecanhtranhnhatthitruong`

    document.getElementById('result').value = typical_1;
    alert('done! copied to clipboard')

   // Copy the text inside the text field
    navigator.clipboard.writeText(typical_1);
}