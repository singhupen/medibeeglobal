const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const targetDir = path.join(__dirname, '..', 'public', 'Asset');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  // 1. Medanta Hospital, Gurugram
  { id: 'medanta-1', url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Medanta_the_medicity_hospital.jpg' },
  { id: 'medanta-2', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80' },
  { id: 'medanta-3', url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80' },

  // 2. Gleneagles Global Health City, Chennai
  { id: 'gleneagles-1', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80' },
  { id: 'gleneagles-2', url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80' },
  { id: 'gleneagles-3', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80' },

  // 3. Apollo Hospitals India
  { id: 'apollo-1', url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Apollo_Hospital_New_Delhi_India.jpg' },
  { id: 'apollo-2', url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Apollo_Hospitals_Bengaluru.jpg' },
  { id: 'apollo-3', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80' },

  // 4. Fortis Healthcare India
  { id: 'fortis-1', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Fortis_Hospital_Noida_-_panoramio.jpg' },
  { id: 'fortis-2', url: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80' },
  { id: 'fortis-3', url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80' },

  // 5. Max Healthcare, Delhi
  { id: 'max-1', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Max_Building.jpg' },
  { id: 'max-2', url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80' },
  { id: 'max-3', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80' },

  // 6. HCG Cancer Centre, Bangalore
  { id: 'hcg-1', url: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=1200&q=80' },
  { id: 'hcg-2', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80' },
  { id: 'hcg-3', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80' },

  // 7. Kokilaben Hospital, Mumbai
  { id: 'kokilaben-1', url: 'https://kdahweb-static-1.kokilabenhospital.com/kdah-2019/product/5bbaf94d00bb8Exterior.jpg' },
  { id: 'kokilaben-2', url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80' },
  { id: 'kokilaben-3', url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80' },

  // 8. Artemis Hospital, Gurugram
  { id: 'artemis-1', url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80' },
  { id: 'artemis-2', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80' },
  { id: 'artemis-3', url: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80' },

  // 9. Rainbow Children's Hospital and BirthRight, Hyderabad
  { id: 'rainbow-1', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80' },
  { id: 'rainbow-2', url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80' },
  { id: 'rainbow-3', url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80' },

  // 10. Wockhardt Hospitals, Mumbai
  { id: 'wockhardt-1', url: 'https://upload.wikimedia.org/wikipedia/en/9/99/Wockhardt_Hospital_Mumbai.jpg' },
  { id: 'wockhardt-2', url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80' },
  { id: 'wockhardt-3', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80' },
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https');
    const client = isHttps ? https : http;

    const req = client.get(url, {
      headers: {
        'User-Agent': 'MediBeeGlobalBot/1.0 (contact@medibeeglobal.com; cross-border medical portal)',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const parsed = new URL(url);
          redirectUrl = parsed.origin + redirectUrl;
        }
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    });

    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log(`Starting download of ${images.length} hospital images into ${targetDir}...`);
  let successCount = 0;

  for (const item of images) {
    const dest = path.join(targetDir, `${item.id}.jpg`);
    try {
      await downloadFile(item.url, dest);
      const size = fs.statSync(dest).size;
      console.log(`✓ [${item.id}.jpg] (${(size / 1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err) {
      console.error(`✗ [${item.id}.jpg] Error: ${err.message}`);
    }
    await delay(600); // 600ms delay between downloads to prevent throttling
  }

  console.log(`\nCompleted: ${successCount}/${images.length} images downloaded.`);
}

run();
