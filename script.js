async function searchPhone() {
const query = document.getElementById('searchInput').value;
const response = await fetch(`https://api-mobilespecs.azharimm.dev/v2/search?query=${query}`);
const data = await response.json();
if (data.data.phones.length > 0) {
const phone = data.data.phones[0];
document.getElementById('phoneInfo').innerHTML = `
<h2>${phone.phone_name}</h2>
<p>品牌: ${phone.brand}</p >
<p>发布日期: ${phone.release_date}</p >
<p>屏幕尺寸: ${phone.dimension}</p >
<p>电池容量: ${phone.battery}</p >
`;
} else {
document.getElementById('phoneInfo').innerHTML = `<p>未找到相关手机信息。</p >`;
}
}
未选择文件
