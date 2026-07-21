"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
  mode?: "local-ollama" | "profile-notes";
};

const suggestions = [
  "What did Moh build during her internship?",
  "Tell me about PitchBot.",
  "What does Moh work with?",
  "What is she into outside of AI?",
];

const welcome: Message = {
  role: "assistant",
  content: "Hi — I’m Moh’s portfolio assistant. Ask about her work, internship projects, leadership, or the things she cares about beyond the build.",
  mode: "profile-notes",
};

export default function AskAiModal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const openAssistant = () => setOpen(true);
    const keyHandler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("open-moh-ai", openAssistant);
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("open-moh-ai", openAssistant);
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isThinking) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setInput("");
    setIsThinking(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const payload = await response.json() as { answer?: string; mode?: Message["mode"] };
      const answer = payload.answer;
      if (!response.ok || !answer) throw new Error("The assistant could not answer right now.");
      setMessages((current) => [...current, { role: "assistant", content: answer, mode: payload.mode ?? "profile-notes" }]);
    } catch {
      setMessages((current) => [...current, {
        role: "assistant",
        content: "I couldn’t reach the live model just now. Try one of the profile questions below, or email Moh directly at mohbhargava04@gmail.com.",
        mode: "profile-notes",
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void ask(input);
  };

  if (!open) return null;

  return (
    <div className="ask-ai-layer ask-ai-open">
      <button type="button" className="ask-ai-backdrop" aria-label="Close Ask Moh's AI" onClick={() => setOpen(false)} />
      <section className="ask-ai-modal" role="dialog" aria-modal="true" aria-label="Ask Moh's AI">
        <header>
          <div>
            <p className="eyebrow"><span className="status-dot" /> Portfolio intelligence</p>
            <h2>Ask <em>Moh&apos;s</em> AI.</h2>
          </div>
          <button type="button" className="ask-ai-close" onClick={() => setOpen(false)}>Close <span>×</span></button>
        </header>

        <div className="ask-ai-status"><span>◌</span> Grounded in Moh&apos;s portfolio. Configure local Ollama for live answers; verified notes are always available.</div>

        <div className="ask-ai-thread" aria-live="polite">
          {messages.map((message, index) => (
            <article className={`ask-ai-message ask-ai-${message.role}`} key={`${message.role}-${index}-${message.content.slice(0, 24)}`}>
              <span>{message.role === "assistant" ? "MB.AI" : "YOU"}</span>
              <p>{message.content}</p>
              {message.role === "assistant" && <small>{message.mode === "local-ollama" ? "LOCAL OLLAMA" : "VERIFIED PROFILE NOTES"}</small>}
            </article>
          ))}
          {isThinking && <article className="ask-ai-message ask-ai-assistant ask-ai-thinking"><span>MB.AI</span><p><i /> <i /> <i /></p></article>}
        </div>

        <div className="ask-ai-suggestions" aria-label="Suggested questions">
          {suggestions.map((suggestion) => <button type="button" key={suggestion} disabled={isThinking} onClick={() => void ask(suggestion)}>{suggestion}</button>)}
        </div>

        <form className="ask-ai-form" onSubmit={submit}>
          <label className="sr-only" htmlFor="ask-moh-input">Ask about Moh&apos;s portfolio</label>
          <input
            ref={inputRef}
            id="ask-moh-input"
            value={input}
            maxLength={800}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about a project, skill, or story…"
            disabled={isThinking}
          />
          <button type="submit" disabled={!input.trim() || isThinking}>Send <span>↗</span></button>
        </form>
      </section>
    </div>
  );
}
