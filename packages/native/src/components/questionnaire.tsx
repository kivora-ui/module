import * as React from "react";
import { Pressable, Text, View, type ViewProps } from "react-native";
import { Checkbox } from "./checkbox";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { Progress } from "./progress";
export type QuestionnaireQuestionType = "single" | "multiple" | "freeform";
export interface QuestionnaireOption {
  label: string;
  value: string;
  description?: string;
}
export interface QuestionnaireQuestion {
  id: string;
  title: string;
  description?: string;
  optional?: boolean;
  options?: QuestionnaireOption[];
  placeholder?: string;
  type?: QuestionnaireQuestionType;
}
export type QuestionnaireAnswer = string | string[] | undefined;
export interface QuestionnaireProps extends ViewProps {
  questions: QuestionnaireQuestion[];
  defaultAnswers?: Record<string, QuestionnaireAnswer>;
  onComplete?: (answers: Record<string, QuestionnaireAnswer>) => void;
}
export function Questionnaire({
  questions,
  defaultAnswers = {},
  onComplete,
  ...props
}: QuestionnaireProps) {
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState(defaultAnswers);
  const [complete, setComplete] = React.useState(false);
  const question = questions[index];
  if (!question) return null;
  const answer = answers[question.id];
  const valid =
    question.optional ||
    (Array.isArray(answer) ? answer.length > 0 : !!answer?.trim());
  const update = (next: QuestionnaireAnswer) =>
    setAnswers((old) => ({ ...old, [question.id]: next }));
  if (complete)
    return (
      <View {...props}>
        <Text accessibilityRole="alert" className="text-base text-foreground">
          Cuestionario completado
        </Text>
        <Button
          variant="outline"
          onPress={() => {
            setComplete(false);
            setIndex(0);
          }}
        >
          <Text className="text-foreground">Revisar respuestas</Text>
        </Button>
      </View>
    );
  return (
    <View {...props} className="gap-4">
      <Text className="text-muted-foreground">
        Pregunta {index + 1} de {questions.length}
      </Text>
      <Progress value={((index + 1) / questions.length) * 100} />
      <Text
        accessibilityRole="header"
        className="text-xl font-semibold text-foreground"
      >
        {question.title}
      </Text>
      {question.description && (
        <Text className="text-muted-foreground">{question.description}</Text>
      )}
      {question.type === "freeform" ? (
        <Textarea
          accessibilityLabel={question.title}
          value={typeof answer === "string" ? answer : ""}
          placeholder={question.placeholder}
          onChangeText={update}
        />
      ) : (
        question.options?.map((option) =>
          question.type === "multiple" ? (
            <Checkbox
              key={option.value}
              label={option.label}
              checked={Array.isArray(answer) && answer.includes(option.value)}
              onCheckedChange={(checked) => {
                const current = Array.isArray(answer) ? answer : [];
                update(
                  checked
                    ? [...current, option.value]
                    : current.filter((v) => v !== option.value),
                );
              }}
            />
          ) : (
            <Pressable
              key={option.value}
              accessibilityRole="radio"
              accessibilityLabel={option.label}
              accessibilityHint={option.description}
              accessibilityState={{ checked: answer === option.value }}
              className="min-h-12 flex-row items-center gap-3 rounded-lg border border-border p-3"
              onPress={() => update(option.value)}
            >
              <Text className="text-foreground">
                {answer === option.value ? "●" : "○"}
              </Text>
              <View className="flex-1">
                <Text className="text-base text-foreground">
                  {option.label}
                </Text>
                {option.description && (
                  <Text className="text-sm text-muted-foreground">
                    {option.description}
                  </Text>
                )}
              </View>
            </Pressable>
          ),
        )
      )}
      <View className="flex-row justify-between gap-2">
        <Button
          variant="outline"
          disabled={index === 0}
          onPress={() => setIndex((i) => i - 1)}
        >
          <Text className="text-foreground">Anterior</Text>
        </Button>
        <Button
          disabled={!valid}
          onPress={() => {
            if (index === questions.length - 1) {
              setComplete(true);
              onComplete?.(answers);
            } else setIndex((i) => i + 1);
          }}
        >
          <Text className="text-primary-foreground">
            {index === questions.length - 1 ? "Finalizar" : "Continuar"}
          </Text>
        </Button>
      </View>
    </View>
  );
}
