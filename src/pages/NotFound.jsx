import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Seo title="Not found" description="Page not found." path="/404" />
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">Off the map.</h1>
      <p className="mt-3 max-w-md text-muted">That page doesn't exist — or it moved when this site was rebuilt.</p>
      <Link to="/" className="btn-primary mt-8">Back home</Link>
    </section>
  );
}
