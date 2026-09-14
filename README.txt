PAGE:ON 정적 사이트 배포 / 수정 안내
=====================================

1. 가장 쉬운 배포: Netlify
--------------------------
- https://app.netlify.com/drop 접속
- 이 pageon_site 폴더 전체를 드래그 앤 드롭
- 즉시 임시 주소가 발급됩니다.
- Site configuration > Domain management 에서 커스텀 도메인을 연결할 수 있습니다.

이 사이트는 빌드 과정이 없는 정적 HTML/CSS/JS 사이트라 별도 npm 설치가 필요 없습니다.

2. 계속 직접 수정하려면: GitHub + Netlify 또는 GitHub Pages
----------------------------------------------------------
- GitHub에 새 저장소를 만들고 pageon_site 폴더의 파일들을 저장소 루트에 업로드
- Netlify에서 Import from Git으로 연결하면 GitHub에 수정본을 push할 때마다 자동 재배포됩니다.
- GitHub Pages를 사용할 경우 Settings > Pages > Deploy from a branch > main / root 선택

3. 직접 수정하기 좋은 위치
-------------------------
- content.js: 작품명, 링크, 썸네일, 작가 이름, 작가 사진, 소개/함께한 작품/함께한 역할
- assets/writers/: 작가 사진 또는 캐릭터 이미지
- assets/works/: 작품 썸네일 이미지
- index.html: 디자인, 문구, 레이아웃, 애니메이션

작가 이미지는 writer-01.jpg ~ writer-14.jpg 이름으로 교체하면 자동 반영됩니다.
작품 이미지는 work-01.jpg ~ work-03.jpg 이름으로 넣으면 자동 반영됩니다.
이미지가 없거나 깨지면 자리표시자/fallback 이미지로 자동 전환됩니다.

4. 링크 공유 미리보기(카카오톡/SNS)
----------------------------------
현재 assets/og-preview.png가 준비되어 있습니다.
실제 도메인이 확정되면 index.html의 아래 두 값을 절대주소로 변경하는 것을 권장합니다.

<meta property="og:image" content="https://도메인/assets/og-preview.png">
<meta name="twitter:image" content="https://도메인/assets/og-preview.png">

추가로 다음 태그도 넣으면 좋습니다.
<meta property="og:url" content="https://도메인/">
<link rel="canonical" href="https://도메인/">

카카오톡은 기존 미리보기를 캐시하므로 배포 후 이미지 변경 시 카카오 개발자 도구의 URL 디버거에서 캐시를 갱신해야 할 수 있습니다.

5. 연락 버튼
-----------
EMAIL: pageon0804@gmail.com (mailto 연결 완료)
CALL : 010-2073-3120 (tel 연결 완료)

6. 참고
------
YouTube 외부 썸네일은 브라우저/네트워크 정책에 따라 로컬 미리보기에서 차단될 수 있습니다.
이를 대비해 현재 사이트는:
로컬 work-XX.jpg → YouTube 썸네일 → 로컬 fallback PNG 순서로 자동 대체합니다. 이미지 오류 이벤트를 먼저 연결한 뒤 소스를 적용하도록 보완되어, 첫 로컬 이미지가 없어도 다음 소스로 넘어갑니다.
실서비스에서는 assets/works/ 아래에 실제 썸네일 파일을 넣는 방식을 가장 권장합니다.


7. 커스텀 도메인 연결
----------------------
- Netlify에 먼저 사이트를 배포합니다.
- Site / Project dashboard > Domain management > Add a domain 에서 보유 도메인을 연결합니다.
- 이미 구입한 도메인은 Add a domain you already own 을 선택합니다.
- Netlify DNS를 쓰거나, 기존 도메인 업체의 DNS에서 Netlify가 안내하는 레코드를 설정합니다.
- 도메인 연결 후 index.html의 og:image, twitter:image, og:url, canonical을 실제 https 주소로 바꾸면 공유 미리보기가 안정적으로 동작합니다.
