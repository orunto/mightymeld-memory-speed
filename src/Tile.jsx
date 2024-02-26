export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block flex h-full w-full bg-indigo-300 text-center rounded-lg"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex h-full w-full bg-indigo-500 rounded-lg items-center justify-center">
          <Content
            style={{
              display: "flex-block",
              width: "80%",
              height: "80%",
              verticalAlign: "top",
              color: "#fff",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block flex items-center justify-center h-full w-full rounded-lg text-indigo-200">
          <Content
            style={{
              display: "inline-block",
              width: "80%",
              height: "80%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
