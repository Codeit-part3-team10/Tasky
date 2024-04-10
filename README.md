## :pencil2:  스마트하게 나의 일정을 관리해보자! Taskify
<img width="722" alt="landing0" src="https://github.com/codeit-part3-team7/Taskify/assets/139199039/817334bd-8c44-4297-9624-0baa122191fc">

<br/>
<br/>

 > 코드잇 스프린트-프론트엔드 2기 PART3 - 10팀 <br/>
 > 개발기간: 2024. 1. 25 ~ 2024. 2. 13 <br/>
 
- 배포 URL : https://tasky-self-tau.vercel.app/

<br/>
<br/>


### 💁🏻‍♀️💁🏻‍♂️ 프로젝트 소개
- Taskify는 다른 사용자들과 함께 일정을 관리하고 공유할 수 있는 서비스입니다.
- 모든 서비스는 회원가입을 한 후에 로그인을 해야만 사용할 수 있습니다.
- 사용자들은 대시보드를 생성할 수 있고 각 대시보드에서 일정을 생성할 수 있으며 대시보드에 원하는 사용자를 초대할 수 있습니다.


<br/>
<br/>

## 👯Participants

|   김동빈    |   김병화    |   김윤미    |   노진욱    |   이해빈   |
|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|
|    |   |    |    |  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9PBPtsnFs5ToX-zSbAAi56VlRdhLJm93SVp7wQIwEw&s" />  |
|대시보드 헤더, 아바타, 모달 컴포넌트 및<br/> 대시보드 초대하기 기능 구현|랜딩 페이지, 회원가입, 로그인 기능 구현 및<br/> mydashboard 초대 받은 목록 보기(무한 스크롤)|mypage, mydahsboard 전체 구현,<br/> 컴포넌트 제작|업무 생성, 수정, 삭제, 댓글 기능 구현,<br/> 컴포넌트 제작| 비즈니스 로직, ui 로직 분리 및 컴포넌트 제작,<br> 사이드바, 업무 보기 페이지 구현|


<br/>
<br/>

## 🖥️ TECH STACK
<Strong>Front-End</Strong>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <br />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Shadcnui-161618?style=flat&logo=Shadcnui&logoColor=white"/> <br/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white"/> <img src="https://img.shields.io/badge/Reacthookform-EC5990?style=flat&logo=Reacthookform&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-000000?style=flat&logo=Axios&logoColor=white"/> 


<br/>


<Strong>Collabaration tool</Strong>

<img src="https://img.shields.io/badge/GitHub-000000?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Discode-5865F2?style=flat&logo=discode&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white"/>

<br/>


<br/>
<br/>

## 📄페이지별 설명

### 메인 랜딩 페이지 & 로그인 페이지 & 회원가입 페이지(김병화)


<br/>
<br/>

### 나의 대시보드 페이지(김윤미)


<br/>
<br/>

### 대시보드 페이지
#### 일정
- 각 대시보드 페이지에서 일정들을 추가, 수정, 삭제할 수 있습니다. 제목과 설명은 필수로 기입을 해주어야 하며 담당자, 마감일, 태그, 이미지는 필요에 따라서 추가를 할 수 있습니다. 
  - 할 일 생성, 수정
   - <img src="https://github.com/Codeit-part3-team10/Tasky/assets/127473357/24e85929-ea51-41b6-aac4-0c1236119905" width="300" height="500"/> <img src="https://github.com/Codeit-part3-team10/Tasky/assets/51733830/daa1c198-8152-4005-9ba3-b53de6db7db6" width="300" height="500"/>

#### 대시보드(이해빈)
- 각 대시보드에 있는 일정들을 칸반보드의 형태로 보여주는 페이지입니다. 옆에 사이드바를 통해 내가 원하는 대시보드로 이동할 수 있습니다. 일정들은 상태(카테고리)별로 나뉘어져 있으며 각 상태들은 수정, 삭제할 수 있습니다. 대시보드를 생성할 경우 To Do, In Progress, Done 이 3개의 상태는 기본적으로 생성됩니다. 기본적으로 생성되는 상태들도 수정, 삭제가 가능하며 원하면 새로운 상태를 생성할 수도 있습니다. 다만, 상태는 총 10개까지 생성 가능하며 각 상태별로 보이는 일정들은 무한스크롤로 구현되어 있습니다.
  - 대시보드 페이지 칸반 보드 구현 반응형 디자인 적용
    - ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/75816589-59c7-497e-a1b8-d74d13dc2155)
  - 일정(할 일) 상세 보기 모달 구현 반응형 디자인 적용
    -  ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/1cd28764-61f5-459d-a60f-28b2473837c8)
  - 각 보드의 상태(카테고리) 생성, 삭제, 수정 기능 구현
    - ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/23c4b288-8518-4198-b67a-a51d738af11c)  ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/5fc11618-b613-41d8-a30b-42eb107e073b)
  - 모달 컴포넌트의 비즈니스 로직과 ui 로직 분리 진행(모달 리팩토링)

#### 사이드바(이해빈)
- 사이드바에는 내가 속해있는 대시보드들이 나열되어 보여집니다. 대시보드를 클릭 시 해당 대시보드 페이지로 이동하게 됩니다. 새로운 대시보드를 생성하고 싶을 경우 사이드바에 있는 + 버튼을 누르면 새로운 대시보드를 생성할 수 있습니다. 또한 대시보드 목록을 보여주는 리스트들은 무한스크롤로 구현되어 있습니다.
  - 사이드바를 전체 페이지의 레이아웃으로 별도 구현
    - ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/110e5899-9c8b-4baa-8f67-7651c9bc83c3)


#### 헤더(김동빈)
- 대시보드에 대한 정보를 보여주는 헤더입니다. 나의 프로필을 볼 수 있고 해당 대시보드에 속한 멤버들의 프로필을 보여줍니다. 또한 대시보드 관리 페이지로 이동할 수 있는 버튼과 대시보드에 사용자를 초대하는 기능을 가진 모달을 띄우는 버튼을 가지고 있습니다. 만약에 대시보드 페이지가 아니라 마이페이지(계정 관리)일 경우 대시보드에 대한 정보들은 보이지 않고 나의 프로필과 로고만 보이게 됩니다.
  - 대시보드 관리(수정) 페이지 구현
  - 멤버 초대하기 기능 구현

<br/>
<br/>

### 대시보드 수정(김동빈)
- 대시보드에 대한 정보를 수정할 수 있습니다. 대시보드 이름을 수정할 수 있으며 대시보드 내 구성원을 추방할 수 있습니다. 또한 대시보드에 속하지 않은 사용자를 초대했을 경우 누구를 초대했는지 초대 내역 목록을 볼 수 있습니다. 대시보드 삭제를 원하는 경우 가장 밑에 있는 대시보드 삭제 버튼을 클릭할 경우 삭제할 수 있습니다.
  - 대시보드 이름 수정 구현
  - 멤버 추방 기능 구현
  - 멤버 초대 내역 보기 기능 구현
    - ![image](https://github.com/Codeit-part3-team10/Tasky/assets/51733830/1f6af488-85da-48e8-b40e-e167aea20c11)


<br/>
<br/>

### 계정 관리(김윤미)



<br/>
<br/>

### 로그아웃(김병화)



<br/>
<br/>

