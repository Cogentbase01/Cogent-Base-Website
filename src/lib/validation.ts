/**
 * Shared demo-request validation — used by both the client form and the
 * server Route Handler so rules never drift. Keep this dependency-free.
 */

export type DemoFormFields = {
  name: string;
  firm: string;
  email: string;
};

export type FieldErrors = Partial<Record<keyof DemoFormFields, string>>;

export type ValidationResult = {
  ok: boolean;
  errors: FieldErrors;
  /** Soft, non-blocking notices (e.g. free-mail address). */
  warnings: FieldErrors;
};

// Pragmatic email shape check (RFC-perfect regexes are not worth it here).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Free-mail providers -> soft warning only, never a hard block (brief §4).
const FREE_MAIL = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
  "qq.com",
  "163.com",
  "126.com",
]);

export function isFreeMail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  return domain ? FREE_MAIL.has(domain) : false;
}

export function validateDemoForm(input: Partial<DemoFormFields>): ValidationResult {
  const errors: FieldErrors = {};
  const warnings: FieldErrors = {};

  const name = (input.name ?? "").trim();
  const firm = (input.firm ?? "").trim();
  const email = (input.email ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your full name.";
  else if (name.length > 120) errors.name = "Name is too long.";

  if (firm.length < 2) errors.firm = "Please enter your firm.";
  else if (firm.length > 160) errors.firm = "Firm name is too long.";

  if (!email) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(email) || email.length > 254)
    errors.email = "Please enter a valid email address.";
  else if (isFreeMail(email))
    warnings.email = "A work email reaches us fastest — personal addresses are fine too.";

  return { ok: Object.keys(errors).length === 0, errors, warnings };
}
