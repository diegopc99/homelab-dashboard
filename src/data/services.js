import grafanaLogo from '/public/grafana-logo.svg';
import prometheusLogo from '/public//prometheus-logo.svg';
import wireguardLogo from '/public//wireguard-logo.svg';
import piholeLogo from '/public//pihole-logo.svg';
import argocdLogo from '/public//argocd-logo.svg';
import traefikLogo from '/public//traefik-logo.svg';
import harborLogo from '/public//harbor-logo.svg';

export const services = [
  {
    name: "Grafana",
    href: "https://monitoring.homeserver.local/grafana",
    logo: grafanaLogo,
    description: "Metrics & Dashboards",
    tag: "Analytics",
    tagClass: "text-violet-400 bg-violet-500/20",
  },
  {
    name: "Prometheus",
    href: "https://monitoring.homeserver.local/prometheus",
    logo: prometheusLogo,
    description: "Monitoring & Alerts",
    tag: "Monitoring",
    tagClass: "text-emerald-400 bg-emerald-500/20",
  },
  {
    name: "VPN Dashboard",
    href: "https://vpn.homeserver.local",
    logo: wireguardLogo,
    description: "Remote Access",
    tag: "Security",
    tagClass: "text-blue-400 bg-blue-500/20",
  },
  {
    name: "Pi-hole",
    href: "http://pihole.homeserver.local/admin/login",
    logo: piholeLogo,
    description: "Network Ad Blocking",
    tag: "DNS Filter",
    tagClass: "text-red-400 bg-red-500/20",
  },
  {
    name: "ArgoCD",
    href: "https://argocd.homeserver.local",
    logo: argocdLogo,
    description: "GitOps Continuous Delivery",
    tag: "GitOps",
    tagClass: "text-cyan-400 bg-cyan-500/20",
  },
  {
    name: "Traefik",
    href: "https://traefik.homeserver.local/dashboard/",
    logo: traefikLogo,
    description: "Ingress Controller Dashboard",
    tag: "Ingress",
    tagClass: "text-orange-400 bg-orange-500/20",
  },
  {
    name: "Harbor Registry",
    href: "https://registry.homeserver.local",
    logo: harborLogo,
    description: "Container Image Registry",
    tag: "Registry",
    tagClass: "text-teal-400 bg-teal-500/20",
  },
];