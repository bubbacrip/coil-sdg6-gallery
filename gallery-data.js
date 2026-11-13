// EDIT THIS FILE. For each photo write only the file name (file:"photo.jpg").
// The folder is set once here: change it if your photos are in another folder.
const IMAGE_FOLDER = "images/";
// category must be "challenge", "solutions" or "behind"
const galleryPhotos = [
  {file:"IMG_20250714_154420.jpg",title:"Clean, clear sea",description:"A wide bay in southern Italy where the water looks bright and clean. This is what we want to protect.",category:"solutions",author:"Tine & Dan"},
  {file:"IMG_0641.jpeg",title:"Every drop counts",description:"Clean water flows from our tap every day. How much do we use, and how much do we waste?",category:"challenge",author:"Tine & Dan"},
  {file:"IMG_20260703_172341.jpg",title:"A river that needs care",description:"The brown water of the River Thames at Tower Bridge in London reminds us that city rivers need constant care.",category:"challenge",author:"Tine & Dan"},
  {file:"IMG_0639.jpeg",title:"Rain fills the pond",description:"Rainwater collects in a garden pond. Catching and reusing rainwater is one way to save drinking water.",category:"solutions",author:"Tine & Dan"},
  {file:"IMG_20250717_182602.jpg",title:"A busy bay in summer",description:"Many people share this beach and sea, so everyone\u2019s habits affect how clean the water stays.",category:"challenge",author:"Tine & Dan"},
  {file:"gallery-1494955076-plastic.jpg",title:"Plastic on the shore",description:"Plastic waste washed up on a beach. Litter that reaches rivers and seas stays in nature for a very long time and harms wildlife.",category:"challenge",author:"an online source"},
  {file:"",title:"Photographing a glass of water",description:"Setting up a shot for our video about clean drinking water.",category:"behind",author:"Tine & Dan"},
  {file:"IMG_20250717_185831.jpg",title:"Life by the sea",description:"A town and its beach on the coast of southern Italy. People here depend on clean sea water.",category:"challenge",author:"Tine & Dan"},
  {file:"IMG_20250720_133017.jpg",title:"Turquoise water",description:"Clear, turquoise water along a crowded beach in southern Italy. Healthy water supports people and nature.",category:"solutions",author:"Tine & Dan"},
  {file:"IMG_20260817_134748.jpg",title:"Crystal-clear sea cave",description:"Clean water lets sunlight reach the bottom, so plants and fish can live here.",category:"solutions",author:"Tine & Dan"}
];
galleryPhotos.forEach(p => { p.src = IMAGE_FOLDER + p.file; });
