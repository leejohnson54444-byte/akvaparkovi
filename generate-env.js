const fs = require('fs');
require('dotenv').config();

// Generiraj env-config.js iz environment varijabli
const envConfig = `// Auto-generated - DO NOT COMMIT
window.__ENV__ = {
    GOOGLE_CLIENT_ID: "${process.env.GOOGLE_CLIENT_ID || ''}",
    GA_PROPERTY_ID: "${process.env.GA_PROPERTY_ID || ''}"
};
`;

fs.writeFileSync('env-config.js', envConfig);
console.log('✅ env-config.js generated successfully');
