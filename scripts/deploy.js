import FtpDeploy from 'ftp-deploy';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env manually (no dotenv dependency needed)
try {
  const env = readFileSync(resolve(__dirname, '../.env'), 'utf8');
  for (const line of env.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
} catch {
  // .env not found — rely on environment variables already set
}

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_ROOT = '/public_html/' } = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error('Missing FTP credentials. Set FTP_HOST, FTP_USER, and FTP_PASSWORD in .env');
  process.exit(1);
}

const ftpDeploy = new FtpDeploy();

const config = {
  user: FTP_USER,
  password: FTP_PASSWORD,
  host: FTP_HOST,
  port: 21,
  localRoot: resolve(__dirname, '../dist'),
  remoteRoot: FTP_REMOTE_ROOT,
  include: ['**/*', '**/.htaccess'],
  deleteRemote: false,
  forcePasv: true,
  sftp: false,
};

console.log(`Deploying dist/ → ${FTP_HOST}:${FTP_REMOTE_ROOT}`);

ftpDeploy.on('uploading', ({ filename, transferredFileCount, totalFilesCount }) => {
  process.stdout.write(`\r[${transferredFileCount}/${totalFilesCount}] ${filename}           `);
});

ftpDeploy.on('upload-error', ({ filename, err }) => {
  console.error(`\nUpload error: ${filename} — ${err.message}`);
});

try {
  await ftpDeploy.deploy(config);
  console.log('\nDeploy complete.');
} catch (err) {
  console.error('\nDeploy failed:', err.message);
  process.exit(1);
}
