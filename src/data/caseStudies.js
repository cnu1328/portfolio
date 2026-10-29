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
    subtitle: "Design vs As-Is: turning raw point clouds into Railway Assest geometry",
    role: "Technical Lead · End-to-end technical ownership",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2026",
    cover: img("lidar_predicted_multiclass"),
    accent: "#2DD4BF",
    summary: "Led an **R&D team** in developing an end-to-end railway LiDAR pipeline that uses deep learning models to classify **rails, poles, structures, platforms, bridges, LC gates, and cables**; extracts track centrelines and individual rail geometries; and categorises tracks as main, loop, siding, or turnout for **Design vs. As-Is** comparison.",
    problem: "Railway **yard planning** needs an accurate comparison between the proposed design and the existing on-ground conditions. However, as-built data is available as dense and unstructured **LiDAR point clouds**, making it difficult and time-consuming to manually identify **rails, poles, structures, platforms, bridges, LC gates, and cables**. General-purpose tools also do not directly provide the railway-specific centrelines, individual rail geometry, and track classifications needed for engineering analysis.",
    approach: [
      "Studied **LiDAR point-cloud** data hands-on using **CloudCompare**, including viewing, classification, and annotation of railway assets such as **rails, poles, platforms, structures, bridges, LC gates, and overhead cables**. Built rule-based baselines using planarity, linearity, and roughness features, but these approaches were not reliable enough for consistent railway-asset classification.",

      "Studied **point-cloud deep-learning** approaches and implemented **PointNet & PointNet++** from scratch, including point-cloud readers for multiple file formats, training pipelines with loss functions, inference on unseen point clouds, and multiple parameter and architecture experiments. **PointNet** provides around **47.7% mIoU**, while **PointNet++** improves this to around **55.7% mIoU**",

      "Moved to **Kernel Point Convolution (KPConv)** to better capture local 3D geometry. Implemented the architecture, preprocessing, training, and inference pipelines, and ran multiple experiments to improve per-class accuracy for rails, poles, cables, and other railway assets. **KPConv** has demonstrated **86% mIoU** on the Rail3D data.",

      "Converted model predictions into usable **railway geometry and asset data** by extracting track centrelines from rail points, separating **individual rails, detecting dead-end locations, and extracting the positions of poles, overhead cables, platforms, structures, bridges, LC gates, signals, and other classified railway assets.**",

      "Classified extracted track centrelines as **Main Line, Loop Line, Siding Line, or Turnout** so the results directly match the terminology used in railway yard design and engineering analysis."
    ],
    owned: [
    "Technical direction, architecture, and task breakdown for the R&D team",

    "End-to-end PointNet and KPConv implementation, covering data preparation, training, evaluation, and inference",

    "Railway geometry extraction, including track centrelines, individual rails, dead-end locations, and asset positions",

    "Track classification logic for Main Line, Loop Line, Siding Line, and Turnout"
    ],
    outcomes: [
      { value: "3", label: "Architectures implemented", sub: "PointNet · PointNet++ · KPConv" },
      { value: "4", label: "Track types classified", sub: "main · loop · siding · turnout" },
      { value: "E2E", label: "Point Cloud → Railway Asset Geometry", sub: "classification → extraction → tracks geometry" },
      { value: "86%", label: "mIoU with KPConv", sub: "railway LiDAR segmentation" },
    ],
    gallery: [
      {
        before: img("lidar_raw_image"),
        after: img("lidar_predicted_multiclass"),
        afterLabel: "Multi-Class Prediction",
        caption: "Raw LiDAR Point Cloud → Multi-Class Railway Asset Classification",
      },
      {
        before: img("lidar_extract_rails_from_predictions"),
        beforeLabel: "Multi-Class Prediction",
        after: img("lidar_predicted_rails"),
        afterLabel: "Extract Rail Class",
        caption: "Raw LiDAR Point Cloud → Multi-Class Railway Asset Classification",
      },
      {
        before: img("lidar_predicted_rails"),
        beforeLabel: "Extract Rail Class",
        after: img("lidar_extracted_centerlines"),
        afterLabel: "Extracted Track Centerlines",
        caption: "Raw LiDAR Point Cloud → Multi-Class Railway Asset Classification",
      },
      {
        before: img("lidar_extracted_lines"),
        beforeLabel: "Extract Rail Class",
        after: img("lidar_extracked_tracks"),
        afterLabel: "Extracted Tracks",
        caption: "Raw LiDAR Point Cloud → Multi-Class Railway Asset Classification",
      },
    ],
    stack: ["Python", "PyTorch", "KPConv", "PointNet++", "CloudCompare", "NumPy"],
  },
  {
    slug: "railway-yard-remodelling",
    featured: true,
    category: "Railway Engineering · Computation Geometry",
    title: "Yard Remodelling — ESP Generation",
    subtitle: "Computationally designed railway layouts — turnouts, loop lines, new lines & siding lines — complying with IRPWM 2024 & IRSOD 2022",    role: "R&D Engineer · Computational Geometry Engineer",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2026",
    cover: img("yard_remodelling_laid_turnout"),
    accent: "#FBBF24",
    summary:
      "Built the railway-geometry engine behind an **Engineering Scale Plan (ESP)** generator: **turnouts, loop lines, sidings, new lines and ladders** laid out according to **Indian Railways IRSOD** and **IRPWM** rules.",
    problem: "**Railway yard remodelling** starts with an existing Key Plan that is converted into a digital twin, where users can draw proposed **turnouts, new tracks, loop lines, siding lines and other assets**. The challenge is to automatically generate multiple valid geometric possibilities for each proposed asset while following **IRSOD** and **IRPWM** rules, instead of manually designing and checking every geometry.",

    approach: [
      "The existing railway information is extracted from the **Key Plan** and made available as a **digital twin**, where users can draw the proposed yard layout and add assets such as **turnouts, new tracks, loop lines, siding lines, platforms and structures**.",

      "Developed the **Geometry Handlers** that convert each user-drawn asset into multiple geometrically valid design possibilities, forming the **core computational-geometry** layer of the **ESP remodelling** workflow.",

      "Implemented standards-based **turnout geometry**, including switch, lead, crossing and connection assemblies with straight, single-curve and reverse-curve connections, following relevant **IRSOD** and **IRPWM** rules.",

      "Implemented **new-track, loop-line and siding-line geometry handlers**, including the different geometric cases required for railway yard layouts.",

      "Applied **railway geometry constraints** and calculated design metrics such as **cost and penalty scores** for the generated possibilities, allowing the downstream optimisation process to evaluate different alternatives.",

      "The **Geometry Handlers** generate multiple **valid combinations** for each proposed asset. These combinations are then passed to the downstream **CP-SAT** and **recursive backtracking process**, which searches for **collision-free** and **SOD-compliant** combinations across the complete yard.",

      "The final valid combinations are presented to the user for selection before the selected ESP proceeds to SIP generation."
    ],
    owned: [
      "Computational geometry research and railway rule implementation",
      "Turnout geometry engine with switch, lead, crossing and connection assemblies",
      "Loop-line, new-track and siding-line geometry engines",
      "Geometry validation, cost and penalty-score calculations for generated design possibilities",
    ],
    outcomes: [
      { value: "Multi", label: "Loop-line configurations", sub: "multiple layouts from parent loop lines · ladder layouts for constrained yards"},
      { value: "3", label: "Turnout connection types", sub: "straight · single-curve · reverse-curve" },
      { value: "IRSOD", label: "Railway standards", sub: "IRPWM 2024 + IRSOD 2022" },
      { value: "E2E", label: "Geometry generation", sub: "turnouts · loops · new tracks · sidings" },
    ],
    gallery: [
      {
        image: img("yard_remodelling_digital_twin"),
        alt: "Railway yard digital twin showing the existing yard layout",
        caption: "Existing Railway Yard — Digital Twin",
      },
      {
        image: img("yard_remodelling_drawn_turnout"),
        alt: "User-drawn proposed turnout on the railway yard digital twin",
        caption: "Proposed Turnout — User Input",
      },
      {
        image: img("yard_remodelling_laid_turnout"),
        alt: "Generated turnout geometry placed on the proposed railway yard layout",
        caption: "Turnout Geometry — Generated Layout",
      },
    ],
    stack: ["Python", "Computational geometry", "Railway Geometry Algorithms", "IRSOD 2022", "IRPWM 2024", "CAD-ready output"],
  },
  {
    slug: "unauthorized-cultivation-detection",
    featured: true,
    category: "Geospatial AI · Drone CV & Segmentation",
    title: "Unauthorized Cultivation Detection",
    subtitle: "UNet++ based semantic segmentation for field and cultivation-boundary extraction",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("cultivation_final_output_1"),
    accent: "#84CC16",
    summary:
      "An end-to-end **Geospatial AI** pipeline that uses drone orthomosaics to segment cultivated fields and their boundaries, converts predictions into individual **GIS polygons**, and applies spatial business rules to identify cultivation on land that should not be farmed.",

    problem:
      "Region-scale inspection of cultivated land is difficult to perform manually. Standard **semantic segmentation** can merge adjacent fields into a single region, making it unsuitable for parcel-level enforcement where each cultivated field needs to be identified as an individual **GIS polygon**.",

    approach: [
      "Built the training dataset from **3 cm spatial-resolution drone orthomosaics**, including image tiling, field and boundary annotation, preprocessing, and augmentation.",
      "Started with separate **cultivation-interior** and **parcel-boundary models**, then evaluated and iterated on the architecture, training strategy, and parameters to improve segmentation performance.",
      "Designed and implemented a **shared-encoder, dual-decoder UNet++ architecture** with a **ResNet34 encoder** that jointly predicts cultivation interiors and field boundaries, improving the results over the initial two-model approach while requiring only a single inference pass.",
      "Developed **post-processing logic** that uses the predicted boundaries to separate adjacent cultivated regions and convert the segmentation output into individual **GIS field polygons**.",
      "Integrated the predictions with **land acquisition** and **spatial reference layers** to classify cultivated fields based on the applicable land-status rules.",
      "Developed the APIs and processing workflow required to ingest drone imagery, run the analysis, generate GIS outputs, and display the results through the geospatial portal.",
    ],

    owned: [
      "Drone imagery dataset creation and preparation",
      "UNet++ model research, architecture design and experimentation",
      "Dual-decoder cultivation and boundary segmentation",
      "Segmentation post-processing and GIS polygon generation",
      "Spatial business rules and acquisition-layer analysis",
      "End-to-end inference, analysis and portal APIs"
    ],
    outcomes: [
      { value: "0.86", label: "IoU · cultivation", sub: "Dice 0.92" },
      { value: "0.72", label: "IoU · boundaries", sub: "Dice 0.84" },
      // { value: "2→1", label: "Models → UNet++", sub: "dual-head single-pass inference" },
      { value: "E2E",label: "End-to-End Geospatial AI",sub: "drone imagery → prediction → GIS polygons → portal" },
    ],
    gallery: [
      { before: img("cultivation_raw_image_2"), after: img("cultivation_agriculture_mask"), afterLabel: "Cultivation Mask", caption: "Raw orthomosaic → cultivation mask" },
      { before: img("cultivation_raw_image_2"), after: img("cultivation_boundary_mask"), afterLabel: "Boundary Mask", caption: "Raw orthomosaic → parcel boundary head" },
      { before: img("cultivation_raw_image_1"), after: img("cultivation_final_output_1"), afterLabel: "Final Cultivation Parcels", caption: "Final output: one polygon per separated field unit" },
    ],
    stack: ["PyTorch", "UNet++", "segmentation_models_pytorch", "GeoPandas", "Rasterio", "PostGIS", "Django"],
  },
  {
    slug: "unauthorized-construction-detection",
    featured: true,
    category: "Geospatial AI · Drone CV & Large-Scale Raster Processing",
    title: "Unauthorized Construction Detection",
    subtitle: "3 cm GSD building detection with large-scale raster inference and DEM-based height extraction",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("building_final_polygons"),
    accent: "#A78BFA",
    summary:
      "An end-to-end **Geospatial AI pipeline** that detects building footprints from **3 cm GSD drone orthomosaics**, processes large-scale imagery through tile-based inference without loading the full raster into memory, converts predictions into **GIS building polygons**, enriches them with **DEM-derived heights**, and supports downstream identification of unauthorised construction.",
    problem:
      "**Detecting unauthorised construction** across large areas requires processing **extremely high-resolution drone imagery** at scale. A single orthomosaic can exceed hundreds of gigabytes, making full-raster inference impractical. The system therefore needs **memory-efficient tile-based processing** while preserving prediction quality, generating clean building footprints, and extracting useful attributes such as building height.",
    approach: [
      "Built and trained a **single-head** building-segmentation model using **3 cm GSD drone orthomosaics**, with dataset preparation, tiling, annotation, preprocessing, augmentation, training, and model evaluation.",
      "Implemented **sliding-window inference** that reads the source orthomosaic in manageable tiles and predicts in batches, avoiding the need to load the complete raster or prediction into RAM.",
      "Implemented **overlapping tile prediction and Hann-weighted blending**, writing weighted probability sums and weight accumulators to chunked **Zarr** arrays instead of keeping the complete prediction raster in memory.",
      "Developed block-wise probability merging that reconstructs the final prediction from the Zarr accumulators and writes tiled **BigTIFF** outputs, supporting building rasters larger than 500 GiB.",
      "Implemented block-wise post-processing to convert building predictions into individual **GIS building footprints**, avoiding memory-intensive processing of the complete raster at once.",
      "Integrated **DEM-based height extraction** to enrich detected building footprints with height attributes derived from elevation data.",
      "Built an automation workflow that processes large orthomosaics one at a time, cleans temporary prediction artifacts after successful processing, and preserves intermediate work when failures require recovery.",
      "Integrated the generated building footprints and attributes with the downstream geospatial workflow for analysis and portal visualization."
    ],
    owned: [
      "Building-segmentation dataset creation and model R&D",
      "Single-head deep-learning inference pipeline",
      "Large-scale sliding-window and batch inference",
      "Zarr-based out-of-core probability blending",
      "Block-wise building polygon extraction",
      "DEM-based building-height extraction",
      "Large-raster automation and temporary-artifact management",
      "Geospatial analysis and portal integration"
    ],

    outcomes: [
      { value: "0.84", label: "IoU · building", sub: "Dice 0.91 · F1 0.88" },
      { value: "3 cm", label: "Ground sampling distance", sub: "high-resolution drone orthomosaics" },
      { value: "500+ GB", label: "Large-scale raster processing", sub: "tile-based · out-of-core inference" },
      { value: "E2E", label: "Drone → GIS pipeline", sub: "prediction · polygons · heights · portal" },
    ],
    gallery: [
      { before: img("building_raw_image_1"), after: img("building_prob_mask"), afterLabel: "Probability Mask", caption: "Raw 3 cm GSD orthomosaic → building probability prediction" },
      { before: img("building_prob_mask"), after: img("building_final_polygons"), afterLabel: "Polygons Extracted", caption: "Building probability → block-wise GIS footprint extraction" },
      { before: img("building_raw_image"), after: img("building_final_polygons"), afterLabel: "Building Footprints", caption: "Building detection → individual GIS building footprints" },
      { image: img("building_polygon_height_using_dem"), alt: "Building footprints with DEM-derived height attributes", caption: "Building footprints → DEM-derived building height calculation" },
    ],
    stack: [ "PyTorch", "Deep Learning", "Rasterio", "Zarr", "GeoPandas", "GDAL", "PostGIS", "Django"],
  },
  {
    slug: "green-cover-monitoring",
    featured: true,
    category: "Geospatial AI · Vision-Language Segmentation",
    title: "Green Cover Monitoring",
    subtitle: "SAM3 text-prompted vegetation segmentation + DEM-derived height classification",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("vegetation_height_classified"),
    accent: "#22C55E",
    summary:
      "An end-to-end **Geospatial AI** workflow that uses **SAM3 text-prompted segmentation** to detect vegetation extent from high-resolution drone orthomosaics, then uses a **DEM-derived Canopy Height Model (CHM)** to classify detected vegetation into **grass, bush, small tree, and tall tree** height layers.",
    problem:
      "**Green-cover monitoring** requires identifying woody vegetation from high-resolution drone imagery while distinguishing it from grass, lawns, pasture, and crops. A fixed-class segmentation model would require learned classes and retraining for new categories, so the workflow uses SAM3 text prompts to identify the vegetation extent and applies deterministic height rules afterward to classify the detected vegetation.",
    approach: [
      "Built the geospatial inference workflow for RGB and RGB+alpha drone orthomosaics, processing imagery through overlapping 1024 × 1024 windows instead of loading the complete orthomosaic into memory.",
      "Implemented global 2nd/98th percentile normalization and integrated Ultralytics **SAM3SemanticPredictor** for text-prompted vegetation segmentation.",
      "Used positive prompts for trees, tree canopies, woody vegetation, shrubs, bushes, and green cover, together with negative prompts for grass, lawns, pasture, and agricultural crops to guide the vegetation segmentation.",
      "Merged the masks returned from each tile and blended overlapping tile responses to produce a continuous **vegetation probability raster**, followed by thresholding to generate the final vegetation extent.",
      "Implemented DEM-based **Canopy Height Model (CHM)** generation using elevation minus a local minimum ground estimate, then aligned the vegetation and elevation rasters for per-pixel height classification.",
      "Applied deterministic height thresholds to classify detected vegetation into four layers: **grass (≤ 0.5 m), bush (0.5–2.5 m), small tree (2.5–7.0 m), and tall tree (≥ 7.0 m)**.",
      "Converted the classified raster into connected components and generated GIS vegetation-height polygons for downstream spatial analysis.",
      "Built the training-data preparation workflow, including orthomosaic tiling, vegetation-mask generation, COCO-format dataset export, and integration with the SAM3 fine-tuning workflow for locally trained checkpoints.",
    ],
    owned: [
      "SAM3-based text-prompted vegetation segmentation",
      "Positive/negative prompt design and inference workflow",
      "Large orthomosaic tiling, normalization and mask blending",
      "DEM-derived CHM generation and height classification",
      "Vegetation raster-to-polygon post-processing",
      "SAM3 training-data preparation and fine-tuning workflow",
      "Geospatial analysis and vegetation output generation"
    ],
    outcomes: [
      {
        value: "SAM3",
        label: "Text-prompted vegetation detection",
        sub: "positive + negative prompts"
      },
      {
        value: "4",
        label: "Vegetation height classes",
        sub: "grass · bush · small tree · tall tree"
      },
      {
        value: "CHM",
        label: "Height-based classification",
        sub: "DEM elevation − local ground"
      },
      {
        value: "E2E",
        label: "Drone → GIS workflow",
        sub: "segmentation → height layers → polygons"
      },
    ],
    gallery: [
      {
        before: img("vegitation_raw_image"),
        after: img("vegetation_predictions"),
        afterLabel: "SAM3 Vegetation Prediction",
        caption: "Drone orthomosaic → SAM3 text-prompted vegetation extent"
      },
      {
        before: img("vegetation_predictions"),
        after: img("vegetation_polygon_extraction"),
        afterLabel: "Vegetation Polygons",
        caption: "Vegetation prediction → connected components → GIS polygon extraction"
      },
      {
        before: img("vegitation_raw_image"),
        after: img("vegetation_height_classified"),
        afterLabel: "Height Classification",
        caption: "Extracted vegetation polygons → DEM-derived CHM → height classes"
      },
    ],
    stack: [ "SAM3", "Ultralytics", "PyTorch", "Rasterio", "DEM / CHM", "GeoPandas", "GDAL", "PostGIS", "Django"],
  },
  {
    slug: "multi-class-road-detection",
    featured: true,
    category: "Geospatial AI · Semantic Segmentation",
    title: "Multi-Class Road Detection",
    subtitle: "Three-head UNet++ road segmentation with SE-ResNet50 encoding and GIS polygon extraction",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("road_final_classes"),
    accent: "#F59E0B",
    summary: "An end-to-end **Geospatial AI** workflow for detecting and classifying rural road networks from **high-resolution drone orthomosaics**. The system uses a **UNet++ model** with an ImageNet-pretrained **SE-ResNet50 encoder** and **three independent output heads for Thar, cement-concrete, and mud roads**, followed by multiclass decoding and **GIS polygon** generation.",
    problem: "Road mapping from high-resolution drone imagery requires both detecting narrow road surfaces and distinguishing different road types. **Thar, cement-concrete, and mud roads** can have similar visual characteristics, while road pixels are sparse compared with the surrounding imagery. The workflow therefore uses class-specific supervision, imbalance handling, tiled inference, test-time augmentation, and spatial blending.",
    approach: [
      "Built the training pipeline from drone orthomosaics and road shapefiles containing road-type labels, converting Thar, cement-concrete, and mud-road geometries into separate binary training masks.",
      "Prepared overlapping **512 × 512 RGB tiles** with robust percentile normalization, valid-image filtering, and background sampling to handle large orthomosaics and sparse road pixels.",
      "Implemented a **three-head UNet++ model** with an **ImageNet-pretrained SE-ResNet50 encoder**, independently predicting **Thar, cement-concrete, and mud roads**.",
      "Used **BCE + Dice loss** with automatically calculated class weights to handle severe road-pixel imbalance, followed by a two-stage **frozen-encoder** and **full-network fine-tuning** strategy.",
      "Implemented overlapping full-orthomosaic inference with **D4 test-time augmentation** and **Hann-weighted blending** to produce continuous road predictions.",
      "Decoded the three independent predictions into a single multiclass road raster using confidence-gated argmax classification, then polygonized and cleaned the results into GIS-ready road geometries with road_type attributes.",
      "Built batch automation for processing multiple orthomosaics and generating class rasters, probability outputs, and final road polygons."
    ],
    owned: [
      "Three-head UNet++ road-segmentation architecture",
      "SE-ResNet50 transfer learning and two-stage training",
      "Road annotation processing and mask generation",
      "Class-imbalance handling and weighted BCE + Dice loss",
      "Drone orthomosaic tiling and normalization",
      "D4 test-time augmentation and Hann-weighted blending",
      "Multiclass decoding and GIS road extraction",
      "Batch inference and raster-to-vector automation"
    ],
    outcomes: [
      { value: "UNet++", label: "Road-segmentation architecture", sub: "SE-ResNet50 · ImageNet initialization" },
      { value: "3", label: "Independent road outputs", sub: "Thar · cement concrete · mud" },
      { value: "D4", label: "Test-time augmentation", sub: "8 transformed views · averaged logits" },
      { value: "E2E", label: "Drone-to-GIS workflow", sub: "imagery → prediction → road polygons" }
    ],
    gallery: [
      { before: img("road_raw_image"), after: img("road_prediction_classes"), afterLabel: "Road Class Prediction", caption: "Raw drone orthomosaic → multi-class road prediction" },
      { before: img("road_prediction_classes"), after: img("road_final_classes"), afterLabel: "Extracted Road Classes", caption: "Road prediction → refined Thar, cement-concrete and mud-road classes" },
      { before: img("road_raw_image"), after: img("road_final_classes"), afterLabel: "Final Road Classification", caption: "Raw drone orthomosaic → final multi-class road classification" }
    ],
    stack: ["PyTorch", "UNet++", "SE-ResNet50", "Segmentation Models PyTorch", "Albumentations", "Rasterio", "GeoPandas", "Shapely", "GDAL / OGR", "OpenCV", "NumPy", "scikit-learn"]
  },
  {
    slug: "aqua-bodies-detection",
    featured: false,
    category: "Geospatial AI · Semantic Segmentation",
    title: "Aqua Bodies Detection",
    subtitle:
      "Dual-output UNet++ pond and bund segmentation with GIS polygon extraction",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("aqua_bodies_final_polygons"),
    accent: "#38BDF8",
    summary:
      "An end-to-end Geospatial AI workflow for statewide aquaculture pond mapping using six-band Planet multispectral imagery. The system uses a dual-output UNet++ model to detect pond interiors and bund boundaries, separate adjacent ponds, and generate individual GIS-ready pond polygons.",
    problem:
      "Aquaculture ponds are often densely packed and separated by narrow bunds, while their water extent changes with seasonal conditions. At the 2.3 m spatial resolution of the Planet imagery, narrow bunds can be difficult to distinguish, and a single water mask can merge neighboring ponds. The workflow therefore detects both pond interiors and bund boundaries to produce individual polygons for a reliable statewide inventory.",
    approach: [
      "Analysed six bands of 2.3 m resolution Planet multispectral imagery—Blue, Green I, Green, Red, Red Edge, and NIR—to identify spectral information useful for separating aquaculture ponds from surrounding land.",
      "Built a training dataset from Planet mosaics and pond annotations, using overlapping 512 × 512 tiles with per-tile normalization and separate masks for pond interiors and bund boundaries.",
      "Implemented a dual-output UNet++ with an ImageNet-pretrained SE-ResNet50 encoder to jointly predict aquaculture interiors and bund boundaries.",
      "Iterated on model architecture, training parameters, and preprocessing until reaching approximately 88% accuracy, with IoU 0.85 and Dice 0.92.",
      "Used overlapping sliding-window inference with Hann-weighted blending, then combined interior and boundary predictions to separate adjacent ponds and generate individual GIS polygons.",
      "Ran inference across the full state and exported the detected aquaculture ponds as GIS-ready shapefiles for downstream spatial analysis."
    ],
    owned: [
      "Planet multispectral band analysis",
      "Training-data preparation and pond/bund mask generation",
      "Dual-output UNet++ model development",
      "Model experimentation and accuracy iteration",
      "Large-scale statewide inference",
      "Bund-guided pond separation and GIS polygon generation"
    ],
    outcomes: [
      {
        value: "88%",
        label: "Accuracy",
        sub: "IoU 0.85 · Dice 0.92"
      },
      {
        value: "6",
        label: "Spectral bands",
        sub: "Blue · Green · Red · Red Edge · NIR"
      },
      {
        value: "2",
        label: "Segmentation outputs",
        sub: "pond interior · bund boundary"
      },
      {
        value: "State",
        label: "Inference extent",
        sub: "full statewide coverage"
      }
    ],
    gallery: [
      {
        before: img("aqua_bodies_raw"),
        after: img("aqua_bodies_prediction"),
        afterLabel: "Pond Interior",
        caption: "Planet multispectral imagery → aquaculture pond interiors"
      },
      {
        before: img("aqua_bodies_raw"),
        after: img("aqua_bodies_boundary"),
        afterLabel: "Bund Boundary",
        caption: "Planet multispectral imagery → pond bund boundaries"
      },
      {
        before: img("aqua_bodies_raw"),
        after: img("aqua_bodies_final_polygons"),
        afterLabel: "Final Pond Polygons",
        caption: "Interior + boundary predictions → individual aquaculture pond polygons"
      }
    ],
    stack: [ "PyTorch", "UNet++", "SE-ResNet50", "Planet Multispectral", "Rasterio", "GeoPandas", "Shapely", "OpenCV", "SciPy"]
  },
  {
    slug: "built-up-area-detection",
    featured: false,
    category: "Geospatial AI · Semantic Segmentation",
    title: "Built-up Area Detection",
    subtitle: "UNet++ built-up segmentation from Planet multispectral imagery with GIS polygon extraction",
    role: "ML Engineer · Geospatial AI",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025",
    cover: img("built_up_area_polygons"),
    accent: "#FB923C",
    summary: "An end-to-end Geospatial AI workflow for statewide built-up and impervious-surface mapping using six-band Planet multispectral imagery. The system uses a UNet++ segmentation model to generate probability rasters and GIS-ready polygons for land-use and urban-extent analysis.",
    problem: "Statewide urban-extent mapping requires a consistent and repeatable built-up layer across large regions. Manual visual interpretation is time-consuming and difficult to refresh. At the 2.3 m spatial resolution of the Planet imagery, small structures and mixed land-cover pixels can make built-up surfaces difficult to distinguish from roads, exposed soil, and other land-cover types.",
    approach: [
      "Analysed six bands of 2.3 m resolution Planet multispectral imagery to identify spectral information useful for separating built-up surfaces from surrounding land and prepared six-channel training tiles.",
      "Built and trained a UNet++ model with an ImageNet-pretrained SE-ResNet50 encoder and SCSE attention for built-up-area segmentation.",
      "Used weighted BCE + Dice loss, data augmentation, and transfer-learning strategies to improve segmentation performance.",
      "Implemented sliding-window inference with overlapping tiles, Hann-weighted blending, and D4 test-time augmentation for large Planet mosaics.",
      "Generated continuous built-up probability GeoTIFFs, thresholded the predictions, and converted the detected regions into cleaned GIS polygons.",
      "Ran the complete inference workflow across the state for large-scale built-up and impervious-surface mapping."
    ],
    owned: [
      "Planet multispectral band analysis",
      "Six-channel training-data preparation",
      "UNet++ model development and experimentation",
      "Model accuracy iteration and optimization",
      "Large-scale statewide inference",
      "Probability-raster generation and GIS polygon extraction"
    ],
    outcomes: [
      { value: "90%", label: "Accuracy", sub: "IoU 0.82 · Dice 0.90" },
      { value: "≤3 min", label: "Per 10k × 10k mosaic", sub: "GPU inference · D4 TTA" },
      { value: "6", label: "Spectral bands", sub: "Planet multispectral imagery" },
      { value: "State", label: "Inference extent", sub: "full statewide coverage" }
    ],
    gallery: [
      { before: img("built_up_area_raw"), after: img("built_up_area_prediction"), afterLabel: "Built-up Probability", caption: "Planet multispectral imagery → built-up probability prediction" },
      { before: img("built_up_area_raw"), after: img("built_up_area_polygons"), afterLabel: "Final Built-up Polygons", caption: "Built-up prediction → extracted GIS polygons" }
    ],
    stack: [ "PyTorch", "UNet++", "SE-ResNet50", "Planet Multispectral", "Rasterio", "GeoPandas", "Shapely"]
  },
  {
    slug: "geoportal-spatial-decision-platform",
    featured: true,
    category: "Geospatial Platform · Backend & AI",
    title: "AP-CRDA GeoPortal",
    subtitle: "Amaravati land dashboards, drone monitoring, spatial analysis and citizen plot services",
    role: "Software Engineer & AI Engineer",
    org: "VassarDigital.ai · R&D Engineer",
    period: "2025 – 2026",
    cover: img("apcrda_portal"),
    accent: "#2DD4BF",
    summary:
      "Built major parts of the **AP-CRDA GeoPortal** for Amaravati: mapped land dashboards, drone compliance monitoring, configurable spatial views, search and analysis tools, and an LPS citizen portal. My work covered shapefile ingestion, business logic, APIs, model integration and map-ready outputs.",
    problem:
      "AP-CRDA needs consistent views of land allotment, acquisition, pooling and commercial properties across Amaravati. Client-finalized mosaic shapefiles must be transformed into usable, level-wise dashboard data, while departments need map-based analysis and monitoring tools and citizens need secure access to their own plots.",
    modulesTitle: "Explore the AP-CRDA modules.",
    modulesIntro:
      "The land dashboards share one data workflow. Drone monitoring and each platform tool have their own module below.",
    modules: [
      {
        id: "land-dashboards",
        category: "Land dashboards",
        title: "GeoPortal & Land Dashboards",
        subtitle: "One mapped dashboard system for allotment, acquisition, pooling, layouts and estates.",
        scope: "Core 80% · five dashboards 100%",
        summary:
          "Ingested **client-finalized mosaic shapefiles** through an ETL workflow, extracted their data, mapped source attributes to defined labels, formatted and inserted records, and implemented client-specific APIs for **level-wise aggregates and map views**.",
        facts: [
          { value: "80%", label: "GeoPortal contribution", sub: "majority of core code, logic and APIs" },
          { value: "5", label: "Dashboards implemented fully", sub: "Theme City · Infra Zone · Layouts · LPS · Estate" },
          { value: "60%", label: "Land Acquisition contribution", sub: "APIs and business logic" },
        ],
        workflow: ["Receive approved mosaics", "Extract and map attributes", "Insert formatted data", "Serve levels and maps"],
        details: [
          "**GeoPortal (80%):** implemented most of the code, business logic and tab APIs for Amaravati land allotment, monetisation, AGC and Seed Capital views.",
          "**Theme City (100%):** built APIs for total area, acquired area, allotted area and land available for allotment in each theme city.",
          "**Land Acquisition (60%):** implemented APIs and logic for tracking acquisition across the capital city.",
          "**Infra Zone (100%):** built the zone-wise land tracking dashboard and its APIs.",
          "**Layouts (100%):** built APIs for layouts and land sites outside the capital city region.",
          "**LPS Summary (100%):** built village-wise Land Pooling Scheme summaries and returnable-plot views.",
          "**Estate Management (100%):** built APIs and logic for commercial property management across Amaravati.",
        ],
        gallery: [
          {
            image: img("apcrda_portal"),
            alt: "AP-CRDA GeoPortal map showing Amaravati's labeled zones, colored land layers, roads and map controls.",
            caption: "Amaravati GeoPortal overview: labeled capital-city zones, colored land layers and the road network displayed together on the map.",
          },
        ],
        tags: ["ETL", "Django", "PostgreSQL", "PostGIS", "GeoServer"],
      },
      {
        id: "drone-compliance-monitoring",
        category: "Drone monitoring",
        title: "Drone Compliance Monitoring",
        subtitle: "Four linked detection projects connected to spatial rules and portal views.",
        scope: "Four project links",
        summary:
          "Developed training datasets and detection workflows, applied the required spatial rules to the outputs, and built APIs to ingest, analyse and display the results on the portal. Each project below has a separate case study with its model details.",
        projects: [
          {
            title: "Unauthorized Cultivation",
            slug: "unauthorized-cultivation-detection",
            description:
              "Detects individual cultivated fields and boundaries, then uses spatial clipping and land-status rules to classify fields as authorised or unauthorised for departmental review.",
          },
          {
            title: "Unauthorized Construction",
            slug: "unauthorized-construction-detection",
            description:
              "Detects building footprints from drone imagery, applies spatial rules to identify potentially unauthorised construction, and serves the results through portal APIs.",
          },
          {
            title: "Green Cover Monitoring",
            slug: "green-cover-monitoring",
            description:
              "Classifies detected vegetation by DEM-derived height, identifies green hotspots and biodiversity areas, and supports month-by-month monitoring of green cover.",
          },
          {
            title: "Road Network Monitoring",
            slug: "multi-class-road-detection",
            description:
              "Maps road surfaces and road types, including Thar, cement-concrete and mud roads; spatial analysis compares constructed and planned kilometres to track network progress.",
          },
        ],
        gallery: [
          {
            image: img("cultivation_final_output_1"),
            alt: "Drone orthomosaic with individual cultivated field polygons highlighted in orange.",
            caption: "Detected cultivated fields are separated into individual orange parcel polygons over the drone orthomosaic.",
          },
          {
            image: img("building_final_polygons"),
            alt: "Drone orthomosaic with detected building footprints highlighted in yellow.",
            caption: "Detected building footprints are highlighted in yellow over the drone orthomosaic for spatial compliance checks.",
          },
          {
            image: img("vegetation_height_classified"),
            alt: "Urban drone imagery overlaid with color-coded vegetation height polygons.",
            caption: "Vegetation polygons are color coded by DEM-derived height class across the urban landscape.",
          },
          {
            image: img("road_final_classes"),
            alt: "Drone orthomosaic with road segments highlighted in three classification colors.",
            caption: "Predicted road surfaces are highlighted in three colors to show the mapped road classes across the network.",
          },
        ],
        tags: ["PyTorch", "Drone orthomosaics", "DEM", "GeoPandas", "PostGIS", "Django"],
      },
      {
        id: "metadata-management",
        category: "Data lifecycle",
        title: "Metadata Management",
        subtitle: "Shapefile ingestion with a way to restore the previous dataset.",
        scope: "Data operations",
        summary:
          "Built APIs to upload and process shapefiles, insert their records into platform tables and ingest searchable fields into Elasticsearch.",
        workflow: ["Upload shapefile", "Process and insert records", "Index in Elasticsearch", "Revert when needed"],
        details: [
          "Implemented the **shapefile upload API** for new spatial datasets.",
          "Added **revert-to-previous-data** functionality for a shapefile update.",
          "Processed uploaded data, inserted table records and connected ingestion to **Elasticsearch**.",
        ],
        gallery: [
          {
            image: img("apcrda_metadata"),
            alt: "AP-CRDA Metadata Management screen with a shapefile upload area and a table of upload statuses, download actions and revert controls.",
            caption: "Metadata Management: upload shapefiles, review processing status, download uploaded data and revert to a previous version.",
          },
        ],
        tags: ["Django", "PostgreSQL", "PostGIS", "Elasticsearch"],

        
      },
      {
        id: "view-creation",
        category: "Dashboard configuration",
        title: "View Creation Module",
        subtitle: "Configure a new dashboard or tab from shapefiles or existing tables.",
        scope: "N-level views",
        summary:
          "Users can choose **one or two shapefiles** or existing tables, configure the levels and fields, publish a spatial layer, and see a new dashboard or portal tab with aggregated data and a map within minutes.",
        workflow: ["Select files or tables", "Configure levels and labels", "Publish to GeoServer", "Open dashboard and map"],
        details: [
          "Supported one or two uploaded shapefiles, as well as existing database tables, as data sources.",
          "Enabled **first, second, third and further levels**, each with its own group-by column for aggregation.",
          "Let users choose the columns displayed at each level and set their visible labels.",
          "Published the selected layer to **GeoServer** and generated the configured dashboard or tab with map integration.",
        ],
        gallery: [
          {
            image: img("apcrda_view_creation"),
            alt: "AP-CRDA Create Dynamic View screen showing shapefile upload selected as the data source and a view creation summary panel.",
            caption: "View Creation wizard: choose a data source, then configure dashboard details, uploaded files and drill-down levels.",
          },
        ],
        tags: ["Django", "PostGIS", "GeoServer", "Configurable dashboards"],
      },
      {
        id: "portal-search",
        category: "Search",
        title: "Elasticsearch Implementation",
        subtitle: "Fast search across indexed portal data.",
        scope: "R&D through APIs",
        summary:
          "Researched and installed Elasticsearch, then built APIs to index dataset columns and fetch matching records for search in the portal.",
        workflow: ["Install Elasticsearch", "Index dataset columns", "Query search APIs", "Show portal results"],
        details: [
          "Researched how to install and use **Elasticsearch** for faster portal search.",
          "Implemented APIs to ingest searchable data for dataset columns.",
          "Implemented retrieval APIs that return Elasticsearch results to the portal.",
        ],
        tags: ["Elasticsearch", "Django", "Search APIs"],
      },
      {
        id: "monit-alerting",
        category: "Operations",
        title: "Monit Night Watcher Alerting",
        subtitle: "Service status alerts for the portal's core applications.",
        scope: "Service monitoring",
        summary:
          "Researched and implemented a Night Watcher alerting system with Monit so designated users are notified when a monitored service stops.",
        workflow: ["Monitor services", "Detect outage", "Notify designated users"],
        details: [
          "Monitored the **backend, UI, Keycloak and user-management** services.",
          "Configured alerts to reach the specified users when a service stops.",
        ],
        tags: ["Monit", "Backend", "UI", "Keycloak"],
      },
      {
        id: "gis-operations-toolkit",
        category: "GIS operations",
        title: "Streamlit Shapefile Toolkit",
        subtitle: "A self-service app for internal shapefile operations.",
        scope: "Internal tool",
        summary:
          "Built a **Streamlit shapefile toolkit** so internal spatial teams can handle common GIS file operations outside the GeoPortal.",
        details: [
          "Provided a focused interface for day-to-day shapefile operations.",
          "Used **Streamlit** and **GeoPandas** to make the toolkit available as a separate app.",
        ],
        tags: ["Streamlit", "GeoPandas", "Shapefiles"],
        links: [
          { label: "Open shapefile toolkit", href: "https://shapefile-toolkit.streamlit.app/" },
        ],
      },
      {
        id: "drawing-tool",
        category: "Spatial tools",
        title: "Drawing Tool",
        subtitle: "Extract map-layer data for a selected polygon and export it.",
        scope: "Seven export formats",
        summary:
          "Users select a polygon and map layers; the tool collects each layer's data intersecting that region and prepares it for download.",
        workflow: ["Select polygon", "Choose layers", "Intersect features", "Download results"],
        details: [
          "Implemented generic extraction of selected layer information within the chosen polygon.",
          "Built downloads in **CSV, PDF, KML, KMZ, SHP, DXF and DWG** formats.",
        ],
        gallery: [
          {
            image: img("apcrda_drawing_tool"),
            alt: "AP-CRDA map with the Drawing Tools panel open and a rectangular selection over plots and roads.",
            caption: "Draw an area of interest over the map to select the spatial data to export.",
          },
          {
            image: img("apcrda_drawing_tool_file_formats"),
            alt: "Export Data dialog with an active map layer selected and SHP, DWG, DXF, KML, KMZ, CSV and PDF format options.",
            caption: "Choose the active layer and download the selected area in one of seven GIS, CAD or document formats.",
          },
          {
            image: img("apcrda_drawing_tool_result"),
            alt: "Exported map extract showing plots, roads and other colored spatial layers within the selected area.",
            caption: "The exported map extract contains the intersecting plots, roads and spatial layers for the selected region.",
          },
        ],
        tags: ["PostGIS", "Spatial intersection", "GIS export"],
      },
      {
        id: "query-analysis",
        category: "Spatial analysis",
        title: "Query Analysis",
        subtitle: "Filter, review and export data from more than 520 layers.",
        scope: "520+ layers",
        summary:
          "Users select a layer, apply area, allotment, acquisition or other filters, and run an analysis that returns the matching records in a table.",
        workflow: ["Select layer", "Apply filters", "Review table", "Export results"],
        details: [
          "Implemented a generic filtering workflow that works across **more than 520 layers**.",
          "Supported downloads in **CSV, PDF, KML, KMZ, SHP, DXF and DWG** formats.",
        ],
        gallery: [
          {
            image: img("apcrda_query_analysis"),
            alt: "AP-CRDA Query Analysis panel filtering a land-acquisition layer by township, with matching plots outlined on the map and summary results in a table.",
            caption: "A township filter highlights matching land-acquisition plots and summarizes their plot count and acreage in the results table.",
          },
        ],
        tags: ["Django", "PostGIS", "Filtering", "GIS export"],
      },
      {
        id: "buffer-analysis",
        category: "Spatial analysis",
        title: "Buffer Analysis",
        subtitle: "Buffer and overlay spatial layers with user-specific results.",
        scope: "Approximately six APIs",
        summary:
          "Built buffer and overlay analysis for points, lines, polygons, mosaic layers and previously generated buffers, with clipping against selected layers.",
        workflow: ["Choose buffer input", "Buffer and clip layers", "Filter results", "Save or export"],
        details: [
          "Supported point, line, polygon, mosaic and prior-buffer inputs, then clipped features from selected layers against the buffer.",
          "Kept analysis results **specific to each user**; saved results remain for **48 hours**, while unsaved results expire after **one hour**.",
          "Added filtering on buffer results and implemented approximately **six APIs** for the workflow.",
          "Supported result downloads in **CSV, PDF, KML, KMZ, SHP, DXF and DWG** formats.",
        ],
        gallery: [
          {
            image: img("apcrda_buffer_analysis"),
            alt: "AP-CRDA Buffer Analysis setup showing a drawn polygon, Mosaic Imagery layer, centroid style and a 100 metre buffer distance.",
            caption: "Configure a 100 m centroid buffer from a drawn polygon and select the layer to analyse.",
          },
          {
            image: img("apcrda_buffer_analysis_result"),
            alt: "AP-CRDA Buffer Analysis result with a pink circular buffer over numbered plots and intersecting plot records in a results table.",
            caption: "The 100 m buffer highlights intersecting plots on the map and lists their attributes in the results table.",
          },
        ],
        tags: ["PostGIS", "Buffer", "Overlay", "GIS export"],
      },
      {
        id: "nearest-neighbour-analysis",
        category: "Spatial analysis",
        title: "Nearest Neighbour Analysis",
        subtitle: "Rank nearby utilities by straight-line or road-network distance.",
        scope: "pgRouting · Dijkstra",
        summary:
          "From a selected point or polygon, users choose utility layers and a radius to find destinations and compare their distances along the Amaravati road network or in a straight line.",
        workflow: ["Choose source and utilities", "Set radius", "Calculate routes", "Rank and export"],
        details: [
          "Researched and implemented **pgRouting with Dijkstra's algorithm** for shortest paths over trunk and LPS roads.",
          "Calculated distances from the source to destinations in selected utility layers, using a **straight-line fallback** where no road route exists.",
          "Grouped distances into **Ranks 1–5** for map and table views.",
          "Supported downloads in **CSV, PDF, KML, KMZ, SHP, DXF and DWG** formats.",
        ],
        gallery: [
          {
            image: img("apcrda_nearest_neighbour_analysis"),
            alt: "AP-CRDA Nearest Neighbour Analysis with Land Allotments selected, a 0.5 km search radius, a route drawn on the map and ranked distance results.",
            caption: "Find nearby land allotments from a map point, display the road-network route and review each destination's rank and distance.",
          },
        ],
        tags: ["PostGIS", "pgRouting", "Dijkstra", "GIS export"],
      },
      {
        id: "lps-user-portal",
        category: "Citizen portal",
        title: "LPS User Portal",
        subtitle: "Private access to a land-pooling user's residential and commercial plots.",
        scope: "Mobile OTP",
        summary:
          "Built APIs for LPS users to sign in with a mobile-number OTP, view their own returnable plots and locate a plot by code on the map.",
        workflow: ["Sign in with OTP", "Fetch owned plots", "Search plot code", "Locate on map"],
        details: [
          "Implemented **mobile-number OTP authentication** for LPS users.",
          "Fetched each user's **residential and commercial** plots.",
          "Used **Elasticsearch** for plot-code search and map location.",
          "Displayed the farmer name only on plots owned by the signed-in user.",
        ],
        gallery: [
          {
            image: img("apcrda_lps_user_login"),
            alt: "AP-CRDA LPS User Portal login dialog asking for a registered mobile number to receive an OTP, shown over the Amaravati map.",
            caption: "LPS users enter the mobile number used for plot registration to receive an OTP and access their plots.",
          },
        ],
        tags: ["Django", "OTP", "PostGIS", "Elasticsearch"],
      },
    ],
    approach: [
      "Built ETL for client-finalized mosaic shapefiles: ingested and extracted data, mapped source attributes to required labels, formatted records and inserted them into platform tables.",
      "Implemented dashboard business logic and APIs for level-wise land aggregates and map views across GeoPortal, Theme City, Land Acquisition, Infra Zone, Layouts, LPS Summary and Estate Management.",
      "Developed drone-detection datasets and model workflows, applied spatial rules to cultivation, construction, vegetation and roads, and exposed the results through portal APIs.",
      "Built configurable view creation, metadata ingestion and rollback, Elasticsearch indexing and search, and Monit alerts for core services.",
      "Built a Streamlit shapefile toolkit for day-to-day internal GIS operations.",
      "Implemented drawing, query, buffer and nearest-neighbour analysis with seven-format exports, alongside the OTP-based LPS citizen portal.",
    ],
    owned: [
      "GeoPortal core code, logic and APIs (~80%)",
      "Theme City, Infra Zone, Layouts, LPS Summary and Estate Management dashboards (100% each)",
      "Land Acquisition APIs and logic (~60%)",
      "Drone model R&D, spatial rules and portal integration",
      "Metadata, View Creation and Elasticsearch APIs",
      "Streamlit shapefile toolkit for internal GIS operations",
      "Drawing, query, buffer and nearest-neighbour tools",
      "Monit alerting and LPS citizen portal",
    ],
    outcomes: [
      { value: "80%", label: "GeoPortal contribution", sub: "core code, logic and APIs" },
      { value: "5", label: "Dashboards implemented fully", sub: "Theme City · Infra Zone · Layouts · LPS · Estate" },
      { value: "520+", label: "Queryable spatial layers", sub: "filters, analysis and export" },
      { value: "7", label: "Export formats", sub: "CSV · PDF · KML · KMZ · SHP · DXF · DWG" },
    ],
    gallery: [],
    stack: ["Python", "Django", "PostgreSQL", "PostGIS", "GeoServer", "Elasticsearch", "pgRouting", "Monit", "Keycloak", "React", "PyTorch", "GeoPandas", "Streamlit"],
    links: [{ label: "Shapefile toolkit (Streamlit)", href: "https://shapefile-toolkit.streamlit.app/" }],
  },
  // {
  //   slug: "spatial-analysis-toolkit",
  //   featured: false,
  //   category: "Platform · Spatial analysis",
  //   title: "Spatial Analysis Toolkit",
  //   subtitle: "Query, buffer, nearest-neighbour and drawing tools over 520+ layers",
  //   role: "Full-Stack Developer · 100% contribution",
  //   org: "AP-CRDA",
  //   period: "2025 – 2026",
  //   cover: null,
  //   accent: "#FBBF24",
  //   summary:
  //     "Four self-service analysis tools that let planners interrogate any map layer, buffer and overlay geometries, find the nearest utilities by real road distance, and export the result in seven GIS formats.",
  //   problem:
  //     "Analysts were asking developers for every ad-hoc spatial question. The portal had hundreds of layers but no generic way to filter, buffer, route or export them.",
  //   approach: [
  //     "Query Analysis: choose any of 520+ layers, apply filters, run and tabulate — with generic export to CSV, PDF, KML, KMZ, SHP, DXF and DWG.",
  //     "Buffer & Overlay Analysis: buffer point, line, polygon, mosaic or previously generated buffer layers and clip features from selected layers; user-scoped results kept 48 hours on save, else auto-expired; post-filtering on results. ~6 APIs.",
  //     "Nearest-Neighbour Analysis: from a polygon or point, distance to selected utilities within a radius — straight-line or along the capital-city road mosaic. Researched and implemented pgRouting with Dijkstra over trunk and LPS roads, with straight-line fallback where no road exists; distances bucketed into Rank 1–5 for visualisation.",
  //     "Drawing Tool: draw a polygon, pick layers, and download everything that intersects it in any of the seven formats.",
  //   ],
  //   owned: ["All four tools end-to-end", "pgRouting shortest-path R&D", "Generic multi-format exporter"],
  //   outcomes: [
  //     { value: "520+", label: "Layers queryable", sub: "filter + analyse" },
  //     { value: "7", label: "Export formats", sub: "CSV · PDF · KML · KMZ · SHP · DXF · DWG" },
  //     { value: "Dijkstra", label: "Road-network routing", sub: "pgRouting" },
  //   ],
  //   gallery: [],
  //   stack: ["Django", "PostGIS", "pgRouting", "GeoPandas", "GDAL/OGR", "GeoServer"],
  // },
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
  // {
  //   slug: "platform-reliability-security",
  //   featured: false,
  //   category: "DevOps · Security",
  //   title: "Reliability & Security Hardening",
  //   subtitle: "CI/CD, self-healing monitoring and audit remediation",
  //   role: "DevOps · 100% contribution",
  //   org: "AP-CRDA · PRRD",
  //   period: "2025 – 2026",
  //   cover: null,
  //   accent: "#A78BFA",
  //   summary:
  //     "Made production geospatial systems deploy faster, restart themselves and pass security audits.",
  //   problem:
  //     "Manual deployments, silent service outages and audit findings across Nginx, user management, backend and GeoServer were eating engineering time and exposing PII.",
  //   approach: [
  //     "Automated deployments with Jenkins CI/CD, cutting deployment effort by ~80%.",
  //     "Researched and implemented Night Watcher on Monit: alerting and auto-restart for backend, UI, Keycloak and user-management services, with alerts to named owners on any outage.",
  //     "Resolved security-audit findings: Nginx configuration hardening, user-management fixes, backend fixes, and encrypting PII to stop a GeoServer data-leak path; authorised all Disaster-Management APIs.",
  //     "PRRD: installed and configured Elasticsearch and remediated its security audit.",
  //   ],
  //   owned: ["Jenkins pipelines", "Monit alerting", "Audit remediation", "PII encryption"],
  //   outcomes: [
  //     { value: "80%", label: "Less deployment effort", sub: "Jenkins CI/CD" },
  //     { value: "4", label: "Services self-healing", sub: "backend · UI · Keycloak · users" },
  //     { value: "4", label: "Audit areas resolved", sub: "Nginx · users · backend · GeoServer" },
  //   ],
  //   gallery: [],
  //   stack: ["Jenkins", "Monit", "Nginx", "Docker", "Keycloak", "Elasticsearch", "Linux"],
  // },
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
