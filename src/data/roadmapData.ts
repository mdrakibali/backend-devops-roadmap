import { Phase } from '../types';

export const ROADMAP_PHASES: Phase[] = [
  {
    id: 'phase-1',
    number: 1,
    title: 'Phase 1 — Core Engineering',
    subtitle: 'Linux, Networking, Git, JS/TS, Node.js, Express & API Engineering',
    description: 'Master the operating system, network protocols, runtime internals, and API fundamentals without depending on AI code generation.',
    technologies: [
      {
        id: 'tech-linux',
        title: 'Linux + Computer Foundation',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'Command line fluency, processes, file descriptors, systemd, sockets, and server diagnostics.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'linux-terminal', title: 'Terminal Navigation & Shortcuts', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-fs', title: 'Linux Filesystem Hierarchy (/, /etc, /var, /usr)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-paths', title: 'Absolute vs Relative Paths', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-perms', title: 'File Permissions (chmod, chown, octal/symbolic)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-users', title: 'Users & Groups Management (useradd, usermod, sudoers)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-env', title: 'Environment Variables & Shell Profiles (.bashrc, /etc/environment)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-pkg', title: 'Package Managers (apt, dnf, apk)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-ssh-basic', title: 'SSH Basics (ssh user@host, known_hosts, config file)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-pipes', title: 'Pipes & Redirection (|, >, >>, 2>&1, /dev/null)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-text-tools', title: 'Text Processing (grep, sed, awk, cut, sort, uniq)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-archives', title: 'Compression & Archives (tar, gzip, zip)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-proc-basic', title: 'Process Basics (ps, top, kill, pkill, bg, fg, nice)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' },
              { id: 'linux-cron', title: 'Scheduled Tasks with Cron (crontab syntax, log handling)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'linux-systemd', title: 'systemd Service Architecture & Unit Files (.service)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-systemctl', title: 'systemctl Service Control (start, enable, reload, status)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-journalctl', title: 'journalctl Log Inspection & Filtering (-u, -f, --since)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-signals', title: 'Process Signals (SIGTERM, SIGKILL, SIGHUP, SIGINT, SIGUSR1)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-fd', title: 'File Descriptors (stdin 0, stdout 1, stderr 2, limits)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-sockets', title: 'Unix Domain Sockets vs TCP Sockets', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-proc-sys', title: 'Virtual Filesystems (/proc and /sys exploration)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-mount', title: 'Mounting & Partitions (df, du, lsblk, fstab)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-res-mon', title: 'Resource Monitoring (htop, vmstat, iostat, free -m)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-logrotate', title: 'Log Management & logrotate Configuration', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-ssh-keys', title: 'SSH Keys (ed25519, authorized_keys, ssh-agent, disabling password auth)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-firewall', title: 'Firewall Management (UFW / nftables rules)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' },
              { id: 'linux-bash', title: 'Production Bash Scripting (set -euo pipefail, traps, functions)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'linux-proc-life', title: 'Process Lifecycle & Fork/Exec Model (Zombie & Orphan processes)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-cgroups-ns', title: 'Namespaces & cgroups (The foundation of containers)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-mem-swap', title: 'Memory Architecture, Page Cache, OOM Killer & Swap Tuning', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-cpu-sched', title: 'CPU Scheduling Concepts (CFS, context switches, load average)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-disk-io', title: 'Disk I/O Bottlenecks, Buffering & Sync (fsync, direct I/O)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-tcp-sockets', title: 'TCP Sockets in Linux (SYN queues, TIME_WAIT, keepalive)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-dns-res', title: 'DNS Resolution in Linux (/etc/resolv.conf, systemd-resolved)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-kernel-user', title: 'Kernel vs User-space Boundary & System Calls', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-limits', title: 'Resource Limits (/etc/security/limits.conf, ulimit, nofile)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-graceful', title: 'System-level Graceful Shutdown & Signal Propagation', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' },
              { id: 'linux-strace', title: 'System Call Tracing with strace & Process Inspection with lsof', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Advanced' }
            ]
          },
          {
            level: 'Production',
            items: [
              { id: 'linux-prod-hardening', title: 'Server Hardening (SSH port change, fail2ban, auditd, sysctl.conf security)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Production' },
              { id: 'linux-prod-diag', title: 'Incident Root-Cause Diagnostics (100% CPU, OOM crash, full inode table, port exhaustion)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Production' },
              { id: 'linux-prod-backup', title: 'Automated Backup Cron Scripts with Offsite Sync & Recovery Verification', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-linux', technologyTitle: 'Linux', level: 'Production' }
            ]
          }
        ],
        handsOnLab: 'Spin up a clean Debian VPS: Create non-root sudoer, configure SSH ed25519 key login, harden SSH, configure UFW firewall, install Node, PostgreSQL, and Redis, configure custom systemd service, setup logrotate, automatic security patches, automated backup script, and perform a real restore test.',
        masteryTest: 'If server CPU hits 100%, RAM runs out (OOM), disk/inode is full, service is dead, or ports are stuck in TIME_WAIT, identify the root cause using raw Linux commands without checking AI.'
      },
      {
        id: 'tech-networking',
        title: 'Networking & HTTP Protocols',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'TCP/IP, DNS, TLS handshakes, HTTP/1.1 vs HTTP/2/3, reverse proxies, and connection pooling.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'net-ip', title: 'IP Addresses (IPv4, IPv6, Public vs Private IP ranges)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' },
              { id: 'net-ports', title: 'Ports & Port Ranges (Standard ports: 80, 443, 22, 5432, 6379, Ephemeral ports)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' },
              { id: 'net-tcp-udp', title: 'TCP vs UDP Protocols & Use Cases', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' },
              { id: 'net-http-req', title: 'HTTP/HTTPS Request-Response Anatomy', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' },
              { id: 'net-dns-basic', title: 'DNS Resolution Flow (Root -> TLD -> Authoritative Nameservers)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' },
              { id: 'net-localhost', title: 'Localhost, 127.0.0.1, and 0.0.0.0 Binding Nuances', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'net-tcp-handshake', title: 'TCP 3-Way Handshake (SYN, SYN-ACK, ACK) & 4-Way Teardown (FIN/ACK)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-http-methods', title: 'HTTP Methods & Idempotency (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-status-codes', title: 'HTTP Status Codes (2xx, 3xx redirects, 4xx client errors, 5xx server errors)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-headers-cookies', title: 'HTTP Headers, Content-Type, CORS, and Cookie Attributes', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-keepalive', title: 'HTTP Keep-Alive & Persistent TCP Connections', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-http1-2', title: 'HTTP/1.1 (Head-of-Line Blocking) vs HTTP/2 (Binary Framing, Streams, Multiplexing)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-tls-handshake', title: 'TLS 1.2 / 1.3 Handshake (Asymmetric Key Exchange, Symmetric Encryption, Ciphers)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-dns-records', title: 'DNS Records (A, AAAA, CNAME, MX, TXT, NS, TTL Strategy)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-reverse-proxy', title: 'Reverse Proxy vs Forward Proxy Architecture', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' },
              { id: 'net-nat-subnet', title: 'NAT (Network Address Translation) & Subnet CIDR Basics (/24, /16)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'net-tcp-retrans', title: 'TCP Retransmissions, Congestion Window, and Latency vs Bandwidth', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-conn-pooling', title: 'Backend Connection Pooling (HTTP Agents, DB Pools, Socket Reuse)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-timeouts', title: 'Timeout Hierarchy (Client timeout, Proxy connect/read timeout, App timeout, DB timeout)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-lb-algos', title: 'Load Balancing Algorithms (Round Robin, Least Connections, IP Hash, Consistent Hashing)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-tls-certs', title: 'TLS Certificates (CA Trust Chain, Let’s Encrypt ACME, OCSP Stapling, SNI)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-http3-quic', title: 'HTTP/3 and QUIC Protocol (UDP-based zero-RTT connection resumption)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' },
              { id: 'net-diag-tools', title: 'Network Failure Diagnosis (curl -v, dig, traceroute, tcpdump, netstat/ss, nc)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-networking', technologyTitle: 'Networking', level: 'Advanced' }
            ]
          }
        ],
        diagram: 'Browser → DNS → Internet → Load Balancer → Nginx → Node API (→ Redis & PostgreSQL). For each hop: specify port, protocol, where TCP connections terminate, where timeouts trigger, and how failure presents.',
        challenge: 'Diagnose why a client receives 502 Bad Gateway vs 504 Gateway Timeout across the reverse proxy stack.'
      },
      {
        id: 'tech-git',
        title: 'Git & GitHub Engineering',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'Branching strategies, interactive rebase, bisect, reflog recovery, and CI gate checks.',
        levels: [
          {
            level: 'Foundation',
            items: [
              { id: 'git-core-commands', title: 'Core Git Workflow (init, clone, add, commit, status, log, diff)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Foundation' },
              { id: 'git-branching', title: 'Branching & Merging (branch, checkout, switch, merge, fast-forward)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Foundation' },
              { id: 'git-remotes', title: 'Remote Management (remote, fetch, pull, push, tracking branches)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Foundation' },
              { id: 'git-undo', title: 'Undo Operations (reset --soft/--mixed/--hard, revert, stash)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Foundation' },
              { id: 'git-cherrypick', title: 'Cherry-picking commits across branches', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Foundation' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'git-rebase-i', title: 'Interactive Rebase (squash, reword, edit, drop, fixup)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' },
              { id: 'git-reflog', title: 'Git Reflog (Recovering "lost" commits and deleted branches)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' },
              { id: 'git-conflicts', title: 'Manual Conflict Resolution & 3-way Merge Diffs', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' },
              { id: 'git-conventional', title: 'Conventional Commits & Semantic Versioning (SemVer)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' },
              { id: 'git-branch-strategy', title: 'Branching Strategies (Trunk-Based Development vs GitHub Flow)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' },
              { id: 'git-tags-releases', title: 'Annotated Tags & Release Branching', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'git-bisect', title: 'Automated Regression Hunting with git bisect run', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Advanced' },
              { id: 'git-atomic', title: 'Atomic Commits & Rollback Resilience', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Advanced' },
              { id: 'git-hooks', title: 'Git Hooks (pre-commit, commit-msg, Husky / lint-staged integration)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Advanced' },
              { id: 'git-monorepo', title: 'Monorepo Concepts (Workspaces, Turborepo / Nx cache principles)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-git', technologyTitle: 'Git', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Recovery Lab: Deliberately break a repository history (force-push over master, delete branches, create merge tangles), then recover the lost commits cleanly using git reflog, bisect, and cherry-pick.'
      },
      {
        id: 'tech-jsts',
        title: 'JavaScript + TypeScript for Backend',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'V8 internals, Event Loop mechanics, Promises, Buffers, Streams, and strict TypeScript types.',
        levels: [
          {
            level: 'Foundation',
            items: [
              { id: 'jsts-scope', title: 'Lexical Scope, Closures, and Hoisting Mechanics', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Foundation' },
              { id: 'jsts-promises', title: 'Promises Internals, async/await, and Promise Concurrency (all, allSettled, race, any)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Foundation' },
              { id: 'jsts-error-handling', title: 'Custom Error Classes & Error Bubbling Patterns', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Foundation' },
              { id: 'jsts-modules', title: 'CommonJS (require/exports) vs ES Modules (import/export)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Foundation' },
              { id: 'jsts-types-generics', title: 'TypeScript Types, Interfaces, Generics, and Utility Types (Partial, Record, Pick, Omit)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Foundation' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'jsts-eventloop', title: 'Event Loop, Call Stack, Microtasks (process.nextTick, Promise) & Macrotasks (setImmediate, setTimeout)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Intermediate' },
              { id: 'jsts-this-proto', title: 'this Binding & Prototype Inheritance vs ES6 Classes', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Intermediate' },
              { id: 'jsts-buffers-streams', title: 'Binary Data Handling: Node.js Buffer, ArrayBuffer, TypedArrays', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Intermediate' },
              { id: 'jsts-iterators', title: 'Iterators, Generators & Async Iteration (for await ... of)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Intermediate' },
              { id: 'jsts-type-narrowing', title: 'Advanced TS Type Narrowing, Discriminated Unions & Zod / Typebox schema inference', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'jsts-v8-memory', title: 'V8 Memory Model: Stack, Heap (New space, Old space, Large Object space)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-v8-gc', title: 'V8 Garbage Collection: Scavenge, Mark-Sweep, Mark-Compact, GC pauses', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-cpu-io-bound', title: 'CPU-bound vs I/O-bound Architecture in Single-Threaded Node', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-worker-threads', title: 'Worker Threads (worker_threads, SharedArrayBuffer, Atomics) vs child_process', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-clustering', title: 'Node.js Cluster Module & Master-Worker IPC', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-backpressure', title: 'Stream Backpressure & Zero-Copy Pipe Mechanics', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' },
              { id: 'jsts-memory-leaks', title: 'Memory Leak Detection, Heap Snapshots & Flame Graphs in Chrome DevTools / Clinic.js', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-jsts', technologyTitle: 'JS/TS', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Write a CPU-heavy cryptographic hash calculation: Benchmark it on the main thread vs offloading it to Worker Threads. Measure and explain latency differences and event loop blockages.'
      },
      {
        id: 'tech-nodejs',
        title: 'Node.js — Deep Mastery',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'Core modules, libuv thread pool, custom streams, lifecycle hooks, and graceful shutdown.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'node-fs-path', title: 'Core fs/promises, path, and os Modules', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Basic' },
              { id: 'node-http-module', title: 'Raw Node.js http and https Modules', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Basic' },
              { id: 'node-events', title: 'EventEmitter and Custom Event-Driven Patterns', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Basic' },
              { id: 'node-package-json', title: 'package.json, npm scripts, semver (^, ~, exact), lockfiles', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'node-loop-phases', title: 'Event Loop Phases: Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Intermediate' },
              { id: 'node-streams-types', title: 'Readable, Writable, Duplex, and Transform Streams', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Intermediate' },
              { id: 'node-pipeline', title: 'stream.pipeline for Safe Error Handling & Memory Release', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Intermediate' },
              { id: 'node-graceful', title: 'Graceful Process Termination (SIGTERM/SIGINT handlers, draining server connections, closing DB pools)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Intermediate' },
              { id: 'node-structured-logs', title: 'Structured JSON Logging (Pino / Winston) & Log Levels', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'node-libuv', title: 'libuv Internals: Event loop engine, thread pool default size (UV_THREADPOOL_SIZE=4)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Advanced' },
              { id: 'node-perf-hooks', title: 'perf_hooks (PerformanceObserver, eventLoopDelay measurements)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Advanced' },
              { id: 'node-abort-controller', title: 'AbortController & Request Cancellation across async operations', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Advanced' },
              { id: 'node-custom-transform', title: 'Building Custom Transform Streams for CSV Parsing / Gzip Streaming on the fly', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-nodejs', technologyTitle: 'Node.js', level: 'Advanced' }
            ]
          }
        ],
        coreProject: {
          title: 'Raw HTTP Streaming Server',
          description: 'Build a server using ONLY native http + stream modules (NO Express/frameworks) with large file uploads, streaming chunked responses, backpressure regulation, and graceful shutdown on SIGTERM.',
          features: ['Chunked file upload', 'Zero-buffer file streaming', 'Backpressure drain management', 'SIGTERM graceful drainage']
        }
      },
      {
        id: 'tech-express',
        title: 'Express.js & Middleware Architecture',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'Middleware onion model, nested routers, controller patterns, centralized error handling, and security headers.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'exp-routing', title: 'Express Routing (app.get, post, put, delete, route parameters, query strings)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Basic' },
              { id: 'exp-middleware-basic', title: 'Middleware Concept & next() Flow', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Basic' },
              { id: 'exp-controller-pattern', title: 'Controller & Service Separation', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Basic' },
              { id: 'exp-error-basic', title: 'Error-handling Middleware signature (err, req, res, next)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'exp-router-nested', title: 'Modular Express Routers (express.Router) & Route Grouping', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-validation', title: 'Request Validation (Zod schema middleware for body, params, query)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-auth-guard', title: 'Authentication & RBAC Authorization Middleware', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-pagination-sort', title: 'Generic Pagination, Filtering, and Sorting Handlers', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-file-upload', title: 'Multipart File Uploads (Multer stream & disk storage)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-centralized-error', title: 'Centralized AppError Architecture (Operational vs Programmer errors)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' },
              { id: 'exp-api-versioning', title: 'API Versioning Strategies (/api/v1, Accept headers)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'exp-correlation-id', title: 'Request Context & Correlation IDs (AsyncLocalStorage for tracing across async hops)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Advanced' },
              { id: 'exp-security-headers', title: 'Security Headers (Helmet configuration: CSP, HSTS, X-Frame-Options)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Advanced' },
              { id: 'exp-timeout-handling', title: 'Request Timeout Middleware & Circuit Breaker integration', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Advanced' },
              { id: 'exp-clean-arch', title: 'Clean / Hexagonal Architecture in Node.js (Entities, Use Cases, Repositories)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-express', technologyTitle: 'Express.js', level: 'Advanced' }
            ]
          }
        ],
        coreProject: {
          title: 'Multi-resource Production API',
          description: 'Build complete REST API with /auth, /users, /posts, /comments, /admin featuring cursor pagination, Zod validation, role authorization, audit logs, and centralized error system.',
          features: ['Cursor pagination', 'Role-based access control', 'Zod validation pipeline', 'Structured JSON audit logging', 'Centralized error handler'],
          deepChallenge: 'Build a mini Express clone from scratch on top of raw http module with custom Router, middleware pipeline, next() recursion, and error trapping.'
        }
      },
      {
        id: 'tech-api-eng',
        title: 'HTTP & API Engineering',
        phaseId: 'phase-1',
        tier: 'Tier S',
        description: 'REST design, idempotency keys, ETags, conditional requests, webhooks, and backward compatibility.',
        levels: [
          {
            level: 'Foundation',
            items: [
              { id: 'api-rest-principles', title: 'REST Resource Modeling & URI Naming Conventions', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Foundation' },
              { id: 'api-crud-json', title: 'CRUD Semantics & JSON Payload Standards', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Foundation' },
              { id: 'api-status-contract', title: 'Status Code Contracts (200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Foundation' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'api-cursor-pagination', title: 'Offset-Limit vs Keyset (Cursor-based) Pagination', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Intermediate' },
              { id: 'api-error-formats', title: 'Standardized Error Responses (RFC 7807 Problem Details)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Intermediate' },
              { id: 'api-openapi-spec', title: 'OpenAPI / Swagger Spec Generation & Contract Testing', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'api-idempotency-keys', title: 'Idempotency Keys Implementation (Redis-backed atomic reservation)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Advanced' },
              { id: 'api-etags-caching', title: 'ETags & Conditional Requests (If-None-Match, If-Match 304 Not Modified)', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Advanced' },
              { id: 'api-webhooks-sign', title: 'Webhook Architecture, Retries & HMAC SHA256 Signature Verification', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Advanced' },
              { id: 'api-compat', title: 'Zero-downtime Backward Compatibility & Deprecation Strategy', phaseId: 'phase-1', phaseTitle: 'Core Engineering', technologyId: 'tech-api-eng', technologyTitle: 'API Eng', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Design an idempotent payment execution endpoint such that sending the identical request 10 times concurrently results in exactly 1 debit transaction without duplicate charges.'
      }
    ]
  },
  {
    id: 'phase-2',
    number: 2,
    title: 'Phase 2 — Database Engineering',
    subtitle: 'PostgreSQL, Internals, MongoDB, Prisma & Drizzle ORM',
    description: 'Master ACID transactions, relational indexing, execution plans, MVCC, lock contention, document modeling, and zero-downtime migrations.',
    technologies: [
      {
        id: 'tech-postgres',
        title: 'PostgreSQL & SQL Engineering',
        phaseId: 'phase-2',
        tier: 'Tier S',
        description: 'Schema modeling, constraints, complex joins, CTEs, window functions, indexes, and transactions.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'pg-tables-types', title: 'Data Types, Tables, Primary Keys, Foreign Keys, CHECK constraints', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Basic' },
              { id: 'pg-crud-ops', title: 'CRUD (INSERT ON CONFLICT DO UPDATE / DO NOTHING, UPDATE, DELETE)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Basic' },
              { id: 'pg-clauses', title: 'SELECT, WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, OFFSET', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'pg-joins-all', title: 'All JOIN types (INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF JOIN)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-indexes-basic', title: 'B-Tree Indexes, Composite Indexes, Index Order, Unique Indexes', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-acid-tx', title: 'ACID Properties, BEGIN, COMMIT, ROLLBACK, SAVEPOINT', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-normalization', title: '1NF, 2NF, 3NF Normalization vs Practical Denormalization', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-cte-views', title: 'Views, Materialized Views, and Common Table Expressions (WITH / RECURSIVE)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-window-functions', title: 'Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, PARTITION BY)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' },
              { id: 'pg-explain-basic', title: 'EXPLAIN & Query Planner Output Interpretation', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'pg-isolation-levels', title: 'Isolation Levels: Read Committed, Repeatable Read, Serializable (Phenomena: Dirty read, Non-repeatable read, Phantom read, Serialization anomaly)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-row-locks', title: 'Row Locking (SELECT ... FOR UPDATE, FOR NO KEY UPDATE, FOR SHARE, SKIP LOCKED, NOWAIT)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-deadlocks-solve', title: 'Deadlock Detection, Ordering Locks & Resolution', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-explain-analyze', title: 'EXPLAIN (ANALYZE, BUFFERS): Sequential Scan vs Index Scan vs Bitmap Heap Scan', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-special-indexes', title: 'Partial Indexes, Covering Indexes (INCLUDE), Expression Indexes, GIN / GiST', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-partitioning', title: 'Table Partitioning (Range, List, Hash Partitioning strategies)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-jsonb-ops', title: 'JSONB Data Type, Operators (@>, ->, ->>), GIN indexing for JSONB', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' },
              { id: 'pg-advisory-locks', title: 'PostgreSQL Advisory Locks (pg_advisory_lock) for Application Synchronization', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-postgres', technologyTitle: 'PostgreSQL', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Order + Inventory + Payment Schema: Write complete transactional schemas for users, products, inventory, orders, order_items, payments, and refunds. Implement SELECT FOR UPDATE to prevent inventory overselling race conditions under concurrent checkouts.'
      },
      {
        id: 'tech-pg-internals',
        title: 'PostgreSQL Internals & Performance',
        phaseId: 'phase-2',
        tier: 'Tier S',
        description: 'Process architecture, shared buffers, WAL, checkpoints, autovacuum tuning, and connection pooling.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'pgin-proc-arch', title: 'Postgres Process Architecture (Postmaster, background worker, backend per connection)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-shared-buffers', title: 'Shared Buffers & OS Page Cache Interaction', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-wal', title: 'Write-Ahead Logging (WAL) & fsync guarantees', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-checkpoints', title: 'Checkpoints (checkpoint_completion_target, max_wal_size)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-mvcc-tuples', title: 'MVCC Tuple Header (xmin, xmax, t_ctid) & Visibility Map', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-vacuum-bloat', title: 'VACUUM, Autovacuum Tuning, Table Bloat & Free Space Map (FSM)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-pgbouncer', title: 'Connection Pooling (PgBouncer: Session, Transaction, Statement pooling modes)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-replication', title: 'Streaming Replication, Replication Slots & Read Replicas', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' },
              { id: 'pgin-pitr', title: 'Point-In-Time Recovery (PITR) & Basebackups (pg_basebackup + WAL archive)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-pg-internals', technologyTitle: 'PG Internals', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Run a query on 5 million rows, inspect EXPLAIN ANALYZE, identify sequential scan bottleneck, add composite index, verify execution drops from 1200ms to 2ms. Then intentionally trigger a deadlock between two concurrent transactions, capture the deadlock error, and fix lock acquisition ordering.'
      },
      {
        id: 'tech-mongo',
        title: 'MongoDB & Document Modeling',
        phaseId: 'phase-2',
        tier: 'Tier A',
        description: 'Document collections, compound indexes, aggregation pipelines, replica sets, and high-cardinality modeling.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'mongo-doc-col', title: 'BSON format, Documents, Collections, and ObjectIds', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Basic' },
              { id: 'mongo-crud', title: 'CRUD operations (insertOne, find, updateOne with $set/$push, deleteOne)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Basic' },
              { id: 'mongo-mongoose-schema', title: 'Mongoose Schemas, Models, Hooks (pre/post save), and Validation', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'mongo-indexes', title: 'Single & Compound Indexes (ESR rule: Equality, Sort, Range)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Intermediate' },
              { id: 'mongo-aggregation', title: 'Aggregation Pipeline ($match, $group, $project, $lookup, $unwind, $facet)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Intermediate' },
              { id: 'mongo-transactions', title: 'Multi-document ACID Transactions in Replica Sets', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Intermediate' },
              { id: 'mongo-pagination', title: 'Pagination (Skip/Limit vs Bucket / _id Range queries)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'mongo-replica-concerns', title: 'Replica Set Architecture, Write Concern (w: "majority") & Read Preference', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Advanced' },
              { id: 'mongo-change-streams', title: 'Change Streams for Real-time Reactive Events', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Advanced' },
              { id: 'mongo-modeling-tradeoffs', title: 'Embedding vs Referencing Trade-offs for High Cardinality Relations', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-mongo', technologyTitle: 'MongoDB', level: 'Advanced' }
            ]
          }
        ],
        coreProject: {
          title: 'Social Activity System',
          description: 'Build posts, comments, reactions, notifications, and activity feed aggregation reports. Compare the performance and query patterns against PostgreSQL.',
          features: ['Activity aggregation feed', 'Nested comment trees', 'Change streams notification dispatcher']
        }
      },
      {
        id: 'tech-prisma-drizzle',
        title: 'Prisma & Drizzle ORM',
        phaseId: 'phase-2',
        tier: 'Tier A',
        description: 'Type-safe schema definitions, migrations, raw query escapability, N+1 query prevention, and zero-downtime schema evolution.',
        levels: [
          {
            level: 'Intermediate',
            items: [
              { id: 'orm-prisma-schema', title: 'Prisma: Schema definition, Relations (1:1, 1:N, M:N), and Client generation', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Intermediate' },
              { id: 'orm-prisma-migrate', title: 'Prisma: Migrations workflow (prisma migrate dev / deploy)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Intermediate' },
              { id: 'orm-drizzle-schema', title: 'Drizzle: Schema declaration using TypeScript types (pgTable, serial, text, etc.)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Intermediate' },
              { id: 'orm-drizzle-queries', title: 'Drizzle: SQL-like query builder, prepared statements, and relational queries', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Intermediate' },
              { id: 'orm-nplusone', title: 'N+1 Query Problem Detection & Resolution (DataLoader / batch fetching)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'orm-zero-downtime', title: 'Zero-Downtime Migration Strategy (Expand-and-Contract phase pattern)', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Advanced' },
              { id: 'orm-pool-tx', title: 'Transaction Boundaries & Connection Pooling with Serverless / Containers', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Advanced' },
              { id: 'orm-benchmarking', title: 'Raw SQL vs Prisma vs Drizzle: Query latency, Bundle size, CPU overhead benchmarks', phaseId: 'phase-2', phaseTitle: 'Database Engineering', technologyId: 'tech-prisma-drizzle', technologyTitle: 'Prisma & Drizzle', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Execute a zero-downtime migration on production: Split users.name into users.first_name and users.last_name without downtime or data loss using the 4-step Expand & Contract pattern.'
      }
    ]
  },
  {
    id: 'phase-3',
    number: 3,
    title: 'Phase 3 — Production Backend',
    subtitle: 'Auth, Security, Redis, Caching, Rate Limiting, Queues, Testing & Observability',
    description: 'Build enterprise-grade resilience: secure sessions, token rotation, distributed caching, BullMQ job pipelines, test pyramid, and RED metrics.',
    technologies: [
      {
        id: 'tech-auth',
        title: 'Authentication & Session Architecture',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Bcrypt/Argon2 hashing, stateful sessions, JWT rotation, OAuth2/OIDC, and RBAC.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'auth-hashing', title: 'Password Hashing (Argon2id vs Bcrypt with salt rounds)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Basic' },
              { id: 'auth-cookies-basic', title: 'Cookie Attributes (HttpOnly, Secure, SameSite=Strict/Lax)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Basic' },
              { id: 'auth-jwt-basic', title: 'JWT Structure (Header, Payload, Signature) & Verification', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'auth-refresh-rotation', title: 'Access Token + Refresh Token Rotation with Reuse Detection', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Intermediate' },
              { id: 'auth-sessions-redis', title: 'Stateful Redis Sessions vs Stateless JWTs: Trade-off Analysis', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Intermediate' },
              { id: 'auth-password-reset', title: 'Secure Password Reset Flows (Crypto random tokens, single-use, short TTL)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Intermediate' },
              { id: 'auth-rbac', title: 'Role-Based Access Control (RBAC) & Permission Matrices', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'auth-session-revocation', title: 'Instant Token Revocation & Multi-Device Session Management (Revoke All / Revoke One)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Advanced' },
              { id: 'auth-csrf-protection', title: 'CSRF Protection (Double Submit Cookie & Custom Headers)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Advanced' },
              { id: 'auth-oauth2-oidc', title: 'OAuth 2.0 / OIDC Authorization Code Flow with PKCE', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Advanced' },
              { id: 'auth-webauthn', title: 'WebAuthn / Passkeys Architecture Concepts', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-auth', technologyTitle: 'Auth', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Build a custom session-based auth engine: login, logout, revoke all sessions, revoke specific device by ID, automatic session rotation on privilege escalation, and CSRF guard.'
      },
      {
        id: 'tech-security',
        title: 'Web Security & OWASP Hardening',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'OWASP Top 10, Injection attacks, IDOR, SSRF, secret management, and threat modeling.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'sec-sqli', title: 'SQL Injection Prevention (Parameterized queries, ORM safety, avoiding raw concat)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Basic' },
              { id: 'sec-xss', title: 'Cross-Site Scripting (XSS: Stored, Reflected, DOM-based)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Basic' },
              { id: 'sec-cors', title: 'CORS Configuration (Origin, Credentials, Allowed Headers, Preflight OPTIONS)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'sec-idor', title: 'Insecure Direct Object References (IDOR) & Tenant Authorization Checks', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Intermediate' },
              { id: 'sec-ssrf', title: 'Server-Side Request Forgery (SSRF) Prevention (IP blacklisting, URL sanitization)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Intermediate' },
              { id: 'sec-bruteforce', title: 'Brute Force & Credential Stuffing Defenses (Account lockouts, progressive delays)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Intermediate' },
              { id: 'sec-file-upload-sec', title: 'Secure File Uploads (Magic bytes verification, randomized filenames, separate storage domain)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'sec-threat-modeling', title: 'Threat Modeling (STRIDE framework, Trust Boundaries, Attack Surface)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Advanced' },
              { id: 'sec-csp-hsts', title: 'Content Security Policy (CSP), Strict-Transport-Security (HSTS), Subresource Integrity', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Advanced' },
              { id: 'sec-secret-rotation', title: 'Secret Management (Environment separation, KMS, Secret Rotation, avoiding git commits)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Advanced' },
              { id: 'sec-supply-chain', title: 'Supply-Chain Security (npm audit, Snyk, lockfile validation, pinned versions)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-security', technologyTitle: 'Security', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Security Lab: Build an intentionally vulnerable Express endpoint (SQLi, IDOR, SSRF), execute attacks using curl, patch all vulnerabilities, and write automated security regression tests.'
      },
      {
        id: 'tech-redis',
        title: 'Redis & In-Memory Data Structures',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Data types, TTL, caching patterns, distributed locks, Pub/Sub, persistence, and Sentinel/Cluster.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'redis-types-basic', title: 'Data Types: Strings, Hashes, Lists, Sets, Sorted Sets (ZSET)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Basic' },
              { id: 'redis-ttl', title: 'Key Expiration (EXPIRE, TTL, PEXPIRE)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'redis-cache-patterns', title: 'Cache Patterns: Cache-Aside, Write-Through, Write-Behind', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Intermediate' },
              { id: 'redis-pubsub', title: 'Redis Pub/Sub (PUBLISH, SUBSCRIBE, PSUBSCRIBE)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Intermediate' },
              { id: 'redis-dist-lock-basic', title: 'Distributed Locking (SET resource_name token NX PX milliseconds)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Intermediate' },
              { id: 'redis-counters', title: 'Atomic Counters & Rate Limiter implementations (INCR, DECR, EXPIRE)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'redis-persistence', title: 'Redis Persistence: RDB Snapshots vs AOF (Append Only File) & fsync policies', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Advanced' },
              { id: 'redis-eviction', title: 'Eviction Policies (allkeys-lru, volatile-lru, noeviction, maxmemory tuning)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Advanced' },
              { id: 'redis-lua', title: 'Atomic Operations with Lua Scripting (EVAL)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Advanced' },
              { id: 'redis-streams', title: 'Redis Streams (XADD, XREAD, XREADGROUP, Consumer Groups, XACK)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Advanced' },
              { id: 'redis-sentinel-cluster', title: 'High Availability: Redis Sentinel Failover vs Redis Cluster Sharding', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-redis', technologyTitle: 'Redis', level: 'Advanced' }
            ]
          }
        ],
        masteryTest: 'Critical Production Question: If Redis crashes or goes unreachable, what does your application do? Design fail-open vs fail-closed strategies, timeouts, circuit breakers, and database fallback pathways.'
      },
      {
        id: 'tech-caching',
        title: 'Caching Strategies & Cache Invalidation',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Cache stampede, stale-while-revalidate, dogpile prevention, and consistency.',
        levels: [
          {
            level: 'Intermediate',
            items: [
              { id: 'cache-invalidation', title: 'Cache Invalidation Strategies (Event-based vs TTL-based)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Intermediate' },
              { id: 'cache-stampede', title: 'Cache Stampede / Thundering Herd Problem', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Intermediate' },
              { id: 'cache-swr', title: 'Stale-While-Revalidate & Background Cache Warming', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'cache-probabilistic', title: 'Probabilistic Early Expiration (XFetch algorithm)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Advanced' },
              { id: 'cache-negative', title: 'Negative Caching (Preventing repeated queries for nonexistent items)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Advanced' },
              { id: 'cache-consistency', title: 'Dual-Write Consistency & Cache-Aside Failure Modes', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-caching', technologyTitle: 'Caching', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-ratelimit',
        title: 'Rate Limiting & Traffic Shaping',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Token bucket, leaky bucket, sliding window counter, and distributed Redis limiters.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'rl-fixed-window', title: 'Fixed Window Counter & Boundary Burst Vulnerability', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Basic' },
              { id: 'rl-headers', title: 'Rate Limit HTTP Headers (X-RateLimit-Limit, Remaining, Reset, Retry-After)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'rl-sliding-window', title: 'Sliding Window Log & Sliding Window Counter Algorithms', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Intermediate' },
              { id: 'rl-token-bucket', title: 'Token Bucket & Leaky Bucket Algorithm Implementations', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Intermediate' },
              { id: 'rl-keys', title: 'Rate Limiting Key Strategies: Per-IP, Per-User, Per-API Key, Per-Endpoint', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'rl-distributed-lua', title: 'Distributed Rate Limiting using Redis + Atomic Lua Scripting', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Advanced' },
              { id: 'rl-abuse-defense', title: 'Exponential Backoff on Failed Logins & Dynamic Account Lockout Tiers', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-ratelimit', technologyTitle: 'Rate Limiting', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-bullmq',
        title: 'BullMQ & Background Jobs',
        phaseId: 'phase-3',
        tier: 'Tier A',
        description: 'Queues, producers, workers, delayed jobs, retries, dead-letter queues, and concurrency control.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'bull-queue-worker', title: 'Queue, Producer, Worker, and Job Data Structures', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Basic' },
              { id: 'bull-job-types', title: 'Standard Jobs vs Delayed Jobs vs Repeatable (Cron) Jobs', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'bull-lifecycle', title: 'Job Lifecycle: active, completed, failed, delayed, waiting, paused', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Intermediate' },
              { id: 'bull-retries-backoff', title: 'Retries, Exponential Backoff strategies, and Concurrency tuning', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Intermediate' },
              { id: 'bull-job-events', title: 'Job Events & Progress Reporting (job.updateProgress)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'bull-dlq', title: 'Dead-Letter Queues (DLQ) & Poison Pill Handling', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Advanced' },
              { id: 'bull-dedup-idempotency', title: 'Job Deduplication (jobId) & Worker Idempotency Guarantee', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Advanced' },
              { id: 'bull-crash-recovery', title: 'Worker Crash Recovery & Graceful Worker Draining on SIGTERM', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Advanced' },
              { id: 'bull-flows', title: 'Parent-Child Job Hierarchies & FlowProducer Orchestration', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-bullmq', technologyTitle: 'BullMQ', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-testing',
        title: 'Testing & QA Automation',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Unit tests, Supertest API tests, test containers, fixtures, load testing with k6.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'test-unit-basics', title: 'Unit Tests, Assertions, and Mocking (Vitest / Jest / Node Test Runner)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Basic' },
              { id: 'test-coverage', title: 'Code Coverage Metrics & What NOT to test', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'test-integration-api', title: 'API Integration Testing with Supertest', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Intermediate' },
              { id: 'test-db-isolation', title: 'Database Test Isolation (Transactions rollback per test / Testcontainers)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Intermediate' },
              { id: 'test-fixtures', title: 'Seed Fixtures & Factory Patterns for Reliable Test Data', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'test-e2e-contracts', title: 'End-to-End (E2E) & Contract Testing (Pact)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Advanced' },
              { id: 'test-load-k6', title: 'Load Testing, Stress Testing & Spike Testing using k6 / Artillery', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Advanced' },
              { id: 'test-chaos-race', title: 'Race-Condition & Concurrency Testing under Parallel Load', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-testing', technologyTitle: 'Testing', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-observability',
        title: 'Logging & Observability',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'Structured JSON logs, distributed tracing, RED metrics (Rate, Errors, Duration), OpenTelemetry, and dashboards.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'obs-log-levels', title: 'Log Levels (Fatal, Error, Warn, Info, Debug, Trace) Standards', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Basic' },
              { id: 'obs-healthchecks', title: 'Health Checks (/health/live vs /health/ready endpoints)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'obs-structured-json', title: 'Structured JSON Logging with Request/Correlation IDs', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Intermediate' },
              { id: 'obs-red-metrics', title: 'RED Metrics (Rate: req/sec, Errors: failed req/sec, Duration: latency p50/p95/p99)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Intermediate' },
              { id: 'obs-use-method', title: 'USE Method (Utilization, Saturation, Errors) for System Resources', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'obs-otel-tracing', title: 'OpenTelemetry (OTel) Distributed Tracing & Span Propagation', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Advanced' },
              { id: 'obs-dashboards-alerts', title: 'Prometheus Metrics Exposition & Grafana Dashboard Design', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Advanced' },
              { id: 'obs-central-logging', title: 'Centralized Log Aggregation (Vector / Promtail / Loki / CloudWatch)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-observability', technologyTitle: 'Observability', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-perf',
        title: 'Performance Engineering & Profiling',
        phaseId: 'phase-3',
        tier: 'Tier S',
        description: 'CPU profiling, memory leak diagnosis, event-loop lag, slow query optimization, and latency tuning.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'perf-cpu-profiling', title: 'CPU Profiling & Identifying Hot Paths in V8 (0x / Clinic.js Flame)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-perf', technologyTitle: 'Performance', level: 'Advanced' },
              { id: 'perf-memory-profiling', title: 'Heap Snapshots, Memory Retainers & Leak Root Cause Analysis', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-perf', technologyTitle: 'Performance', level: 'Advanced' },
              { id: 'perf-eventloop-lag', title: 'Event-Loop Lag Tracking & Synchronous Blockage Elimination', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-perf', technologyTitle: 'Performance', level: 'Advanced' },
              { id: 'perf-db-tuning', title: 'PostgreSQL pg_stat_statements & Slow Query Plan Optimization', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-perf', technologyTitle: 'Performance', level: 'Advanced' },
              { id: 'perf-percentiles', title: 'p95 and p99 Latency SLA Tuning (Target: p95 < 150ms)', phaseId: 'phase-3', phaseTitle: 'Production Backend', technologyId: 'tech-perf', technologyTitle: 'Performance', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Optimize a production API endpoint with p95 = 800ms down to p95 < 150ms. Benchmark before and after each optimization (indexes, Redis caching, connection pooling, lean serialization) and document the exact causal reason for each improvement.'
      }
    ]
  },
  {
    id: 'phase-4',
    number: 4,
    title: 'Phase 4 — Server & Deployment',
    subtitle: 'VPS Admin, Nginx, Load Balancing, Zero-Downtime, DR & Incident Drills',
    description: 'Master raw cloud VPS administration, Nginx configuration, SSL automation, stateful-to-stateless transitions, backup verification, and incident triage.',
    technologies: [
      {
        id: 'tech-vps',
        title: 'VPS & Linux Server Administration',
        phaseId: 'phase-4',
        tier: 'Tier S',
        description: 'Server hardening, systemd units, automated provisioning, and disaster drills.',
        levels: [
          {
            level: 'Intermediate',
            items: [
              { id: 'vps-provisioning', title: 'Clean VPS Bootstrapping (Non-root user, SSH keys, timezone, swapfile)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-vps', technologyTitle: 'VPS Admin', level: 'Intermediate' },
              { id: 'vps-systemd-units', title: 'Production systemd Units with Auto-Restart (Restart=always, RestartSec=5s)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-vps', technologyTitle: 'VPS Admin', level: 'Intermediate' },
              { id: 'vps-security-patching', title: 'Unattended Upgrades & Automated Security Kernel Updates', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-vps', technologyTitle: 'VPS Admin', level: 'Intermediate' }
            ]
          },
          {
            level: 'Production',
            items: [
              { id: 'vps-ansible-iac', title: 'Server Hardening & Automated Provisioning with Bash / Ansible', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-vps', technologyTitle: 'VPS Admin', level: 'Production' },
              { id: 'vps-disaster-drill', title: 'Production Disaster Drill: Recover server after unexpected hard reboot, corrupted disk partition, or filled /var/log', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-vps', technologyTitle: 'VPS Admin', level: 'Production' }
            ]
          }
        ]
      },
      {
        id: 'tech-nginx',
        title: 'Nginx Reverse Proxy & Traffic Management',
        phaseId: 'phase-4',
        tier: 'Tier S',
        description: 'Reverse proxy blocks, SSL termination, HTTP/2, caching, upstream load balancing, and WebSocket proxying.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'nginx-basic-config', title: 'Nginx Architecture, nginx.conf structure, and virtual hosts (sites-available / sites-enabled)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Basic' },
              { id: 'nginx-proxy-pass', title: 'proxy_pass directive & Header Forwarding (X-Forwarded-For, X-Real-IP, X-Forwarded-Proto)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'nginx-ssl-certbot', title: 'SSL / TLS Termination with Let’s Encrypt Certbot & Auto-Renewal cron', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Intermediate' },
              { id: 'nginx-gzip-cache', title: 'Gzip / Brotli Compression & Static File Caching (expires max, Cache-Control)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Intermediate' },
              { id: 'nginx-websocket', title: 'WebSocket Proxying (Upgrade & Connection headers forwarding)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'nginx-upstream-lb', title: 'Upstream Load Balancing (round-robin, least_conn, ip_hash, fail_timeout, max_fails)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Advanced' },
              { id: 'nginx-rate-limit-module', title: 'Nginx Rate Limiting (limit_req_zone, limit_conn_zone, burst, nodelay)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Advanced' },
              { id: 'nginx-zero-downtime', title: 'Zero-Downtime Reloads (nginx -s reload) & Blue/Green upstream switching', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-nginx', technologyTitle: 'Nginx', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Upstream Failover Lab: Configure Nginx to load balance across 3 Node.js instances (ports 3001, 3002, 3003). Kill one instance, observe traffic redistribution, test connection draining, and verify zero dropped requests.'
      },
      {
        id: 'tech-loadbalancing',
        title: 'Load Balancing & Horizontal Scaling',
        phaseId: 'phase-4',
        tier: 'Tier A',
        description: 'Stateless server design, sticky sessions vs token auth, health checks, and connection draining.',
        levels: [
          {
            level: 'Intermediate',
            items: [
              { id: 'lb-horizontal-vs-vertical', title: 'Horizontal vs Vertical Scaling Economics & Limits', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-loadbalancing', technologyTitle: 'Load Balancing', level: 'Intermediate' },
              { id: 'lb-stateless-design', title: 'Stateless Node.js Architecture (Moving local memory / uploads to Redis & S3)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-loadbalancing', technologyTitle: 'Load Balancing', level: 'Intermediate' },
              { id: 'lb-health-probes', title: 'Active vs Passive Health Checking Mechanisms', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-loadbalancing', technologyTitle: 'Load Balancing', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'lb-graceful-draining', title: 'Connection Draining / Deregistration Delay during Auto-Scaling', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-loadbalancing', technologyTitle: 'Load Balancing', level: 'Advanced' },
              { id: 'lb-db-bottleneck', title: 'Managing Database Connection Saturation as Application Instances Scale', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-loadbalancing', technologyTitle: 'Load Balancing', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-backup-dr',
        title: 'Backup & Disaster Recovery',
        phaseId: 'phase-4',
        tier: 'Tier S',
        description: 'Logical vs physical backups, automated restore testing, WAL archiving, RPO and RTO.',
        levels: [
          {
            level: 'Intermediate',
            items: [
              { id: 'bdr-pg-dump', title: 'PostgreSQL Logical Backups (pg_dump, pg_dumpall, gzip, custom format)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-backup-dr', technologyTitle: 'Backup & DR', level: 'Intermediate' },
              { id: 'bdr-offsite-encryption', title: 'Offsite Encrypted Storage (GPG encryption, pushing to AWS S3 / Cloudflare R2)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-backup-dr', technologyTitle: 'Backup & DR', level: 'Intermediate' }
            ]
          },
          {
            level: 'Production',
            items: [
              { id: 'bdr-pitr-archiving', title: 'PostgreSQL Continuous Archiving & Point-In-Time Recovery (PITR) with WAL-G / pgBackRest', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-backup-dr', technologyTitle: 'Backup & DR', level: 'Production' },
              { id: 'bdr-restore-testing', title: 'Automated Restore Verification (A backup is NOT a backup until tested via automated restore)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-backup-dr', technologyTitle: 'Backup & DR', level: 'Production' },
              { id: 'bdr-rpo-rto', title: 'RPO (Recovery Point Objective) & RTO (Recovery Time Objective) Calculations', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-backup-dr', technologyTitle: 'Backup & DR', level: 'Production' }
            ]
          }
        ]
      },
      {
        id: 'tech-incident-response',
        title: 'Production Incident Response & Triage',
        phaseId: 'phase-4',
        tier: 'Tier S',
        description: '8-step incident process: Detect, Reproduce, Isolate, Fix, Verify, Rollback, Document, Prevent.',
        levels: [
          {
            level: 'Production',
            items: [
              { id: 'inc-eight-steps', title: '8-Step Incident Protocol (Detect -> Reproduce -> Isolate -> Fix -> Verify -> Rollback -> Post-Mortem -> Prevent)', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-incident-response', technologyTitle: 'Incident Response', level: 'Production' },
              { id: 'inc-drills-pool', title: 'Live Incident Drills: DB connection exhaustion, Redis outage, queue memory leak, expired SSL, corrupted migration rollback', phaseId: 'phase-4', phaseTitle: 'Server & Deployment', technologyId: 'tech-incident-response', technologyTitle: 'Incident Response', level: 'Production' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'phase-5',
    number: 5,
    title: 'Phase 5 — DevOps & Cloud',
    subtitle: 'Docker, Compose, CI/CD, AWS Architecture & Deployment Strategies',
    description: 'Containerize multi-service applications, construct automated GitHub Actions pipelines, architect resilient AWS VPC networks, and master zero-downtime releases.',
    technologies: [
      {
        id: 'tech-docker',
        title: 'Docker & Containerization',
        phaseId: 'phase-5',
        tier: 'Tier S',
        description: 'Images, containers, multi-stage builds, non-root users, security scanning, and compose topologies.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'dock-images-containers', title: 'Images vs Containers, docker run, ps, exec, stop, rm, rmi', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Basic' },
              { id: 'dock-dockerfile-basic', title: 'Dockerfile Basics: FROM, WORKDIR, COPY, RUN, CMD vs ENTRYPOINT, EXPOSE', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Basic' },
              { id: 'dock-volumes-networks', title: 'Docker Volumes (Named vs Bind mounts) & Bridge Networks', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'dock-multistage', title: 'Multi-Stage Builds (Stripping dev dependencies, distroless / alpine images)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Intermediate' },
              { id: 'dock-compose-topology', title: 'Docker Compose (Services, Networks, Volumes, depends_on, env_file)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Intermediate' },
              { id: 'dock-healthcheck', title: 'Container HEALTHCHECK directives & restart policies', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Intermediate' },
              { id: 'dock-resource-limits', title: 'Container Resource Limits (--cpus, --memory, swap limits)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'dock-non-root', title: 'Security: Running as Non-Root User (USER node), Read-Only Filesystems', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Advanced' },
              { id: 'dock-build-cache', title: 'Optimizing Docker Layer Caching & BuildKit Cache Mounts', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Advanced' },
              { id: 'dock-signals', title: 'Signal Forwarding & PID 1 Handling (dumb-init / tini for graceful shutdown)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Advanced' },
              { id: 'dock-vuln-scan', title: 'Container Image Vulnerability Scanning (Trivy / Docker Scout)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-docker', technologyTitle: 'Docker', level: 'Advanced' }
            ]
          }
        ],
        handsOnLab: 'Dockerize Full Production Stack: Create production docker-compose.yml containing Node API, PostgreSQL with persistent volume, Redis, BullMQ Worker, and Nginx reverse proxy. Verify one-command launch via docker compose up.'
      },
      {
        id: 'tech-cicd',
        title: 'CI/CD Pipelines (GitHub Actions)',
        phaseId: 'phase-5',
        tier: 'Tier S',
        description: 'Automated test workflows, Docker registry publishing, staging deployments, health check gates, and automated rollbacks.',
        levels: [
          {
            level: 'Basic',
            items: [
              { id: 'ci-github-actions-basic', title: 'GitHub Actions Workflow syntax, Triggers (push, pull_request), and Runners', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Basic' },
              { id: 'ci-test-pipeline', title: 'Automated Lint, Typecheck, and Test Execution Pipeline', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Basic' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'ci-secrets-environments', title: 'GitHub Secrets, Environments, Approval Gates & Artifacts', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Intermediate' },
              { id: 'ci-docker-build-push', title: 'Building & Pushing Tagged Docker Images to GHCR / AWS ECR', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Intermediate' },
              { id: 'ci-pipeline-caching', title: 'Pipeline Cache Optimization (actions/cache for npm/yarn/docker layers)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'ci-zero-downtime-deploy', title: 'Zero-Downtime Deployment Automation with Health Check verification', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Advanced' },
              { id: 'ci-auto-rollback', title: 'Automated Rollback Trigger on Health Check Failure', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Advanced' },
              { id: 'ci-db-migration-pipe', title: 'Automated Database Migration Pipeline (Running migrations before code rollout)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-cicd', technologyTitle: 'CI/CD', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-aws',
        title: 'AWS & Cloud Architecture',
        phaseId: 'phase-5',
        tier: 'Tier S',
        description: 'VPC, subnets, IAM least privilege, EC2/ECS, RDS, S3, CloudFront, Route53, ALB, and multi-AZ fault tolerance.',
        levels: [
          {
            level: 'Foundation',
            items: [
              { id: 'aws-iam-foundations', title: 'IAM: Users, Groups, Roles, Policies, and Principle of Least Privilege', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Foundation' },
              { id: 'aws-ec2-s3', title: 'EC2 Instances, Security Groups, Key Pairs, and S3 Object Storage', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Foundation' },
              { id: 'aws-cloudwatch-route53', title: 'CloudWatch Metrics/Logs & Route 53 DNS Management', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Foundation' }
            ]
          },
          {
            level: 'Intermediate',
            items: [
              { id: 'aws-vpc-networking', title: 'VPC Architecture: Public vs Private Subnets, Internet Gateways, Route Tables, NAT Gateways', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Intermediate' },
              { id: 'aws-rds-pg', title: 'RDS PostgreSQL: Multi-AZ Deployment, Read Replicas, Automated Snapshots, Parameter Groups', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Intermediate' },
              { id: 'aws-alb-asg', title: 'Application Load Balancer (ALB), Target Groups & Auto Scaling Groups (ASG)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Intermediate' }
            ]
          },
          {
            level: 'Advanced',
            items: [
              { id: 'aws-ecs-ecr-fargate', title: 'ECS with Fargate / EC2: Task Definitions, Services, and ECR Repositories', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Advanced' },
              { id: 'aws-sqs-sns', title: 'SQS (Simple Queue Service: Standard vs FIFO) & SNS Pub/Sub Fanout', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Advanced' },
              { id: 'aws-cloudfront-cdn', title: 'CloudFront CDN Integration with S3 Origin Access Control (OAC)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Advanced' },
              { id: 'aws-secrets-ssm', title: 'Secrets Manager & Systems Manager (SSM) Parameter Store', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Advanced' }
            ]
          },
          {
            level: 'Production',
            items: [
              { id: 'aws-multi-az-dr', title: 'Multi-AZ High Availability, Cost Optimization & Disaster Recovery (RPO/RTO)', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Production' },
              { id: 'aws-full-arch-project', title: 'End-to-End AWS Production Architecture: Route53 -> ALB -> ECS/EC2 Node API -> RDS Postgres + Redis + S3/CloudFront', phaseId: 'phase-5', phaseTitle: 'DevOps & Cloud', technologyId: 'tech-aws', technologyTitle: 'AWS', level: 'Production' }
            ]
          }
        ],
        diagram: 'Route53 → ALB → EC2/ECS → Node API (→ RDS PostgreSQL, Redis, S3 → CloudFront) with CloudWatch monitoring. Explain traffic flow, public/private subnet isolation, and failure recovery.'
      }
    ]
  },
  {
    id: 'phase-6',
    number: 6,
    title: 'Phase 6 — Advanced Backend',
    subtitle: 'Event-Driven Systems, Distributed Architecture, Sagas & Patterns',
    description: 'Master asynchronous message brokers, delivery semantics, Outbox pattern, Saga orchestrations, and CQRS architectures.',
    technologies: [
      {
        id: 'tech-dist-sys',
        title: 'Distributed Systems Fundamentals',
        phaseId: 'phase-6',
        tier: 'Tier A',
        description: 'CAP Theorem, PACELC, consistency models, delivery semantics, clock drift, and idempotency.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'dist-cap-pacelc', title: 'CAP Theorem & PACELC Theorem in Practice (CP vs AP trade-offs)', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-dist-sys', technologyTitle: 'Distributed Systems', level: 'Advanced' },
              { id: 'dist-consistency-models', title: 'Consistency Models: Strong Consistency, Eventual Consistency, Read-Your-Writes', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-dist-sys', technologyTitle: 'Distributed Systems', level: 'Advanced' },
              { id: 'dist-delivery-semantics', title: 'Message Delivery Semantics: At-Most-Once, At-Least-Once, and The Exactly-Once Fallacy', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-dist-sys', technologyTitle: 'Distributed Systems', level: 'Advanced' },
              { id: 'dist-locks-redlock', title: 'Distributed Locking Algorithms (Redlock, Fencing Tokens)', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-dist-sys', technologyTitle: 'Distributed Systems', level: 'Advanced' },
              { id: 'dist-idempotency-dedup', title: 'Idempotency & Message Deduplication under duplicate deliveries', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-dist-sys', technologyTitle: 'Distributed Systems', level: 'Advanced' }
            ]
          }
        ],
        challenge: 'Build a distributed order-processing system where the message broker deliberately delivers identical events multiple times. Design the consumers to guarantee zero data corruption or double-processing.'
      },
      {
        id: 'tech-event-driven',
        title: 'Event-Driven Architecture & Patterns',
        phaseId: 'phase-6',
        tier: 'Tier A',
        description: 'Transactional Outbox, Saga orchestrator, CQRS, and Dead Letter Queue strategies.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'event-outbox-pattern', title: 'Transactional Outbox Pattern (Guaranteeing DB transaction + message publication atomicity)', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-event-driven', technologyTitle: 'Event-Driven', level: 'Advanced' },
              { id: 'event-saga-pattern', title: 'Saga Pattern (Choreography vs Orchestration for Distributed Transactions with Compensating actions)', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-event-driven', technologyTitle: 'Event-Driven', level: 'Advanced' },
              { id: 'event-cqrs-concepts', title: 'CQRS (Command Query Responsibility Segregation) & Event Sourcing Principles', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-event-driven', technologyTitle: 'Event-Driven', level: 'Advanced' },
              { id: 'event-modular-monolith', title: 'Modular Monolith Architecture → Domain Boundaries → Microservices Transition', phaseId: 'phase-6', phaseTitle: 'Advanced Backend', technologyId: 'tech-event-driven', technologyTitle: 'Event-Driven', level: 'Advanced' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'phase-7',
    number: 7,
    title: 'Phase 7 — Specialist Domains',
    subtitle: 'Media Processing, Full-Text Search, WebSockets & Streaming',
    description: 'High-volume media pipelines, search engines, real-time bidirectional sockets, and capacity planning.',
    technologies: [
      {
        id: 'tech-media-proc',
        title: 'File & Media Processing Systems',
        phaseId: 'phase-7',
        tier: 'Tier B',
        description: 'Multipart chunked uploads, signed S3 URLs, FFmpeg video encoding pipelines, and thumbnail generators.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'media-s3-signed-urls', title: 'Direct S3/R2 Multipart Uploads with Pre-Signed URLs', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-media-proc', technologyTitle: 'Media Processing', level: 'Advanced' },
              { id: 'media-ffmpeg-workers', title: 'FFmpeg Video Transcoding Pipeline (H.264/H.265, Multi-Resolution HLS / DASH)', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-media-proc', technologyTitle: 'Media Processing', level: 'Advanced' },
              { id: 'media-chunk-resume', title: 'Resumable Chunk Uploads (Tus protocol / Custom chunk worker)', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-media-proc', technologyTitle: 'Media Processing', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-search',
        title: 'Search & High-Volume Data Processing',
        phaseId: 'phase-7',
        tier: 'Tier B',
        description: 'PostgreSQL Full-Text Search, Elasticsearch / OpenSearch indexing, analyzers, and autocomplete.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'search-pg-fts', title: 'PostgreSQL Full-Text Search (tsvector, tsquery, GIN indexes, ranking with ts_rank)', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-search', technologyTitle: 'Search', level: 'Advanced' },
              { id: 'search-opensearch', title: 'OpenSearch / Elasticsearch Concepts (Tokenizers, Analyzers, Inverted Index, Aggregations)', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-search', technologyTitle: 'Search', level: 'Advanced' }
            ]
          }
        ]
      },
      {
        id: 'tech-websockets',
        title: 'WebSockets, Real-Time & Streaming',
        phaseId: 'phase-7',
        tier: 'Tier A',
        description: 'WebSocket lifecycle, heartbeat pings, Redis adapter for multi-instance scaling, and SSE.',
        levels: [
          {
            level: 'Advanced',
            items: [
              { id: 'ws-protocol-lifecycle', title: 'WebSocket Protocol Handshake, Frames, and Heartbeat (Ping/Pong)', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-websockets', technologyTitle: 'WebSockets', level: 'Advanced' },
              { id: 'ws-redis-scaling', title: 'Scaling WebSockets horizontally with Redis Streams / PubSub adapter', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-websockets', technologyTitle: 'WebSockets', level: 'Advanced' },
              { id: 'ws-sse', title: 'Server-Sent Events (SSE) for Unidirectional Streaming', phaseId: 'phase-7', phaseTitle: 'Specialist', technologyId: 'tech-websockets', technologyTitle: 'WebSockets', level: 'Advanced' }
            ]
          }
        ]
      }
    ]
  }
];

export const SELF_ASSESSMENT_TECHNOLOGIES = [
  'Linux',
  'Networking',
  'Git',
  'JavaScript/TypeScript',
  'Node.js',
  'Express',
  'API Engineering',
  'PostgreSQL/SQL',
  'PostgreSQL Internals',
  'MongoDB/Mongoose',
  'Prisma',
  'Drizzle',
  'Redis',
  'BullMQ',
  'Auth/Sessions',
  'Security',
  'Caching',
  'Rate Limiting',
  'Testing',
  'Observability',
  'Performance',
  'VPS/Linux Admin',
  'Nginx',
  'Load Balancing',
  'Docker',
  'CI/CD',
  'AWS',
  'Backup/Recovery',
  'Architecture',
  'Distributed Systems'
];

export const CORE_MASTERY_QUESTIONS = [
  { id: 'q1', text: 'Can I explain this concept without AI?', bangla: 'আমি কি concept কাউকে AI ছাড়া explain করতে পারি?' },
  { id: 'q2', text: 'Can I implement it from scratch in a blank project?', bangla: 'আমি কি blank project থেকে নিজে implement করতে পারি?' },
  { id: 'q3', text: 'Can I diagnose and fix broken implementations?', bangla: 'broken implementation নিজে diagnose/fix করতে পারি?' },
  { id: 'q4', text: 'Can I design architecture and trade-offs for a new problem?', bangla: 'নতুন problem-এর architecture + trade-off design করতে পারি?' },
  { id: 'q5', text: 'Can I deploy, monitor, secure, scale, and recover it in production?', bangla: 'deploy + monitor + secure + scale + recover করতে পারি?' }
];

export const MASTERY_RULES_CHECKLIST = [
  'Concept explain করতে পারি (Can explain concept)',
  'Blank project থেকে implement করতে পারি (Can implement from blank project)',
  'Documentation ছাড়া basic কাজ করতে পারি (Can do basic tasks without docs)',
  'Broken implementation diagnose করতে পারি (Can diagnose broken code)',
  'Performance bottleneck খুঁজতে পারি (Can locate performance bottlenecks)',
  'Security issue identify করতে পারি (Can identify security vulnerabilities)',
  'Failure scenario handle করতে পারি (Can handle failure scenarios)',
  'Production deploy করতে পারি (Can deploy to production)',
  'Monitoring দিতে পারি (Can set up monitoring/metrics)',
  'Backup/recovery plan করতে পারি (Can create backup & disaster recovery plan)',
  'Scale করতে পারি (Can scale horizontally/vertically)',
  'Trade-off explain করতে পারি (Can articulate architecture trade-offs)'
];
