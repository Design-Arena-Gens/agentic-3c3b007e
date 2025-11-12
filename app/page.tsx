type SkillCategory = {
  title: string;
  summary: string;
  items: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Computer Science & OS Basics',
    summary: 'Core fundamentals to reason about systems and automation.',
    items: [
      'How the web works (HTTP/DNS/CDN/SSL/TLS)',
      'Processes, threads, signals, systemd basics',
      'Filesystems, permissions, disk usage, I/O',
      'Resource basics: CPU, memory, network, storage',
    ],
  },
  {
    title: 'Linux Fundamentals',
    summary: 'Daily-driver skills for any DevOps environment.',
    items: [
      'Command line proficiency: ls, grep, sed, awk, xargs',
      'User/group management and sudo policy',
      'Package managers (apt/yum/dnf/apk)',
      'Networking tools: ssh, scp, curl, netstat/ss, dig',
      'Service mgmt: systemctl, journald, log files',
    ],
  },
  {
    title: 'Networking & Security Basics',
    summary: 'Connectivity, isolation, and secure access.',
    items: [
      'TCP/IP, ports, CIDR, routing, NAT, firewalls',
      'DNS records (A, CNAME, MX, TXT) and troubleshooting',
      'AuthN/AuthZ, SSH keys, least privilege, secrets basics',
      'HTTPS, certificates, mutual TLS at a high level',
    ],
  },
  {
    title: 'Git & Collaboration',
    summary: 'Version control and team workflows.',
    items: [
      'Git fundamentals: clone, branch, commit, rebase, merge',
      'Pull requests, code reviews, commit hygiene',
      'GitHub/GitLab basics: issues, actions/pipelines',
    ],
  },
  {
    title: 'Scripting & Automation',
    summary: 'Write scripts to automate repetitive tasks.',
    items: [
      'Bash fundamentals (loops, functions, traps, set -euo pipefail)',
      'Python basics for glue code (venv, requests, pathlib)',
      'Makefiles or task runners for repeatability',
    ],
  },
  {
    title: 'CI/CD Pipelines',
    summary: 'Build, test, and ship reliably.',
    items: [
      'Pipeline concepts: triggers, artifacts, environments',
      'Build/test steps, caching, matrix builds',
      'GitHub Actions/GitLab CI basics',
      'Release strategies: canary, blue/green, feature flags (concepts)',
    ],
  },
  {
    title: 'Containers & Orchestration',
    summary: 'Package apps consistently and run them at scale.',
    items: [
      'Dockerfiles, multi-stage builds, image layers, registries',
      'Docker Compose for local dev',
      'Kubernetes basics: Pods, Deployments, Services, Ingress',
      'kubectl essentials and basic troubleshooting',
    ],
  },
  {
    title: 'Cloud Foundations (pick one: AWS/Azure/GCP)',
    summary: 'Breadth first, then depth in your chosen provider.',
    items: [
      'Compute, storage, networking primitives',
      'IAM basics (principals, policies, roles)',
      'VPC/VNet, subnets, gateways, security groups',
      'Managed services: RDS/Cloud SQL, queues, caches (concepts)',
    ],
  },
  {
    title: 'Infrastructure as Code',
    summary: 'Declaratively manage infra for repeatability.',
    items: [
      'Terraform basics: providers, resources, variables, state',
      'Remote state, workspaces, modules (intro)',
      'Policy-as-code concepts (OPA) at a glance',
    ],
  },
  {
    title: 'Observability & Reliability',
    summary: 'Know what?s happening and why.',
    items: [
      'Metrics, logs, traces ? differences and uses',
      'Prometheus/Grafana fundamentals, structured logging',
      'Alerting basics and SLO/SLI/SLA concepts',
    ],
  },
  {
    title: 'Security & Compliance Essentials',
    summary: 'Build secure-by-default systems.',
    items: [
      'Secrets management and rotation basics',
      'Container image scanning, dependency scanning',
      'Least privilege, audit trails, basic hardening',
    ],
  },
  {
    title: 'Troubleshooting Mindset',
    summary: 'Systematic debugging under pressure.',
    items: [
      'Form hypotheses, narrow blast radius, capture evidence',
      'Use dashboards/logs first, then SSH as last resort',
      'Post-incident reviews and learning culture',
    ],
  },
  {
    title: 'Soft Skills',
    summary: 'Communicate clearly and collaborate well.',
    items: [
      'Written communication (runbooks, READMEs)',
      'Stakeholder updates and incident comms',
      'Ownership, curiosity, and continuous learning',
    ],
  },
  {
    title: 'Starter Projects (Portfolio)',
    summary: 'Create artifacts to showcase skills.',
    items: [
      'Containerize a simple web app and deploy',
      'CI pipeline with tests and cache',
      'Terraform a minimal VPC + EC2/VM + SG',
      'Add monitoring dashboard and alert',
    ],
  },
];

export default function Page() {
  return (
    <section className="grid">
      <aside className="panel">
        <h2>How to use this roadmap</h2>
        <ol className="steps">
          <li>Pick a cloud (AWS preferred for beginners).</li>
          <li>Go category by category; build small demos.</li>
          <li>Document everything in a public repo.</li>
          <li>Share progress weekly; iterate.</li>
        </ol>
      </aside>

      <div className="content">
        {CATEGORIES.map((cat) => (
          <article key={cat.title} className="card">
            <h3>{cat.title}</h3>
            <p className="muted">{cat.summary}</p>
            <ul className="list">
              {cat.items.map((item) => (
                <li key={item}>
                  <label className="check">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
