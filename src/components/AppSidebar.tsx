"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PromptGuideline } from "@/lib/promptGuidelines";
import { useRef } from "react";
import { useSetAtom } from "jotai";
import { sidebarWidthAtom } from "@/state/atoms";
import { useDimensions } from "@/hooks/useDimensions";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const OPENAI_GUIDELINES_URL =
  "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api";

type AppSidebarProps = {
  promptGuidelines: PromptGuideline[];
};

export const AppSidebar = ({ promptGuidelines }: AppSidebarProps) => {
  const setSidebarWidth = useSetAtom(sidebarWidthAtom);
  const ref = useRef<HTMLDivElement>(null);

  useDimensions(ref, ({ width }) => {
    setSidebarWidth(width);
  });

  return (
    <div ref={ref}>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup className="gap-4">
            <Link href={OPENAI_GUIDELINES_URL} target="_blank">
              <SidebarGroupLabel className="gap-1 hover:underline">
                <p>OpenAI Prompt Guidelines</p>
                <ExternalLinkIcon />
              </SidebarGroupLabel>
            </Link>
            <SidebarGroupContent>
              <Accordion type="single" collapsible className="w-full">
                {promptGuidelines.map(({ name, summary }, i) => (
                  <AccordionItem value={name} key={name}>
                    <AccordionTrigger>
                      {i + 1}. {name}
                    </AccordionTrigger>
                    <AccordionContent>{summary}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
