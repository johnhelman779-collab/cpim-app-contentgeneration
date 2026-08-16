export type ExceptionSeverity = "info" | "warning" | "error" | "critical";
export type ExceptionStatus = "open" | "acknowledged";

export interface CpimException {
  id: string;
  deviceId: string;
  deviceName?: string;
  code: string;
  message: string;
  severity: ExceptionSeverity;
  status: ExceptionStatus;
  createdAt: string;
  acknowledgedAt?: string;
}

let seq = 1;
export const exceptions: CpimException[] = [
  {
    id: "exc-1",
    deviceId: "dev-plc-pack",
    deviceName: "PLC Packaging",
    code: "FAULT_SEED",
    message: "Seeded fault: packaging cell reported FaultCode != 0 during last shift.",
    severity: "warning",
    status: "open",
    createdAt: new Date().toISOString(),
  },
];

export function createException(
  input: Omit<CpimException, "id" | "status" | "createdAt" | "acknowledgedAt">
): CpimException {
  seq += 1;
  const item: CpimException = {
    ...input,
    id: `exc-${seq}`,
    status: "open",
    createdAt: new Date().toISOString(),
  };
  exceptions.unshift(item);
  return item;
}
