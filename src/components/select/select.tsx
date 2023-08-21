import * as SelectStyled from ".";
import * as SelectRadix from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";
import { Dispatch, ReactNode, SetStateAction, forwardRef } from "react";
import { useTranslation } from "react-i18next";

interface SelectProps {
  handleSelect: (option: string) => void;
  options: {
    option: string;
    value: string;
  }[];
}

export const Select = ({ handleSelect, options }: SelectProps) => {
  const { t } = useTranslation();

  return (
    <SelectRadix.Root
      defaultValue=""
      onValueChange={(value) => handleSelect(value)}
    >
      <SelectStyled.Trigger className="SelectTrigger" aria-label="Food">
        <SelectRadix.Value />
        <SelectRadix.Icon className="SelectIcon">
          <CaretDown size={30} weight="bold" />
        </SelectRadix.Icon>
      </SelectStyled.Trigger>

      <SelectRadix.Portal>
        <SelectStyled.Content className="SelectContent">
          <SelectRadix.Viewport className="SelectViewport">
            <SelectRadix.Group>
              <SelectItem value="">{t("lang-message")}</SelectItem>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.option}
                </SelectItem>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectStyled.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
};

interface SelectItemProps extends SelectRadix.SelectItemProps {
  children: ReactNode;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  function Select({ children, ...props }: SelectItemProps, ref) {
    return (
      <SelectStyled.Item className="SelectItem" {...props} ref={ref}>
        <SelectStyled.ItemText>{children}</SelectStyled.ItemText>
      </SelectStyled.Item>
    );
  }
);
