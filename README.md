# cpim-app-contentgeneration

CPIM exception / alarm processing layer.

## Role

Stores and acknowledges device exceptions raised by the device communication layer (`cpim-api-app`).

## Run

```bash
npm install
npm run dev
```

Listens on `http://localhost:3004`.

## Endpoints

- `GET /health`
- `GET /exceptions`
- `POST /exceptions` — `{ deviceId, deviceName?, code, message, severity }`
- `PATCH /exceptions/:id/ack`
