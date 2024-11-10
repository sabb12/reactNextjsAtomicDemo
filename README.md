## Project Introduction(프로젝트 소개)
##### ▪ react로 Atomic Pattern으로 만든 To Do List
<br/>

## What I've learned(배운 점)
##### ▪ Atomic Design 패턴을 사용하여 가장 작은 단위인 button, input, checkbox를 원자(Atoms)로 정의하고, 이 원자들에 최소한의 기능을 결합하여 분자(Molecules)를 만듬. 그 후, 원자와 분자를 조합하여 더 복잡한 UI 요소인 유기체(Organisms)를 구성하고, 이 유기체들을 결합하여 데이터와 관계없이 레이아웃 형태를 정의하는 템플릿(Templates)을 작성함. 마지막으로, 템플릿에 실제 데이터를 연결하여 최종적인 페이지 형태를 만들어 사용자에게 보여줌. 이 과정은 각 컴포넌트를 계층적으로 관리하여 효율적인 UI 개발을 가능하게 함

## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### ▪ 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
<br/>

### 2. 할 일 삭제 기능
##### ▪ 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 삭제됨.
<br/>

### 3. 완료 체크박스 기능
##### ▪ 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 4. 할 일 수정 기능
##### ▪ 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### ▪ 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### ▪ 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Installation(설치)
```
$ npx create-react-app react_atomic_Pattern_TodoList_8
$ cd react_atomic_Pattern_TodoList_8
$ npm run start
```

## Stacks(사용 스택)
### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Library

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<br/>
  
- Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)
![image](https://github.com/user-attachments/assets/9e029fc2-c461-4c7d-a5f9-83238a925576)


## Project Structure(프로젝트 구조)
```markdown
react_Atomic_Pattern_TodoList_8
├── public
├── src
│   ├── atoms
│   │   ├── Button.jsx
│   │   ├── Checkbox.jsx
│   │   └── Input.jsx
│   ├── molecules
│   │   └── ToDoItem.jsx
│   ├── organisms
│   │   ├── CompletedList.jsx
│   │   └── ToDoList.jsx
│   ├── pages
│   │   └── ToDoPage.jsx
│   ├── styles
│   |   └── App.css
│   └── templates
│       └── ToDoTemplate.jsx
├── App.js
├── index.js
├── README.md
```

