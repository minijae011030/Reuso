# Example Directory

이 디렉토리는 `Reuso` 라이브러리의 컴포넌트를 테스트하고 예제를 제공하기 위한 프로젝트입니다. `Reuso` 라이브러리의 설치 및 사용 방법을 확인하고, 각 컴포넌트가 실제로 어떻게 동작하는지 확인할 수 있습니다.

## 설치 및 실행 방법

1. 의존성 설치

   먼저 example 디렉토리로 이동한 뒤 의존성을 설치합니다.

   ```
   cd example
   npm install
   ```

2. 라이브러리 링크

   Reuso 라이브러리의 컴포넌트를 사용하기 위해 npm link를 설정합니다.

   ```
   cd mylib
   npm link
   cd example
   npm link ../mylib
   ```

3. 실행

   로컬 서버에서 예제를 실행합니다.

   ```
   npm start
   ```

   브라우저에서 http://localhost:1234로 접속하여 테스트 환경을 확인하세요.

## 포함된 컴포넌트

1. Button

   다양한 스타일과 변형(variant)을 지원하는 버튼 컴포넌트입니다. 예제에서 버튼 클릭 이벤트를 확인할 수 있습니다.

2. Input

   텍스트 입력을 위한 컴포넌트입니다. placeholder, variant, isDisabled, isError 등 다양한 속성을 테스트할 수 있습니다.

3. LabelInput

   라벨과 함께 제공되는 입력 필드입니다. 설명과 에러 메시지도 지원합니다.

4. CloseButton

   닫기 버튼으로, 아이콘 스타일과 크기를 설정할 수 있습니다.

5. DropdownInput

   옵션 선택을 위한 드롭다운 컴포넌트입니다. label과 description을 함께 제공합니다.

## 주의 사항

    • example 디렉토리는 테스트 목적으로만 사용됩니다.
    • 이 디렉토리는 Reuso 라이브러리를 실제 프로젝트에서 사용하는 방법을 시뮬레이션하기 위해 작성되었습니다.
