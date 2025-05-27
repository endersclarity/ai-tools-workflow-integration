# AI Tools Workflow Integration - Project Configuration

## Project Commands
- `npm run test`: Run integration tests (when implemented)
- `python stress_test/run_tests.py`: Execute workflow stress tests
- `mcp`: Check MCP server status and connectivity

## Code Style & Conventions
- Python: Follow PEP 8 standards for all integration scripts
- Documentation: Use Markdown with consistent headers and structure
- API Clients: Implement proper error handling and retry logic
- Configuration: Store API keys securely, never commit credentials

## Testing Workflow
- Stress test each platform integration independently before combining
- Document all failure points and workflow weaknesses
- Test with both simple and complex real-world scenarios
- Validate MCP server connectivity and reliability

## Repository Notes
- This project uses Model Context Protocol (MCP) servers for AI tool integration
- 15+ MCP servers configured including figma, github, memory, playwright
- All API credentials managed through MCP server environment variables
- Focus on identifying workflow assumptions and stress-testing integration points

## Development Workflow
1. Research platform capabilities and API limitations
2. Build minimal prototypes to test integration assumptions
3. Document all discovered weaknesses and failure points
4. Iterate on architecture based on real-world testing results
5. Create reusable patterns and templates for future projects

## Important Notes
- Figma API token configured and validated (stored securely in MCP server config)
- Project uses HDTA (Hierarchical Decomposition Task Architecture) for organization
- All major workflows documented in memory-bank/ directory structure
- Emphasis on stress-testing and failure point identification over perfect implementation