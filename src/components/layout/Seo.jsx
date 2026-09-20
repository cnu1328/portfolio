import { Helmet } from "react-helmet-async";
import { profile } from "../../data/profile";

const SITE = profile.links.site;

export default function Seo({ title, description, path = "/", image = "/og.png", jsonLd }) {
  const fullTitle = title ? `${title} — ${profile.name}` : `${profile.name} — ${profile.headline}`;
  const url = `${SITE}${path}`;
  const img = image.startsWith("http") ? image : `${SITE}${image}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
