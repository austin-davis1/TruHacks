

export function LoadingIcon() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto", background: "none" }}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <path fill="#23b6ff" d="M8 50a42 42 0 0084 0 42 44.6 0 01-84 0">
          <animateTransform
            attributeName="transform"
            dur="1.1627906976744187s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 51.3;360 50 51.3"
          ></animateTransform>
        </path>
      </svg>
    )
}