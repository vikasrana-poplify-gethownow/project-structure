import { ComponentStyle, ButtonAction } from "./imports";

export function CustomButton({
  text,
  className,
  variant = ["Primary"],
  leftComponent,
  rightComponent,
  ...restProps
}) {
  const buttonAction = new ButtonAction();

  return (
    <div
      className={`ButtonContainer ${ComponentStyle.ButtonContainer} ${className}`}
    >
      <button
        className={`Button ${ComponentStyle.Button} ${buttonAction.setTypeClass(
          variant
        )}`}
        {...restProps}
      >
        <>
          {leftComponent ? leftComponent : ""}
          {text}
          {rightComponent ? rightComponent : ""}
        </>
      </button>
    </div>
  );
}
