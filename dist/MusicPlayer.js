const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: true,
    autoplay: false,
    audio: [
      {
        name: "東京",
        artist: '山崎あおい',
        url: 'http://outayknla.bkt.clouddn.com/%E5%B1%B1%E5%B4%8E%E3%81%82%E3%81%8A%E3%81%84%20-%20%E6%9D%B1%E4%BA%AC.mp3',
        cover: 'http://outayknla.bkt.clouddn.com/webwxgetmsgimg.jpg',
      },
      {
        name: '서쪽 하늘',
        artist: '李承哲',
        url: 'http://outayknla.bkt.clouddn.com/Lee_Seung_Chul_The_Western_Sky.mp3',
        cover: 'http://outayknla.bkt.clouddn.com/%E8%A5%BF%E8%BE%B9%E5%A4%A9%E7%A9%BA.jpg',
      }
    ]
});
