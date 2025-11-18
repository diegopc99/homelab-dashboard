export const infrastructureServices = [
  {
    name: "Grafana",
    href: "https://monitoring.homeserver.local/grafana",
    logo: "/grafana-logo.svg",
    description: "Metrics & Dashboards",
    tag: "Analytics",
    tagClass: "text-violet-400 bg-violet-500/20",
  },
  {
    name: "Prometheus",
    href: "https://monitoring.homeserver.local/prometheus",
    logo: "/prometheus-logo.svg",
    description: "Monitoring & Alerts",
    tag: "Monitoring",
    tagClass: "text-emerald-400 bg-emerald-500/20",
  },
  {
    name: "VPN Dashboard",
    href: "https://vpn.homeserver.local",
    logo: "/wireguard-logo.svg",
    description: "Remote Access",
    tag: "Security",
    tagClass: "text-blue-400 bg-blue-500/20",
  },
  {
    name: "Pi-hole",
    href: "http://pihole.homeserver.local/admin/login",
    logo: "/pihole-logo.svg",
    description: "Network Ad Blocking",
    tag: "DNS Filter",
    tagClass: "text-red-400 bg-red-500/20",
  },
  {
    name: "ArgoCD",
    href: "https://argocd.homeserver.local",
    logo: "/argocd-logo.svg",
    description: "GitOps Continuous Delivery",
    tag: "GitOps",
    tagClass: "text-cyan-400 bg-cyan-500/20",
  },
  {
    name: "Traefik",
    href: "https://traefik.homeserver.local/dashboard/",
    logo: "/traefik-logo.svg",
    description: "Ingress Controller Dashboard",
    tag: "Ingress",
    tagClass: "text-orange-400 bg-orange-500/20",
  },
  {
    name: "Harbor Registry",
    href: "https://registry.homeserver.local",
    logo: "/harbor-logo.svg",
    description: "Container Image Registry",
    tag: "Registry",
    tagClass: "text-teal-400 bg-teal-500/20",
  },
  {
    name: "MinIO Console",
    href: "https://minio.homeserver.local",
    logo: "/minio-logo.svg",
    description: "Object Storage Management",
    tag: "Storage",
    tagClass: "text-rose-400 bg-rose-500/20",
  },
];

export const contentServices = [
  {
    name: "Nextcloud",
    href: "https://nextcloud.homeserver.local",
    logo: "/nextcloud-logo.svg",
    description: "File Sharing & Collaboration",
    tag: "Productivity",
    tagClass: "text-sky-400 bg-sky-500/20",
  },
]

export const services = [...infrastructureServices, ...contentServices];