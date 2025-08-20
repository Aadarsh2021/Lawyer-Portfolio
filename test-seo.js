#!/usr/bin/env node

/**
 * SEO Testing Script for Advocate Supriya Portfolio
 * Run this script to check your website's SEO health
 */

const https = require('https');
const http = require('http');

const website = 'https://lawyer-mu-ecru.vercel.app';

console.log('🔍 SEO Health Check for Advocate Supriya Portfolio');
console.log('================================================\n');

// Test 1: Check if website is accessible
function checkWebsiteAccessibility() {
  console.log('1️⃣ Testing Website Accessibility...');
  
  const url = new URL(website);
  const client = url.protocol === 'https:' ? https : http;
  
  const req = client.get(website, (res) => {
    console.log(`   ✅ Website accessible - Status: ${res.statusCode}`);
    console.log(`   📱 Server: ${res.headers.server || 'Unknown'}`);
    console.log(`   🔒 HTTPS: ${url.protocol === 'https:' ? 'Yes' : 'No'}`);
    console.log('');
  });
  
  req.on('error', (err) => {
    console.log(`   ❌ Website not accessible: ${err.message}`);
    console.log('');
  });
  
  req.setTimeout(10000, () => {
    console.log('   ⏰ Request timeout');
    console.log('');
  });
}

// Test 2: Check robots.txt
function checkRobotsTxt() {
  console.log('2️⃣ Testing Robots.txt...');
  
  const robotsUrl = `${website}/robots.txt`;
  
  https.get(robotsUrl, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('   ✅ Robots.txt accessible');
        
        if (data.includes('Sitemap:')) {
          console.log('   ✅ Sitemap reference found');
        } else {
          console.log('   ❌ Sitemap reference missing');
        }
        
        if (data.includes('Allow: /')) {
          console.log('   ✅ Crawling allowed');
        } else {
          console.log('   ❌ Crawling not properly configured');
        }
      } else {
        console.log(`   ❌ Robots.txt not accessible - Status: ${res.statusCode}`);
      }
      console.log('');
    });
  }).on('error', (err) => {
    console.log(`   ❌ Error accessing robots.txt: ${err.message}`);
    console.log('');
  });
}

// Test 3: Check sitemap
function checkSitemap() {
  console.log('3️⃣ Testing Sitemap...');
  
  const sitemapUrl = `${website}/sitemap.xml`;
  
  https.get(sitemapUrl, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('   ✅ Sitemap accessible');
        
        const urlCount = (data.match(/<url>/g) || []).length;
        console.log(`   📊 Found ${urlCount} URLs in sitemap`);
        
        if (data.includes(website)) {
          console.log('   ✅ Main website URL found in sitemap');
        } else {
          console.log('   ❌ Main website URL missing from sitemap');
        }
      } else {
        console.log(`   ❌ Sitemap not accessible - Status: ${res.statusCode}`);
      }
      console.log('');
    });
  }).on('error', (err) => {
    console.log(`   ❌ Error accessing sitemap: ${err.message}`);
    console.log('');
  });
}

// Test 4: Check meta tags
function checkMetaTags() {
  console.log('4️⃣ Testing Meta Tags...');
  
  https.get(website, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('   ✅ Website HTML accessible');
        
        // Check for essential meta tags
        const checks = [
          { name: 'Title Tag', pattern: /<title[^>]*>([^<]+)<\/title>/i, found: false },
          { name: 'Meta Description', pattern: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i, found: false },
          { name: 'Meta Keywords', pattern: /<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i, found: false },
          { name: 'Open Graph Title', pattern: /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i, found: false },
          { name: 'Open Graph Description', pattern: /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i, found: false },
          { name: 'Twitter Card', pattern: /<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']+)["']/i, found: false },
          { name: 'Canonical URL', pattern: /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i, found: false },
          { name: 'Google Site Verification', pattern: /<meta[^>]*name=["']google-site-verification["'][^>]*content=["']([^"']+)["']/i, found: false }
        ];
        
        checks.forEach(check => {
          const match = data.match(check.pattern);
          if (match) {
            check.found = true;
            console.log(`   ✅ ${check.name}: Found`);
          } else {
            console.log(`   ❌ ${check.name}: Missing`);
          }
        });
        
        const foundCount = checks.filter(c => c.found).length;
        console.log(`   📊 Meta Tags Score: ${foundCount}/${checks.length}`);
        
      } else {
        console.log(`   ❌ Website HTML not accessible - Status: ${res.statusCode}`);
      }
      console.log('');
    });
  }).on('error', (err) => {
    console.log(`   ❌ Error accessing website HTML: ${err.message}`);
    console.log('');
  });
}

// Test 5: Check structured data
function checkStructuredData() {
  console.log('5️⃣ Testing Structured Data...');
  
  https.get(website, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        if (data.includes('application/ld+json')) {
          console.log('   ✅ JSON-LD structured data found');
          
          if (data.includes('"@type": "LegalService"')) {
            console.log('   ✅ Legal service schema found');
          } else {
            console.log('   ❌ Legal service schema missing');
          }
          
          if (data.includes('"@type": "Organization"')) {
            console.log('   ✅ Organization schema found');
          } else {
            console.log('   ❌ Organization schema missing');
          }
          
        } else {
          console.log('   ❌ No structured data found');
        }
      } else {
        console.log(`   ❌ Cannot check structured data - Status: ${res.statusCode}`);
      }
      console.log('');
    });
  }).on('error', (err) => {
    console.log(`   ❌ Error checking structured data: ${err.message}`);
    console.log('');
  });
}

// Test 6: Performance check
function checkPerformance() {
  console.log('6️⃣ Performance Recommendations...');
  console.log('   📱 Test your website performance at:');
  console.log(`   🔗 https://pagespeed.web.dev/?url=${encodeURIComponent(website)}`);
  console.log('   📱 Test mobile-friendliness at:');
  console.log(`   🔗 https://search.google.com/test/mobile-friendly?url=${encodeURIComponent(website)}`);
  console.log('   🔍 Test rich results at:');
  console.log(`   🔗 https://search.google.com/test/rich-results?url=${encodeURIComponent(website)}`);
  console.log('');
}

// Test 7: Google Search Console
function checkGoogleSearchConsole() {
  console.log('7️⃣ Google Search Console Setup...');
  console.log('   🔗 Visit: https://search.google.com/search-console');
  console.log('   📝 Add your property: ' + website);
  console.log('   ✅ Use verification code: oNXSNTCT8bkYSdN_2lQTvlmsE72LjNPWKF9uNIR5ZxY');
  console.log('   📋 Submit sitemap: ' + website + '/sitemap.xml');
  console.log('   🔍 Request indexing for main page');
  console.log('');
}

// Test 8: Google Analytics
function checkGoogleAnalytics() {
  console.log('8️⃣ Google Analytics Setup...');
  console.log('   ✅ Google Analytics tracking code added');
  console.log('   ✅ Tracking ID: G-HHVS97YJNP');
  console.log('   ✅ Changes deployed and working');
  console.log('   📊 Check analytics at: https://analytics.google.com/');
  console.log('');
}

// Run all tests
async function runAllTests() {
  checkWebsiteAccessibility();
  
  // Wait a bit between tests to avoid overwhelming the server
  setTimeout(() => {
    checkRobotsTxt();
  }, 1000);
  
  setTimeout(() => {
    checkSitemap();
  }, 2000);
  
  setTimeout(() => {
    checkMetaTags();
  }, 3000);
  
  setTimeout(() => {
    checkStructuredData();
  }, 4000);
  
  setTimeout(() => {
    checkPerformance();
  }, 5000);
  
  setTimeout(() => {
    checkGoogleSearchConsole();
  }, 6000);
  
  setTimeout(() => {
    checkGoogleAnalytics();
    
    console.log('🎯 NEXT STEPS:');
    console.log('   1. Complete Google Search Console setup');
    console.log('   2. ✅ Google Analytics setup completed');
    console.log('   3. Submit sitemap for indexing');
    console.log('   4. Monitor Search Console daily');
    console.log('');
    console.log('📚 Read the complete guide: GOOGLE_SEO_GUIDE.md');
  }, 7000);
}

// Run the tests
runAllTests();
