"use client";

import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { SubmitButton } from "./SubmitButton";
import { InputContainer } from "./InputContainer";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { feedbackSchema } from "@/lib/schemas";
import { useSetAtom } from "jotai";
import { feedbackAtom, loadingAtom } from "@/state/atoms";
import { toast } from "sonner";

export const PromptInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const {
    object: feedback,
    submit,
    isLoading,
    error,
  } = useObject({
    api: "/api/feedback",
    schema: feedbackSchema,
  });
  const setLoading = useSetAtom(loadingAtom);
  const setFeedback = useSetAtom(feedbackAtom);

  useEffect(() => {
    setFeedback(feedback);
    setLoading(isLoading);
  }, [isLoading, setLoading, feedback, setFeedback]);

  useEffect(() => {
    if (error) {
      toast("An error occurred when submitting your prompt");
      console.error(error.message);
    }
  }, [error]);

  const resizeTextarea = () => {
    const current = textareaRef.current;
    if (!current) return;

    current.style.height = "inherit";
    current.style.height = `${current.scrollHeight}px`;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    resizeTextarea();
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!value) return;
    submit(value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter" && (e.metaKey || e.ctrlKey)) {
      await handleSubmit();
    }
  };

  return (
    <InputContainer>
      <Textarea
        onKeyDown={handleKeyDown}
        placeholder="Enter prompt..."
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        className="max-h-48 resize-none border-none shadow-none focus-visible:ring-0"
      />
      <div className="flex w-full justify-end">
        <SubmitButton loading={isLoading} onClick={handleSubmit} />
      </div>
    </InputContainer>
  );
};
