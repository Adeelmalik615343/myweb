export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>MyCompany — Growth & Automation</h4>
          <p className="footer-copy">We help stores and brands grow with paid ads, eCommerce automation, chatbots, and SEO — focused on Pakistan and global markets. Get a free audit and ad-ready strategy tailored to your business.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@mycompany.com">hello@mycompany.com</a></li>
            <li>Available worldwide</li>
            <li>Mon–Fri · 9am–6pm</li>
          </ul>
        </div>
        <div>
          <h4>Recent Posts</h4>
          <ul>
            <li><a href="/blog/ecommerce-automation-ai-chatbots">Ecommerce automation & AI chatbots</a></li>
            <li><a href="/blog/google-ads-meta-ads-growth">Google & Meta ads growth playbook</a></li>
            <li><a href="/blog/seo-strategy-pakistan-businesses">SEO strategy for Pakistan businesses</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
