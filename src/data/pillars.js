export const pillars = [
  {
    key: "ml",
    title: "Geospatial AI & Computer Vision",
    blurb:
      "Dataset creation → model R&D → training → inference → GIS-ready outputs. Drone orthomosaics, Planet multispectral imagery and LiDAR point clouds.",
    points: [
      "Multi-head UNet++ segmentation (dual & triple decoders) for parcels, buildings and road classes",
      "PointNet, PointNet++ and KPConv implemented end-to-end for railway asset extraction from LiDAR",
      "SAM3 text-prompted segmentation + DEM canopy-height classification for green cover",
      "Spatial post-processing: polygonisation, clipping, change detection, business-rule compliance",
    ],
    tags: ["PyTorch", "UNet++", "KPConv", "PointNet++", "SAM3", "GeoTIFF", "CloudCompare"],
  },
  {
    key: "platform",
    title: "Full-Stack GIS Platforms",
    blurb:
      "APIs, spatial engines and dashboards that put ML outputs and land data in front of planners, departments and citizens.",
    points: [
      "~80% of a capital-region spatial decision-support backend (21 modules)",
      "Config-driven View-Creation Module: shapefile → N-level aggregations → GeoServer layer, no code",
      "Spatial analysis toolkit: query, buffer/overlay, nearest-neighbour with pgRouting Dijkstra",
      "Elasticsearch search, OTP-authenticated citizen portal, Keycloak RBAC",
    ],
    tags: ["Django", "PostGIS", "GeoServer", "pgRouting", "Elasticsearch", "React", "Next.js"],
  },
  {
    key: "ops",
    title: "DevOps, Reliability & Security",
    blurb:
      "Keeping production geospatial systems up, fast and audit-clean.",
    points: [
      "Jenkins CI/CD cutting deployment effort by ~80%",
      "Night Watcher (Monit) self-healing alerts across backend, UI, Keycloak and user management",
      "Security-audit remediation: Nginx hardening, PII encryption on GeoServer, API authorisation",
      "Cassandra → PostgreSQL/PostGIS migration with 60% faster spatial queries",
    ],
    tags: ["Docker", "Jenkins", "Nginx", "Monit", "Keycloak", "Linux"],
  },
];
