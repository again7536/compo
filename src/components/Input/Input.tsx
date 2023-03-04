import { css, useTheme } from "@emotion/react";
import { useState } from "react";

interface InputProps {
  value: string;
  name?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  before?: React.ReactNode;
  after?: React.ReactNode;
}

function Input({ value, name, disabled, onChange, before, after }: InputProps) {
  const theme = useTheme();
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div
      tabIndex={-1}
      css={css`
        border-bottom: 2px solid ${focus ? theme.colors.melon : theme.colors.platinum1};
      `}
    >
      {before}
      <input
        value={value}
        name={name}
        disabled={disabled ?? false}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        css={css`
          outline: none;
          border: none;
          padding: 5px;
          width: 100%;

          font-family: "Sarabun";
        `}
      />
      {after}
    </div>
  );
}

export { Input };
