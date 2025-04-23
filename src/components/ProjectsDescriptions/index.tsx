const ProjectDescription = () => {
  return (
    <div>
      <section className="px-6 md:px-12 lg:px-16 space-y-6 text-slate-400 py-10">
        <h3 className="text-2xl font-semibold">Description</h3>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">🔹 100% Responsive Design</h3>
            <p className="mt-2">
              We guarantee that every element of our platform adapts perfectly
              to any device, whether it&apos;s mobile, tablet, or desktop.
              Advanced responsive design techniques ensure a smooth experience
              regardless of screen size.
            </p>
          </div>

          <div>
            <h3 className=" font-semibold">
              🔹 SEO-Friendly: Optimal Visibility in Search Engines
            </h3>
            <p className="mt-2 ">
              Our site is optimized for top rankings on Google, Bing, and other
              search engines. We implement on-page SEO strategies including
              optimized URLs, meta tags, structured content, image optimization,
              and Schema Markup.
            </p>
          </div>

          <div>
            <h3 className=" font-semibold">
              🔹 Accessibility: An Experience for Everyone
            </h3>
            <p className="mt-2 ">
              Our platform follows WCAG standards to ensure accessibility for
              all users, including those with disabilities. Features include
              proper contrast, keyboard navigation, ARIA labels, and
              compatibility with assistive technologies.
            </p>
          </div>

          <div>
            <h3 className=" font-semibold">
              🔹 Flawless Performance: Speed & Efficiency
            </h3>
            <p className="mt-2 ">
              We optimize our website for fast loading times with minified
              resources, lazy loading, Next.js SSR/SSG, and CDN integration for
              global content delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDescription;
