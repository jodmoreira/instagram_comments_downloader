function extractTextContent() {
    // Find the element containing the text, using its class name
    const elements = document.querySelectorAll('._a9zs ._aacl._aaco._aacu._aacx._aad7._aade');
  
    // Extract the text content of each element and return as an array
    return Array.from(elements).map(el => el.textContent || el.innerText);
  }
  
  // Call the function and log the results
  const textContent = extractTextContent();
  console.log(textContent);
  