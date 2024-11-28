# MBTI 테스트 프로젝트

## 프로젝트 개요
회원가입 후, 로그인을 통해 자신의 MBTI 유형 테스트를 할 수 있고 또한, 회원들이 테스한 정보들을 확인 할 수 있으며 자신이 진행한 테스트를 삭제 또는 비공개 전환 할 수 있는 사이트를 구현한 프로젝트

- **제작 기간:** 2024.11.25 ~ 2024.11.28

## 기술 스택
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=flat&logo=react&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## 페이지 구성 및 기능
  * 공통 네비게이션 : 로그인하지 않은 사용자가 들어왔을 경우, 로그인과 홈 버튼만 보여주면 로그인시에만 프로필, 테스트, 결과보기로 접근 가능  
  * 홈 화면 : 인트로 페이지로 MBTI 테스트 및 로그인 페이지로 이동하도록 구성되어 있음
  * 로그인 페이지 : 아이디와 비밀번호를 이용한 로그인을 진행하는 페이지로 아직 비회원이라면 회원가입으로 이동 할 수 있는 링크를 제공
  * 회원가입 페이지 : 간단히 아이디와 비밀번호, 닉네임만 입력하면 회원가입 가능한 페이지로 회원가입 후, 로그인 페이지로 이동시켜 로그인을 할 수 있게 제공
  * 프로필 페이지 : 자신의 닉네임을 변경할 수 있는 페이지
  * 테스트 페이지 : MBTI 테스트를 진행하는 페이지로써 해당 항목들을 클릭하여 제출하면 자신의 MBTI와 해당 설명을 확인 할 수 있으며 결과보기 페이지로 이동도 가능
  * 결과보기 페이지 : 자신뿐만아니라 회원들의 MBTI결과를 리스트형태로 확인할 수 있으며 자신의 결과의 경우, 삭제 및 공개/비공개 여부 기능 제공 

## Vercel 배포 링크
https://mbti-test-theta.vercel.app
