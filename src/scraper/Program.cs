using System;
using System.IO;
using System.Threading.Tasks;
using SchoolVisionAI.Scraper;
using Serilog;

namespace SchoolVisionAI.Scraper
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Configure Serilog for console application
            Log.Logger = new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.File("scraper-app.log")
                .CreateLogger();

            try
            {
                Log.Information("SchoolVision.net Web Scraper Starting...");

                // Set output directory
                var outputDirectory = Path.Combine(Directory.GetCurrentDirectory(), "scraped_data");
                
                // Create scraper instance
                using (var scraper = new WebScraper(outputDirectory))
                {
                    // Execute scraping
                    var result = await scraper.ScrapeWebsiteAsync();
                    
                    // Display results
                    Log.Information("Scraping completed successfully!");
                    Log.Information("Total pages scraped: {PageCount}", result.TotalPagesScraped);
                    Log.Information("Results saved to: {OutputDirectory}", outputDirectory);
                    
                    // Display page summary
                    Console.WriteLine("\nScraped Pages Summary:");
                    Console.WriteLine("======================");
                    
                    foreach (var page in result.Pages)
                    {
                        Console.WriteLine($"- {page.Title}");
                        Console.WriteLine($"  URL: {page.Url}");
                        Console.WriteLine($"  Headers: {page.Headers.Count}");
                        Console.WriteLine($"  Links: {page.Links.Count}");
                        Console.WriteLine($"  Images: {page.Images.Count}");
                        Console.WriteLine();
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Fatal error occurred during scraping");
                Console.WriteLine($"Error: {ex.Message}");
                Environment.Exit(1);
            }
            finally
            {
                Log.CloseAndFlush();
            }
            
            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}