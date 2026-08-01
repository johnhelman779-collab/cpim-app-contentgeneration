# cpim-app-contentgeneration roadmap

CPIM exception / alarm processing layer. Part of the workspace [3-year roadmap](../ROADMAP.md) (CPIM-first).

## This repo’s track

| Period | Focus | Status |
|--------|--------|--------|
| **Y1Q1** | PostgreSQL + migrations for exceptions | `planned` |
| **Y1Q4** | Severity rules; ack / assign / close lifecycle | `planned` |
| **Y2Q3** | Ingest dead-letter / write-failure events from api-app | `planned` |
| **Y3Q3** | Exception correlation rules | `planned` |

## Consumed by

- `cpim-api-app` (create on faults)
- `cpim-ui` via `cpim-api-api` (list / ack)

## Notes

Update status here when a milestone ships; keep the master roadmap in sync.
