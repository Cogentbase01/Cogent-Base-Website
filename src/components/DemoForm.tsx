"use client";

import { useId, useRef, useState } from "react";
import { validateDemoForm, type FieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "ok" | "error";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function DemoForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [warnings, setWarnings] = useState<FieldErrors>({});
  const tokenRef = useRef<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") ?? ""),
      firm: String(data.get("firm") ?? ""),
      email: String(data.get("email") ?? ""),
    };

    // Client-side validation (server re-validates regardless).
    const result = validateDemoForm(fields);
    setErrors(result.errors);
    setWarnings(result.warnings);
    if (!result.ok) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      const firstInvalid = form.querySelector<HTMLInputElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...fields,
          company_url: String(data.get("company_url") ?? ""), // honeypot
          turnstileToken: tokenRef.current,
        }),
      });
      const body = (await res.json()) as {
        ok: boolean;
        message?: string;
        errors?: FieldErrors;
      };
      if (res.ok && body.ok) {
        setStatus("ok");
        setMessage(body.message ?? "Thank you. We will be in touch confidentially.");
        form.reset();
        setWarnings({});
      } else {
        setStatus("error");
        setErrors(body.errors ?? {});
        setMessage(body.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again, or email partnerships@cogentbase.ai.");
    }
  }

  const fieldId = (n: string) => `${formId}-${n}`;
  const errId = (n: string) => `${formId}-${n}-err`;

  return (
    <form className="demo-form reveal" data-d="3" onSubmit={onSubmit} noValidate>
      <div className="demo-form__row">
        <Field
          id={fieldId("name")}
          name="name"
          label="Name"
          autoComplete="name"
          error={errors.name}
          errId={errId("name")}
        />
        <Field
          id={fieldId("firm")}
          name="firm"
          label="Firm"
          autoComplete="organization"
          error={errors.firm}
          errId={errId("firm")}
        />
      </div>
      <div style={{ marginTop: 14 }}>
        <Field
          id={fieldId("email")}
          name="email"
          label="Work email"
          type="email"
          autoComplete="email"
          placeholder="name@firm.com"
          error={errors.email}
          warn={warnings.email}
          errId={errId("email")}
        />
      </div>

      {/* Honeypot — hidden from users and assistive tech. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={fieldId("company_url")}>Company website</label>
        <input
          id={fieldId("company_url")}
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Turnstile mounts here when a site key is configured. */}
      {SITE_KEY ? (
        <div
          className="cf-turnstile"
          data-sitekey={SITE_KEY}
          data-callback="onTurnstileToken"
          style={{ marginTop: 16 }}
        />
      ) : null}

      <button
        className="btn btn--primary"
        type="submit"
        disabled={status === "submitting"}
        style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
      >
        {status === "submitting" ? (
          "Sending…"
        ) : status === "ok" ? (
          "Request received"
        ) : (
          <>
            Book a conversation <span className="arrow" aria-hidden="true">→</span>
          </>
        )}
      </button>

      <p
        className="closing__note form-status"
        data-state={status === "ok" ? "ok" : status === "error" ? "error" : undefined}
        role="status"
        aria-live="polite"
      >
        {message || "By invitation, in confidence. We reply within two business days."}
      </p>

      {/* Token bridge: Turnstile calls this global on success. */}
      <TokenBridge onToken={(t) => (tokenRef.current = t)} />
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  placeholder,
  error,
  warn,
  errId,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  warn?: string;
  errId: string;
}) {
  return (
    <label className="ff" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error || warn ? errId : undefined}
      />
      {error ? (
        <span className="ff__error" id={errId} role="alert">
          {error}
        </span>
      ) : warn ? (
        <span className="ff__warn" id={errId}>
          {warn}
        </span>
      ) : null}
    </label>
  );
}

/** Registers the Turnstile success callback once on mount. */
function TokenBridge({ onToken }: { onToken: (t: string) => void }) {
  if (typeof window !== "undefined") {
    (window as unknown as { onTurnstileToken?: (t: string) => void }).onTurnstileToken = onToken;
  }
  return null;
}
