# Todo

## 🏆 구현 기능

- UI 구현
- Todo 추가
- Todo 삭제
- Todo 완료/취소 상태 변경

## 📘 폴더 구조

```

📦 TODO
┣ 📂 public
┃ ┗ 📜 vite.svg
┣ 📂 src
┃ ┣ 📂 assets
┃ ┃ ┗ 📜 react.svg
┃ ┣ 📂 components
┃ ┃ ┣ 📂 todos
┃ ┃ ┃ ┣ 📂 buttons
┃ ┃ ┃ ┃ ┣ 📜 TodoCardButton.jsx
┃ ┃ ┃ ┃ ┗ 📜 TodoFormButton.jsx
┃ ┃ ┃ ┣ 📜 TodoCard.jsx
┃ ┃ ┃ ┣ 📜 TodoForm.jsx
┃ ┃ ┃ ┗ 📜 TodoList.jsx
┃ ┃ ┗ 📜 Header.jsx
┃ ┣ 📂 styles
┃ ┃ ┣ 📜 header.css
┃ ┃ ┣ 📜 index.css
┃ ┃ ┣ 📜 reset.css
┃ ┃ ┣ 📜 todoCard.css
┃ ┃ ┣ 📜 todoCardButton.css
┃ ┃ ┣ 📜 todoForm.css
┃ ┃ ┣ 📜 todoFormButton.css
┃ ┃ ┗ 📜 todoList.css
┃ ┣ 📜 App.jsx
┃ ┣ 📜 main.jsx
┣ 📜 .eslintrc.cjs
┣ 📜 .gitignore
┣ 📜 index.html
┣ 📜 package-lock.json
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 vite.config.js

```

## 🧊 컴포넌트

### Header

재사용될 여지있는 header 컴포넌트화

### TodoCard

todoList의 요소를 보여주는 컴포넌트.

`props`

- `todo`: todo 객체
- `setTodos`: todos 를 수정해줌
- `title`: working or done 을 구분짓기 위해 title 을 전달받음

`function`

- `deleteBtnClickHandler`: 클릭한 todo 를 삭제하는 함수
- `completeToggleBtnClickHandler`: 완료버튼일때 완료상태로 변경하고, 취소시에 Working 으로 변경하는 함수

### TodoForm

todoForm 의 요소를 보여주고 입력받는 컴포넌트.

`props`

- `setTodos`: todos 를 수정해줌

`function`

- `addTodoHandler`: 버튼을 클릭했을때 todo 요소를 추가해줌

### TodoList

todoList 를 보여주는 컴포넌트

`props`

- `title`: Working or Done 제목 prop
- `todos`: todo들이 담긴 객체
- `setTodos`: todos 를 수정해줌

`variable`

- `filterdTodos`: title 이 Working 인지 아닌지를 확인해 구성하기위한 변수

### TodoCardButton

card 의 버튼을 보여주는 컴포넌트

`props`

- `btnName`: 버튼의 value 가 담긴 prop
- `onClick`: 버튼 클릭 이벤트 전달

### TodoFormButton

todoForm 의 제출 버튼을 보여주는 컴포넌트
