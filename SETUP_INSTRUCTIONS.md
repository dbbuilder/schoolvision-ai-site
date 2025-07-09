# Install all dependencies
cd src/frontend && npm install
cd ../backend && dotnet restore
cd ../scraper && dotnet restore

# Run everything locally
# Terminal 1: Backend API
cd src/backend/SchoolVisionAI.API
dotnet run

# Terminal 2: Frontend
cd src/frontend
npm run dev

# Terminal 3: Run scraper (one-time)
cd src/scraper
dotnet run
```

## AI Integration Setup

### Azure Cognitive Services

```powershell
# Create Cognitive Services account
az cognitiveservices account create \
  --name cs-schoolvision-ai \
  --resource-group rg-schoolvision-ai \
  --kind CognitiveServices \
  --sku S0 \
  --location eastus \
  --yes

# Create Computer Vision resource
az cognitiveservices account create \
  --name cv-schoolvision-ai \
  --resource-group rg-schoolvision-ai \
  --kind ComputerVision \
  --sku S1 \
  --location eastus \
  --yes

# Create Form Recognizer resource
az cognitiveservices account create \
  --name fr-schoolvision-ai \
  --resource-group rg-schoolvision-ai \
  --kind FormRecognizer \
  --sku S0 \
  --location eastus \
  --yes
```

### Azure Machine Learning

```powershell
# Create Machine Learning workspace
az ml workspace create \
  --name ml-schoolvision-ai \
  --resource-group rg-schoolvision-ai \
  --location eastus

# Create compute instance for development
az ml compute create \
  --name compute-dev \
  --resource-group rg-schoolvision-ai \
  --workspace-name ml-schoolvision-ai \
  --type ComputeInstance \
  --size STANDARD_DS3_V2
```

## Content Migration Workflow

### 1. Analyze Scraped Content

After running the scraper, review the output:

```powershell
cd scraped_data
# Review scrape_summary.json for site structure
# Check pages/ folder for individual page content
```

### 2. Transform Content with AI Focus

Create transformation scripts to:
- Update messaging to include AI benefits
- Enhance feature descriptions with AI capabilities
- Generate new value propositions
- Create AI-focused case studies

### 3. Prepare Media Assets

```powershell
# Create directories for new assets
mkdir src/frontend/public/images/ai-features
mkdir src/frontend/public/videos
mkdir src/frontend/public/icons

# Process and optimize images
# Use tools like ImageMagick or online services
```

## Development Workflow

### 1. Frontend Development

```vue
<!-- Example Vue component structure -->
<!-- src/frontend/src/components/AIPoweredPOS.vue -->
<template>
  <div class="ai-pos-container">
    <h2 class="text-3xl font-bold mb-4">AI-Powered Point of Sale</h2>
    <div class="features-grid">
      <!-- Feature components -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAIFeatures } from '@/composables/useAIFeatures'

const { predictInventory, detectFraud } = useAIFeatures()
</script>
```

### 2. Backend API Development

```csharp
// Example API controller
// src/backend/SchoolVisionAI.API/Controllers/POSController.cs
[ApiController]
[Route("api/[controller]")]
public class POSController : ControllerBase
{
    private readonly IPOSService _posService;
    private readonly ILogger<POSController> _logger;
    
    public POSController(IPOSService posService, ILogger<POSController> logger)
    {
        _posService = posService;
        _logger = logger;
    }
    
    [HttpPost("transaction")]
    public async Task<IActionResult> ProcessTransaction([FromBody] TransactionDto transaction)
    {
        try
        {
            _logger.LogInformation("Processing transaction {TransactionId}", transaction.Id);
            
            // AI fraud detection
            var fraudScore = await _posService.AnalyzeFraudRiskAsync(transaction);
            if (fraudScore > 0.8)
            {
                _logger.LogWarning("High fraud risk detected for transaction {TransactionId}", transaction.Id);
                return BadRequest(new { error = "Transaction flagged for review" });
            }
            
            // Process transaction
            var result = await _posService.ProcessTransactionAsync(transaction);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing transaction");
            return StatusCode(500, new { error = "Internal server error" });
        }
    }
}
```

### 3. Database Stored Procedures

```sql
-- Example stored procedure
-- src/backend/Database/Stored Procedures/POS/usp_ProcessTransaction.sql
CREATE PROCEDURE [POS].[usp_ProcessTransaction]
    @TransactionId UNIQUEIDENTIFIER,
    @StoreId INT,
    @CustomerId INT,
    @Amount DECIMAL(10,2),
    @PaymentMethod NVARCHAR(50),
    @FraudScore DECIMAL(3,2)
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Declare variables
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @ErrorSeverity INT;
    DECLARE @ErrorState INT;
    
    BEGIN TRY
        BEGIN TRANSACTION
        
        -- Insert transaction
        INSERT INTO [POS].[Transactions] (
            TransactionId,
            StoreId,
            CustomerId,
            Amount,
            PaymentMethod,
            FraudScore,
            TransactionDate,
            Status
        )
        VALUES (
            @TransactionId,
            @StoreId,
            @CustomerId,
            @Amount,
            @PaymentMethod,
            @FraudScore,
            GETUTCDATE(),
            CASE WHEN @FraudScore > 0.8 THEN 'Review' ELSE 'Completed' END
        );
        
        -- Update inventory if needed
        -- Additional business logic here
        
        COMMIT TRANSACTION
        
        -- Return result
        SELECT 
            TransactionId,
            Status,
            TransactionDate
        FROM [POS].[Transactions]
        WHERE TransactionId = @TransactionId;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END
GO
```

## Testing Strategy

### 1. Unit Tests

```csharp
// Example unit test
// tests/SchoolVisionAI.Tests/Services/POSServiceTests.cs
[TestClass]
public class POSServiceTests
{
    private Mock<IRepository<Transaction>> _mockRepo;
    private Mock<ILogger<POSService>> _mockLogger;
    private POSService _service;
    
    [TestInitialize]
    public void Setup()
    {
        _mockRepo = new Mock<IRepository<Transaction>>();
        _mockLogger = new Mock<ILogger<POSService>>();
        _service = new POSService(_mockRepo.Object, _mockLogger.Object);
    }
    
    [TestMethod]
    public async Task ProcessTransaction_ValidTransaction_ReturnsSuccess()
    {
        // Arrange
        var transaction = new TransactionDto 
        { 
            Id = Guid.NewGuid(),
            Amount = 50.00m,
            PaymentMethod = "CreditCard"
        };
        
        // Act
        var result = await _service.ProcessTransactionAsync(transaction);
        
        // Assert
        Assert.IsNotNull(result);
        Assert.AreEqual("Completed", result.Status);
    }
}
```

### 2. Integration Tests

```javascript
// Example Vue component test
// src/frontend/src/components/__tests__/AIPoweredPOS.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AIPoweredPOS from '../AIPoweredPOS.vue'

describe('AIPoweredPOS', () => {
  it('renders properly', () => {
    const wrapper = mount(AIPoweredPOS, {
      props: {
        storeId: 1
      }
    })
    expect(wrapper.text()).toContain('AI-Powered Point of Sale')
  })
  
  it('displays fraud detection status', async () => {
    const wrapper = mount(AIPoweredPOS)
    await wrapper.vm.processTransaction({ amount: 1000 })
    expect(wrapper.find('.fraud-status').exists()).toBe(true)
  })
})
```

## Deployment Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy SchoolVision AI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test-backend:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 8.0.x
    
    - name: Restore dependencies
      run: dotnet restore src/backend/SchoolVisionAI.sln
    
    - name: Build
      run: dotnet build src/backend/SchoolVisionAI.sln --no-restore
    
    - name: Test
      run: dotnet test src/backend/SchoolVisionAI.sln --no-build --verbosity normal
    
    - name: Publish
      run: dotnet publish src/backend/SchoolVisionAI.API/SchoolVisionAI.API.csproj -c Release -o ./publish
    
    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: app-schoolvision-ai-api
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE_API }}
        package: ./publish

  build-and-test-frontend:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: cd src/frontend && npm ci
    
    - name: Run tests
      run: cd src/frontend && npm run test:unit
    
    - name: Build
      run: cd src/frontend && npm run build
    
    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: app-schoolvision-ai-web
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE_WEB }}
        package: src/frontend/dist
```

## Monitoring and Maintenance

### Application Insights Queries

```kusto
// Monitor API performance
requests
| where timestamp > ago(1h)
| summarize 
    avg(duration), 
    percentile(duration, 95), 
    count() 
by bin(timestamp, 5m), name
| render timechart

// Track AI feature usage
customEvents
| where name == "AIFeatureUsed"
| summarize count() by tostring(customDimensions.FeatureName)
| render piechart

// Monitor errors
exceptions
| where timestamp > ago(1d)
| summarize count() by problemId, outerMessage
| order by count_ desc
```

## Support and Documentation

- **Technical Documentation**: `/docs/api/README.md`
- **Architecture Guide**: `/docs/architecture/README.md`
- **Deployment Guide**: `/docs/deployment/README.md`
- **Troubleshooting**: Check logs in Application Insights
- **Contact**: support@schoolvision.ai

## Quick Reference

### Common Commands
```powershell
# Start development
cd src/frontend && npm run dev
cd src/backend/SchoolVisionAI.API && dotnet run

# Run tests
cd src/frontend && npm run test
cd src/backend && dotnet test

# Build for production
cd src/frontend && npm run build
cd src/backend && dotnet publish -c Release

# Database migrations
cd src/backend/SchoolVisionAI.API
dotnet ef migrations add [MigrationName]
dotnet ef database update
```

## Next Actions

1. Run the scraper to analyze current site content
2. Review the scraped data and plan content transformation
3. Set up the development environment
4. Begin implementing core features with AI enhancements
5. Create CI/CD pipelines
6. Deploy to Azure for testing

The project is now ready for development. All documentation and structure is in place to build the AI-enhanced SchoolVision platform.