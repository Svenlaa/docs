module.exports = {
  someSidebar: {
    'Get Started': [
      'introduction',
      'register-account',
      'add-website',
      'script-extensions',
      'plausible-script',
      'integration-guides',
      'troubleshoot-integration',
      'your-plausible-experience',
    ],
    'Website Settings': [
      'landing-page',
      'website-settings',
      'change-domain-name',
      'general',
      'users-roles',
      'visibility',
      'shared-links',
      'embed-dashboard',
      'email-reports',
      'traffic-spikes',
      'slack-reports',
      'transfer-ownership',
      'reset-site-data',
      'delete-site-data',
      'excluding',
    ],
    'Stats Dashboard': [
      'guided-tour',
      'compare-stats',
      'filters-segments',
      'manual-link-tagging',
      'google-search-console-integration',
      'realtime-dashboard',
      'top-referrers',
      'top-pages',
      'countries',
      'devices',
      'subdomain-hostname-filter',
      'metrics-definitions',
      'keyboard-shortcuts',
      'dashboard-faq',
      {
        type: 'category',
        label: 'Import & Export',
        items: [
          'google-analytics-import',
          'csv-import',
          'export-stats',
        ],
      },
    ],
    'Events, Funnels and Ecommerce': [
      'goal-conversions',
      'funnel-analysis',
      'ecommerce-revenue-tracking',
      'outbound-link-click-tracking',
      'file-downloads-tracking',
      'error-pages-tracking-404',
      'pageview-goals',
      'custom-event-goals',
      {
        type: 'category',
        label: 'Custom properties',
        items: [
          'custom-props/introduction',
          'custom-props/for-pageviews',
          'custom-props/for-custom-events',
          'custom-props/props-dashboard',
        ],
      },
      {
        type: 'category',
        label: 'Custom events CMS guides',
        items: [
          'webflow-integration',
          'shopify-integration',
          'carrd-integration',
        ],
      },
    ],
    API: ['stats-api', 'events-api', 'sites-api'],
    Adblockers: [
      { type: 'doc', id: 'proxy/introduction', label: 'Overview' },
      {
        type: 'category',
        label: 'Proxy Guides',
        items: [
          { type: 'doc', id: 'proxy/guides/cloudflare', label: 'Cloudflare' },
          { type: 'doc', id: 'proxy/guides/deno', label: 'Deno Deploy' },
          { type: 'doc', id: 'proxy/guides/wordpress', label: 'WordPress' },
          { type: 'doc', id: 'proxy/guides/akamai', label: 'Akamai' },
          { type: 'doc', id: 'proxy/guides/netlify', label: 'Netlify' },
          { type: 'doc', id: 'proxy/guides/vercel', label: 'Vercel' },
          {
            type: 'doc',
            id: 'proxy/guides/nextjs',
            label: 'Next.js on Vercel',
          },
          { type: 'doc', id: 'proxy/guides/cloudfront', label: 'CloudFront' },
          { type: 'doc', id: 'proxy/guides/nginx', label: 'Nginx' },
          { type: 'doc', id: 'proxy/guides/caddy', label: 'Caddy' },
          { type: 'doc', id: 'proxy/guides/apache', label: 'Apache' },
        ],
      },
    ],
    'Account Settings': [
      '2fa',
      'change-email',
      'reset-password',
      'dashboard-appearance',
      'delete-account',
    ],
    'Billing and Subscription': [
      'trial-to-paid',
      'subscription-plans',
      'change-plan',
      'cancel-subscription',
      'download-invoices',
      'billing',
    ],
    Contribute: ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
}
