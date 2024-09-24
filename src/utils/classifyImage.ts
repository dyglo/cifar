async function classifyImage(file: File): Promise<{ species: string; confidence: number }> {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Dummy classification result
  const species = ['Rose', 'Tulip', 'Daisy', 'Sunflower', 'Lily'][Math.floor(Math.random() * 5)];
  const confidence = Math.random();
  
  return { species, confidence };
}

export default classifyImage;