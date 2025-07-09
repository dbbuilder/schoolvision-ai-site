using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Newtonsoft.Json;
using Serilog;

namespace SchoolVisionAI.Scraper
{
    public class WebScraper
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger _logger;
        private readonly string _baseUrl = "https://schoolvision.net";
        private readonly string _outputDirectory;
        private readonly HashSet<string> _visitedUrls;
        private readonly List<PageContent> _scrapedPages;

        public WebScraper(string outputDirectory)
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "SchoolVisionAI-Scraper/1.0");
            
            _outputDirectory = outputDirectory;
            _visitedUrls = new HashSet<string>();
            _scrapedPages = new List<PageContent>();

            // Configure Serilog
            _logger = new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.File(Path.Combine(_outputDirectory, "scraper.log"))
                .CreateLogger();
        }

        public async Task<ScraperResult> ScrapeWebsiteAsync()
        {
            try
            {
                _logger.Information("Starting web scraping for {BaseUrl}", _baseUrl);
                
                // Create output directory if it doesn't exist
                Directory.CreateDirectory(_outputDirectory);
                Directory.CreateDirectory(Path.Combine(_outputDirectory, "pages"));
                Directory.CreateDirectory(Path.Combine(_outputDirectory, "assets"));

                // Start scraping from the home page
                await ScrapePageAsync(_baseUrl);

                // Save the results
                var result = new ScraperResult
                {
                    TotalPagesScraped = _scrapedPages.Count,
                    Pages = _scrapedPages,
                    ScrapeDate = DateTime.UtcNow
                };

                // Save summary to JSON
                var summaryPath = Path.Combine(_outputDirectory, "scrape_summary.json");
                var json = JsonConvert.SerializeObject(result, Formatting.Indented);
                await File.WriteAllTextAsync(summaryPath, json);

                _logger.Information("Scraping completed. Total pages: {PageCount}", result.TotalPagesScraped);
                
                return result;
            }
            catch (Exception ex)
            {
                _logger.Error(ex, "Error during web scraping");
                throw;
            }
        }

        private async Task ScrapePageAsync(string url)
        {
            try
            {
                // Skip if already visited
                if (_visitedUrls.Contains(url))
                    return;

                _visitedUrls.Add(url);
                _logger.Information("Scraping page: {Url}", url);

                // Download the page
                var response = await _httpClient.GetAsync(url);
                if (!response.IsSuccessStatusCode)
                {
                    _logger.Warning("Failed to download page {Url}: {StatusCode}", url, response.StatusCode);
                    return;
                }

                var html = await response.Content.ReadAsStringAsync();
                
                // Parse the HTML
                var doc = new HtmlDocument();
                doc.LoadHtml(html);

                // Extract page content
                var pageContent = ExtractPageContent(url, doc);
                _scrapedPages.Add(pageContent);

                // Save the page
                await SavePageAsync(pageContent);

                // Find and queue internal links
                var links = ExtractInternalLinks(doc);
                foreach (var link in links)
                {
                    if (IsValidInternalUrl(link))
                    {
                        await ScrapePageAsync(link);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex, "Error scraping page {Url}", url);
            }
        }

        private PageContent ExtractPageContent(string url, HtmlDocument doc)
        {
            var pageContent = new PageContent
            {
                Url = url,
                Title = ExtractTitle(doc),
                MetaDescription = ExtractMetaDescription(doc),
                Headers = ExtractHeaders(doc),
                MainContent = ExtractMainContent(doc),
                Images = ExtractImages(doc),
                Links = ExtractAllLinks(doc),
                NavigationItems = ExtractNavigation(doc),
                ScrapedAt = DateTime.UtcNow
            };

            return pageContent;
        }

        private string ExtractTitle(HtmlDocument doc)
        {
            var titleNode = doc.DocumentNode.SelectSingleNode("//title");
            return titleNode?.InnerText?.Trim() ?? string.Empty;
        }

        private string ExtractMetaDescription(HtmlDocument doc)
        {
            var metaNode = doc.DocumentNode.SelectSingleNode("//meta[@name='description']");
            return metaNode?.GetAttributeValue("content", string.Empty) ?? string.Empty;
        }

        private List<string> ExtractHeaders(HtmlDocument doc)
        {
            var headers = new List<string>();
            var headerNodes = doc.DocumentNode.SelectNodes("//h1 | //h2 | //h3 | //h4");
            
            if (headerNodes != null)
            {
                foreach (var node in headerNodes)
                {
                    var text = node.InnerText.Trim();
                    if (!string.IsNullOrWhiteSpace(text))
                    {
                        headers.Add($"{node.Name.ToUpper()}: {text}");
                    }
                }
            }

            return headers;
        }

        private string ExtractMainContent(HtmlDocument doc)
        {
            // Try to find main content area
            var mainNode = doc.DocumentNode.SelectSingleNode("//main") ??
                          doc.DocumentNode.SelectSingleNode("//article") ??
                          doc.DocumentNode.SelectSingleNode("//div[@class='content']") ??
                          doc.DocumentNode.SelectSingleNode("//div[@id='content']");

            if (mainNode != null)
            {
                return CleanText(mainNode.InnerText);
            }

            return string.Empty;
        }

        private List<string> ExtractImages(HtmlDocument doc)
        {
            var images = new List<string>();
            var imgNodes = doc.DocumentNode.SelectNodes("//img");
            
            if (imgNodes != null)
            {
                foreach (var img in imgNodes)
                {
                    var src = img.GetAttributeValue("src", string.Empty);
                    var alt = img.GetAttributeValue("alt", string.Empty);
                    
                    if (!string.IsNullOrWhiteSpace(src))
                    {
                        images.Add($"{src} | ALT: {alt}");
                    }
                }
            }

            return images;
        }

        private List<string> ExtractInternalLinks(HtmlDocument doc)
        {
            var links = new List<string>();
            var linkNodes = doc.DocumentNode.SelectNodes("//a[@href]");
            
            if (linkNodes != null)
            {
                foreach (var link in linkNodes)
                {
                    var href = link.GetAttributeValue("href", string.Empty);
                    var absoluteUrl = GetAbsoluteUrl(href);
                    
                    if (!string.IsNullOrWhiteSpace(absoluteUrl) && absoluteUrl.StartsWith(_baseUrl))
                    {
                        links.Add(absoluteUrl);
                    }
                }
            }

            return links.Distinct().ToList();
        }

        private List<LinkInfo> ExtractAllLinks(HtmlDocument doc)
        {
            var links = new List<LinkInfo>();
            var linkNodes = doc.DocumentNode.SelectNodes("//a[@href]");
            
            if (linkNodes != null)
            {
                foreach (var link in linkNodes)
                {
                    var href = link.GetAttributeValue("href", string.Empty);
                    var text = CleanText(link.InnerText);
                    
                    links.Add(new LinkInfo
                    {
                        Url = GetAbsoluteUrl(href),
                        Text = text,
                        IsInternal = IsInternalUrl(href)
                    });
                }
            }

            return links;
        }

        private List<string> ExtractNavigation(HtmlDocument doc)
        {
            var navItems = new List<string>();
            var navNode = doc.DocumentNode.SelectSingleNode("//nav");
            
            if (navNode != null)
            {
                var navLinks = navNode.SelectNodes(".//a");
                if (navLinks != null)
                {
                    foreach (var link in navLinks)
                    {
                        var text = CleanText(link.InnerText);
                        if (!string.IsNullOrWhiteSpace(text))
                        {
                            navItems.Add(text);
                        }
                    }
                }
            }

            return navItems;
        }

        private async Task SavePageAsync(PageContent pageContent)
        {
            try
            {
                // Create filename from URL
                var uri = new Uri(pageContent.Url);
                var filename = uri.LocalPath.TrimStart('/').Replace('/', '_');
                if (string.IsNullOrWhiteSpace(filename))
                    filename = "index";
                
                filename = $"{filename}.json";
                var filepath = Path.Combine(_outputDirectory, "pages", filename);

                // Save as JSON
                var json = JsonConvert.SerializeObject(pageContent, Formatting.Indented);
                await File.WriteAllTextAsync(filepath, json);

                _logger.Information("Saved page content to {Filepath}", filepath);
            }
            catch (Exception ex)
            {
                _logger.Error(ex, "Error saving page {Url}", pageContent.Url);
            }
        }

        private string GetAbsoluteUrl(string url)
        {
            if (string.IsNullOrWhiteSpace(url))
                return string.Empty;

            if (url.StartsWith("http://") || url.StartsWith("https://"))
                return url;

            if (url.StartsWith("//"))
                return $"https:{url}";

            if (url.StartsWith("/"))
                return $"{_baseUrl}{url}";

            return $"{_baseUrl}/{url}";
        }

        private bool IsInternalUrl(string url)
        {
            var absoluteUrl = GetAbsoluteUrl(url);
            return absoluteUrl.StartsWith(_baseUrl);
        }

        private bool IsValidInternalUrl(string url)
        {
            // Skip certain file types and anchors
            var invalidExtensions = new[] { ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".zip", ".jpg", ".jpeg", ".png", ".gif" };
            var lowerUrl = url.ToLower();
            
            return !invalidExtensions.Any(ext => lowerUrl.EndsWith(ext)) &&
                   !url.Contains("#") &&
                   !url.Contains("mailto:") &&
                   !url.Contains("tel:");
        }

        private string CleanText(string text)
        {
            return text?.Trim()
                .Replace("\r\n", " ")
                .Replace("\n", " ")
                .Replace("\t", " ")
                .Replace("  ", " ") ?? string.Empty;
        }

        public void Dispose()
        {
            _httpClient?.Dispose();
        }
    }

    public class ScraperResult
    {
        public int TotalPagesScraped { get; set; }
        public List<PageContent> Pages { get; set; }
        public DateTime ScrapeDate { get; set; }
    }

    public class PageContent
    {
        public string Url { get; set; }
        public string Title { get; set; }
        public string MetaDescription { get; set; }
        public List<string> Headers { get; set; }
        public string MainContent { get; set; }
        public List<string> Images { get; set; }
        public List<LinkInfo> Links { get; set; }
        public List<string> NavigationItems { get; set; }
        public DateTime ScrapedAt { get; set; }
    }

    public class LinkInfo
    {
        public string Url { get; set; }
        public string Text { get; set; }
        public bool IsInternal { get; set; }
    }
}