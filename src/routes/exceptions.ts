import { Router } from "express";
import { createException, exceptions } from "../data/exceptions";

const router = Router();

router.get("/exceptions", (_req, res) => {
  res.json({ exceptions });
});

router.post("/exceptions", (req, res) => {
  const { deviceId, deviceName, code, message, severity } = req.body ?? {};
  if (
    typeof deviceId !== "string" ||
    typeof code !== "string" ||
    typeof message !== "string" ||
    typeof severity !== "string"
  ) {
    res.status(400).json({ error: "deviceId, code, message, and severity are required" });
    return;
  }

  const item = createException({
    deviceId,
    deviceName: typeof deviceName === "string" ? deviceName : undefined,
    code,
    message,
    severity: severity as "info" | "warning" | "error" | "critical",
  });
  res.status(201).json({ exception: item });
});

router.patch("/exceptions/:id/ack", (req, res) => {
  const item = exceptions.find((e) => e.id === req.params.id);
  if (!item) {
    res.status(404).json({ error: "Exception not found" });
    return;
  }
  item.status = "acknowledged";
  item.acknowledgedAt = new Date().toISOString();
  res.json({ exception: item });
});

export default router;
