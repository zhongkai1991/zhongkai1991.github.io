const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.45,
    mutex: true,
    listFolded: false,
    listMaxHeight: 200,
    autoplay: true,
    audio: [
      {
        name: "Going Home",
        artist: 'Kenny G',
        url: 'http://other.web.rb01.sycdn.kuwo.cn/resource/n1/41/81/910696535.mp3',
        cover: 'http://perryponders.com/wp-content/uploads/2015/09/kennyg.jpg',
      },
      {
        name: 'If Cloud Knows',
        artist: 'Valen Hsu',
        url: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n1/23/49/1483767899.mp3',
        cover: 'https://i.ytimg.com/vi/FRbaawcE3MI/hqdefault.jpg',
      },
      {
        name: "Ce Train Qui S'en Va",
        artist: 'Helene Rolles',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n2/128/85/8/1748874221.mp3',
        cover: 'http://www.mange-disque.com/disque-bg-2033-celebrite-celebrites-helene-ce-train-qui-s-en-va.jpg',
      }
    ]
});
