# PAGE:ON 배포 메모

이 폴더 자체가 정적 사이트 루트입니다. 빌드 명령은 필요 없습니다.

- Netlify publish directory: `.`
- Netlify build command: 없음
- `netlify.toml` 포함
- 실제 작품 이미지를 로컬로 고정하려면 `assets/works/work-01.jpg` ~ `work-03.jpg` 파일을 추가하세요.
- 작가 이미지는 `assets/writers/writer-01.jpg` ~ `writer-14.jpg` 파일을 추가하세요.
- 주요 텍스트/작품/작가 데이터는 `content.js`에서 수정합니다.

공개 도메인이 정해지면 `index.html`의 `og:image`, `og:url`, canonical URL을 절대 URL로 변경하세요.
