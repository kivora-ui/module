"use client";

import * as React from "react";
import { cn } from "@kivora/theme";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Progress } from "./progress";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Textarea } from "./textarea";

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

export interface QuestionnaireProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultAnswers?: Record<string, QuestionnaireAnswer>;
  onComplete?: (answers: Record<string, QuestionnaireAnswer>) => void;
  questions: QuestionnaireQuestion[];
}

export function Questionnaire({
  className,
  defaultAnswers = {},
  onComplete,
  questions,
  ...props
}: QuestionnaireProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, QuestionnaireAnswer>>(defaultAnswers);
  const question = questions[activeIndex];
  const answer = question ? answers[question.id] : undefined;
  const isLast = activeIndex === questions.length - 1;
  const hasAnswer = Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
  const canContinue = Boolean(question?.optional || hasAnswer);

  if (!question) return null;

  const updateAnswer = (value: QuestionnaireAnswer) => {
    setAnswers((current) => ({ ...current, [question.id]: value }));
  };

  const toggleMultiple = (value: string) => {
    const current = Array.isArray(answer) ? answer : [];
    updateAnswer(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  const handleNext = () => {
    if (!canContinue) return;
    if (isLast) {
      onComplete?.(answers);
      return;
    }
    setActiveIndex((index) => index + 1);
  };

  return (
    <div className={cn("grid w-full min-w-0 max-w-xl gap-5 sm:w-[32rem]", className)} {...props}>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            Question {activeIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(((activeIndex + 1) / questions.length) * 100)}%</span>
        </div>
        <Progress value={((activeIndex + 1) / questions.length) * 100} />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold tracking-normal">{question.title}</h3>
        {question.description ? <p className="text-sm text-muted-foreground">{question.description}</p> : null}
      </div>
      {question.type === "freeform" ? (
        <Textarea
          value={typeof answer === "string" ? answer : ""}
          onChange={(event) => updateAnswer(event.target.value)}
          placeholder={question.placeholder}
        />
      ) : question.type === "multiple" ? (
        <div className="grid gap-2">
          {question.options?.map((option) => {
            const checked = Array.isArray(answer) && answer.includes(option.value);
            return (
              <label key={option.value} className="flex gap-3 rounded-md border border-border/70 p-3 text-sm">
                <Checkbox checked={checked} onCheckedChange={() => toggleMultiple(option.value)} />
                <span className="grid min-w-0 gap-1">
                  <span className="font-medium">{option.label}</span>
                  {option.description ? <span className="text-muted-foreground">{option.description}</span> : null}
                </span>
              </label>
            );
          })}
        </div>
      ) : (
        <RadioGroup value={typeof answer === "string" ? answer : ""} onValueChange={updateAnswer}>
          {question.options?.map((option) => (
            <label key={option.value} className="flex gap-3 rounded-md border border-border/70 p-3 text-sm">
              <RadioGroupItem value={option.value} />
              <span className="grid min-w-0 gap-1">
                <span className="font-medium">{option.label}</span>
                {option.description ? <span className="text-muted-foreground">{option.description}</span> : null}
              </span>
            </label>
          ))}
        </RadioGroup>
      )}
      <div className="flex justify-between gap-2">
        <Button
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
          type="button"
          variant="outline"
        >
          Back
        </Button>
        <Button disabled={!canContinue} onClick={handleNext} type="button">
          {isLast ? "Finish" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
