# 📘 Reuso: 재사용 가능한 React UI 컴포넌트 라이브러리

### 🚀 소개

Reuso는 프론트엔드 개발을 간소화하기 위해 설계된 경량화된 React UI 컴포넌트 라이브러리입니다. 버튼, 인풋, 드롭다운과 같은 다양한 UI 컴포넌트를 제공하며, 개발자들이 사용자 인터페이스를 구축할 때 반복적인 작업을 줄이고 효율성을 높일 수 있도록 돕습니다.

Reuso는 다음에 중점을 둡니다:

    • 재사용성: 각 컴포넌트는 프로젝트 전반에서 모듈화되고 재사용 가능하도록 설계되었습니다.
    • 간결성: 빠르게 통합할 수 있는 간단한 API 제공.
    • 커스터마이징: 다양한 디자인과 상호작용 스타일 지원.
    • 접근성: 기본적인 접근성 요구사항을 준수하여 더 나은 사용자 경험 제공.

### 🛠️ 프로젝트 상태

Reuso는 현재 개발 중인 프로젝트로, 아직 공식적으로 패키지 레지스트리(e.g., npm)에 배포되지 않았습니다. 현재 로컬 환경에서 사용 및 테스트가 가능합니다.

## 📦 제공 기능

1.  버튼 컴포넌트: 다양한 스타일과 상태를 지원하는 유연한 버튼 컴포넌트

    • 스타일 옵션: `default`, `filled`, `outline`, `light`, `transparent`

    • 사용 가능한 Props:

         • color: 버튼 색상
         • width, height: 버튼 크기
         • onClick: 클릭 이벤트 콜백
         • disabled: true일 경우 상호작용 비활성화
         • 호버 및 포커스 효과 지원

    #### 예제

    ```typescript
    import { Button } from "reuso";

    return (
      <Button
        color="#007BFF"
        width={200}
        height={50}
        variant="filled"
        onClick={() => alert("클릭!")}
      >
        클릭
      </Button>
    );
    ```

2.  인풋 컴포넌트: 다양한 디자인과 동작을 지원하는 다재다능한 인풋 컴포넌트

    • 스타일 옵션: `default`, `filled`, `unstyled`

    • 사용 가능한 Props:

        • value, onChange: 입력 값과 변경 핸들러
        • placeholder: 사용자 정의 플레이스홀더 텍스트
        • clearButton: 입력 값을 초기화할 수 있는 버튼 표시 여부
        • isDisabled, isError: 비활성화 상태와 에러 스타일링 지원
        • width, height: 커스터마이징 가능한 크기

    #### 예제:

    ```typescript
    import { Input } from "reuso";

    const [inputValue, setInputValue] = useState("");

    return (
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder="텍스트를 입력하세요"
        clearButton
        variant="filled"
      />
    );
    ```

3.  드롭다운 컴포넌트: 옵션 선택을 위한 스타일링된 드롭다운 컴포넌트

    • 스타일 옵션: `default`, `filled`

    • 사용 가능한 Props:

        • options: value와 label로 구성된 옵션 리스트
        • selectedValue, onChange: 드롭다운 값과 변경 핸들러
        • label, description: 드롭다운에 대한 라벨과 설명 텍스트

    #### 예제:

    ```typescript
    import { DropdownInput } from "reuso";

    const options = [
      { value: "1", label: "옵션 1" },
      { value: "2", label: "옵션 2" },
    ];

    return (
      <DropdownInput
        label="옵션 선택"
        description="옵션을 선택하세요"
        options={options}
        selectedValue="1"
        onChange={(value) => console.log(value)}
      />
    );
    ```

## 향후 계획

    • 라이브러리를 npm에 배포

    • 모달, 슬라이더, 툴팁과 같은 컴포넌트 추가

    • 기존 컴포넌트에 애니메이션 및 접근성 기능 강화

    • 상세한 문서 작성 및 데모 웹사이트 제작
