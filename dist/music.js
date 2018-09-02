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
        cover: 'https://cdn.imusic.am/images/album/thumb_big/9013/1304809577/cover.jpg',
      },
      {
        name: 'If Cloud Knows',
        artist: 'Valen Hsu',
        url: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n1/23/49/1483767899.mp3',
        cover: 'https://i.ytimg.com/vi/FRbaawcE3MI/hqdefault.jpg',
      }
    ]
});