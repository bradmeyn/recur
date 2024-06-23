import {
  RiCheckLine,
  RiInformationLine,
  RiErrorWarningLine,
  RiAlertLine,
} from "@remixicon/react";

type MessageProps = {
  message: string;
  variant: "success" | "error" | "info" | "warning";
};

export default function Message({ message, variant }: MessageProps) {
  const variantStyles = {
    info: "bg-blue-100 border-blue-500 text-blue-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    error: "bg-red-100 border-red-500 text-red-700",
    success: "bg-green-100 border-green-500 text-green-700",
  };

  const icon = {
    success: <RiCheckLine size={20} />,
    error: <RiAlertLine size={20} />,
    info: <RiInformationLine size={20} />,
    warning: <RiErrorWarningLine size={20} />,
  };

  return (
    <div
      className={`${variantStyles[variant]} border-2 w-full rounded-xl font-semibold p-4 flex items-center space-x-2`}
      role="alert"
    >
      {icon[variant]}
      <p>{message}</p>
    </div>
  );
}
