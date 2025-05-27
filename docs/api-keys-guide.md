# Complete API Keys Setup Guide

## 🔑 Required API Keys (9 Total)

Based on your `.mcp.json` configuration, here are all the API keys you need and exactly how to get them:

---

## 1. 🎨 **FIGMA_TOKEN** (High Priority)
**Service**: Figma Design Tool Integration  
**Used for**: Design-to-code workflows, accessing Figma files and components

### How to Get:
1. **Go to**: [https://www.figma.com/developers/api](https://www.figma.com/developers/api)
2. **Sign in** to your Figma account
3. **Scroll down** to "Personal Access Tokens" section
4. **Click "Create new token"**
5. **Give it a name** like "Claude MCP Integration"
6. **Set scope** to "File content" (read access to your designs)
7. **Copy the token** immediately (won't be shown again)

### Configuration:
```json
"FIGMA_TOKEN": "figd_your_actual_token_here"
```

---

## 2. 💻 **REPLIT_TOKEN** (High Priority)
**Service**: Replit Cloud Development Environment  
**Used for**: Cloud coding, deployment, collaboration

### How to Get:
1. **Go to**: [https://replit.com](https://replit.com)
2. **Sign in** to your account
3. **Click your profile** (top right) → **Account**
4. **Go to** "API" section in the sidebar
5. **Click "Generate API Token"**
6. **Copy the token**

### Configuration:
```json
"REPLIT_TOKEN": "your_replit_api_token_here"
```

---

## 3. 🔍 **BRAVE_API_KEY** (High Priority)
**Service**: Brave Search API  
**Used for**: Web search capabilities, research automation

### How to Get:
1. **Go to**: [https://api.search.brave.com](https://api.search.brave.com)
2. **Click "Get Started"** or "Sign Up"
3. **Create account** with email
4. **Verify email** address
5. **Go to Dashboard** → **API Keys**
6. **Click "Create New Key"**
7. **Name it** "Claude MCP Integration"
8. **Copy the API key**

### Pricing:
- **Free tier**: 2,000 queries/month
- **Paid plans**: Starting at $3/month for 20K queries

### Configuration:
```json
"BRAVE_API_KEY": "BSA_your_brave_api_key_here"
```

---

## 4. 📊 **AIRTABLE_API_KEY** (Medium Priority)
**Service**: Airtable Database Platform  
**Used for**: Spreadsheet database operations, data management

### How to Get:
1. **Go to**: [https://airtable.com/developers/web/api/introduction](https://airtable.com/developers/web/api/introduction)
2. **Sign in** to your Airtable account
3. **Go to**: [https://airtable.com/create/tokens](https://airtable.com/create/tokens)
4. **Click "Create token"**
5. **Give it a name** like "Claude MCP"
6. **Set scopes**: `data.records:read`, `data.records:write`, `schema.bases:read`
7. **Select workspaces** you want to access
8. **Create and copy token**

### Configuration:
```json
"AIRTABLE_API_KEY": "pat_your_airtable_token_here"
```

---

## 5. 🎯 **NOTION_API_KEY** (High Priority)
**Service**: Notion Workspace Integration  
**Used for**: Knowledge management, documentation, project planning

### How to Get:
1. **Go to**: [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. **Sign in** to your Notion account
3. **Click "New integration"**
4. **Name**: "Claude MCP Integration"
5. **Select workspace** to integrate with
6. **Submit** the form
7. **Copy the "Internal Integration Token"**
8. **Share relevant pages** with your integration:
   - Go to any Notion page you want to access
   - Click "Share" → "Invite" 
   - Search for your integration name and add it

### Configuration:
```json
"NOTION_API_KEY": "secret_your_notion_integration_token_here"
```

---

## 6. 🔎 **TAVILY_API_KEY** (Medium Priority)
**Service**: Advanced Web Search & Crawling  
**Used for**: Research automation, web data extraction

### How to Get:
1. **Go to**: [https://tavily.com](https://tavily.com)
2. **Sign up** for an account
3. **Verify email** address
4. **Go to Dashboard** → **API Keys**
5. **Click "Generate API Key"**
6. **Copy the key**

### Pricing:
- **Free tier**: 1,000 requests/month
- **Pro plans**: Starting at $50/month

### Configuration:
```json
"TAVILY_API_KEY": "tvly-your_tavily_api_key_here"
```

---

## 7. 📧 **GMAIL_API_KEY** (Medium Priority)
**Service**: Gmail Email Integration  
**Used for**: Email automation, notifications, outreach

### How to Get (OAuth2 - More Complex):
1. **Go to**: [https://console.cloud.google.com](https://console.cloud.google.com)
2. **Create new project** or select existing
3. **Enable Gmail API**:
   - Go to "APIs & Services" → "Library"
   - Search "Gmail API" → Enable
4. **Create credentials**:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Desktop application"
   - Name: "Claude MCP Gmail"
5. **Download JSON** credentials file
6. **Set up OAuth consent screen** (if required)

### Alternative (App Password - Simpler):
1. **Enable 2FA** on your Google account
2. **Go to**: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. **Generate app password** for "Mail"
4. **Use email + app password** for basic auth

### Configuration:
```json
"GMAIL_API_KEY": "your_gmail_oauth_token_or_app_password"
```

---

## 8. 🧪 **POSTMAN_API_KEY** (Low Priority)
**Service**: Postman API Testing Platform  
**Used for**: API testing, documentation, workflow automation

### How to Get:
1. **Go to**: [https://postman.com](https://postman.com)
2. **Sign in** to your account
3. **Click your avatar** (top right) → **Settings**
4. **Go to "API keys" tab**
5. **Click "Generate API Key"**
6. **Name**: "Claude MCP Integration"
7. **Copy the key**

### Configuration:
```json
"POSTMAN_API_KEY": "PMAK-your_postman_api_key_here"
```

---

## 9. 🎨 **EVERART_API_KEY** (Low Priority)
**Service**: AI Art Generation Platform  
**Used for**: AI image generation, creative workflows

### How to Get:
1. **Go to**: [https://everart.ai](https://everart.ai)
2. **Sign up** for an account
3. **Go to Dashboard** → **API**
4. **Generate API key**
5. **Copy the key**

### Note**: This service may have limited availability or pricing

### Configuration:
```json
"EVERART_API_KEY": "your_everart_api_key_here"
```

---

## 🔧 Implementation Priority

### **Immediate Setup (Start Here)**:
1. **Figma Token** - Essential for design-to-code workflow
2. **Replit Token** - Core cloud development environment
3. **Brave Search** - Web research capabilities
4. **Notion API** - Knowledge management

### **Secondary Setup**:
5. **Airtable** - Database operations
6. **Tavily** - Advanced search (if Brave isn't sufficient)

### **Optional Setup**:
7. **Gmail API** - Email automation (complex setup)
8. **Postman** - API testing (if not using other tools)
9. **EverArt** - AI art generation (specialty use)

---

## ✅ **Already Configured**

### **EXA_API_KEY** ✅
Already configured in your setup:
```json
"EXA_API_KEY": "1f8994cc-0dcf-4899-9588-1665b18c0b91"
```

---

## 🔐 Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for production
3. **Rotate keys regularly** (quarterly)
4. **Set up usage alerts** where available
5. **Use minimum required permissions** for each key
6. **Store keys securely** (password manager)

---

## 🚀 Quick Start Commands

After obtaining keys, update your configuration:

```bash
# Navigate to project
cd /home/ender/.claude/projects/ai-tools-workflow-integration

# Edit the .mcp.json file
nano .mcp.json

# Replace all "your_*_here" placeholders with actual keys
# Test the configuration
claude mcp list
```

---

## 💡 Free Tier Limitations

Most services offer generous free tiers:
- **Brave Search**: 2,000 queries/month
- **Tavily**: 1,000 requests/month  
- **Figma**: Free for personal use
- **Notion**: Free for personal use
- **Airtable**: 1,200 records per base
- **Replit**: Free tier available

Start with free tiers and upgrade as needed based on usage patterns.