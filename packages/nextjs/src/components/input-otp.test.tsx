// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./input-otp";

describe("InputOTP", () => {
  it("renders the expected number of slots", () => {
    render(
      <InputOTP maxLength={6} value="123456" onChange={() => {}}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator data-testid="separator" />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByTestId("separator")).toBeInTheDocument();
  });
});
