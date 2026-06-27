const fs = require('fs');
const path = require('path');
const campusesDir = path.join(process.cwd(), 'public', 'images', 'campuses');
const folders = fs.readdirSync(campusesDir);
const campusData = {};
folders.forEach(folder => {
  const files = fs.readdirSync(path.join(campusesDir, folder)).filter(f => f.endsWith('.jpg') || f.endsWith('.webp') || f.endsWith('.png'));
  campusData[folder] = files.map(f => '/images/campuses/' + folder + '/' + f);
});

const campuses = [
  {
    id: 'unilag',
    name: 'MFMCF UNILAG',
    university: 'University of Lagos',
    location: 'Akoka, Lagos',
    zone: 'South-West',
    slogan: 'Igniting the Akoka Campus with the Fire of the Holy Ghost',
    stats: { members: '1,200+', subgroups: 8, founded: 1998 },
    schedule: [
      { day: 'Sunday', time: '8:00 AM', event: 'Campus Fire Service', loc: 'Main Auditorium' },
      { day: 'Wednesday', time: '5:00 PM', event: 'Bible Study', loc: 'ETF Building' },
      { day: 'Friday', time: '10:00 PM', event: 'Night Vigil', loc: 'Sports Centre' }
    ]
  },
  {
    id: 'oau',
    name: 'MFMCF OAU',
    university: 'Obafemi Awolowo University',
    location: 'Ile-Ife, Osun',
    zone: 'South-West',
    slogan: 'Great Ife for Christ',
    stats: { members: '1,800+', subgroups: 12, founded: 1995 },
    schedule: [
      { day: 'Sunday', time: '7:30 AM', event: 'Worship Service', loc: 'Oduduwa Hall' },
      { day: 'Thursday', time: '5:30 PM', event: 'Prayer Rain', loc: 'Amphi Theatre' }
    ]
  },
  {
    id: 'unn',
    name: 'MFMCF UNN',
    university: 'University of Nigeria, Nsukka',
    location: 'Nsukka, Enugu',
    zone: 'South-East',
    slogan: 'Raising Lions for the Kingdom',
    stats: { members: '900+', subgroups: 6, founded: 2001 },
    schedule: [
      { day: 'Sunday', time: '8:00 AM', event: 'Sunday Service', loc: 'Ekpo Ref' },
      { day: 'Wednesday', time: '5:00 PM', event: 'Midweek Fire', loc: 'Sub Hall' }
    ]
  },
  {
    id: 'unilorin',
    name: 'MFMCF UNILORIN',
    university: 'University of Ilorin',
    location: 'Ilorin, Kwara',
    zone: 'North-Central',
    slogan: 'Better by Far, Greater by Fire',
    stats: { members: '1,500+', subgroups: 10, founded: 2000 },
    schedule: [
      { day: 'Sunday', time: '7:00 AM', event: 'Sunday Glory', loc: 'Multi-Purpose Hall' },
      { day: 'Tuesday', time: '6:00 PM', event: 'Bible Study', loc: 'Block 4' }
    ]
  },
  {
    id: 'unical',
    name: 'MFMCF UNICAL',
    university: 'University of Calabar',
    location: 'Calabar, Cross River',
    zone: 'South-South',
    slogan: 'Malabo on Fire',
    stats: { members: '1,100+', subgroups: 7, founded: 1999 },
    schedule: [
      { day: 'Sunday', time: '8:30 AM', event: 'Divine Encounter', loc: 'Malabo Hall' },
      { day: 'Thursday', time: '5:00 PM', event: 'Prayer Meeting', loc: 'Pavilion' }
    ]
  },
  {
    id: 'uniben',
    name: 'MFMCF UNIBEN',
    university: 'University of Benin',
    location: 'Benin, Edo',
    zone: 'South-South',
    slogan: 'Unibest in the Spirit',
    stats: { members: '1,400+', subgroups: 9, founded: 1997 },
    schedule: [
      { day: 'Sunday', time: '8:00 AM', event: 'Glory Service', loc: 'Main Chapel' },
      { day: 'Wednesday', time: '5:30 PM', event: 'Word Diet', loc: 'Lecture Theatre' }
    ]
  },
  {
    id: 'lasu',
    name: 'MFMCF LASU',
    university: 'Lagos State University',
    location: 'Ojo, Lagos',
    zone: 'South-West',
    slogan: 'Radiating His Glory on Campus',
    stats: { members: '800+', subgroups: 5, founded: 2002 },
    schedule: [
      { day: 'Sunday', time: '8:00 AM', event: 'Worship Encounter', loc: 'Faculty of Arts' },
      { day: 'Thursday', time: '4:00 PM', event: 'Prayer Rain', loc: 'Pavilion' }
    ]
  },
  {
    id: 'funaab',
    name: 'MFMCF FUNAAB',
    university: 'Federal University of Agriculture',
    location: 'Abeokuta, Ogun',
    zone: 'South-West',
    slogan: 'Sowing the Seed of the Word',
    stats: { members: '950+', subgroups: 6, founded: 2000 },
    schedule: [
      { day: 'Sunday', time: '7:30 AM', event: 'Worship Service', loc: 'MPR' },
      { day: 'Wednesday', time: '5:00 PM', event: 'Bible Study', loc: 'Auditorium' }
    ]
  }
];

campuses.forEach(c => {
  const key = c.id.toUpperCase();
  const images = campusData[key] || [];
  
  if (images.length > 0) {
    c.img = images[0];
    c.gallery = images.slice(1);
    c.upcomingEventImg = images[images.length - 1] || images[0];
    
    let imgIdx = 1;
    c.schedule = c.schedule.map(s => {
      s.img = images[imgIdx % images.length];
      imgIdx++;
      return s;
    });
  } else {
    // fallback if missing
    c.img = '/images/campuses/UNILORIN/file-1.jpg'; // safe fallback
    c.gallery = ['/images/campuses/UNILORIN/file-1.jpg'];
    c.upcomingEventImg = '/images/campuses/UNILORIN/file-1.jpg';
    c.schedule = c.schedule.map(s => ({...s, img: c.img}));
  }
});

const fileContent = 'export const CAMPUSES = ' + JSON.stringify(campuses, null, 2) + ';\n';
fs.writeFileSync('src/data/campuses.js', fileContent);
console.log('Updated campuses.js with slogans and schedule images.');

