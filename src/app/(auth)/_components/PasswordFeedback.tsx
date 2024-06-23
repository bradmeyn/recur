import {
  RiCheckFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
} from "@remixicon/react";

export function PasswordFeedback({ password }: { password: string }) {
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  return (
    <div>
      <div
        className={`${
          hasCapitalLetter ? "text-green-700" : "text-slate-400"
        } flex items-center gap-2 text-xs`}
      >
        <RiCheckboxCircleFill size={16} /> <p>Include capital letter</p>
      </div>
      <div
        className={`${
          hasNumber ? "text-green-700" : "text-slate-400"
        } flex items-center gap-2 text-xs`}
      >
        <RiCheckboxCircleFill size={16} /> <p>Include number</p>
      </div>
      <div
        className={`${
          hasSpecialChar ? "text-green-700" : "text-slate-400"
        } flex items-center gap-2 text-xs`}
      >
        <RiCheckboxCircleFill size={16} /> <p>Include special character</p>
      </div>
    </div>
  );
}

type PasswordCompareProps = {
  password: string;
  confirmPassword: string;
};

export function PasswordCompare({
  password,
  confirmPassword,
}: PasswordCompareProps) {
  if (!password || !confirmPassword) return null;
  return (
    <div>
      {password === confirmPassword ? (
        <small className="flex items-center gap-2 text-green-700 mt-1 text-xs">
          <RiCheckboxCircleFill size={16} />
          <span>Passwords match</span>
        </small>
      ) : (
        <small className="flex items-center gap-2 text-red-700 mt-1 text-xs">
          <RiErrorWarningFill size={16} />
          <span>Passwords do not match</span>
        </small>
      )}
    </div>
  );
}
