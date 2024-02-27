# 퀴즈앱

![image](https://github.com/JayeHa/quiz-app/assets/66169832/2ea16563-b86e-47d7-b872-0b021768ff09)

## 시작하기 전에

이 프로젝트는 다음 환경에서 개발되었습니다:

- Node.js v18.19.1
- Yarn 1.22.21

이 버전들과 호환되는 환경에서 프로젝트를 실행해주세요.

프로젝트 폴더에는 `.nvmrc` 파일이 포함되어 있어, `nvm`이 설치되어 있다면 아래 명령어로 적절한 Node.js 버전을 설정할 수 있습니다:

```bash
nvm use
```

`nvm` 설치 방법은 [nvm GitHub 페이지](https://github.com/nvm-sh/nvm)를 참고해주세요.

## 설치 및 실행방법

프로젝트를 로컬 환경에서 실행하기 위해 다음 단계를 따라 주세요:

```bash
git clone https://github.com/JayeHa/quiz-app.git
cd quiz-app
yarn install
yarn start
```

## 프로젝트 기본 정보

- 개발 기간: `2024.02.21` - `2024.02.27`
- 배포 링크: [jaye-quiz-app.vercel.app](https://jaye-quiz-app.vercel.app)
- 깃허브 링크: [github.com/JayeHa/quiz-app](https://github.com/JayeHa/quiz-app)

## 기술 스택

### 메인 기술 및 라우팅

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

### 상태 관리 및 데이터 페칭

<img src="https://img.shields.io/badge/react_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"><img src="https://img.shields.io/badge/zustand-000000?style=for-the-badge&&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

### 프로젝트 설정 및 빌드 도구

<img src="https://img.shields.io/badge/create_react_app-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white"><img src="https://img.shields.io/badge/craco-009688?style=for-the-badge&logoColor=white">

### CSS 프레임 워크 및 데이터 시각화

<img src="https://img.shields.io/badge/tailwind_css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white">

### 테스트

<img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"><img src="https://img.shields.io/badge/testing_library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white">

## 프로젝트 구조

프로젝트의 구조는 다음과 같이 구성되어 있습니다.

```bash
📦quiz-app
 ┣ 📂public                  # 정적 파일 저장
 ┣ 📂src
 ┃ ┣ 📂components           # 컴포넌트
 ┃ ┣ 📂data                 # 퀴즈 데이터 및 샘플 데이터
 ┃ ┣ 📂hocs                 # 고차 컴포넌트 (Higher-Order Components)
 ┃ ┣ 📂hooks                # Custom Hooks
 ┃ ┣ 📂models               # 타입스크립트 모델 및 인터페이스 정의
 ┃ ┣ 📂pages                # 각 페이지 컴포넌트 (홈, 퀴즈 페이지 등)
 ┃ ┣ 📂service              # API 호출 및 서비스 로직
 ┃ ┣ 📂store                # Zustand를 사용한 상태 관리 스토어
 ┃ ┣ 📂tests                # 테스트 유틸리티
 ┃ ┣ 📂utils                # 공통 유틸리티 함수
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜.gitignore
 ┣ 📜.nvmrc                 # NVM을 사용한 Node.js 버전 설정
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜craco.config.js        # CRA(Custom React App) 설정 오버라이드
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

## 주요 기능 소개

### Home 페이지

- 사용자는 홈 페이지에서 '퀴즈 풀기' 버튼을 통해 퀴즈를 시작할 수 있습니다.
  ![홈 페이지](https://github.com/JayeHa/quiz-app/assets/66169832/8ee3516d-7a24-48c7-bc34-c0c006d8caaf)

### Quiz 페이지

- 사용자는 제공된 질문과 4개의 선택지 중 하나를 선택하여 답변할 수 있으며, 선택지는 매번 다른 순서로 제공됩니다.
- 진행 상황을 시각적으로 표현하는 프로그레스 바를 통해, 사용자는 현재 위치와 남은 퀴즈의 수를 쉽게 파악할 수 있습니다.
  ![퀴즈 페이지 1](https://github.com/JayeHa/quiz-app/assets/66169832/44c76a30-d9ac-4673-b063-1429884e3020)

- 답변 후에는 즉시 정답 여부를 확인할 수 있으며, 이미 선택된 답변은 변경할 수 없습니다.
  ![퀴즈 페이지 2](https://github.com/JayeHa/quiz-app/assets/66169832/a69e61bf-f918-4a9f-a888-bfc45c03d54f)

### Result 페이지

- 모든 퀴즈를 마친 후 사용자는 자신의 점수를 확인할 수 있습니다. (소요된 시간, 정답 수, 오답 수)
- 차트를 통해서도 확인할 수 있습니다.
  ![결과 페이지](https://github.com/JayeHa/quiz-app/assets/66169832/16c98c7a-c07b-4e53-8c84-38831ac4ca0a)

### ReviewNote 페이지

- 오답노트 페이지에서는 정답과 자신의 선택을 비교해볼 수 있습니다.
  ![오답노트 페이지](https://github.com/JayeHa/quiz-app/assets/66169832/6894e667-0f3e-478a-b803-68e89a9715e1)

## 테스트 관련 정보

### 테스트 실행 방법

```bash
yarn test
```

### 테스트 대상 선정 방식

다음 기준에 따라 테스트 대상을 선정했습니다.

- **사용자 인터페이스의 핵심 요소:** 사용자 경험에 직접적인 영향을 미치는 컴포넌트와 기능
- **주요 비즈니스 로직:** 애플리케이션의 핵심 가치를 제공하는 비즈니스 로직

### 주요 테스트 대상

#### QuizCards

- **QuizCard**
  - 사용자가 퀴즈를 푸는 주요 인터페이스입니다.
  - 정확한 동작과 사용자 경험을 위해 테스트 커버리지를 100%로 유지했습니다.
  - [바로가기](./src/components/QuizCards/QuizCard/QuizCard.test.tsx)
- **QuizProgress**
  - 사용자에게 남은 문제 수와 진행 상황을 시각적으로 표시합니다.
  - 사용성 향상을 위해 테스트했습니다.
  - [바로가기](./src/components/QuizCards/QuizCard/QuizProgress.test.tsx)
- **QuizReviewCard**
  - 오답노트 페이지에서 사용되며, 사용자가 선택한 답변과 정답을 확인할 수 있습니다.
  - [바로가기](./src/components/QuizCards/QuizReviewCard/QuizReviewCard.test.tsx)

#### QuizSummary

- 결과페이지에서 사용자에게 최종 점수와 정답률을 보여주는 컴포넌트입니다.
- 사용자에게 정확한 정보를 제공하기 위해 테스트합니다.
- [바로가기](./src/components/QuizSummary/QuizSummary.test.tsx)

#### shuffleArray

- 배열의 요소를 무작위로 섞는 함수입니다.
- 사용자에게 제공되는 선택지의 순서가 매번 달라야 하므로, 이 함수의 정확성을 보장하기 위해 테스트합니다.
- [바로가기](./src/utils/suffleArray.test.ts)

#### quizStore

- 퀴즈 데이터, 사용자 답변, 시간 측정 등을 관리하는 상태 관리 스토어입니다.
- 애플리케이션의 데이터 무결성과 일관성을 보장하기 위해 테스트했습니다.
- [바로가기](./src/store/quizStore.test.ts)

## 이슈사항 및 해결

### 외부 API 에러 처리

- **문제 상황:** 외부 API 호출 중 예상치 못한 오류로 인해 애플리케이션의 기능이 중단되는 상황이 발생했습니다.
- **해결 방법:**
  - 기존의 useSuspense 고차 컴포넌트(HOC)을 리액트의 ErrorBoundary와 결합하여 useAsyncBoundary로 확장함으로써, 예외 처리 기능을 강화했습니다. 이를 통해 오류 발생 시 사용자에게 적절한 피드백을 제공할 수 있도록 했습니다.
  - 외부 API의 오류로부터 독립적으로 애플리케이션을 유지하기 위해 샘플 데이터로의 대체 기능을 구현하여 PR을 제출했습니다.
- **관련 이슈 및 PR:** [이슈 #2](https://github.com/JayeHa/quiz-app/issues/2), [PR #1](https://github.com/JayeHa/quiz-app/pull/1)
- 원활한 에러 테스트를 위해 메인 브랜치에는 해당 변경 사항을 반영하지 않았습니다. [PR #1](https://github.com/JayeHa/quiz-app/pull/1)에서 변경 사항을 확인하실 수 있으며, [미리보기 배포 링크](https://classting-quiz-app-git-feat-error-boundary-jayeha.vercel.app/)를 통해 변경된 기능을 테스트해보실 수 있습니다.

### `className` prop이 undefined일 때 해당 문자열이 추가되는 문제

- **문제 상황**: 컴포넌트의 className prop이 undefined일 때 "undefined" 문자열이 추가되는 문제가 발생했습니다.
- **해결 방법**:
  - `classnames` 라이브러리를 프로젝트 의존성에 추가하여 `className`의 동적 관리를 개선했습니다.
- **관련 이슈 및 PR:** [PR #3](https://github.com/JayeHa/quiz-app/pull/3)
