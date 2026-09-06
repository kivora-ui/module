"use client";

import * as React from "react";
import ReactSelect, {
  components,
  type ClassNamesConfig,
  type GroupBase,
  type ActionMeta,
  type OnChangeValue,
  type OptionProps,
  type PropsValue,
  type Props as ReactSelectProps,
  type SelectComponentsConfig,
  type SelectInstance,
  type StylesConfig
} from "react-select";
import AsyncReactSelect, { type AsyncProps } from "react-select/async";
import CreatableReactSelect, { type CreatableProps } from "react-select/creatable";
import { Check, ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { useOverlayViewport } from "../hooks/use-overlay-viewport";

export interface SelectOption {
  label: string;
  value: string;
  description?: string;
  isDisabled?: boolean;
}

export type SelectGroupOption<Option extends SelectOption = SelectOption> = GroupBase<Option>;

type BaseSelectProps<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = {
  mobileSheetTitle?: string;
  mobileSheetOptions?: ReactSelectProps<Option, IsMulti, Group>["options"];
  triggerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  classNames?: ClassNamesConfig<Option, IsMulti, Group>;
};

type SelectCallable = (<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: SelectProps<Option, IsMulti, Group> & {
    ref?: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>;
  }
) => React.ReactElement) & {
  displayName?: string;
};

type CreatableSelectCallable = (<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: CreatableSelectProps<Option, IsMulti, Group> & {
    ref?: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>;
  }
) => React.ReactElement) & {
  displayName?: string;
};

type AsyncSelectCallable = (<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: AsyncSelectProps<Option, IsMulti, Group> & {
    ref?: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>;
  }
) => React.ReactElement) & {
  displayName?: string;
};

export type SelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<ReactSelectProps<Option, IsMulti, Group>, "unstyled"> &
  BaseSelectProps<Option, IsMulti, Group>;

export type CreatableSelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<CreatableProps<Option, IsMulti, Group>, "unstyled"> &
  BaseSelectProps<Option, IsMulti, Group>;

export type AsyncSelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<AsyncProps<Option, IsMulti, Group>, "unstyled"> &
  BaseSelectProps<Option, IsMulti, Group>;

function SelectOptionItem<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  data,
  innerProps,
  innerRef,
  isDisabled,
  isFocused,
  isSelected,
  selectProps
}: OptionProps<Option, IsMulti, Group>) {
  const optionClassName = (selectProps as { optionClassName?: string }).optionClassName;

  return (
    <div
      ref={innerRef}
      className={cn(
        "flex min-h-10 w-full cursor-default select-none items-center justify-between gap-3 rounded-sm px-2 py-2 text-sm outline-none",
        isFocused && "bg-accent text-accent-foreground",
        isSelected && "font-medium",
        isDisabled && "pointer-events-none opacity-50",
        optionClassName
      )}
      {...innerProps}
    >
      <span className="min-w-0 flex-1">
        <span className="block truncate leading-none">{children}</span>
        {data.description ? (
          <span className="mt-1 block truncate text-xs font-normal leading-none text-muted-foreground">
            {data.description}
          </span>
        ) : null}
      </span>
      <span className="flex h-4 w-4 shrink-0 items-center justify-center">
        {isSelected ? <Check className="h-4 w-4" /> : null}
      </span>
    </div>
  );
}

function getSelectComponents<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  customComponents?: SelectComponentsConfig<Option, IsMulti, Group>
): SelectComponentsConfig<Option, IsMulti, Group> {
  return {
    DropdownIndicator: (indicatorProps) => (
      <components.DropdownIndicator {...indicatorProps}>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </components.DropdownIndicator>
    ),
    ClearIndicator: (indicatorProps) => (
      <components.ClearIndicator {...indicatorProps}>
        <X className="h-4 w-4 opacity-50" />
      </components.ClearIndicator>
    ),
    IndicatorSeparator: null,
    MultiValueRemove: (removeProps) => (
      <components.MultiValueRemove {...removeProps}>
        <X className="h-3 w-3" />
      </components.MultiValueRemove>
    ),
    Option: SelectOptionItem,
    ...customComponents
  };
}

function getSelectClassNames<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  classNames,
  menuClassName,
  triggerClassName
}: {
  classNames?: ClassNamesConfig<Option, IsMulti, Group>;
  menuClassName?: string;
  triggerClassName?: string;
}): ClassNamesConfig<Option, IsMulti, Group> {
  return {
    control: (state) =>
      cn(
        "flex min-h-10 w-full rounded-md border border-input/70 bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors",
        state.isFocused && "ring-2 ring-ring ring-offset-2",
        state.isDisabled && "cursor-not-allowed opacity-50",
        triggerClassName,
        classNames?.control?.(state)
      ),
    valueContainer: (state) =>
      cn("flex min-w-0 flex-1 flex-wrap items-center gap-1 p-0", classNames?.valueContainer?.(state)),
    singleValue: (state) => cn("truncate text-foreground", classNames?.singleValue?.(state)),
    placeholder: (state) => cn("truncate text-muted-foreground", classNames?.placeholder?.(state)),
    input: (state) => cn("m-0 p-0 text-foreground", classNames?.input?.(state)),
    indicatorsContainer: (state) => cn("flex items-center gap-1", classNames?.indicatorsContainer?.(state)),
    dropdownIndicator: (state) =>
      cn("flex cursor-pointer items-center p-0 text-muted-foreground", classNames?.dropdownIndicator?.(state)),
    clearIndicator: (state) =>
      cn("flex cursor-pointer items-center p-0 text-muted-foreground", classNames?.clearIndicator?.(state)),
    menu: (state) =>
      cn(
        "z-50 mt-1 overflow-hidden rounded-md border border-border/70 bg-popover text-popover-foreground shadow-md",
        menuClassName,
        classNames?.menu?.(state)
      ),
    menuPortal: (state) => cn("z-50", classNames?.menuPortal?.(state)),
    menuList: (state) => cn("max-h-72 overflow-auto p-1", classNames?.menuList?.(state)),
    group: (state) => cn("p-0", classNames?.group?.(state)),
    groupHeading: (state) =>
      cn("px-2 py-1.5 text-xs font-semibold uppercase text-muted-foreground", classNames?.groupHeading?.(state)),
    option: (state) => cn("", classNames?.option?.(state)),
    multiValue: (state) =>
      cn("flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-sm text-secondary-foreground", classNames?.multiValue?.(state)),
    multiValueLabel: (state) => cn("truncate", classNames?.multiValueLabel?.(state)),
    multiValueRemove: (state) =>
      cn("rounded text-secondary-foreground/70 hover:text-secondary-foreground", classNames?.multiValueRemove?.(state)),
    noOptionsMessage: (state) =>
      cn("px-2 py-4 text-center text-sm text-muted-foreground", classNames?.noOptionsMessage?.(state)),
    loadingMessage: (state) =>
      cn("px-2 py-4 text-center text-sm text-muted-foreground", classNames?.loadingMessage?.(state))
  };
}

function withSelectDefaults<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  classNames,
  components: customComponents,
  menuClassName,
  optionClassName,
  placeholder = "Select option",
  triggerClassName,
  ...props
}: BaseSelectProps<Option, IsMulti, Group> &
  Omit<ReactSelectProps<Option, IsMulti, Group>, "unstyled">) {
  return {
    ...props,
    styles: {
      ...props.styles,
      menuPortal: (base, state) => {
        const layered = { ...base, zIndex: 60 };
        return props.styles?.menuPortal?.(layered, state) ?? layered;
      }
    } satisfies StylesConfig<Option, IsMulti, Group>,
    classNames: getSelectClassNames({ classNames, menuClassName, triggerClassName }),
    closeMenuOnSelect: props.closeMenuOnSelect ?? !props.isMulti,
    components: getSelectComponents(customComponents),
    hideSelectedOptions: props.hideSelectedOptions ?? false,
    optionClassName,
    placeholder,
    unstyled: true
  };
}

function getFlatOptions<Option extends SelectOption, Group extends GroupBase<Option>>(
  options?: ReactSelectProps<Option, boolean, Group>["options"]
): Option[] {
  if (!options) {
    return [];
  }

  return options.flatMap((optionOrGroup) =>
    "options" in optionOrGroup ? optionOrGroup.options : [optionOrGroup]
  );
}

function isOptionSelected<Option extends SelectOption, IsMulti extends boolean>(
  option: Option,
  value: PropsValue<Option> | undefined,
  isMulti?: IsMulti
) {
  if (isMulti) {
    return Array.isArray(value) && value.some((selectedOption) => selectedOption.value === option.value);
  }

  if (!value || Array.isArray(value)) {
    return false;
  }

  return (value as Option).value === option.value;
}

function getSelectedValue<Option extends SelectOption, IsMulti extends boolean>(
  value: PropsValue<Option> | undefined,
  defaultValue: PropsValue<Option> | undefined
) {
  return value ?? defaultValue;
}

function useBodyScrollLock(locked: boolean) {
  React.useEffect(() => {
    if (!locked || typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}

function MobileSelectSheet<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  isMulti,
  onChange,
  onOpenChange,
  open,
  options,
  title,
  value,
  loading = false
}: {
  isMulti?: IsMulti;
  loading?: boolean;
  onChange?: (newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  options?: ReactSelectProps<Option, IsMulti, Group>["options"];
  title: string;
  value: PropsValue<Option> | undefined;
}) {
  const flatOptions = getFlatOptions(options);
  useBodyScrollLock(open);
  const viewport = useOverlayViewport(open);

  function handleSelect(option: Option) {
    if (option.isDisabled) {
      return;
    }

    if (isMulti) {
      const currentValue = Array.isArray(value) ? value : [];
      const isSelected = currentValue.some((selectedOption) => selectedOption.value === option.value);
      const nextValue = (
        isSelected
          ? currentValue.filter((selectedOption) => selectedOption.value !== option.value)
          : [...currentValue, option]
      ) as unknown as OnChangeValue<Option, IsMulti>;

      onChange?.(nextValue, {
        action: isSelected ? "deselect-option" : "select-option",
        option
      } as ActionMeta<Option>);
      return;
    }

    onChange?.(option as OnChangeValue<Option, IsMulti>, {
      action: "select-option",
      option
    } as ActionMeta<Option>);
    onOpenChange(false);
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close options"
            className="fixed inset-0 z-50 cursor-default bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            ref={viewport.ref}
            style={{ ...viewport.style, ...(viewport.bounds ? { bottom: viewport.bounds.bottom } : {}) }}
            aria-modal="true"
            aria-label={title}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[calc(var(--kivora-viewport-height,100dvh)*0.82)] overflow-hidden rounded-t-2xl border border-border/70 bg-popover text-popover-foreground shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-muted-foreground/35" />
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0 text-base font-semibold">{title}</div>
              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="max-h-[calc(var(--kivora-viewport-height,100dvh)*0.82-4.5rem)] overflow-auto px-3 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
              {loading ? (
                <div className="px-3 py-8 text-center text-sm text-muted-foreground">Loading options...</div>
              ) : null}
              {!loading && flatOptions.length === 0 ? (
                <div className="px-3 py-8 text-center text-sm text-muted-foreground">No options available</div>
              ) : null}
              {!loading ? flatOptions.map((option) => {
                const selected = isOptionSelected(option, value, isMulti);

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={cn(
                      "flex min-h-12 w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors",
                      selected && "bg-accent font-medium text-accent-foreground",
                      !selected && "hover:bg-accent/70 hover:text-accent-foreground",
                      option.isDisabled && "cursor-not-allowed opacity-50"
                    )}
                    disabled={option.isDisabled}
                    onClick={() => handleSelect(option)}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate">{option.label}</span>
                      {option.description ? (
                        <span className="mt-1 block truncate text-xs font-normal text-muted-foreground">
                          {option.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                      {selected ? <Check className="h-4 w-4" /> : null}
                    </span>
                  </button>
                );
              }) : null}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function SelectInner<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    defaultValue,
    menuIsOpen,
    mobileSheetOptions,
    mobileSheetTitle = "Options",
    onChange,
    onMenuClose,
    onMenuOpen,
    value,
    ...props
  }: SelectProps<Option, IsMulti, Group>,
  ref: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>
) {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<PropsValue<Option> | undefined>(
    getSelectedValue(value, defaultValue)
  );
  const selectedValue = value ?? internalValue;

  function handleChange(newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, actionMeta);
  }

  function handleMobileOpen() {
    onMenuOpen?.();
    setSheetOpen(true);
  }

  function handleSheetOpenChange(nextOpen: boolean) {
    setSheetOpen(nextOpen);
    if (!nextOpen) {
      onMenuClose?.();
    }
  }

  return (
    <>
      <ReactSelect<Option, IsMulti, Group>
        ref={ref}
        {...withSelectDefaults({
          ...props,
          defaultValue,
          menuIsOpen: isMobile ? false : menuIsOpen,
          onChange: handleChange,
          onMenuClose,
          onMenuOpen: isMobile ? handleMobileOpen : onMenuOpen,
          value: selectedValue
        })}
      />
      {isMobile ? (
        <MobileSelectSheet<Option, IsMulti, Group>
          isMulti={props.isMulti}
          onChange={handleChange}
          onOpenChange={handleSheetOpenChange}
          open={sheetOpen}
          options={mobileSheetOptions ?? props.options}
          title={mobileSheetTitle}
          value={selectedValue}
        />
      ) : null}
    </>
  );
}

function CreatableSelectInner<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    defaultValue,
    menuIsOpen,
    mobileSheetOptions,
    mobileSheetTitle = "Options",
    onChange,
    onMenuClose,
    onMenuOpen,
    value,
    ...props
  }: CreatableSelectProps<Option, IsMulti, Group>,
  ref: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>
) {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<PropsValue<Option> | undefined>(
    getSelectedValue(value, defaultValue)
  );
  const selectedValue = value ?? internalValue;

  function handleChange(newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, actionMeta);
  }

  function handleMobileOpen() {
    onMenuOpen?.();
    setSheetOpen(true);
  }

  function handleSheetOpenChange(nextOpen: boolean) {
    setSheetOpen(nextOpen);
    if (!nextOpen) {
      onMenuClose?.();
    }
  }

  return (
    <>
      <CreatableReactSelect<Option, IsMulti, Group>
        ref={ref}
        {...withSelectDefaults({
          ...props,
          defaultValue,
          menuIsOpen: isMobile ? false : menuIsOpen,
          onChange: handleChange,
          onMenuClose,
          onMenuOpen: isMobile ? handleMobileOpen : onMenuOpen,
          value: selectedValue
        })}
      />
      {isMobile ? (
        <MobileSelectSheet<Option, IsMulti, Group>
          isMulti={props.isMulti}
          onChange={handleChange}
          onOpenChange={handleSheetOpenChange}
          open={sheetOpen}
          options={mobileSheetOptions ?? props.options}
          title={mobileSheetTitle}
          value={selectedValue}
        />
      ) : null}
    </>
  );
}

function AsyncSelectInner<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    defaultOptions,
    defaultValue,
    loadOptions,
    menuIsOpen,
    mobileSheetOptions,
    mobileSheetTitle = "Options",
    onChange,
    onMenuClose,
    onMenuOpen,
    value,
    ...props
  }: AsyncSelectProps<Option, IsMulti, Group>,
  ref: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>
) {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [loadingOptions, setLoadingOptions] = React.useState(false);
  const [loadedOptions, setLoadedOptions] = React.useState<ReactSelectProps<Option, IsMulti, Group>["options"]>(
    Array.isArray(defaultOptions) ? defaultOptions : []
  );
  const [internalValue, setInternalValue] = React.useState<PropsValue<Option> | undefined>(
    getSelectedValue(value, defaultValue)
  );
  const selectedValue = value ?? internalValue;

  function handleChange(newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, actionMeta);
  }

  function loadMobileOptions() {
    if (mobileSheetOptions || Array.isArray(defaultOptions) || !loadOptions) {
      return;
    }

    setLoadingOptions(true);
    const maybePromise = loadOptions("", (nextOptions) => {
      setLoadedOptions(nextOptions);
      setLoadingOptions(false);
    });

    if (maybePromise) {
      maybePromise
        .then((nextOptions) => {
          setLoadedOptions(nextOptions);
        })
        .finally(() => setLoadingOptions(false));
    }
  }

  function handleMobileOpen() {
    onMenuOpen?.();
    loadMobileOptions();
    setSheetOpen(true);
  }

  function handleSheetOpenChange(nextOpen: boolean) {
    setSheetOpen(nextOpen);
    if (!nextOpen) {
      onMenuClose?.();
    }
  }

  return (
    <>
      <AsyncReactSelect<Option, IsMulti, Group>
        ref={ref}
        {...withSelectDefaults({
          ...props,
          defaultValue,
          menuIsOpen: isMobile ? false : menuIsOpen,
          onChange: handleChange,
          onMenuClose,
          onMenuOpen: isMobile ? handleMobileOpen : onMenuOpen,
          value: selectedValue
        })}
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
      />
      {isMobile ? (
        <MobileSelectSheet<Option, IsMulti, Group>
          isMulti={props.isMulti}
          loading={loadingOptions}
          onChange={handleChange}
          onOpenChange={handleSheetOpenChange}
          open={sheetOpen}
          options={mobileSheetOptions ?? loadedOptions}
          title={mobileSheetTitle}
          value={selectedValue}
        />
      ) : null}
    </>
  );
}

export const Select = React.forwardRef(SelectInner) as SelectCallable;
Select.displayName = "Select";

export const CreatableSelect = React.forwardRef(CreatableSelectInner) as CreatableSelectCallable;
CreatableSelect.displayName = "CreatableSelect";

export const AsyncSelect = React.forwardRef(AsyncSelectInner) as AsyncSelectCallable;
AsyncSelect.displayName = "AsyncSelect";

export const SelectTrigger = "div";
export const SelectValue = "span";
export const SelectContent = "div";
export const SelectGroup = "div";
export const SelectLabel = "div";
export const SelectItem = "div";
export const SelectSeparator = "div";
export const SelectScrollUpButton = React.Fragment;
export const SelectScrollDownButton = React.Fragment;
