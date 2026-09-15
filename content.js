/*
 * PAGE:ON editable content
 * ------------------------
 * 이 파일만 수정해도 주요 작품 / 작가 이미지와 문구를 바꿀 수 있습니다.
 *
 * 작가 사진은 assets/writers/writer-01.jpg ~ writer-14.jpg 로 넣으면 됩니다.
 * 이미지가 없거나 경로가 잘못되면 사이트가 자동으로 자리표시자를 보여줍니다.
 *
 * 작품 썸네일은 로컬 fallback을 즉시 배경에 보여준 뒤, YouTube 원본 썸네일이 로드되면 위에 표시합니다.
 * 실제 썸네일을 완전히 고정하려면 thumb에 로컬 파일 경로를 넣어 주세요.
 */
window.PAGEON_CONTENT = {
  works: [
    {
      title: '〈밥묵자〉 시리즈',
      channel: '꼰대희',
      role: 'PAGE:ON · 기획',
      url: 'https://www.youtube.com/watch?v=HXhWODlAxRw',
      thumb: '',
      remoteThumbs: ['https://i.ytimg.com/vi/HXhWODlAxRw/maxresdefault.jpg','https://i.ytimg.com/vi/HXhWODlAxRw/hqdefault.jpg'],
      fallbackImage: 'assets/works/work-01-fallback.png'
    },
    {
      title: '〈ENGLISH ESCAPE〉',
      channel: '얼간김준호',
      role: 'PAGE:ON · 기획 ~ 편집',
      url: 'https://www.youtube.com/watch?v=N9WV4ub-C_E',
      thumb: '',
      remoteThumbs: ['https://i.ytimg.com/vi/N9WV4ub-C_E/maxresdefault.jpg','https://i.ytimg.com/vi/N9WV4ub-C_E/hqdefault.jpg'],
      fallbackImage: 'assets/works/work-02-fallback.png'
    },
    {
      title: '〈리매치〉 시리즈',
      channel: '말왕TV',
      role: 'PAGE:ON · 기획',
      url: 'https://www.youtube.com/watch?v=xp3iCwyI6Pg&t=1s',
      thumb: '',
      remoteThumbs: ['https://i.ytimg.com/vi/xp3iCwyI6Pg/maxresdefault.jpg','https://i.ytimg.com/vi/xp3iCwyI6Pg/hqdefault.jpg'],
      fallbackImage: 'assets/works/work-03-fallback.png'
    },
    {
      title: '〈월요라이브〉 시즌6 · 겨울왕국',
      channel: 'NOL',
      role: '',
      url: 'https://www.youtube.com/watch?v=t6Ae255vqS0',
      thumb: '',
      remoteThumbs: ['https://i.ytimg.com/vi/t6Ae255vqS0/maxresdefault.jpg','https://i.ytimg.com/vi/t6Ae255vqS0/hqdefault.jpg'],
      fallbackImage: 'assets/og-preview.png'
    }
  ],
  writers: [
    ['윤경환','assets/writers/writer-01.jpg'],
    ['김예슬','assets/writers/writer-02.jpg'],
    ['이지우','assets/writers/writer-03.jpg'],
    ['이윤재','assets/writers/writer-04.jpg'],
    ['방주연','assets/writers/writer-05.jpg'],
    ['김아영','assets/writers/writer-06.jpg'],
    ['송원석','assets/writers/writer-07.jpg'],
    ['이승현','assets/writers/writer-08.jpg'],
    ['황경민','assets/writers/writer-09.jpg'],
    ['김예지','assets/writers/writer-10.jpg'],
    ['정재용','assets/writers/writer-11.jpg'],
    ['김서윤','assets/writers/writer-12.jpg'],
    ['위나연','assets/writers/writer-13.jpg'],
    ['이용규','assets/writers/writer-14.jpg']
  ].map((item,index)=>( {
    id:`writer-${index+1}`,
    name:item[0],
    image:item[1],
    tagline:'작가 소개를 준비 중입니다.',
    works:[],
    scope:'함께한 역할을 준비 중입니다.'
  }))
};
