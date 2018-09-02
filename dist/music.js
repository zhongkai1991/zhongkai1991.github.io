const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Going Home",
        artist: 'Kenny G',
        url: 'http://www.xiami.com/widget/35815309_3492372/singlePlayer.swf',
        cover: 'http://perryponders.com/wp-content/uploads/2015/09/kennyg.jpg',
      },
      {
        name: '�����֪��',
        artist: '����ܿ',
        url: 'http://www.xiami.com/widget/35815309_383367/singlePlayer.swf',
        cover: 'https://i.ytimg.com/vi/FRbaawcE3MI/hqdefault.jpg',
      },
      {
        name: '������',
        artist: '������',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});