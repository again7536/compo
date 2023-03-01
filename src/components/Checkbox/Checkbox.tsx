import { css, useTheme } from "@emotion/react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CheckboxProps {
  checked: boolean;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Checkbox({ checked, name, onClick }: CheckboxProps) {
  const theme = useTheme();

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={-1}
      css={css`
        cursor: pointer;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        width: 16px;
        height: 16px;
        border: 1px solid ${theme.colors.linen};

        background-color: ${checked ? theme.colors.melon : undefined};
        color: ${theme.colors.white};
      `}
      onClick={onClick}
    >
      {checked && <FontAwesomeIcon icon={faCheck} />}
      <input hidden type="checkbox" checked={checked} name={name} />
    </div>
  );
}

export default Checkbox;
