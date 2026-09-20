import { img } from "../lib/utils";

/**
 * Case studies rendered at /work/:slug and as Featured Work cards.
 * Order = display order. `featured: true` entries appear on the home page.
 */
export const caseStudies = [
  {
    slug: "lidar-railway-asset-extraction",
    featured: true,
    category: "LiDAR · 3D Deep Learning",
    title: "Railway Asset Extraction from LiDAR",
    subtitle: "Design vs As-Is: turning raw point clouds into track geometry",
    role: "Team Lead · End-to-end technical ownership",
    org: "VassarDigital.ai · R&D",
    period: "2026",
    cover: null,
    accent: "#2DD4BF",
    summary:
      "Led R&D for a solution that reads railway LiDAR point clouds, classifies rails, poles and cables with deep learning, and converts the result into track centrelines, individual rails and typed track geometry that can be compared against the design.",
    problem:
      "Railway operators need to compare the as-built yard against the design drawing. The as-built exists only as dense, unlabeled LiDAR point clouds. Extracting rails, poles and cables by hand is slow and inconsistent, and off-the-shelf tools do not produce railway-specific geometry.",
    approach: [
      "Studied LiDAR point-cloud data hands-on in CloudCompare — viewing, classification and annotation of railway assets — and built rule-based baselines using planarity, linearity and roughness features.",
      "Surveyed point-cloud deep-learning literature and implemented PointNet from scratch: point-cloud readers for multiple file types, training loop with loss functions, inference on unseen clouds, and many parameter/architecture iterations.",
      "Moved to Kernel Point Convolution (KPConv) for better local geometry: implemented the architecture, pre-processing, training and inference pipelines, and iterated experiments to raise per-class accuracy on rails and poles.",
      "Post-processed predictions into geometry: extracted track centrelines from rail points, split them into individual rails, detected dead-end locations and extracted pole positions.",
      "Classified every centreline into Main Line, Loop Line, Siding Line or Turnout so the output maps directly onto the design vocabulary.",
    ],
    owned: [
      "Technical direction and task breakdown for the team",
      "PointNet & KPConv implementations (data, training, inference)",
      "Geometry extraction: centrelines, rails, dead-ends, poles",
      "Track-type classification logic",
    ],
    outcomes: [
      { value: "3", label: "Architectures implemented", sub: "PointNet · PointNet++ · KPConv" },
      { value: "4", label: "Track types classified", sub: "main · loop · siding · turnout" },
      { value: "E2E", label: "Point cloud → geometry", sub: "single pipeline" },
    ],
    gallery: [],
    stack: ["Python", "PyTorch", "KPConv", "PointNet++", "CloudCompare", "NumPy"],
  },
  {
    slug: "railway-yard-remodelling",
    featured: false,
    category: "Railway Engineering · Geometry",
    title: "Yard Remodelling — ESP Generation",
    subtitle: "Standards-compliant turnout and loop-line geometry, generated",
    role: "R&D · 100% contribution",
    org: "VassarDigital.ai · R&D",
    period: "2026",
    cover: null,
    accent: "#FBBF24",
    summary:
      "Built the railway-geometry engine behind an Engineering Scale Plan (ESP) generator: turnouts, loop lines, sidings and ladders laid out according to Indian Railways IRSOD and IRPWM rules.",
    problem:
      "Remodelling a railway yard means re-drawing turnouts, loop lines and sidings under strict geometric rules. Doing this by hand in CAD is slow and error-prone, and every rule change forces a redraw.",
    approach: [
      "Studied and formalised the railway geometry needed for turnouts, loop lines, new tracks, siding lines and ladder arrangements.",
      "Extracted the relevant IRSOD and IRPWM rules for geometry and layout design into implementable constraints.",
      "Implemented turnout geometry per IRSOD: switch, lead, crossing and connection assemblies with straight, single-curve and reverse-curve connections.",
      "Implemented loop-line geometry covering 9 distinct layout cases.",
      "Next phase planned: new-track and siding-line geometry with validation.",
    ],
    owned: ["Geometry research and rule extraction", "Turnout geometry engine", "Loop-line layout engine (9 cases)"],
    outcomes: [
      { value: "9", label: "Loop-line layouts", sub: "parametrically generated" },
      { value: "3", label: "Connection types", sub: "straight · single-curve · reverse-curve" },
      { value: "IRSOD", label: "Standards encoded", sub: "+ IRPWM" },
    ],
    gallery: [],
    stack: ["Python", "Computational geometry", "IRSOD", "IRPWM", "CAD-ready output"],
  },
  {
    slug: "unauthorized-cultivation-detection",
    featured: true,
    category: "Drone CV · Segmentation",
    title: "Unauthorized Cultivation Detection",
    subtitle: "Dual-head UNet++ that outputs one polygon per field",
    role: "ML Engineer · 100% contribution",
    org: "AP-CRDA · Drone Compliance Monitoring",
    period: "2025",
    cover: img("cultivation_final_output"),
    accent: "#84CC16",
    summary:
      "A PyTorch pipeline that segments cultivated parcels and their boundaries from drone orthomosaics, then applies spatial business rules to flag cultivation on land that should not be farmed.",
    problem:
      "Land in the capital region that has been acquired must not be cultivated. Field inspection at region scale is impossible; a naïve crop mask merges adjacent fields into one blob, which is useless for parcel-level enforcement.",
    approach: [
      "Built the training dataset from drone orthomosaics — tiling, annotation and augmentation.",
      "Started with two separate models (cultivation interior, parcel boundary) and iterated until accuracy was acceptable.",
      "Redesigned into a single shared-encoder, dual-decoder UNet++ (ResNet34 encoder) that jointly predicts interiors and boundaries — better accuracy than the two-model approach and one inference pass.",
      "Post-processing subtracts boundaries from interiors so adjacent fields become separate GIS polygons.",
      "Spatially clipped predictions against acquisition layers to classify authorised vs unauthorised cultivation, and wrote the APIs that ingest, analyse and display results on the portal.",
    ],
    owned: ["Dataset creation", "Model R&D and iteration", "Dual-head architecture", "Spatial business logic", "Ingest/analysis/display APIs"],
    outcomes: [
      { value: "0.86", label: "IoU · cultivation", sub: "Dice 0.92" },
      { value: "0.72", label: "IoU · boundary", sub: "Dice 0.84" },
      { value: "1", label: "Polygon per field", sub: "adjacent parcels separated" },
    ],
    gallery: [
      { before: img("cultivation_raw_image"), after: img("cultivation_agriculture"), caption: "Raw orthomosaic → cultivation mask" },
      { before: img("cultivation_raw_image"), after: img("cultivation_boundary"), caption: "Raw orthomosaic → parcel boundary head" },
      { before: img("cultivation_raw_image"), after: img("cultivation_final_output"), caption: "Final output: one polygon per separated field unit" },
    ],
    stack: ["PyTorch", "UNet++", "segmentation_models_pytorch", "GeoPandas", "Rasterio", "PostGIS", "Django"],
  },
  {
    slug: "illegal-construction-detection",
    featured: true,
    category: "Drone CV · Segmentation",
    title: "Illegal Construction Detection",
    subtitle: "Building footprints at 3 cm GSD, with heights from the DEM",
    role: "ML Engineer · 100% contribution",
    org: "AP-CRDA · Drone Compliance Monitoring",
    period: "2025",
    cover: img("building_detection_classified_height"),
    accent: "#A78BFA",
    summary:
      "Building-footprint segmentation on high-resolution drone imagery, cleaned into polygons, enriched with height from elevation data, and clipped against zoning to flag unauthorised construction.",
    problem:
      "Unauthorised construction in a planned capital region has to be caught early. Manual digitisation of every roof across hundreds of square kilometres does not scale, and footprints alone say nothing about how tall a structure is.",
    approach: [
      "Created the training dataset from 3 cm GSD orthomosaics and iterated on model R&D until building accuracy was acceptable.",
      "Trained a UNet++ (ResNet34) segmentation model with a two-stage schedule (frozen encoder → full fine-tune) and mixed precision.",
      "Blended tiled probability rasters into clean polygon shapefiles; attached height attributes derived from DEM (elevation minus ground).",
      "Spatially clipped footprints against authorisation layers to separate authorised from unauthorised construction.",
      "Wrote the APIs that insert, analyse and display detections on the portal.",
    ],
    owned: ["Dataset creation", "Model R&D", "Polygon + height extraction", "Compliance business logic", "Portal APIs"],
    outcomes: [
      { value: "0.84", label: "IoU · building", sub: "Dice 0.91 · F1 0.88" },
      { value: "3 cm", label: "Ground sampling distance", sub: "drone orthomosaic" },
      { value: "+h", label: "Height per building", sub: "from DEM" },
    ],
    gallery: [
      { before: img("building_detection_raw_image"), after: img("building_detection_prob_mask"), caption: "Raw orthomosaic → probability mask" },
      { before: img("building_detection_raw_image"), after: img("building_detection_polygon_extraction"), caption: "Raw orthomosaic → extracted footprints" },
      { before: img("building_detection_raw_image"), after: img("building_detection_classified_height"), caption: "Footprints classified by DEM-derived height" },
    ],
    stack: ["PyTorch", "UNet++", "Rasterio", "Zarr", "GeoPandas", "PostGIS", "Django"],
  },
  {
    slug: "green-cover-monitoring",
    featured: false,
    category: "Drone CV · Foundation models",
    title: "Green Cover Monitoring",
    subtitle: "SAM3 text-prompted segmentation + canopy-height classification",
    role: "ML Engineer · 100% contribution",
    org: "AP-CRDA · Drone Compliance Monitoring",
    period: "2025",
    cover: img("vegetation_classification"),
    accent: "#22C55E",
    summary:
      "Detects woody green cover (not grass) on drone orthomosaics using SAM3 with text prompts, then classifies it into four height layers with a DEM-derived canopy-height model to locate green hotspots and biodiversity land.",
    problem:
      "Planners need to know where real tree cover is — and how tall it is — to protect biodiversity zones. Fixed-class segmentation models confuse grass with trees and need retraining for every new class.",
    approach: [
      "Built the dataset and ran R&D across approaches until vegetation accuracy was acceptable.",
      "Used SAM3's semantic predictor with positive/negative text prompts to segment trees and shrubs while excluding grass — no fixed class head to retrain.",
      "Computed a canopy-height model from the DEM and classified vegetation into grass, bush, small tree and tall tree.",
      "Spatially clipped results to identify green hotspots and biodiversity lands, and wrote the ingest/analysis/display APIs.",
    ],
    owned: ["Dataset creation", "Model R&D", "CHM height classification", "Hotspot business logic", "Portal APIs"],
    outcomes: [
      { value: "0.82", label: "IoU · vegetation extent", sub: "Dice 0.90" },
      { value: "4", label: "Height classes", sub: "grass · bush · small · tall" },
      { value: "SAM3", label: "Text-prompted", sub: "grass excluded via prompts" },
    ],
    gallery: [
      { before: img("vegetation_raw"), after: img("vegetation_predictions"), caption: "Raw orthomosaic → vegetation predictions" },
      { before: img("vegetation_raw"), after: img("vegetation_classification"), caption: "Height-classified canopy layers" },
      { before: img("vegetation_raw"), after: img("vegetation_final_polygons"), caption: "Final GIS polygons" },
    ],
    stack: ["SAM3", "PyTorch", "Rasterio", "DEM / CHM", "GeoPandas", "PostGIS", "Django"],
  },
  {
    slug: "road-network-monitoring",
    featured: true,
    category: "Drone CV · Multi-class",
    title: "Road Network Monitoring",
    subtitle: "Triple-head UNet++ for Thar, CC and mud roads",
    role: "ML Engineer · 100% contribution",
    org: "AP-CRDA · Drone Compliance Monitoring",
    period: "2025 – 2026",
    cover: img("road_extraction"),
    accent: "#F472B6",
    summary:
      "Segments rural road networks from drone imagery and classifies each segment by surface type, then computes constructed vs planned kilometres against the master plan.",
    problem:
      "Tracking road construction progress across a capital region needs constructed length per road type, not just 'road / not road'. Thin 1–2 px roads at tile boundaries are easy to lose, and surface classes are visually close.",
    approach: [
      "Built the dataset and shipped a single-class road model first; wrote the spatial logic that extracts constructed vs planned KM and the portal APIs.",
      "Extended to a triple-head UNet++ (SE-ResNet50 encoder, SCSE attention) with three independent binary heads — Thar, CC, Mud/Gravel — decoded with argmax + confidence threshold.",
      "Trained with pos-weighted BCE + Dice, two-stage schedule, and d4 test-time augmentation at inference.",
      "Exported multi-class rasters to polygon shapefiles with a road_type attribute.",
    ],
    owned: ["Dataset creation", "Single-class → multi-class model R&D", "Constructed/planned KM logic", "Portal APIs"],
    outcomes: [
      { value: "0.78", label: "Mean IoU", sub: "Thar 0.78 · CC 0.81 · Mud 0.74" },
      { value: "3", label: "Road classes", sub: "independent heads" },
      { value: "KM", label: "Constructed vs planned", sub: "per road" },
    ],
    gallery: [
      { before: img("road_raw_image"), after: img("road_thar_probabilities"), caption: "Raw orthomosaic → Thar road probabilities" },
      { before: img("road_raw_image"), after: img("road_cc_roads"), caption: "CC (concrete) road head" },
      { before: img("road_raw_image"), after: img("road_mud_roads"), caption: "Mud / gravel road head" },
      { before: img("road_raw_image"), after: img("road_extraction"), caption: "Final multi-class extraction" },
    ],
    stack: ["PyTorch", "UNet++", "SE-ResNet50", "TTA", "GeoPandas", "PostGIS", "Django"],
  },
  {
    slug: "aqua-bodies-detection",
    featured: false,
    category: "Satellite · Remote sensing",
    title: "Aqua Bodies Detection",
    subtitle: "State-scale aquaculture pond mapping from Planet imagery",
    role: "ML Engineer · R&D",
    org: "AWARE",
    period: "2025",
    cover: img("aqua_final_predictions"),
    accent: "#38BDF8",
    summary:
      "Researched which Planet multispectral bands separate water from land, built a dual-head UNet++ that outputs one polygon per bund-separated pond, and ran inference across an entire state.",
    problem:
      "Aquaculture ponds change season to season and are packed edge to edge. A statewide inventory needs per-pond polygons, wet or dry, from 6-band satellite imagery — not a single merged water mask.",
    approach: [
      "Analysed Planet data and its bands to understand which spectral signatures identify aqua bodies.",
      "Trained a UNet++ (SE-ResNet50, SCSE) on 6-channel tiles with a pond-interior head and a bund/boundary head.",
      "Iterated through trial-and-error experiments until the model reached ~88% accuracy.",
      "Ran predictions for the entire state and exported GIS-ready shapefiles.",
    ],
    owned: ["Band analysis", "Model development", "Accuracy iteration", "Statewide inference"],
    outcomes: [
      { value: "88%", label: "Accuracy", sub: "IoU 0.85 · Dice 0.92" },
      { value: "6", label: "Spectral bands", sub: "Planet multispectral" },
      { value: "State", label: "Inference extent", sub: "full coverage" },
    ],
    gallery: [
      { before: img("aqua_raw_image"), after: img("aqua_interior_predictions"), caption: "Planet imagery → pond interiors" },
      { before: img("aqua_raw_image"), after: img("aqua_boudnary_predictions"), caption: "Planet imagery → bund boundaries" },
      { before: img("aqua_raw_image"), after: img("aqua_final_predictions"), caption: "Final per-pond polygons" },
    ],
    stack: ["PyTorch", "UNet++", "Planet imagery", "Rasterio", "GeoPandas"],
  },
  {
    slug: "built-up-area-detection",
    featured: false,
    category: "Satellite · Remote sensing",
    title: "Built-up Area Detection",
    subtitle: "Impervious-surface mapping across a state",
    role: "ML Engineer · R&D",
    org: "AWARE",
    period: "2025",
    cover: img("built_up_areas_extraced_polygons"),
    accent: "#FB923C",
    summary:
      "Built-up / impervious surface segmentation on Planet imagery producing probability GeoTIFFs and polygon shapefiles for land-use and urban-extent analysis, with statewide predictions.",
    problem:
      "Urban-extent planning needs a consistent, repeatable built-up layer across the whole state. Visual interpretation is inconsistent and cannot be refreshed each season.",
    approach: [
      "Analysed Planet bands for built-up signatures and prepared 6-channel training tiles.",
      "Trained a UNet++ (SE-ResNet50, SCSE) with AMP/TF32 and d4 test-time augmentation.",
      "Iterated until the model reached ~90% accuracy; exported probability rasters and cleaned polygons.",
      "Ran predictions for the entire state.",
    ],
    owned: ["Band analysis", "Model development", "Accuracy iteration", "Statewide inference"],
    outcomes: [
      { value: "90%", label: "Accuracy", sub: "IoU 0.82 · Dice 0.90" },
      { value: "≤3 min", label: "Per 10k×10k mosaic", sub: "GPU, TTA d4" },
      { value: "State", label: "Inference extent", sub: "full coverage" },
    ],
    gallery: [
      { before: img("built_up_areas_raw_image"), after: img("built_up_areas_predictions"), caption: "Planet imagery → built-up probability" },
      { before: img("built_up_areas_raw_image"), after: img("built_up_areas_extraced_polygons"), caption: "Extracted built-up polygons" },
    ],
    stack: ["PyTorch", "UNet++", "Planet imagery", "Rasterio", "GeoPandas"],
  },
  {
    slug: "geoportal-spatial-decision-platform",
    featured: true,
    category: "Platform · Backend",
    title: "Capital-Region GeoPortal",
    subtitle: "Spatial decision-support platform for Amaravati (AP-CRDA)",
    role: "Full-Stack Developer · ~80% of backend",
    org: "AP-CRDA",
    period: "2025 – 2026",
    cover: null,
    accent: "#2DD4BF",
    summary:
      "The platform that serves land allotment, monetisation, acquisition, layouts and estate data for a capital city — plus the module that lets non-developers create whole dashboards from a shapefile.",
    problem:
      "A capital-city authority manages land across dozens of departments and datasets. Every new dashboard used to need a backend developer, data took hours to onboard, and citizens had no self-service view of their plots.",
    approach: [
      "Implemented the majority of APIs and business logic across 21 modules: Geo-Portal core (80%), Theme City, Land Acquisition (60%), Infra Zone, Layouts, LPS Summary, Estate Management, Housing, Disaster-management API authorisation.",
      "Migrated the data layer from Cassandra to PostgreSQL + PostGIS, creating a single source of truth and improving geospatial queries by ~60%.",
      "Built the View-Creation Module: upload one or two shapefiles (or pick tables), configure N-level group-by aggregations and column display, publish to GeoServer — Sector Zone, LPS Village and Land Acquisition dashboards now ship with zero backend effort. Shapefile onboarding fell from 5–6 hours to ~10 minutes.",
      "Metadata Management: shapefile upload with revert-to-previous-version, table ingestion and Elasticsearch indexing.",
      "Elasticsearch from scratch: R&D, install, per-column index APIs and search APIs powering portal search.",
      "LPS User Portal: mobile-OTP authentication, per-user residential/commercial plots, plot-code search on the map, and farmer-name masking for plots the user does not own.",
      "Keycloak RBAC for department access; a Streamlit shapefile toolkit for internal GIS operations.",
    ],
    owned: ["Backend architecture & APIs", "Data migration", "View-Creation Module", "Elasticsearch", "LPS citizen portal", "RBAC"],
    outcomes: [
      { value: "21", label: "Modules", sub: "15 at 100% ownership" },
      { value: "60%", label: "Faster spatial queries", sub: "Cassandra → PostGIS" },
      { value: "10 min", label: "New dashboard", sub: "was 5–6 hours" },
    ],
    gallery: [],
    stack: ["Python", "Django", "PostgreSQL", "PostGIS", "GeoServer", "Elasticsearch", "Keycloak", "React", "Streamlit"],
    links: [{ label: "Shapefile toolkit (Streamlit)", href: "https://shapefile-toolkit.streamlit.app/" }],
  },
  {
    slug: "spatial-analysis-toolkit",
    featured: true,
    category: "Platform · Spatial analysis",
    title: "Spatial Analysis Toolkit",
    subtitle: "Query, buffer, nearest-neighbour and drawing tools over 520+ layers",
    role: "Full-Stack Developer · 100% contribution",
    org: "AP-CRDA",
    period: "2025 – 2026",
    cover: null,
    accent: "#FBBF24",
    summary:
      "Four self-service analysis tools that let planners interrogate any map layer, buffer and overlay geometries, find the nearest utilities by real road distance, and export the result in seven GIS formats.",
    problem:
      "Analysts were asking developers for every ad-hoc spatial question. The portal had hundreds of layers but no generic way to filter, buffer, route or export them.",
    approach: [
      "Query Analysis: choose any of 520+ layers, apply filters, run and tabulate — with generic export to CSV, PDF, KML, KMZ, SHP, DXF and DWG.",
      "Buffer & Overlay Analysis: buffer point, line, polygon, mosaic or previously generated buffer layers and clip features from selected layers; user-scoped results kept 48 hours on save, else auto-expired; post-filtering on results. ~6 APIs.",
      "Nearest-Neighbour Analysis: from a polygon or point, distance to selected utilities within a radius — straight-line or along the capital-city road mosaic. Researched and implemented pgRouting with Dijkstra over trunk and LPS roads, with straight-line fallback where no road exists; distances bucketed into Rank 1–5 for visualisation.",
      "Drawing Tool: draw a polygon, pick layers, and download everything that intersects it in any of the seven formats.",
    ],
    owned: ["All four tools end-to-end", "pgRouting shortest-path R&D", "Generic multi-format exporter"],
    outcomes: [
      { value: "520+", label: "Layers queryable", sub: "filter + analyse" },
      { value: "7", label: "Export formats", sub: "CSV · PDF · KML · KMZ · SHP · DXF · DWG" },
      { value: "Dijkstra", label: "Road-network routing", sub: "pgRouting" },
    ],
    gallery: [],
    stack: ["Django", "PostGIS", "pgRouting", "GeoPandas", "GDAL/OGR", "GeoServer"],
  },
  {
    slug: "road-hit-plots",
    featured: false,
    category: "Spatial analysis · Graph",
    title: "Road-Hit Plots",
    subtitle: "Which plots does a road extension cut through?",
    role: "R&D & implementation · End-to-end ownership",
    org: "AP-CRDA",
    period: "2026",
    cover: null,
    accent: "#F472B6",
    summary:
      "A graph-based workflow that extends road centrelines through junctions, buffers them by real road width, and identifies every residential and commercial plot the extension would hit.",
    problem:
      "When a road is extended, planners must know exactly which plots are affected — but centrelines stop at junctions, road widths vary, and a plot that merely touches a road edge should not count.",
    approach: [
      "Processed road centrelines into a graph: segmentation at intersections, endpoint snapping, road-direction identification and junction-based centreline extension.",
      "Dynamic buffering from the LPS Roads rd_width_m attribute, with parent-road identification and fallback widths where data was missing.",
      "Spatial analysis to find road-hit plots: candidate filtering, intersection/overlap-area computation, minimum-overlap validation and exclusion of boundary-only touches.",
      "Tested and visually validated the workflow; produced extended centrelines, road buffers and the final road_hit_plots shapefile.",
    ],
    owned: ["Graph processing", "Dynamic buffering", "Overlap validation", "Validation & outputs"],
    outcomes: [
      { value: "Graph", label: "Junction analysis", sub: "snap · extend · direction" },
      { value: "rd_width_m", label: "Width-aware buffers", sub: "with fallbacks" },
      { value: "SHP", label: "Deliverable", sub: "road_hit_plots" },
    ],
    gallery: [],
    stack: ["Python", "GeoPandas", "Shapely", "Graph analysis", "PostGIS"],
  },
  {
    slug: "platform-reliability-security",
    featured: false,
    category: "DevOps · Security",
    title: "Reliability & Security Hardening",
    subtitle: "CI/CD, self-healing monitoring and audit remediation",
    role: "DevOps · 100% contribution",
    org: "AP-CRDA · PRRD",
    period: "2025 – 2026",
    cover: null,
    accent: "#A78BFA",
    summary:
      "Made production geospatial systems deploy faster, restart themselves and pass security audits.",
    problem:
      "Manual deployments, silent service outages and audit findings across Nginx, user management, backend and GeoServer were eating engineering time and exposing PII.",
    approach: [
      "Automated deployments with Jenkins CI/CD, cutting deployment effort by ~80%.",
      "Researched and implemented Night Watcher on Monit: alerting and auto-restart for backend, UI, Keycloak and user-management services, with alerts to named owners on any outage.",
      "Resolved security-audit findings: Nginx configuration hardening, user-management fixes, backend fixes, and encrypting PII to stop a GeoServer data-leak path; authorised all Disaster-Management APIs.",
      "PRRD: installed and configured Elasticsearch and remediated its security audit.",
    ],
    owned: ["Jenkins pipelines", "Monit alerting", "Audit remediation", "PII encryption"],
    outcomes: [
      { value: "80%", label: "Less deployment effort", sub: "Jenkins CI/CD" },
      { value: "4", label: "Services self-healing", sub: "backend · UI · Keycloak · users" },
      { value: "4", label: "Audit areas resolved", sub: "Nginx · users · backend · GeoServer" },
    ],
    gallery: [],
    stack: ["Jenkins", "Monit", "Nginx", "Docker", "Keycloak", "Elasticsearch", "Linux"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const adjacentCaseStudies = (slug) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? caseStudies[i - 1] : null,
    next: i >= 0 && i < caseStudies.length - 1 ? caseStudies[i + 1] : null,
  };
};
