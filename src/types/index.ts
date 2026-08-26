export type MasteryLevel = 'L1' | 'L2' | 'L3' | 'L4' | 'L5';

export interface MasteryDefinition {
  level: MasteryLevel;
  name: string;
  question: string;
  banglaQuestion?: string;
}

export const MASTERY_LEVELS: Record<MasteryLevel, MasteryDefinition> = {
  L1: { level: 'L1', name: 'Recall', question: 'Can I explain this concept without AI?' },
  L2: { level: 'L2', name: 'Implement', question: 'Can I implement this from scratch in a blank project?' },
  L3: { level: 'L3', name: 'Debug', question: 'Can I diagnose and fix broken implementations?' },
  L4: { level: 'L4', name: 'Design', question: 'Can I design the architecture and trade-offs for a new problem?' },
  L5: { level: 'L5', name: 'Production', question: 'Can I deploy, monitor, secure, scale, and recover this in production?' },
};

export type ItemStatus = 'not_started' | 'in_progress' | 'completed';

export type DifficultyLevel = 'Basic' | 'Foundation' | 'Intermediate' | 'Advanced' | 'Production';

export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  phaseId: string;
  phaseTitle: string;
  technologyId: string;
  technologyTitle: string;
  level: DifficultyLevel;
  keywords?: string[];
  challenge?: string;
  deepLab?: string;
}

export interface Technology {
  id: string;
  title: string;
  phaseId: string;
  tier: 'Tier S' | 'Tier A' | 'Tier B';
  description?: string;
  levels: {
    level: DifficultyLevel;
    items: RoadmapItem[];
  }[];
  handsOnLab?: string;
  masteryTest?: string;
  diagram?: string;
  challenge?: string;
  coreProject?: {
    title: string;
    description: string;
    features: string[];
    deepChallenge?: string;
  };
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description?: string;
  technologies: Technology[];
}

export interface ProjectChecklistItem {
  id: string;
  title: string;
  category?: string;
}

export interface Project {
  id: string;
  number: number;
  title: string;
  tagline: string;
  stack: string[];
  description: string;
  architectureDiagram?: string;
  features: string[];
  advancedRequirements?: string[];
  deployment?: string;
  checklist: ProjectChecklistItem[];
}

export type ProductionProject = Project;

export interface ItemProgress {
  itemId: string;
  status: ItemStatus;
  masteryLevel?: MasteryLevel;
  notes?: string;
  completedAt?: string; // ISO date string
  updatedAt: string;
}

export interface TechMasteryProgress {
  technologyId: string;
  level: 'None' | 'Basic' | 'Intermediate' | 'Advanced' | 'Production';
  masteryL: MasteryLevel;
  answers: {
    q1_explain: boolean;
    q2_implement: boolean;
    q3_debug: boolean;
    q4_design: boolean;
    q5_production: boolean;
  };
  notes?: string;
}

export interface ProjectProgress {
  projectId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  completedChecklistIds: string[];
  notes?: string;
  repoUrl?: string;
  demoUrl?: string;
  completedAt?: string;
}

export interface DailyStudySession {
  date: string; // YYYY-MM-DD
  minutesSpent: number;
  completedItemIds: string[];
  focusItemIds: string[];
  notes: string;
}

export type Language = 'en' | 'bn';

export interface AppStateData {
  version: string;
  items: Record<string, ItemProgress>;
  techMastery: Record<string, TechMasteryProgress>;
  projects: Record<string, ProjectProgress>;
  dailySessions: Record<string, DailyStudySession>;
  todayFocusItemIds: string[];
  todayStudySeconds: number;
  isTimerRunning: boolean;
  aiFreeModeActive: boolean;
  theme: 'light' | 'dark';
  language: Language;
  lastActiveTab: string;
}

export const ALL_TECHNOLOGIES = [
  'TypeScript',
  'Node.js / Bun',
  'Go',
  'Linux & Terminal',
  'Git & GitHub',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'Elasticsearch',
  'REST & API Design',
  'Authentication & Security (JWT, OAuth, RBAC)',
  'Docker & Containerization',
  'Microservices Architecture',
  'RabbitMQ',
  'Apache Kafka',
  'gRPC & Protocol Buffers',
  'WebSockets & SSE',
  'Nginx & Reverse Proxy',
  'CI/CD (GitHub Actions)',
  'Terraform (IaC)',
  'Kubernetes (K8s)',
  'AWS Cloud Architecture',
  'Observability (Prometheus & Grafana)',
  'Distributed Tracing (OpenTelemetry & Jaeger)',
  'Logging (ELK / Loki)',
  'System Design & Scalability',
  'Payment Gateways (Stripe, SSLCommerz)',
  'Testing (Unit, Integration, Load/k6)',
  'Web Security (OWASP Top 10)'
];

export const NON_NEGOTIABLE_MASTERY_RULES = [
  {
    technology: 'Docker',
    rule: 'Never run production containers as root; use multi-stage builds and understand layer caching.',
    requirement: 'Image size under 150MB, non-root user, proper .dockerignore, build cache optimization.'
  },
  {
    technology: 'PostgreSQL',
    rule: 'Never write a query without checking EXPLAIN ANALYZE on realistic data sizes; design indexes intentionally.',
    requirement: 'Understand B-tree vs GIN vs GiST, connection pooling (PgBouncer), vacuuming, transactions (ACID).'
  },
  {
    technology: 'Redis',
    rule: 'Never use Redis without TTL, memory eviction policies, and eviction monitoring in production.',
    requirement: 'Know when to use String vs Hash vs Sorted Set, cache stampede prevention, distributed locking (Redlock).'
  },
  {
    technology: 'Git',
    rule: 'Master interactive rebase, bisect, reflog, and cherry-pick; never be afraid of resolving merge conflicts.',
    requirement: 'Clean conventional commits, feature branching, squash merges, GitOps workflows.'
  },
  {
    technology: 'Linux',
    rule: 'Diagnose CPU, Memory, Disk, and Network bottlenecks with native CLI tools without GUI dashboards.',
    requirement: 'htop/top, vmstat, iostat, ss/netstat, tcpdump, lsof, journalctl, strace, systemd services.'
  },
  {
    technology: 'API Design',
    rule: 'Every endpoint must have consistent error responses, input validation (Zod), rate limiting, and idempotency.',
    requirement: 'Standard HTTP status codes, structured error payloads, RFC-7807 problem details, pagination.'
  },
  {
    technology: 'Security',
    rule: 'Never store plain secrets in repos or Docker images; use environment variables, Vault, or KMS.',
    requirement: 'JWT rotation + blacklisting, Argon2/bcrypt password hashing, CSRF/CORS, SQL injection prevention.'
  },
  {
    technology: 'Kubernetes',
    rule: 'Always define CPU/memory requests & limits, liveness & readiness probes, and PodDisruptionBudgets.',
    requirement: 'Deployments, Services, Ingress (NGINX/Traefik), ConfigMaps/Secrets, HPA autoscaling.'
  },
  {
    technology: 'Kafka',
    rule: 'Understand consumer groups, partition keys, delivery guarantees (at-least-once), and consumer lag.',
    requirement: 'Topic replication factor ≥ 3, acks=all, idempotent producers, dead-letter queues (DLQ).'
  },
  {
    technology: 'CI/CD',
    rule: 'Every commit to main must pass automated linting, type checks, unit tests, integration tests, and security scans.',
    requirement: 'Zero manual deployment steps to staging or production; automated rollback on healthcheck failure.'
  },
  {
    technology: 'Monitoring',
    rule: 'If an error happens in production and you don’t get an alert with actionable trace context, your system is blind.',
    requirement: 'RED metrics (Rate, Errors, Duration), USE method, Grafana alerts to PagerDuty/Slack, p95/p99 latencies.'
  },
  {
    technology: 'System Design',
    rule: 'Every architecture decision is a trade-off. Be able to defend why you chose tool X over tool Y.',
    requirement: 'CAP theorem, ACID vs BASE, synchronous vs asynchronous, horizontal vs vertical scaling.'
  }
];
