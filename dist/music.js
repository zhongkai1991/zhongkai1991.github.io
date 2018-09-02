const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Going Home",
        artist: 'Kenny G',
        url: 'http://fs.open.kugou.com/1d52ec9d21bf0d43b8bebee3e44cd4dd/5b8b5b2e/G007/M01/0F/0D/Rw0DAFS1hnaAPpe5AJFi9SWZmjQ224.mp3',
        cover: 'http://perryponders.com/wp-content/uploads/2015/09/kennyg.jpg',
      },
      {
        name: 'Ce Train Qui S'en Va',
        artist: 'H��l��ne Roll��s',
        url: 'http://fs.open.kugou.com/40866cd9832397a8d74303f1bbae9f63/5b8b5cad/G001/M08/15/15/QQ0DAFS3ow-ANBTMADjWAL-csZw098.mp3',
        cover: 'https://img.discogs.com/9eEuM1EeroeLks4P9tVIX1JUTp4=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2813263-1488036478-4219.jpeg.jpg',
      },
      {
        name: 'If Cloud Knows',
        artist: 'Valen Hsu',
        url: '//m128.xiami.net/330/2330/12587/383367_1512721472890.mp3?auth_key=1536462000-0-0-78d3563923b340e452209e42193f7b69',
        cover: 'https://i.ytimg.com/vi/FRbaawcE3MI/hqdefault.jpg',
      }
    ]
});