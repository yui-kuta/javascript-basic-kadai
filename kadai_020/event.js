// btnというidを持つHTML要素を取得し、定数に代入する
const outputBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
outputBtn.addEventListener('click', () => {
  setTimeout(() =>
   {text.textContent = 'ボタンをクリックしました';
  }, 2000);});