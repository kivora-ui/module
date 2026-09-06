import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { BottomSheet, BottomSheetInput } from "./bottom-sheet";
import { Calendar, type DateRange } from "./calendar";
import { Button } from "./button";
import { cn } from "@kivora/theme";
export type DatePickerMode = "single" | "range" | "month" | "year";
export type DatePickerValue = Date | DateRange | undefined;
export interface DatePickerPreset {
  label: string;
  value: DateRange;
}
export interface DatePickerProps {
  value?: DatePickerValue;
  defaultValue?: DatePickerValue;
  onValueChange?: (value: DatePickerValue) => void;
  mode?: DatePickerMode;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  calendarClassName?: string;
  localeCode?: string;
  withTime?: boolean;
  timeFormat?: "12h" | "24h";
  presets?: DatePickerPreset[];
  showPresets?: boolean;
  showFooter?: boolean;
  minDate?: Date;
  maxDate?: Date;
}
const anchor = (value: DatePickerValue) =>
  value instanceof Date ? value : value?.from;
export function DatePicker(props: DatePickerProps) {
  const {
    mode = "single",
    disabled,
    localeCode = "es-ES",
    withTime,
    timeFormat = "12h",
    minDate,
    maxDate,
  } = props;
  const [internal, setInternal] = React.useState(props.defaultValue);
  const controlled = Object.prototype.hasOwnProperty.call(props, "value");
  const value = controlled ? props.value : internal;
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState<DatePickerValue>(value);
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [hours, setHours] = React.useState("09");
  const [minutes, setMinutes] = React.useState("00");
  const [pm, setPm] = React.useState(false);
  const publish = (next: DatePickerValue) => {
    if (!controlled) setInternal(next);
    props.onValueChange?.(next);
    setOpen(false);
  };
  const start = () => {
    const date = anchor(value) ?? new Date();
    setDraft(value);
    setYear(date.getFullYear());
    setHours(
      String(
        timeFormat === "12h" ? date.getHours() % 12 || 12 : date.getHours(),
      ).padStart(2, "0"),
    );
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
    setPm(date.getHours() >= 12);
    setOpen(true);
  };
  const format = (date: Date) =>
    date.toLocaleString(
      localeCode,
      mode === "year"
        ? { year: "numeric" }
        : mode === "month"
          ? { month: "long", year: "numeric" }
          : {
              day: "numeric",
              month: "short",
              year: "numeric",
              ...(withTime
                ? {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: timeFormat === "12h",
                  }
                : {}),
            },
    );
  const label =
    value instanceof Date
      ? format(value)
      : value?.from
        ? `${format(value.from)} – ${value.to ? format(value.to) : "…"}`
        : (props.placeholder ?? "Seleccionar fecha");
  const select = (next: DatePickerValue) => {
    setDraft(next);
    if (props.showFooter === false && (next instanceof Date || next?.to))
      apply(next);
  };
  const validTime =
    !withTime ||
    (/^\d{1,2}$/.test(hours) &&
      /^\d{1,2}$/.test(minutes) &&
      +hours >= (timeFormat === "12h" ? 1 : 0) &&
      +hours <= (timeFormat === "12h" ? 12 : 23) &&
      +minutes <= 59);
  const apply = (selection: DatePickerValue = draft) => {
    if (!validTime) return;
    const date = anchor(selection);
    if (!date) return;
    if (withTime) {
      const time = (d: Date) => {
        const copy = new Date(d);
        copy.setHours(
          timeFormat === "12h" ? (+hours % 12) + (pm ? 12 : 0) : +hours,
          +minutes,
          0,
          0,
        );
        return copy;
      };
      publish(
        selection instanceof Date
          ? time(selection)
          : {
              from: time(date),
              to: selection?.to ? time(selection.to) : undefined,
            },
      );
    } else publish(selection);
  };
  return (
    <>
      <Pressable
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled: !!disabled, expanded: open }}
        onPress={start}
        className={cn(
          "min-h-12 justify-center rounded-lg border border-input bg-background px-3",
          disabled && "opacity-50",
          props.className,
        )}
      >
        <Text className="text-base text-foreground">{label}</Text>
      </Pressable>
      <BottomSheet open={open} onOpenChange={setOpen}>
        <Text
          accessibilityRole="header"
          className="text-xl font-semibold text-foreground"
        >
          Seleccionar fecha
        </Text>
        {props.showPresets &&
          mode === "range" &&
          props.presets?.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              onPress={() => select(preset.value)}
            >
              <Text className="text-foreground">{preset.label}</Text>
            </Button>
          ))}
        {mode === "single" || mode === "range" ? (
          <Calendar
            mode={mode}
            selected={draft}
            defaultMonth={anchor(value)}
            minDate={minDate}
            maxDate={maxDate}
            localeCode={localeCode}
            className={props.calendarClassName}
            onSelect={(next) => {
              if (!Array.isArray(next)) select(next);
            }}
          />
        ) : (
          <>
            <View className="flex-row justify-between items-center">
              <Button
                variant="ghost"
                accessibilityLabel="Periodo anterior"
                onPress={() => setYear((y) => y - (mode === "year" ? 12 : 1))}
              >
                <Text className="text-foreground">‹</Text>
              </Button>
              <Text className="text-foreground">{year}</Text>
              <Button
                variant="ghost"
                accessibilityLabel="Periodo siguiente"
                onPress={() => setYear((y) => y + (mode === "year" ? 12 : 1))}
              >
                <Text className="text-foreground">›</Text>
              </Button>
            </View>
            <View className="flex-row flex-wrap">
              {Array.from({ length: 12 }, (_, i) => {
                const date = new Date(
                  mode === "year" ? year + i : year,
                  mode === "year" ? 0 : i,
                  1,
                );
                const unavailable = !!(
                  (minDate &&
                    new Date(
                      date.getFullYear(),
                      mode === "year" ? 11 : date.getMonth() + 1,
                      mode === "year" ? 31 : 0,
                    ) < minDate) ||
                  (maxDate && date > maxDate)
                );
                return (
                  <Button
                    key={i}
                    disabled={unavailable}
                    variant={
                      draft instanceof Date && +date === +draft
                        ? "secondary"
                        : "ghost"
                    }
                    style={{ width: "33.33%" }}
                    onPress={() => select(date)}
                  >
                    <Text className="text-foreground">
                      {mode === "year"
                        ? year + i
                        : date.toLocaleDateString(localeCode, {
                            month: "short",
                          })}
                    </Text>
                  </Button>
                );
              })}
            </View>
          </>
        )}
        {withTime && (
          <View className="flex-row items-center gap-2">
            <BottomSheetInput
              accessibilityLabel="Horas"
              keyboardType="number-pad"
              maxLength={2}
              value={hours}
              onChangeText={setHours}
              className="flex-1"
            />
            <Text className="text-foreground">:</Text>
            <BottomSheetInput
              accessibilityLabel="Minutos"
              keyboardType="number-pad"
              maxLength={2}
              value={minutes}
              onChangeText={setMinutes}
              className="flex-1"
            />
            {timeFormat === "12h" && (
              <Button variant="outline" onPress={() => setPm(!pm)}>
                <Text className="text-foreground">{pm ? "PM" : "AM"}</Text>
              </Button>
            )}
          </View>
        )}
        {!validTime && (
          <Text accessibilityRole="alert" className="text-destructive">
            Introduce una hora válida.
          </Text>
        )}
        {props.showFooter !== false && (
          <View className="flex-row flex-wrap gap-2">
            <Button variant="ghost" onPress={() => publish(undefined)}>
              <Text className="text-foreground">Limpiar</Text>
            </Button>
            <Button variant="outline" onPress={() => setOpen(false)}>
              <Text className="text-foreground">Cancelar</Text>
            </Button>
            <Button
              disabled={
                !anchor(draft) ||
                (mode === "range" &&
                  !(draft && !(draft instanceof Date) && draft.to)) ||
                !validTime
              }
              onPress={() => apply()}
            >
              <Text className="text-primary-foreground">Aplicar</Text>
            </Button>
          </View>
        )}
      </BottomSheet>
    </>
  );
}
