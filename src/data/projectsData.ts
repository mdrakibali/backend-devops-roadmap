import { Project } from '../types';

export const PRODUCTION_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    number: 1,
    title: 'Production REST API',
    tagline: 'Multi-resource REST API with Authentication, Caching, and Hardened Deployment',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Nginx', 'VPS'],
    description: 'A production-grade REST API featuring full authentication, role-based access control (RBAC), multi-resource CRUD, cursor pagination, filtering, caching layer, rate limiting, and structured logging, deployed to a live VPS with Nginx and SSL.',
    architectureDiagram: `Browser / Client
       │ (HTTPS / TLS 1.3)
       ▼
   ┌───────────────────────────┐
   │ Nginx Reverse Proxy (443) │
   └─────────────┬─────────────┘
                 │ (proxy_pass: 3000)
                 ▼
   ┌───────────────────────────┐
   │ Node.js / Express API     │
   │  - Auth Guard (JWT/Cookie)│
   │  - Rate Limiter           │
   │  - Centralized Error      │
   └──────┬─────────────┬──────┘
          │             │
          ▼             ▼
   ┌─────────────┐ ┌──────────────┐
   │ Redis Cache │ │ PostgreSQL DB│
   └─────────────┘ └──────────────┘`,
    features: [
      'Authentication with Refresh Token Rotation and secure cookies',
      'Role-Based Access Control (Admin, Member, Viewer)',
      'Multi-resource CRUD endpoints with Zod schema validation',
      'Keyset (Cursor-based) pagination and multi-field sorting',
      'Redis Cache-Aside layer with TTL and event-driven invalidation',
      'IP-based and user-based Rate Limiting with standard headers',
      'Structured JSON logging with correlation IDs',
      'Automated integration test suite with Supertest',
      'Live VPS deployment behind Nginx with Let’s Encrypt HTTPS'
    ],
    deployment: 'VPS + Nginx + Let’s Encrypt HTTPS + systemd process daemon',
    checklist: [
      { id: 'p1-auth', title: 'Authentication & Refresh Token Rotation' },
      { id: 'p1-rbac', title: 'RBAC Authorization Middleware' },
      { id: 'p1-crud', title: 'Full CRUD Resource Handlers' },
      { id: 'p1-pagination', title: 'Cursor / Keyset Pagination' },
      { id: 'p1-filter', title: 'Filtering & Dynamic Query Builder' },
      { id: 'p1-caching', title: 'Redis Cache-Aside Layer' },
      { id: 'p1-ratelimit', title: 'Rate Limiting Middleware' },
      { id: 'p1-logging', title: 'Structured JSON Logging (Pino / Winston)' },
      { id: 'p1-testing', title: 'Unit & Supertest API Tests' },
      { id: 'p1-vps', title: 'Debian VPS Deployment with systemd' },
      { id: 'p1-nginx', title: 'Nginx Reverse Proxy & SSL Setup' }
    ]
  },
  {
    id: 'proj-2',
    number: 2,
    title: 'E-commerce Backend',
    tagline: 'High-Concurrency Transactional Store with Race Condition Prevention & BullMQ',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    description: 'An enterprise e-commerce backend handling products, inventory locking under concurrent checkouts, cart management, transactional order processing, idempotent simulated payments, background worker dispatch, and audit logs.',
    architectureDiagram: `Checkout Request (Concurrent users)
       │
       ▼
   ┌──────────────────────────────────────────────┐
   │ Node.js Express API                          │
   │  - Idempotency Key Check (Redis)             │
   └──────────────────────┬───────────────────────┘
                          │
                          ▼
   ┌──────────────────────────────────────────────┐
   │ PostgreSQL (ACID Transaction)                │
   │  BEGIN;                                      │
   │  SELECT stock FROM inventory FOR UPDATE;     │
   │  UPDATE inventory SET stock = stock - qty;   │
   │  INSERT INTO orders ...;                     │
   │  INSERT INTO payments ...;                   │
   │  COMMIT;                                     │
   └──────────────────────┬───────────────────────┘
                          │ (Emit Order Created)
                          ▼
   ┌──────────────────────────────────────────────┐
   │ BullMQ Queue (Redis backed)                  │
   │  ├── Email Notification Worker               │
   │  ├── Invoice PDF Generator Worker            │
   │  └── Analytics & Audit Worker                │
   └──────────────────────────────────────────────┘`,
    features: [
      'Product catalog with category hierarchy and full-text search',
      'Inventory management with row-level locks (SELECT ... FOR UPDATE) to prevent overselling',
      'Persistent Shopping Cart & Session sync',
      'Transactional Order creation with atomic stock decrement',
      'Idempotent Payment gateway simulation with webhook signature verification',
      'Refund workflow with compensating balance rollback',
      'BullMQ asynchronous job queue for order confirmation emails and invoice generation',
      'Immutable audit logging for all balance and inventory modifications',
      'Full Docker Compose environment'
    ],
    advancedRequirements: [
      'Prevent race conditions under 100 concurrent checkout attempts for a single remaining item',
      'Guarantee idempotency using Redis-backed request tokens',
      'Handle worker crash and job retries with exponential backoff and DLQ'
    ],
    checklist: [
      { id: 'p2-auth', title: 'User Authentication & Profiles' },
      { id: 'p2-product', title: 'Product Catalog & Category System' },
      { id: 'p2-inventory', title: 'Inventory Schema & Row-level Locking' },
      { id: 'p2-cart', title: 'Cart Management API' },
      { id: 'p2-orders', title: 'Transactional Order Creation' },
      { id: 'p2-payment', title: 'Payment Simulation & Webhooks' },
      { id: 'p2-transactions', title: 'PostgreSQL ACID Transaction Safety' },
      { id: 'p2-idempotency', title: 'Idempotency Keys for Checkout & Payment' },
      { id: 'p2-race', title: 'Race Condition Prevention under Load' },
      { id: 'p2-caching', title: 'Product & Category Redis Caching' },
      { id: 'p2-jobs', title: 'BullMQ Background Worker Pipeline' },
      { id: 'p2-audit', title: 'Audit Logging System' },
      { id: 'p2-testing', title: 'Concurrency & Load Tests with k6' },
      { id: 'p2-docker', title: 'Docker Compose Setup' },
      { id: 'p2-deploy', title: 'Production Deployment' }
    ]
  },
  {
    id: 'proj-3',
    number: 3,
    title: 'Video Processing Platform',
    tagline: 'Asynchronous Chunked Video Transcoding Pipeline with FFmpeg & Object Storage',
    stack: ['Node.js', 'BullMQ', 'Redis', 'FFmpeg', 'AWS S3 / Cloudflare R2', 'Docker'],
    description: 'A distributed media processing pipeline: users upload large videos via pre-signed multipart URLs, which triggers background workers executing FFmpeg transcoding into multiple HLS/DASH resolutions with progress telemetry and failure recovery.',
    architectureDiagram: `User Video Upload (Direct / Chunked)
       │ (Pre-Signed S3 URL)
       ▼
   ┌──────────────────────────────────────────────┐
   │ S3 / Cloudflare R2 Object Storage            │
   └──────────────────────┬───────────────────────┘
                          │ (Upload Complete Event)
                          ▼
   ┌──────────────────────────────────────────────┐
   │ API Gateway & BullMQ Queue Dispatcher        │
   └──────────────────────┬───────────────────────┘
                          │
                          ▼
   ┌──────────────────────────────────────────────┐
   │ BullMQ Transcoding Workers (FFmpeg)          │
   │  - Extract Metadata (Resolution, Codec)      │
   │  - Transcode: 1080p, 720p, 480p HLS (.m3u8)  │
   │  - Generate Video Thumbnails & Sprites       │
   │  - Emit Real-Time Progress to Redis          │
   └──────────────────────┬───────────────────────┘
                          │ (Save Transcoded Streams)
                          ▼
   ┌──────────────────────────────────────────────┐
   │ S3 Storage + CloudFront CDN Delivery         │
   └──────────────────────────────────────────────┘`,
    features: [
      'Multipart chunked upload directly to S3/R2 with pre-signed URLs',
      'Asynchronous job queue orchestration with BullMQ',
      'FFmpeg workers extracting audio, video metadata, and duration',
      'Multi-resolution HLS transcoding (1080p, 720p, 480p, 360p)',
      'Thumbnail sprite extraction at configurable intervals',
      'Real-time transcoding progress reporting to client via WebSockets/SSE',
      'Dead-Letter Queue (DLQ) for corrupted video streams',
      'Graceful worker shutdown without terminating active FFmpeg child processes abruptly'
    ],
    advancedRequirements: [
      'Worker scaling: run multiple transcoding workers in parallel',
      'Duplicate job deduplication',
      'Worker crash recovery & auto-cleanup of temporary disk files'
    ],
    checklist: [
      { id: 'p3-upload', title: 'Direct S3/R2 Pre-Signed Multipart Uploads' },
      { id: 'p3-queue', title: 'BullMQ Transcoding Job Queue' },
      { id: 'p3-worker', title: 'Worker Thread & child_process FFmpeg Engine' },
      { id: 'p3-hls', title: 'Multi-Resolution HLS / DASH Transcoding' },
      { id: 'p3-thumbs', title: 'Thumbnail & Sprite Generation' },
      { id: 'p3-progress', title: 'Real-time Progress Telemetry' },
      { id: 'p3-dlq', title: 'Dead-Letter Queue & Poison Job Handling' },
      { id: 'p3-recovery', title: 'Worker Crash Recovery & Disk Cleanup' },
      { id: 'p3-scaling', title: 'Worker Pool Horizontal Scaling' },
      { id: 'p3-docker', title: 'Dockerized FFmpeg Production Image' }
    ]
  },
  {
    id: 'proj-4',
    number: 4,
    title: 'Production Multi-Tenant SaaS Backend',
    tagline: 'Multi-Tenant Architecture with Organizations, API Keys, Webhooks & Metering',
    stack: ['Node.js', 'Express / Fastify', 'PostgreSQL', 'Redis', 'BullMQ', 'Stripe API'],
    description: 'A multi-tenant SaaS backend supporting organization workspaces, invite links, granular permissions, API key authentication with cryptographic hashing, tier-based rate limits, usage metering, and reliable outbound webhook dispatch with HMAC signatures.',
    architectureDiagram: `External API Consumer / Web App
       │
       ▼
   ┌──────────────────────────────────────────────┐
   │ API Gateway / Auth Layer                     │
   │  - Multi-Tenant Header / Subdomain resolver  │
   │  - API Key Validator (SHA-256 hash lookup)   │
   │  - Rate Limiter & Usage Metering             │
   └──────────────────────┬───────────────────────┘
                          │
                          ▼
   ┌──────────────────────────────────────────────┐
   │ PostgreSQL (Row-Level Security / Org ID)     │
   │  - Organizations, Memberships, Roles         │
   │  - Metered Usage Counters                    │
   │  - Webhook Subscriptions & Event Logs        │
   └──────────────────────┬───────────────────────┘
                          │ (Event Trigger)
                          ▼
   ┌──────────────────────────────────────────────┐
   │ BullMQ Outbound Webhook Worker               │
   │  - Generate HMAC SHA-256 Signature           │
   │  - HTTP POST with Exponential Backoff        │
   │  - Record Response Code & Retry State        │
   └──────────────────────────────────────────────┘`,
    features: [
      'Multi-tenancy isolation (Organization scoped queries with tenant middleware)',
      'User invitations with secure expiring tokens',
      'Granular Permission matrix (Owner, Admin, Developer, Billing)',
      'API Key generation with prefix (sk_live_...) and SHA-256 hash verification',
      'Quota enforcement and plan limit tiers',
      'Subscription simulation with webhook reconciliation',
      'Outbound Webhook engine with HMAC SHA-256 signatures, retry policies, and delivery logs',
      'Immutable Audit Logs with IP, user agent, and payload diffs'
    ],
    checklist: [
      { id: 'p4-orgs', title: 'Organizations & Workspace Hierarchy' },
      { id: 'p4-tenancy', title: 'Multi-Tenant Isolation Middleware' },
      { id: 'p4-invites', title: 'Expiring Member Invitation Tokens' },
      { id: 'p4-apikeys', title: 'Hashed API Key System & Scopes' },
      { id: 'p4-quotas', title: 'Plan Quotas & Rate Limit Enforcement' },
      { id: 'p4-webhooks', title: 'Outbound Webhooks with HMAC Signatures' },
      { id: 'p4-billing', title: 'Billing Simulation & Idempotent Handlers' },
      { id: 'p4-audit', title: 'Structured Multi-Tenant Audit Logs' },
      { id: 'p4-obs', title: 'Tenant-level Observability & Metrics' }
    ]
  },
  {
    id: 'proj-5',
    number: 5,
    title: 'Distributed Order System',
    tagline: 'Event-Driven Microservices with Outbox Pattern, Saga Orchestration & SQS/Redis',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'BullMQ / AWS SQS', 'Docker', 'OpenTelemetry'],
    description: 'An asynchronous event-driven distributed system demonstrating the Transactional Outbox Pattern, Saga Orchestration with compensating rollback transactions, idempotent consumer deduplication, and distributed tracing across async services.',
    architectureDiagram: `┌──────────────────────┐
│ Order Service (API)  │
│  1. BEGIN DB TX      │
│  2. INSERT order     │
│  3. INSERT outbox    │
│  4. COMMIT           │
└──────────┬───────────┘
           │ (Outbox Poller / Debezium)
           ▼
┌──────────────────────────────────────────────┐
│ Message Broker (Event Bus / Redis Streams)   │
│ Event: "OrderPlaced"                         │
└──────────┬──────────────────────┬────────────┘
           │                      │
           ▼                      ▼
┌──────────────────────┐ ┌──────────────────────┐
│ Inventory Service    │ │ Payment Service      │
│ - Check & Reserve    │ │ - Execute Payment    │
│ - Idempotent Handler │ │ - Compensate on Fail │
└──────────────────────┘ └──────────────────────┘`,
    features: [
      'Transactional Outbox Pattern ensuring zero message loss on DB commit',
      'Saga Orchestration handling Order -> Payment -> Inventory -> Notification',
      'Compensating actions triggering automatic rollback on downstream failures',
      'Message deduplication using Redis idempotency caches',
      'Distributed Tracing with OpenTelemetry across all message hops',
      'Dead-Letter Queue with manual retry dashboard'
    ],
    advancedRequirements: [
      'Simulate worker crashes during intermediate saga steps and verify system recovers cleanly without inconsistent states',
      'Simulate duplicate event deliveries and prove idempotency',
      'Trace end-to-end latency with OpenTelemetry spans'
    ],
    checklist: [
      { id: 'p5-outbox', title: 'Transactional Outbox Table & Publisher' },
      { id: 'p5-saga', title: 'Saga Orchestrator State Machine' },
      { id: 'p5-compensate', title: 'Compensating Rollback Transactions' },
      { id: 'p5-idempotent', title: 'Consumer Idempotency Deduplication' },
      { id: 'p5-failure', title: 'Partial Failure & Network Partition Handling' },
      { id: 'p5-tracing', title: 'OpenTelemetry Distributed Spans' },
      { id: 'p5-dlq', title: 'Dead-Letter Queue & Poison Job Quarantine' },
      { id: 'p5-chaos', title: 'Chaos Drill: Kill workers midway through Saga' }
    ]
  },
  {
    id: 'proj-6',
    number: 6,
    title: 'Final Production Platform Capstone',
    tagline: 'End-to-End Enterprise Architecture with Multi-AZ Cloud, CI/CD, and Full Observability',
    stack: ['Node.js', 'PostgreSQL (Multi-AZ)', 'Redis Cluster', 'BullMQ', 'AWS / VPS', 'Docker', 'Nginx/ALB', 'Prometheus', 'Grafana', 'GitHub Actions'],
    description: 'The definitive capstone project: a complete, battle-tested production platform incorporating all roadmap concepts: load-balanced Node.js APIs, PostgreSQL with automated WAL archiving & PITR, Redis caching & queues, S3 asset pipelines, GitHub Actions CI/CD with automated rollback, Prometheus/Grafana RED metrics, and a full disaster recovery runbook.',
    architectureDiagram: `                     ┌───────────────────────┐
                     │   Route 53 (DNS)      │
                     └──────────┬────────────┘
                                │ (HTTPS / TLS 1.3)
                                ▼
                     ┌───────────────────────┐
                     │ Application LB / Nginx│
                     └──────────┬────────────┘
                                │
                 ┌──────────────┴──────────────┐
                 ▼                             ▼
       ┌───────────────────┐         ┌───────────────────┐
       │ Node API Node #1  │         │ Node API Node #2  │
       └─────────┬─────────┘         └─────────┬─────────┘
                 │                             │
                 └──────────────┬──────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ PostgreSQL    │       │ Redis Cache   │       │ BullMQ        │
│ (Multi-AZ +   │       │ & Rate Limit  │       │ Worker Pool   │
│  WAL Backup)  │       └───────────────┘       └───────┬───────┘
└───────────────┘                                       │
                                                        ▼
                                                ┌───────────────┐
                                                │ S3 + CloudFront│
                                                └───────────────┘`,
    features: [
      'Multi-instance Node.js backend running in high-availability topology',
      'PostgreSQL with automated WAL archiving, offsite S3 backups, and verified PITR restore script',
      'Redis cache layer with fail-open circuit breakers',
      'Background worker cluster processing media, emails, and webhooks',
      'Nginx reverse proxy with SSL, rate limiting, and zero-downtime reloads',
      'Docker Compose production manifests & multi-stage Dockerfiles',
      'GitHub Actions CI/CD pipeline with automated tests, Docker registry push, and automated rollback',
      'Prometheus metrics endpoint + Grafana dashboard measuring RED metrics (Rate, Errors, Duration)',
      'Security audit: OWASP Top 10 compliance, non-root containers, secret manager rotation',
      'Complete Disaster Recovery Runbook & Incident Drill documentation'
    ],
    checklist: [
      { id: 'p6-arch', title: 'Complete Multi-Instance Architecture Setup' },
      { id: 'p6-db', title: 'PostgreSQL Multi-AZ & Automated WAL Backup' },
      { id: 'p6-redis', title: 'Redis Cache & Queue Layer with Fallbacks' },
      { id: 'p6-workers', title: 'BullMQ Asynchronous Worker Pool' },
      { id: 'p6-s3', title: 'S3 Object Storage & CloudFront CDN' },
      { id: 'p6-nginx', title: 'Nginx Load Balancer & Zero-Downtime Reloads' },
      { id: 'p6-docker', title: 'Hardened Non-Root Multi-Stage Dockerfiles' },
      { id: 'p6-cicd', title: 'GitHub Actions CI/CD with Rollback Gate' },
      { id: 'p6-metrics', title: 'Prometheus & Grafana Observability Dashboard' },
      { id: 'p6-sec', title: 'OWASP Security Audit & Vulnerability Scans' },
      { id: 'p6-loadtest', title: 'Load Testing with k6 (Target: p95 < 150ms)' },
      { id: 'p6-runbook', title: 'Disaster Recovery Runbook & Drill Verification' }
    ]
  }
];
